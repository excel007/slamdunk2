import './About.css'

const KEY_CHARACTERS = [
  { name: 'Hanamichi Sakuragi', role: 'Power Forward — Shohoku' },
  { name: 'Kaede Rukawa', role: 'Small Forward — Shohoku' },
  { name: 'Akira Sendoh', role: 'Small Forward — Ryonan' },
  { name: 'Takenori Akagi', role: 'Center — Shohoku' },
  { name: 'Hisashi Mitsui', role: 'Shooting Guard — Shohoku' },
  { name: 'Ryota Miyagi', role: 'Point Guard — Shohoku' },
  { name: 'Shinichi Maki', role: 'Point Guard — Kainan' },
  { name: 'Kenji Fujima', role: 'Point Guard — Shoyo' },
]

export function About() {
  return (
    <div className="about">
      <section className="about__hero">
        <div className="about__tag">The Legend</div>
        <h1 className="about__title">About Slam Dunk</h1>
        <p className="about__subtitle">
          The manga that made Japan fall in love with basketball.
        </p>
      </section>

      <div className="about__content">
        <section className="about__section">
          <h2 className="about__section-title">The Manga</h2>
          <p className="about__text">
            Slam Dunk is a Japanese sports manga series written and illustrated
            by Takehiko Inoue. Serialized in Weekly Shonen Jump from 1990 to
            1996, it tells the story of Hanamichi Sakuragi, a delinquent who
            joins the Shohoku High School basketball team in an attempt to
            impress a girl — only to discover a genuine passion for the sport.
          </p>
          <p className="about__text">
            With 31 tankobon volumes and over 170 million copies sold worldwide,
            Slam Dunk is one of the best-selling manga series in history. It won
            the 40th Shogakukan Manga Award in 1995 and is widely credited with
            popularizing basketball in Japan.
          </p>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">Cultural Impact</h2>
          <p className="about__text">
            The series had a measurable effect on real-world basketball
            participation in Japan. During its serialization, the number of
            junior high and high school basketball players increased
            dramatically. Inoue was honored by the Japanese Basketball
            Association for his contributions to the sport's popularity.
          </p>
          <p className="about__text">
            In 2022, the feature film "The First Slam Dunk" directed by Inoue
            himself became a massive box office hit, grossing over $150 million
            worldwide and introducing a new generation to the Shohoku story.
          </p>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">Key Characters</h2>
          <div className="about__character-grid">
            {KEY_CHARACTERS.map((c) => (
              <div key={c.name} className="about__character">
                <div className="about__character-name">{c.name}</div>
                <div className="about__character-role">{c.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">The Creator</h2>
          <p className="about__text">
            Takehiko Inoue (born January 12, 1967) is one of Japan's most
            celebrated manga artists. Beyond Slam Dunk, he is known for the
            samurai epic "Vagabond" and the wheelchair basketball series "Real."
            His art is renowned for its dynamic action sequences and expressive
            character work.
          </p>
        </section>
      </div>
    </div>
  )
}
