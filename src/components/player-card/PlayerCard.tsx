import { Link } from 'react-router-dom'

import type { Player } from '@/types'

import './PlayerCard.css'

interface Props {
  player: Player
}

export function PlayerCard({ player }: Props) {
  return (
    <Link to={`/players/${player.id}`} className="player-card">
      <div className="player-card__image-wrapper">
        <img
          className="player-card__image"
          src={player.image}
          alt={player.name}
          loading="lazy"
        />
        <div className="player-card__number">{player.number}</div>
      </div>
      <div className="player-card__body">
        <h3 className="player-card__name">{player.name}</h3>
        <div className="player-card__meta">
          {player.position} — {player.team}
        </div>
        <div className="player-card__stats">
          <span className="player-card__stat">
            <strong>{player.height}</strong>
          </span>
          <span className="player-card__stat">
            <strong>{player.weight}</strong>
          </span>
        </div>
      </div>
    </Link>
  )
}
