import { HomeAssistant } from 'custom-card-helpers'
import { LitElement, TemplateResult } from 'lit'
import { customElement,state } from 'lit/decorators.js'
import { SunCardContent } from './cardContent'
import cardStyles from './cardStyles'
import { Constants } from './constants'
import { 
  ESunCardErrors, 
  TSunCardConfig, 
  TSunCardData 
} from './types'


const CARD_VERSION = '0.73.10'

console.info(
  `%c  HOME-ASSISTANT-SUN-CARD-2 \n%c  Version ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
)


@customElement('sun-card')
export class SunCard extends LitElement {
  static readonly cardType = 'sun-card'
  static readonly cardName = 'Sun Card'
  static readonly cardDescription = 'Custom card that display a graph to track the sun position and related events'



  @state()
  private config: TSunCardConfig = {}

  @state()
  private data!: TSunCardData

  private hasRendered = false
  private lastHass!: HomeAssistant

  static get styles () {
    return cardStyles
  }

  set hass (hass: HomeAssistant) {
    this.lastHass = hass

    if (!this.hasRendered) {
      return
    }

    this.processLastHass()
  }

  calculatePositionAndProgressesByTime (hass: HomeAssistant) {
    const sunLine = this.shadowRoot?.querySelector('path') as SVGPathElement
    const sunrise = new Date(hass.states['sun.sun'].attributes.next_rising)
    const sunset = new Date(hass.states['sun.sun'].attributes.next_setting)
    const eventsAt = {
      dayStart: 0,
      sunrise: this.convertDateToMinutesSinceDayStarted(sunrise),
      sunset: this.convertDateToMinutesSinceDayStarted(sunset),
      dayEnd: (23 * 60) + 59
    }

    const now = new Date()
    const minutesSinceTodayStarted = this.convertDateToMinutesSinceDayStarted(now)
    
    // Dawn section position [0 - 105]
    const dawnSectionPosition = (Math.min(minutesSinceTodayStarted, eventsAt.sunrise) * 105) / eventsAt.sunrise

    // Day section position [106 - 499]
    const minutesSinceDayStarted = Math.max(minutesSinceTodayStarted - eventsAt.sunrise, 0)
    const daySectionPosition = (Math.min(minutesSinceDayStarted, eventsAt.sunset - eventsAt.sunrise) * (499 - 106)) / (eventsAt.sunset - eventsAt.sunrise)

    // Dusk section position [500 - 605]
    const minutesSinceDuskStarted = Math.max(minutesSinceTodayStarted - eventsAt.sunset, 0)
    const duskSectionPosition = (minutesSinceDuskStarted * (605 - 500)) / (eventsAt.dayEnd - eventsAt.sunset)

    const position = dawnSectionPosition + daySectionPosition + duskSectionPosition
    const sunPosition = sunLine.getPointAtLength(position)

    const dawnProgressPercent = (100 * (sunPosition.x - Constants.EVENT_X_POSITIONS.dayStart)) / (Constants.EVENT_X_POSITIONS.sunrise - Constants.EVENT_X_POSITIONS.dayStart)
    const dayProgressPercent = (100 * (sunPosition.x - Constants.EVENT_X_POSITIONS.sunrise)) / (Constants.EVENT_X_POSITIONS.sunset - Constants.EVENT_X_POSITIONS.sunrise)
    const duskProgressPercent = (100 * (sunPosition.x - Constants.EVENT_X_POSITIONS.sunset)) / (Constants.EVENT_X_POSITIONS.dayEnd - Constants.EVENT_X_POSITIONS.sunset)

    const sunYTop = sunPosition.y - Constants.SUN_RADIUS
    const yOver = Constants.HORIZON_Y - sunYTop
    let sunPercentOverHorizon = 0
    if (yOver > 0) {
      sunPercentOverHorizon = Math.min((100 * yOver) / (2 * Constants.SUN_RADIUS), 100)
    }


    // tix - time hhHmm between sunset and sunrise
    const timeBetweenDuskAndDown = this.convertMinutestoHoursAndMinutes(eventsAt.sunset - eventsAt.sunrise) // eventsAt.sunset - eventsAt.sunrise
    

    return {
      dawnProgressPercent,
      dayProgressPercent,
      duskProgressPercent,
      sunPercentOverHorizon,
      sunPosition: { x: sunPosition.x, y: sunPosition.y },
      timeBetweenDuskAndDown
    }
  }

   
  convertDateToMinutesSinceDayStarted (date: Date) {
    return (date.getHours() * 60) + date.getMinutes()
  }

  // Tix
  convertMinutestoHoursAndMinutes ( minutes: number):string {
    const cHours = Math.floor(minutes / 60)
    const cMinutes = minutes % 60
    //const total = cHours.toString() + ':' + cMinutes.toString()

    const HHMM = cHours.toString() + ':' + (cMinutes < 10 ? '0' : '') + cMinutes.toString()

    return  HHMM
  }

  colourNameToHex ( colour ) {

    const reg = /^#([0-9a-f]{3}){1,2}$/i    // test if type of color is '#xxxxxx'

    const colours = { 'aliceblue':'#f0f8ff','antiquewhite':'#faebd7','aqua':'#00ffff','aquamarine':'#7fffd4','azure':'#f0ffff',
      'beige':'#f5f5dc','bisque':'#ffe4c4','black':'#000000','blanchedalmond':'#ffebcd','blue':'#0000ff','blueviolet':'#8a2be2','brown':'#a52a2a','burlywood':'#deb887',
      'cadetblue':'#5f9ea0','chartreuse':'#7fff00','chocolate':'#d2691e','coral':'#ff7f50','cornflowerblue':'#6495ed','cornsilk':'#fff8dc','crimson':'#dc143c','cyan':'#00ffff',
      'darkblue':'#00008b','darkcyan':'#008b8b','darkgoldenrod':'#b8860b','darkgray':'#a9a9a9','darkgreen':'#006400','darkkhaki':'#bdb76b','darkmagenta':'#8b008b','darkolivegreen':'#556b2f',
      'darkorange':'#ff8c00','darkorchid':'#9932cc','darkred':'#8b0000','darksalmon':'#e9967a','darkseagreen':'#8fbc8f','darkslateblue':'#483d8b','darkslategray':'#2f4f4f','darkturquoise':'#00ced1',
      'darkviolet':'#9400d3','deeppink':'#ff1493','deepskyblue':'#00bfff','dimgray':'#696969','dodgerblue':'#1e90ff',
      'firebrick':'#b22222','floralwhite':'#fffaf0','forestgreen':'#228b22','fuchsia':'#ff00ff',
      'gainsboro':'#dcdcdc','ghostwhite':'#f8f8ff','gold':'#ffd700','goldenrod':'#daa520','gray':'#808080','green':'#008000','greenyellow':'#adff2f',
      'honeydew':'#f0fff0','hotpink':'#ff69b4',
      'indianred ':'#cd5c5c','indigo':'#4b0082','ivory':'#fffff0','khaki':'#f0e68c',
      'lavender':'#e6e6fa','lavenderblush':'#fff0f5','lawngreen':'#7cfc00','lemonchiffon':'#fffacd','lightblue':'#add8e6','lightcoral':'#f08080','lightcyan':'#e0ffff','lightgoldenrodyellow':'#fafad2',
      'lightgrey':'#d3d3d3','lightgreen':'#90ee90','lightpink':'#ffb6c1','lightsalmon':'#ffa07a','lightseagreen':'#20b2aa','lightskyblue':'#87cefa','lightslategray':'#778899','lightsteelblue':'#b0c4de',
      'lightyellow':'#ffffe0','lime':'#00ff00','limegreen':'#32cd32','linen':'#faf0e6',
      'magenta':'#ff00ff','maroon':'#800000','mediumaquamarine':'#66cdaa','mediumblue':'#0000cd','mediumorchid':'#ba55d3','mediumpurple':'#9370d8','mediumseagreen':'#3cb371','mediumslateblue':'#7b68ee',
      'mediumspringgreen':'#00fa9a','mediumturquoise':'#48d1cc','mediumvioletred':'#c71585','midnightblue':'#191970','mintcream':'#f5fffa','mistyrose':'#ffe4e1','moccasin':'#ffe4b5',
      'navajowhite':'#ffdead','navy':'#000080',
      'oldlace':'#fdf5e6','olive':'#808000','olivedrab':'#6b8e23','orange':'#ffa500','orangered':'#ff4500','orchid':'#da70d6',
      'palegoldenrod':'#eee8aa','palegreen':'#98fb98','paleturquoise':'#afeeee','palevioletred':'#d87093','papayawhip':'#ffefd5','peachpuff':'#ffdab9','peru':'#cd853f','pink':'#ffc0cb','plum':'#dda0dd','powderblue':'#b0e0e6','purple':'#800080',
      'rebeccapurple':'#663399','red':'#ff0000','rosybrown':'#bc8f8f','royalblue':'#4169e1',
      'saddlebrown':'#8b4513','salmon':'#fa8072','sandybrown':'#f4a460','seagreen':'#2e8b57','seashell':'#fff5ee','sienna':'#a0522d','silver':'#c0c0c0','skyblue':'#87ceeb','slateblue':'#6a5acd','slategray':'#708090','snow':'#fffafa','springgreen':'#00ff7f','steelblue':'#4682b4',
      'tan':'#d2b48c','teal':'#008080','thistle':'#d8bfd8','tomato':'#ff6347','turquoise':'#40e0d0',
      'violet':'#ee82ee',
      'wheat':'#f5deb3','white':'#ffffff','whitesmoke':'#f5f5f5',
      'yellow':'#ffff00','yellowgreen':'#9acd32' }
    
    if (reg.test(colour)) {
      return colour
    } else if (typeof colours[colour.toLowerCase()] != 'undefined') {
      return colours[colour.toLowerCase()]
    }
    
    return '#f9d05e' // default value
  }

  parseTime (timeText: string, locale?: string) {
    const regex = /\d{1,2}[:.]\d{1,2}|[AMP]+/g
    const date = new Date(timeText)
    const { language, timeFormat } = this.getConfig()
    const result = date.toLocaleTimeString(locale ?? language, { hour12: timeFormat === '12h' }).match(regex) as [string, ('AM' | 'PM')?]

    if (!result && !locale) {
      return this.parseTime(timeText, Constants.DEFAULT_CONFIG.language)
    }

    const [time, period] = result
    return { time, period }
  }

  processLastHass () {
    if (!this.lastHass) {
      return
    }

    if (!this.lastHass.states['sun.sun']) {
      return this.showError(ESunCardErrors.SunIntegrationNotFound)
    }
  
    this.config.darkMode = this.config.darkMode ?? this.lastHass.themes.darkMode
    this.config.language = this.config.language ?? this.lastHass.locale?.language ?? this.lastHass.language
    this.config.timeFormat = this.config.timeFormat ?? this.getTimeFormatByLanguage(this.config.language)
    this.config.sunColor = this.colourNameToHex(this.config.sunColor)
    

    const times = {
      dawn: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_dawn),
      dusk: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_dusk),
      noon: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_noon),
      sunrise: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_rising),
      sunset: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_setting),
    }

    const {
      dawnProgressPercent,
      dayProgressPercent,
      duskProgressPercent,
      sunPercentOverHorizon,
      sunPosition,
      timeBetweenDuskAndDown
    } = this.calculatePositionAndProgressesByTime(this.lastHass)

    const data: TSunCardData = {
      azimuth: this.lastHass.states['sun.sun'].attributes.azimuth,
      dawnProgressPercent,
      dayProgressPercent,
      duskProgressPercent,
      elevation: this.lastHass.states['sun.sun'].attributes.elevation,
      sunPercentOverHorizon,
      sunPosition,
      times,
      timeBetweenDuskAndDown
    }

    this.data = data
  }

  getConfig () {
    const config: TSunCardConfig = {}
    config.darkMode = this.config.darkMode ?? Constants.DEFAULT_CONFIG.darkMode
    config.language = this.config.language ?? Constants.DEFAULT_CONFIG.language
    config.showAzimuth = this.config.showAzimuth ?? Constants.DEFAULT_CONFIG.showAzimuth
    config.showElevation = this.config.showElevation ?? Constants.DEFAULT_CONFIG.showElevation
    config.timeFormat = this.config.timeFormat ?? Constants.DEFAULT_CONFIG.timeFormat
    config.title = this.config.title
    config.sunColor = this.config.sunColor
    config.sunRadius = this.config.sunRadius
    config.showDayLength = this.config.showDayLength

    if (!Object.keys(Constants.LOCALIZATION_LANGUAGES).includes(config.language!)) {
      config.language = Constants.DEFAULT_CONFIG.language
    }

    return config
  }

  getTimeFormatByLanguage (language: string) {
    const date = new Date()
    const time = date.toLocaleTimeString(language).toLocaleLowerCase()
    return time.includes('pm') || time.includes('am') ? '12h' : '24h'
  }

  public setConfig (config: TSunCardConfig): void {
    this.config = { ...config }
  }

  showError (error: ESunCardErrors) {
    this.data = { error } as TSunCardData
  }
  
  public override render (): TemplateResult {
    const config = this.getConfig()
    const language = config.language!
    const localization = Constants.LOCALIZATION_LANGUAGES[language]

    return SunCardContent.generate(this.data, localization, config)
  }

  protected override updated (changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties)

    if (!this.hasRendered) {
      this.hasRendered = true
      this.processLastHass()
      return
    }

    if (this.data.error) {
      const errorElement = this.shadowRoot?.querySelector('hui-error-card') as HTMLElement & { setConfig (config: { error: string }): void }
      if (errorElement) {
        const config = this.getConfig()
        const language = config.language!
        const localization = Constants.LOCALIZATION_LANGUAGES[language]
        const error = localization.errors[this.data.error]
        errorElement.setConfig?.({ error })
        console.error(error)
      }
    }
  }

}

window.customCards = window.customCards || [] 
window.customCards.push({
  type: SunCard.cardType,
  name: SunCard.cardName,
  description: SunCard.cardDescription
})
