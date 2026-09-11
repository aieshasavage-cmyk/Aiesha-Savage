import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { shoots, type Shoot } from '~/content/shoots'

export const Route = createFileRoute('/photoshoots')({
  component: Photoshoots,
})

function Photoshoots() {
  const [active, setActive] = useState<Shoot | null>(null)

  return (
    <div className="min-h-screen bg-[var(--ivory)]">
      <div className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
        <header className="mb-14 text-center">
          <h1 className="font-display text-5xl text-[var(--espresso)] font-light tracking-widest">
            Portfolio
          </h1>
          <div className="mt-4 w-10 h-px bg-[var(--terracotta)] mx-auto" />
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {shoots.map((shoot) => (
            <ShootTile key={shoot.id} shoot={shoot} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && (
        <ShootLightbox shoot={active} onClose={() => setActive(null)} />
      )}
    </div>
  )
}

function ShootTile({
  shoot,
  onOpen,
}: {
  shoot: Shoot
  onOpen: (shoot: Shoot) => void
}) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer aspect-[3/4] bg-[var(--charcoal)]"
      onClick={() => onOpen(shoot)}
      role="button"
      tabIndex={0}
      aria-label={`Open ${shoot.title}`}
      onKeyDown={(event) => event.key === 'Enter' && onOpen(shoot)}
    >
      <img
        src={shoot.cover}
        alt={shoot.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-5">
        <p className="text-white/60 text-xs tracking-[0.25em] uppercase">
          {shoot.tags}
        </p>
        <h3 className="font-display text-white text-xl font-light mt-1">
          {shoot.title}
        </h3>
      </div>
    </div>
  )
}

function ShootLightbox({
  shoot,
  onClose,
}: {
  shoot: Shoot
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[var(--espresso)]/90 backdrop-blur-sm" />
      <div
        className="relative z-10 bg-[var(--ivory)] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--sand)]">
          <div>
            <p className="text-[var(--warm-mid)] text-xs tracking-[0.25em] uppercase">
              {shoot.tags}
            </p>
            <h2 className="font-display text-2xl text-[var(--espresso)] font-light">
              {shoot.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--warm-mid)] hover:text-[var(--espresso)] transition-colors p-2"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-1 p-1">
          {shoot.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${shoot.title} ${index + 1}`}
              className="w-full aspect-[3/4] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
