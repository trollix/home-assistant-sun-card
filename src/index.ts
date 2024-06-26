import { HomeAssistant } from 'custom-card-helpers'
import { LitElement, TemplateResult } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { SunCardContent } from './cardContent'
import cardStyles from './cardStyles'
import { Constants, COLOURS_TXT_HEX } from './constants'
import { 
  ESunCardErrors, 
  TSunCardConfig, 
  TSunCardData 
} from './types'

import { version, name } from '../package.json'

console.info(
  `%c  ${name.toUpperCase()}  %c  Version ${version}  `,
  'color: white; font-weight: bold; background: crimson',
  'color: #000; font-weight: bold; background: #ddd',
)


@customElement('sun-card')
export class SunCard extends LitElement {

  @property({ attribute: false }) static readonly cardType = 'sun-card'
  @property({ attribute: false }) static readonly cardName = 'Sun Card'
  @property({ attribute: false }) static readonly cardDescription = 'Custom card that display a graph to track the sun position and related events'
  @property({ attribute: false }) private hasRendered = false
  @property({ attribute: false }) private lastHass!: HomeAssistant
  
  @state() private config: TSunCardConfig = {}
  @state() private data!: TSunCardData

  constructor () {
    super()
  }


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

  colourNameToHex ( colour: string ):string {

    const reg = /^#([0-9a-f]{3}){1,2}$/i    // test if type of color is '#xxxxxx'
   
    if (reg.test(colour)) {
      return colour
    } else if (typeof COLOURS_TXT_HEX[colour.toLowerCase()] != 'undefined') {
      return COLOURS_TXT_HEX[colour.toLowerCase()]
    } else {    
      return '#f9d05e' // default value
    }
  }

  parseTime (timeText: string, locale?: string){

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
    if (this.config.sunColor != undefined) {
      this.config.sunColor = this.colourNameToHex(this.config.sunColor)
    } else {
      this.config.sunColor = '#f9d05e'
    }

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
