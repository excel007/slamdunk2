import { useState, useMemo } from 'react'

import { PlayerCard } from '@/components/player-card/PlayerCard'
import { PLAYERS } from '@/data/players'

import './Players.css'

const TEAMS = ['All', 'Shohoku', 'Ryonan', 'Kainan', 'Shoyo'] as const

export function Players() {
  const [team, setTeam] = useState<string>('All')

  const filtered = useMemo(() => {
    if (team === 'All') return PLAYERS
    return PLAYERS.filter((p) => p.team === team)
  }, [team])

  return (
    <div className="players">
      <section className="players__header">
        <div className="players__tag">Roster</div>
        <h1 className="players__title">Keyman Players</h1>
        <p className="players__subtitle">
          The players who defined a generation of basketball.
        </p>
      </section>

      <div className="players__filters">
        {TEAMS.map((t) => (
          <button
            key={t}
            className={`players__filter-btn${team === t ? ' players__filter-btn--active' : ''}`}
            onClick={() => setTeam(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="players__grid">
        {filtered.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  )
}
