import { useState, type FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { Footer } from '~/components/Footer'
import { useIdentity } from '~/components/identity'

export const Route = createFileRoute('/movement')({
  component: Movement,
})

function Movement() {
  const { user, ready } = useIdentity()

  return (
    <div className="min-h-screen bg-[var(--ivory)]">
      <div className="pt-24 pb-20 px-6 max-w-2xl mx-auto">
        <header className="mb-14 text-center">
          <h1 className="font-display text-5xl text-[var(--espresso)] font-light tracking-widest">
            Movement
          </h1>
          <div className="mt-4 w-10 h-px bg-[var(--terracotta)] mx-auto" />
          <p className="mt-6 text-[var(--charcoal)]/70 leading-relaxed font-light">
            Functional strength, somatic awareness, and intentional movement — a
            program built for bodies that want to feel as good as they look.
          </p>
          <a
            href="https://docs.google.com/forms/d/10POgoFyQ5NojXVbFnjVquzrRKoerkmc1wiPIQlDaQzU/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-[var(--espresso)] text-[var(--ivory)] px-10 py-3 text-xs tracking-[0.25em] uppercase hover:bg-[var(--terracotta)] transition-colors"
          >
            Train With Me
          </a>
        </header>

        {!ready ? (
          <div className="text-center text-[var(--warm-mid)] py-12 text-sm tracking-widest uppercase animate-pulse">
            Loading…
          </div>
        ) : user ? (
          <ProgramAccess />
        ) : (
          <MemberGate />
        )}
      </div>

      <Footer />
    </div>
  )
}

function ProgramAccess() {
  const { logout } = useIdentity()

  return (
    <div className="space-y-8">
      <div className="bg-[var(--card)] border border-[var(--sand)] p-8 text-center">
        <p className="text-[var(--warm-mid)] text-xs tracking-[0.25em] uppercase mb-3">
          Your program is ready
        </p>
        <h2 className="font-display text-3xl text-[var(--espresso)] font-light mb-6">
          12-Week Movement Program
        </h2>
        <p className="text-[var(--charcoal)]/70 font-light mb-8 leading-relaxed">
          Access your full exercise program on Notion — including weekly plans,
          video cues, and progression notes.
        </p>
        <a
          href="https://notion.so/your-exercise-program-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--espresso)] text-[var(--ivory)] px-10 py-3 text-xs tracking-[0.25em] uppercase hover:bg-[var(--terracotta)] transition-colors"
        >
          Open in Notion →
        </a>
      </div>

      <div className="text-center">
        <button
          onClick={logout}
          className="text-xs tracking-[0.2em] uppercase text-[var(--warm-mid)] hover:text-[var(--espresso)] transition-colors"
        >
          Sign out
        </button>
      </div>
    </div>
  )
}

const FIELD_CLASS =
  'w-full border border-[var(--sand)] bg-transparent px-4 py-3 text-sm text-[var(--espresso)] placeholder:text-[var(--warm-mid)] focus:outline-none focus:border-[var(--terracotta)] transition-colors'

function MemberGate() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'error' | 'confirm'
  >('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const { login, signup } = await import('@netlify/identity')

      if (mode === 'login') {
        await login(email, password)
      } else {
        await signup(email, password, { full_name: fullName })
        setStatus('confirm')
        return
      }
    } catch (caught) {
      setError((caught as Error).message || 'Something went wrong')
      setStatus('error')
      return
    }

    setStatus('idle')
  }

  if (status === 'confirm') {
    return (
      <div className="border border-[var(--sand)] bg-[var(--card)] p-10 text-center">
        <h2 className="font-display text-2xl text-[var(--espresso)] font-light mb-4">
          Check your email
        </h2>
        <p className="text-[var(--charcoal)]/70 font-light text-sm">
          A confirmation link has been sent to <strong>{email}</strong>. Click it
          to activate your account, then return here to sign in.
        </p>
        <button
          onClick={() => {
            setMode('login')
            setStatus('idle')
          }}
          className="mt-6 text-xs tracking-[0.2em] uppercase text-[var(--terracotta)] hover:text-[var(--espresso)] transition-colors"
        >
          Back to sign in
        </button>
      </div>
    )
  }

  return (
    <div className="border border-[var(--sand)] bg-[var(--card)] p-8 md:p-10">
      <div className="text-center mb-8">
        <p className="text-[var(--warm-mid)] text-xs tracking-[0.25em] uppercase mb-2">
          Members only
        </p>
        <h2 className="font-display text-3xl text-[var(--espresso)] font-light">
          {mode === 'login' ? 'Sign in to access' : 'Create an account'}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
        {mode === 'signup' && (
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
            className={FIELD_CLASS}
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className={FIELD_CLASS}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className={FIELD_CLASS}
        />

        {status === 'error' && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[var(--espresso)] text-[var(--ivory)] py-3 text-xs tracking-[0.25em] uppercase hover:bg-[var(--terracotta)] transition-colors disabled:opacity-50"
        >
          {status === 'loading'
            ? 'Please wait…'
            : mode === 'login'
              ? 'Sign in'
              : 'Create account'}
        </button>
      </form>

      <div className="text-center mt-6">
        <button
          onClick={() => {
            setMode(mode === 'login' ? 'signup' : 'login')
            setStatus('idle')
            setError('')
          }}
          className="text-xs tracking-[0.2em] uppercase text-[var(--warm-mid)] hover:text-[var(--espresso)] transition-colors"
        >
          {mode === 'login'
            ? 'New here? Create an account'
            : 'Already have an account? Sign in'}
        </button>
      </div>
    </div>
  )
}
