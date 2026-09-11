import * as React from 'react'
import type { User } from '@netlify/identity'

type IdentityContextValue = {
  user: User | null
  ready: boolean
  logout: () => Promise<void>
}

const IdentityContext = React.createContext<IdentityContextValue | null>(null)

/**
 * Loads the current Netlify Identity user on mount and keeps it in sync.
 * `@netlify/identity` is imported lazily so it stays out of the SSR bundle.
 */
export function IdentityProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null)
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    let unsubscribe: (() => void) | undefined
    let cancelled = false

    import('@netlify/identity').then(({ getUser, onAuthChange }) => {
      getUser().then((current) => {
        if (cancelled) return
        setUser(current ?? null)
        setReady(true)
      })
      if (cancelled) return
      unsubscribe = onAuthChange((_event, next) => setUser(next ?? null))
    })

    return () => {
      cancelled = true
      unsubscribe?.()
    }
  }, [])

  const logout = async () => {
    const identity = await import('@netlify/identity')
    await identity.logout()
    setUser(null)
  }

  return (
    <IdentityContext.Provider value={{ user, ready, logout }}>
      {children}
    </IdentityContext.Provider>
  )
}

export function useIdentity() {
  const context = React.useContext(IdentityContext)
  if (!context) {
    throw new Error('useIdentity must be used within IdentityProvider')
  }
  return context
}

const AUTH_HASH =
  /^#(confirmation_token|recovery_token|invite_token|email_change_token|access_token)=/

/**
 * Netlify Identity sends users back from email links with a token in the URL
 * hash. This completes those flows (email confirmation, password recovery,
 * invites) as soon as the app mounts.
 */
export function IdentityCallbackHandler({
  children,
}: {
  children: React.ReactNode
}) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && AUTH_HASH.test(window.location.hash)) {
      import('@netlify/identity').then(({ handleAuthCallback }) => {
        handleAuthCallback()
      })
    }
  }, [])

  return <>{children}</>
}
