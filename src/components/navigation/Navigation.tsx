import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/players', label: 'Players' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/submit', label: 'Submit' },
  { to: '/about', label: 'About' },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__brand">
          <div className="nav__logo">SD</div>
          <span className="nav__title">Slam Dunk</span>
        </div>
        <div className="nav__links">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `nav__link${isActive ? ' nav__link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <button
          className="nav__hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '\u2715' : '\u2630'}
        </button>
      </div>
      <div className={`nav__mobile-menu${mobileOpen ? ' nav__mobile-menu--open' : ''}`}>
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `nav__link${isActive ? ' nav__link--active' : ''}`
            }
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
