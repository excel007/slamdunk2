export interface Testimonial {
  id: string
  name: string
  favoriteCharacter: string
  text: string
  imageUrl?: string
  createdAt: string
}

export const CHARACTERS = [
  'Hanamichi Sakuragi',
  'Kaede Rukawa',
  'Akira Sendoh',
  'Takenori Akagi',
  'Hisashi Mitsui',
  'Ryota Miyagi',
  'Kenji Fujima',
  'Shinichi Maki',
  'Eiji Sawakita',
  'Others',
] as const

export type Character = (typeof CHARACTERS)[number]

export interface Player {
  id: string
  name: string
  number: number
  position: string
  team: string
  height: string
  weight: string
  image: string
  description: string
  traits: string[]
}
