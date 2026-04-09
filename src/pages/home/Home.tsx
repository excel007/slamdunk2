import { Link } from 'react-router-dom'

import { TestimonialCard } from '@/components/testimonial-card/TestimonialCard'

import './Home.css'

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

export function Home({ testimonials }: Props) {
  const featured = testimonials.slice(0, 3)

  return (
    <div className="home">
      <section className="home__hero">
        <span className="home__hero-badge">Since 1990 — A Manga Legend</span>
        <h1 className="home__hero-title">
          The Spirit of <span>Slam Dunk</span> Lives On
        </h1>
        <p className="home__hero-subtitle">
          Share your story. Discover how Takehiko Inoue's masterpiece changed
          lives around the world — one dunk at a time.
        </p>
        <div className="home__hero-cta">
          <Link to="/testimonials" className="btn btn--primary">
            Read Stories
          </Link>
          <Link to="/submit" className="btn btn--ghost">
            Share Yours
          </Link>
        </div>
      </section>

      <section className="home__stats">
        <div className="home__stats-inner">
          <div>
            <div className="home__stat-value">31<span>M+</span></div>
            <div className="home__stat-label">Copies Sold</div>
          </div>
          <div>
            <div className="home__stat-value">31</div>
            <div className="home__stat-label">Volumes</div>
          </div>
          <div>
            <div className="home__stat-value">101</div>
            <div className="home__stat-label">Anime Episodes</div>
          </div>
        </div>
      </section>

      <section className="home__featured">
        <div className="home__section-header">
          <div className="home__section-tag">Fan Voices</div>
          <h2 className="home__section-title">Featured Testimonials</h2>
        </div>
        <div className="home__featured-grid">
          {featured.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>
    </div>
  )
}
