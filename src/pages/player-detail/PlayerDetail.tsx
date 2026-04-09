import { Link, useParams } from 'react-router-dom'

import { PLAYERS } from '@/data/players'

import './PlayerDetail.css'

export function PlayerDetail() {
  const { playerId } = useParams<{ playerId: string }>()
  const player = PLAYERS.find((p) => p.id === playerId)

  if (!player) {
    return (
      <div className="detail__not-found">
        <div>
          <p>Player not found.</p>
          <Link to="/players" className="detail__back" style={{ marginTop: '16px', display: 'inline-block' }}>
            &larr; Back to Players
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="detail">
      <section className="detail__hero">
        <div className="detail__hero-inner">
          <div className="detail__image-wrapper">
            <img
              className="detail__image"
              src={player.image}
              alt={player.name}
            />
            <div className="detail__number-badge">#{player.number}</div>
          </div>

          <div className="detail__info">
            <Link to="/players" className="detail__back">
              &larr; All Players
            </Link>

            <h1 className="detail__name">{player.name}</h1>
            <div className="detail__position">
              {player.position} — {player.team}
            </div>

            <div className="detail__stats-grid">
              <div className="detail__stat-item">
                <div className="detail__stat-value">{player.height}</div>
                <div className="detail__stat-label">Height</div>
              </div>
              <div className="detail__stat-item">
                <div className="detail__stat-value">{player.weight}</div>
                <div className="detail__stat-label">Weight</div>
              </div>
              <div className="detail__stat-item">
                <div className="detail__stat-value">#{player.number}</div>
                <div className="detail__stat-label">Jersey</div>
              </div>
              <div className="detail__stat-item">
                <div className="detail__stat-value">{player.team}</div>
                <div className="detail__stat-label">Team</div>
              </div>
            </div>

            <div className="detail__traits">
              {player.traits.map((trait) => (
                <span key={trait} className="detail__trait">{trait}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="detail__body">
        <div className="detail__body-inner">
          <p className="detail__description">{player.description}</p>
        </div>
      </div>
    </div>
  )
}
