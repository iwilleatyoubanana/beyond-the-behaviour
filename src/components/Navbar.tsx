import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useExperience } from '../context/Experience'

const LINKS = [
  { to: '/', label: 'Start' },
  { to: '/01', label: '01' },
  { to: '/02', label: '02' },
  { to: '/03', label: '03' },
  { to: '/04', label: '04' },
  { to: '/toolkit', label: 'Toolkit' },
  { to: '/reflect', label: 'Reflect' },
] as const

const SCENARIO: Record<string, '01' | '02' | '03' | '04'> = {
  '/01': '01',
  '/02': '02',
  '/03': '03',
  '/04': '04',
}

export function Navbar() {
  const { introComplete, openEvidence } = useExperience()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const scenario = SCENARIO[location.pathname]
  const backTo =
    location.pathname === '/before'
      ? '/'
      : location.pathname === '/01'
        ? '/before'
        : location.pathname === '/02'
          ? '/01'
          : location.pathname === '/03'
            ? '/02'
            : location.pathname === '/04'
              ? '/03'
              : location.pathname === '/toolkit'
                ? '/04'
                : location.pathname === '/reflect'
                  ? '/toolkit'
                  : null

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!introComplete) return null

  return (
    <header className={scrolled ? 'nav is-scrolled' : 'nav'}>
      <Link className="nav-brand" to="/">
        Beyond the Behaviour
      </Link>
      <nav className="nav-links" aria-label="Resource">
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="nav-link"
            end={link.to === '/'}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="nav-actions">
        {backTo ? (
          <Link className="btn-ghost" to={backTo} style={{ minHeight: 40 }}>
            Back
          </Link>
        ) : null}
        {scenario ? (
          <button
            type="button"
            className="btn-ghost"
            style={{ minHeight: 40 }}
            onClick={() => openEvidence(scenario)}
          >
            Evidence
          </button>
        ) : null}
      </div>
    </header>
  )
}
