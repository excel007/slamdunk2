import { useState, useEffect, useCallback } from 'react'

import type { Testimonial } from '@/types'

const STORAGE_KEY = 'slamdunk-testimonials'

const SEED_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Takeshi Yamada',
    favoriteCharacter: 'Hanamichi Sakuragi',
    text: 'Slam Dunk changed my life. I was a delinquent in high school with no direction, just like Hanamichi. Reading about his journey from a troublemaker to someone who found passion in basketball gave me courage to find my own path. I ended up joining my school\'s volleyball team and found my true self through sports.',
    createdAt: '2025-01-15T00:00:00.000Z',
  },
  {
    id: '2',
    name: 'Michelle Chen',
    favoriteCharacter: 'Kaede Rukawa',
    text: 'Rukawa taught me what dedication looks like. His single-minded focus on basketball, practicing alone at dawn, inspired me to pursue my dream of becoming a professional musician. Every time I want to skip practice, I think of Rukawa running in the morning mist.',
    createdAt: '2025-02-20T00:00:00.000Z',
  },
  {
    id: '3',
    name: 'Carlos Rivera',
    favoriteCharacter: 'Hisashi Mitsui',
    text: 'Mitsui\'s redemption arc hit me harder than any other story in manga. A former MVP who threw it all away, then fought his way back despite injury and shame. I was going through a similar situation after a career-ending injury in college football. His "I want to play basketball" moment literally made me cry and gave me strength to reinvent myself.',
    createdAt: '2025-03-10T00:00:00.000Z',
  },
  {
    id: '4',
    name: 'Yuki Tanaka',
    favoriteCharacter: 'Ryota Miyagi',
    text: 'Miyagi proved that height doesn\'t determine your worth. As a short point guard on my basketball team, I was constantly overlooked. But Miyagi\'s speed, heart, and leadership showed me that I could be the engine that drives the team. I became captain my senior year.',
    createdAt: '2025-04-05T00:00:00.000Z',
  },
  {
    id: '5',
    name: 'Ahmed Hassan',
    favoriteCharacter: 'Akira Sendoh',
    text: 'Sendoh is the coolest character in all of manga. His laid-back attitude combined with absolute brilliance on the court taught me that you don\'t have to be intense to be great. Sometimes the best players are the ones who play with joy and creativity.',
    createdAt: '2025-05-01T00:00:00.000Z',
  },
  {
    id: '6',
    name: 'Sofia Martinez',
    favoriteCharacter: 'Hanamichi Sakuragi',
    text: 'I picked up Slam Dunk during a dark period of depression. Hanamichi\'s never-give-up attitude, his ridiculous confidence, and his genuine growth as a person made me laugh and cry in equal measure. It reminded me that it\'s never too late to discover something you love.',
    createdAt: '2025-06-12T00:00:00.000Z',
  },
]

function loadFromStorage(): Testimonial[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as Testimonial[]
  } catch {
    // ignore
  }
  return SEED_TESTIMONIALS
}

function saveToStorage(data: Testimonial[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(loadFromStorage)

  useEffect(() => {
    saveToStorage(testimonials)
  }, [testimonials])

  const addTestimonial = useCallback((t: Omit<Testimonial, 'id' | 'createdAt'>) => {
    const newTestimonial: Testimonial = {
      ...t,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    setTestimonials((prev) => [newTestimonial, ...prev])
  }, [])

  return { testimonials, addTestimonial }
}
