import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { CHARACTERS } from '@/types'

import './Submit.css'

interface Props {
  onSubmit: (t: { name: string; favoriteCharacter: string; text: string }) => void
}

interface FormState {
  name: string
  favoriteCharacter: string
  text: string
}

interface FormErrors {
  name?: string
  favoriteCharacter?: string
  text?: string
}

export function Submit({ onSubmit }: Props) {
  const [form, setForm] = useState<FormState>({
    name: '',
    favoriteCharacter: '',
    text: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): FormErrors {
    const errs: FormErrors = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.favoriteCharacter) errs.favoriteCharacter = 'Pick a character'
    if (!form.text.trim()) errs.text = 'Your story is required'
    else if (form.text.trim().length < 20) errs.text = 'At least 20 characters'
    return errs
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    onSubmit({
      name: form.name.trim(),
      favoriteCharacter: form.favoriteCharacter,
      text: form.text.trim(),
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="submit">
        <section className="submit__header">
          <div className="submit__tag">Thank You</div>
          <h1 className="submit__title">Story Submitted</h1>
        </section>
        <div className="submit__form-wrapper">
          <div className="submit__success">
            <div className="submit__success-icon">&#9879;</div>
            <h2 className="submit__success-title">We Got It!</h2>
            <p className="submit__success-text">
              Your Slam Dunk story has been added to the testimonial wall.
            </p>
            <Link to="/testimonials" className="btn btn--primary">
              View Testimonials
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="submit">
      <section className="submit__header">
        <div className="submit__tag">Your Voice</div>
        <h1 className="submit__title">Share Your Story</h1>
        <p className="submit__subtitle">
          How did Slam Dunk impact your life? Every fan has a story.
        </p>
      </section>

      <div className="submit__form-wrapper">
        <form className="submit__form" onSubmit={handleSubmit}>
          <div className="submit__group">
            <label className="submit__label" htmlFor="name">Your Name</label>
            <input
              id="name"
              className="submit__input"
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Enter your name"
            />
            <span className="submit__error">{errors.name ?? ''}</span>
          </div>

          <div className="submit__group">
            <label className="submit__label" htmlFor="character">Favorite Character</label>
            <select
              id="character"
              className="submit__select"
              value={form.favoriteCharacter}
              onChange={(e) => setForm((f) => ({ ...f, favoriteCharacter: e.target.value }))}
            >
              <option value="">Select a character</option>
              {CHARACTERS.map((char) => (
                <option key={char} value={char}>{char}</option>
              ))}
            </select>
            <span className="submit__error">{errors.favoriteCharacter ?? ''}</span>
          </div>

          <div className="submit__group">
            <label className="submit__label" htmlFor="text">Your Story</label>
            <textarea
              id="text"
              className="submit__textarea"
              value={form.text}
              onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))}
              placeholder="Tell us how Slam Dunk changed your life..."
              maxLength={1000}
            />
            <div className="submit__char-count">
              {form.text.length} / 1000
            </div>
            <span className="submit__error">{errors.text ?? ''}</span>
          </div>

          <div className="submit__actions">
            <button type="submit" className="btn btn--primary">
              Submit Story
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
