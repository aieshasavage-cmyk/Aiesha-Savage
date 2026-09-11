import { createFileRoute } from '@tanstack/react-router'

import { Footer } from '~/components/Footer'
import { NavBar } from '~/components/NavBar'
import { essays } from '~/content/essays'

export const Route = createFileRoute('/writing')({
  component: Writing,
})

function Writing() {
  return (
    <div className="min-h-screen bg-[var(--ivory)]">
      <NavBar />

      <div className="pt-24 pb-20 px-6 max-w-3xl mx-auto">
        <header className="mb-14 text-center">
          <h1 className="font-display text-5xl text-[var(--espresso)] font-light tracking-widest">
            Writing
          </h1>
          <div className="mt-4 w-10 h-px bg-[var(--terracotta)] mx-auto" />
          <p className="mt-5 text-[var(--muted-foreground)] text-sm tracking-wide">
            Published on Substack
          </p>
        </header>

        <div className="divide-y divide-[var(--sand)]">
          {essays.map((essay) => (
            <article key={essay.title} className="py-10">
              <p className="text-[var(--warm-mid)] text-xs tracking-[0.25em] uppercase mb-2">
                {essay.date}
              </p>
              <a
                href={essay.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h2 className="font-display text-2xl md:text-3xl text-[var(--espresso)] font-light group-hover:text-[var(--terracotta)] transition-colors leading-snug">
                  {essay.title}
                </h2>
              </a>
              <p className="mt-4 text-[var(--charcoal)]/70 leading-relaxed text-sm md:text-base font-light">
                {essay.excerpt}
              </p>
              <a
                href={essay.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-xs tracking-[0.2em] uppercase text-[var(--terracotta)] hover:text-[var(--espresso)] transition-colors"
              >
                Read on Substack →
              </a>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
