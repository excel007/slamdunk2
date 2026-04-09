import type { Testimonial } from '@/types'

import './TestimonialCard.css'

interface Props {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: Props) {
  const date = new Date(testimonial.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="card">
      <span className="card__character-tag">{testimonial.favoriteCharacter}</span>
      <h3 className="card__name">{testimonial.name}</h3>
      <p className="card__text">{testimonial.text}</p>
      <span className="card__date">{date}</span>
    </article>
  )
}
