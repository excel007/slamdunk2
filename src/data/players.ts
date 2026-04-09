import type { Player } from '@/types'

import sakuragiImage from '@/assets/players/hanamichi-sakuragi.svg'
import rukawaImage from '@/assets/players/kaede-rukawa.svg'
import akagiImage from '@/assets/players/takenori-akagi.svg'
import mitsuiImage from '@/assets/players/hisashi-mitsui.svg'
import miyagiImage from '@/assets/players/ryota-miyagi.svg'
import sendohImage from '@/assets/players/akira-sendoh.svg'
import makiImage from '@/assets/players/shinichi-maki.svg'
import fujimaImage from '@/assets/players/kenji-fujima.svg'

export const PLAYERS: Player[] = [
  {
    id: 'hanamichi-sakuragi',
    name: 'Hanamichi Sakuragi',
    number: 10,
    position: 'Power Forward',
    team: 'Shohoku',
    height: '189.2 cm',
    weight: '83 kg',
    image: sakuragiImage,
    description:
      'The self-proclaimed "Genius Sakuragi" and the main protagonist. A delinquent with a record of 50 rejections, Hanamichi joins the basketball team to impress Haruko Akagi. What begins as a selfish pursuit transforms into a genuine love for the game. His raw athleticism, boundless energy, and unprecedented jumping power make him a force under the boards.',
    traits: ['Rebounding', 'Athleticism', 'Slam Dunk', 'Tenacity'],
  },
  {
    id: 'kaede-rukawa',
    name: 'Kaede Rukawa',
    number: 11,
    position: 'Small Forward',
    team: 'Shohoku',
    height: '187 cm',
    weight: '75 kg',
    image: rukawaImage,
    description:
      'The silent ace of Shohoku and Hanamichi\'s rival. Rukawa is a basketball prodigy with NBA-level ambition. His game is built on flawless fundamentals, speed, and an unstoppable drive to the basket. Stoic and single-minded, he practices alone at dawn and plays with an ice-cold efficiency that strikes fear into opponents.',
    traits: ['Scoring', 'Speed', 'Fundamentals', 'Clutch'],
  },
  {
    id: 'takenori-akagi',
    name: 'Takenori Akagi',
    number: 4,
    position: 'Center',
    team: 'Shohoku',
    height: '193 cm',
    weight: '90 kg',
    image: akagiImage,
    description:
      'The captain and emotional anchor of Shohoku. Akagi is a dominant center with an unyielding commitment to winning. His dream of reaching the national championship has driven him through years of playing on mediocre teams. With the arrival of talented teammates, his leadership and powerful post play finally have the supporting cast they deserve.',
    traits: ['Leadership', 'Post Play', 'Defense', 'Determination'],
  },
  {
    id: 'hisashi-mitsui',
    name: 'Hisashi Mitsui',
    number: 14,
    position: 'Shooting Guard',
    team: 'Shohoku',
    height: '184 cm',
    weight: '70 kg',
    image: mitsuiImage,
    description:
      'A former MVP who walked away from basketball after a devastating knee injury, only to return as a reformed delinquent. Mitsui\'s redemption arc is one of the most emotionally powerful in sports manga. His three-point shooting is legendary, and his experience gives Shohoku a veteran presence in clutch moments. "I want to play basketball."',
    traits: ['3-Point Shooting', 'Experience', 'Clutch', 'Resilience'],
  },
  {
    id: 'ryota-miyagi',
    name: 'Ryota Miyagi',
    number: 7,
    position: 'Point Guard',
    team: 'Shohoku',
    height: '168 cm',
    weight: '59 kg',
    image: miyagiImage,
    description:
      'The lightning-quick point guard who proves that heart beats height. Despite being the shortest starter, Miyagi is the engine of Shohoku\'s offense. His speed, court vision, and fearless drives to the basket make him nearly impossible to contain. His loyalty to Coach Anzai and his teammates runs deeper than basketball.',
    traits: ['Speed', 'Playmaking', 'Court Vision', 'Heart'],
  },
  {
    id: 'akira-sendoh',
    name: 'Akira Sendoh',
    number: 7,
    position: 'Small Forward / Point Forward',
    team: 'Ryonan',
    height: '190 cm',
    weight: '79 kg',
    image: sendohImage,
    description:
      'The coolest player in Kanagawa prefecture. Sendoh combines effortless talent with a laid-back personality, playing basketball with creativity and joy. He can dominate as a scorer or orchestrate the offense as a point forward. His matchup with Rukawa is one of the series\' most celebrated rivalries.',
    traits: ['Versatility', 'Creativity', 'IQ', 'Composure'],
  },
  {
    id: 'shinichi-maki',
    name: 'Shinichi Maki',
    number: 4,
    position: 'Point Guard',
    team: 'Kainan',
    height: '174 cm',
    weight: '65 kg',
    image: makiImage,
    description:
      'The "King" of Kanagawa basketball and captain of the reigning champion Kainan. Maki\'s combination of speed, strength, and basketball IQ makes him the most complete point guard in the prefecture. His competitive fire and refusal to lose have made Kainan the team to beat for over a decade.',
    traits: ['Leadership', 'All-Around', 'Competitiveness', 'Strength'],
  },
  {
    id: 'kenji-fujima',
    name: 'Kenji Fujima',
    number: 4,
    position: 'Point Guard',
    team: 'Shoyo',
    height: '178 cm',
    weight: '66 kg',
    image: fujimaImage,
    description:
      'The player-coach of Shoyo, Fujima is a tactical genius who can read the game like no one else. When he steps onto the court, Shoyo transforms from a good team into a great one. His ability to simultaneously manage coaching duties and elite-level point guard play is a testament to his extraordinary basketball mind.',
    traits: ['IQ', 'Playmaking', 'Coaching', 'Shooting'],
  },
]
