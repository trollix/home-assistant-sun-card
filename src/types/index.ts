export type TSunCardConfig = {
  darkMode?: boolean
  language?: string
  showAzimuth?: boolean
  showElevation?: boolean
  timeFormat?: '12h' | '24h'
  title?: string
  sunColor?: string
  sunRadius?: number
  showDayLength?: boolean // Tix - show day length
}

export type TSunCardTime = {
  time: string,
  period?: 'AM' | 'PM'
}

export type TSunCardData = {
  azimuth: number
  dawnProgressPercent: number
  dayProgressPercent: number
  duskProgressPercent: number
  elevation: number
  error?: string
  sunPercentOverHorizon: number
  sunPosition: {
    x: number
    y: number
  }
  times: {
    dawn: TSunCardTime
    dusk: TSunCardTime
    noon: TSunCardTime
    sunrise: TSunCardTime
    sunset: TSunCardTime
  }
  timeBetweenDuskAndDown: string // tix - day length
}

export enum ESunCardErrors {
}

export type TSunCardTexts = {
  Azimuth: string
  Dawn: string
  Dusk: string
  Elevation: string
  Noon: string
  Sunrise: string
  Sunset: string
  Daylength: string

  errors: {
    [key in ESunCardErrors]: string
  }
}

export enum ESunCardErrors {
  'SunIntegrationNotFound' = 'SunIntegrationNotFound'
}
