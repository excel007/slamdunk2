import { Outlet } from 'react-router-dom'

import { Navigation } from '@/components/navigation/Navigation'

import './Layout.css'

export function Layout() {
  return (
    <div className="layout">
      <Navigation />
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  )
}
