import { Link, createFileRoute } from '@tanstack/react-router'

import { Footer } from '~/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="bg-[var(--ivory)]">
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-white text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.12em] leading-none drop-shadow-lg">
            Aiesha Savage
          </h1>
          <p className="mt-5 text-white/85 text-sm md:text-base tracking-[0.35em] uppercase font-light">
            {'Model  ·  Movement Coach  ·  Writer'}
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 7l6 6 6-6" />
          </svg>
        </div>
      </section>

      <section className="max-w-2xl mx-auto py-28 px-8 text-center">
        <p className="font-display text-3xl md:text-4xl text-[var(--espresso)] font-light leading-relaxed italic">
          Revolution begins with the body.
          <br />
          Change starts with a movement.
        </p>
        <div className="mt-6 w-12 h-px bg-[var(--terracotta)] mx-auto" />
      </section>

      <section className="grid md:grid-cols-3 gap-px bg-[var(--sand)]">
        <SectionTile
          href="/photoshoots"
          label="Portfolio"
          description="Editorials and Campaigns"
          bg="/portfolio.jpg"
        />
        <SectionTile
          href="/movement"
          label="Movement"
          description="Functional Strength and Somatic Awareness"
          bg="/movement.jpg"
        />
        <SectionTile
          href="/writing"
          label="Writing"
          description="Reflections and essays on liberation and the body"
          bg="/writing.jpg"
        />
      </section>

      <Footer />
    </div>
  )
}

function SectionTile({
  href,
  label,
  description,
  bg,
}: {
  href: '/photoshoots' | '/movement' | '/writing'
  label: string
  description: string
  bg: string
}) {
  return (
    <Link
      to={href}
      className="group relative h-80 overflow-hidden flex items-end p-8 bg-[var(--charcoal)]"
    >
      <img
        src={bg}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
      />
      <div className="relative z-10">
        <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2">
          {label}
        </p>
        <h2 className="font-display text-white text-2xl font-light">
          {description}
        </h2>
      </div>
    </Link>
  )
}
