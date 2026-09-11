import { useState } from 'react'
import { Link } from '@tanstack/react-router'

const LINKS = [
  { to: '/photoshoots', label: 'Portfolio' },
  { to: '/movement', label: 'Movement' },
  { to: '/writing', label: 'Writing' },
] as const

export function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      <Link
        to="/"
        className="font-display text-white text-xl tracking-widest uppercase"
      >
        Aiesha Savage
      </Link>

      <div className="hidden md:flex gap-10">
        {LINKS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="text-white/80 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>

      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {open ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-[var(--espresso)] flex flex-col items-center gap-6 py-8 md:hidden">
          {LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-sm tracking-[0.2em] uppercase"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
