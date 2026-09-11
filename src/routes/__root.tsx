/// <reference types="vite/client" />
import * as React from 'react'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { IdentityCallbackHandler, IdentityProvider } from '~/components/identity'
import appCss from '~/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Aiesha Savage — Model · Movement Coach · Writer' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      // Hero and section imagery sits above the fold on every entry point.
      { rel: 'preload', as: 'image', href: '/hero.jpg' },
      { rel: 'preload', as: 'image', href: '/portfolio.jpg' },
      { rel: 'preload', as: 'image', href: '/movement.jpg' },
      { rel: 'preload', as: 'image', href: '/writing.jpg' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <IdentityProvider>
          <IdentityCallbackHandler>{children}</IdentityCallbackHandler>
        </IdentityProvider>
        <Scripts />
      </body>
    </html>
  )
}
