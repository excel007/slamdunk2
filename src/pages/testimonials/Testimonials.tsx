import { useState, useMemo } from 'react'

import { TestimonialCard } from '@/components/testimonial-card/TestimonialCard'
import { CHARACTERS } from '@/types'

import './Testimonials.css'

interface Props {
  testimonials: {
    id: string
    name: string
    favoriteCharacter: string
    text: string
    imageUrl?: string
    createdAt: string
  }[]
}

export function Testimonials({ testimonials }: Props) {
  const [filter, setFilter] = useState<string>('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return testimonials
    return testimonials.filter((t) => t.favoriteCharacter === filter)
  }, [testimonials, filter])

  return (
    <div className="testimonials">
      <section className="testimonials__header">
        <div className="testimonials__tag">Community</div>
        <h1 className="testimonials__title">Fan Testimonials</h1>
        <p className="testimonials__subtitle">
          Hear from fans whose lives were changed by the Slammer.
        </p>
      </section>

      <div className="testimonials__filters">
        <button
          className={`testimonials__filter-btn${filter === 'All' ? ' testimonials__filter-btn--active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        {CHARACTERS.map((char) => (
          <button
            key={char}
            className={`testimonials__filter-btn${filter === char ? ' testimonials__filter-btn--active' : ''}`}
            onClick={() => setFilter(char)}
          >
            {char}
          </button>
        ))}
      </div>

      <div className="testimonials__grid">
        {filtered.length === 0 ? (
          <p className="testimonials__empty">
            No testimonials yet for this character. Be the first!
          </p>
        ) : (
          filtered.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))
        )}
      </div>
    </div>
  )
}
