import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/home/Home'
import { Players } from '@/pages/players/Players'
import { PlayerDetail } from '@/pages/player-detail/PlayerDetail'
import { Testimonials } from '@/pages/testimonials/Testimonials'
import { Submit } from '@/pages/submit/Submit'
import { About } from '@/pages/about/About'

import { useTestimonials } from './hooks/useTestimonials'

function App() {
  const { testimonials, addTestimonial } = useTestimonials()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home testimonials={testimonials} />} />
          <Route path="players" element={<Players />} />
          <Route path="players/:playerId" element={<PlayerDetail />} />
          <Route path="testimonials" element={<Testimonials testimonials={testimonials} />} />
          <Route path="submit" element={<Submit onSubmit={addTestimonial} />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
