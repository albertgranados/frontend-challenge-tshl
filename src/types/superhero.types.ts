export interface Superhero {
  id: number
  name: string
  slug: string
  powerstats: Powerstats
  appearance: Appearance
  biography: Biography
  work: Work
  connections: Connections
  images: Images
}

export interface Appearance {
  gender: Gender
  race: null | string
  height: string[]
  weight: string[]
  eyeColor: string
  hairColor: string
}

export enum Gender {
  Empty = '-',
  Female = 'Female',
  Male = 'Male'
}

export enum Publisher {
  Marvel = 'Marvel Comics'
}

export interface Biography {
  fullName: string
  alterEgos: string
  aliases: string[]
  placeOfBirth: string
  firstAppearance: string
  publisher: null | string
  alignment: Alignment
}

export enum Alignment {
  Bad = 'bad',
  Empty = '-',
  Good = 'good',
  Neutral = 'neutral'
}

export interface Connections {
  groupAffiliation: string
  relatives: string
}

export interface Images {
  xs: string
  sm: string
  md: string
  lg: string
}

export interface Powerstats {
  intelligence: number
  strength: number
  speed: number
  durability: number
  power: number
  combat: number
}

export interface Work {
  occupation: string
  base: string
}
