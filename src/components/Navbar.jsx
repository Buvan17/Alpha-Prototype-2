
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../data/siteData'

export function Brand({ light = false, onClick }) {
  return (
    <Link
      className={`brand ${light ? 'brand-light' : ''}`}
      to="/"
      aria-label="Alpha Private Limited home"
      onClick={onClick}
    >
      <img
        className="brand-symbol"
        src="/images/logo.svg"
        alt=""
        aria-hidden="true"
      />

      <span className="brand-copy">
        <strong>ALPHA</strong>
        <small>PRIVATE LIMITED</small>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>GOOD GROUND. GREAT THINGS AHEAD.</span>

          <div className="topline-right">
            <span>INFRASTRUCTURE · ENGINEERING · DELIVERY</span>
            <span><span className="topline-dot" /> INDIA</span>
          </div>
        </div>
      </div>

      <header className="header">
        <nav className="container nav" aria-label="Main navigation">
          <Brand onClick={closeMenu} />

          <div
            id="primary-navigation"
            className={`nav-links ${menuOpen ? 'menu-open' : ''}`}
          >
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) => isActive ? 'active' : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <Link className="button button-primary nav-cta" to="/contact" onClick={closeMenu}>
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </nav>
      </header>
    </>
  )
}
