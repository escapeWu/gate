
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import Footer from '@/components/footer'
import { HomeBlur } from '@/components/home-blur'


export const metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title: {
    default: 'Fullstack Developer Shancw',
    template: `%s - SHANCW`
  },
  description: 'Welcome to my sweet site. sharing knowledge and news',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased  text-white',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <HomeBlur />
        <Toaster position="top-center" />
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <Header />
          <div id="body" className="gutter mx-auto w-full max-w-screen-lg pt-20">
            <main>{children}</main>
          </div>
          <Footer  />
          <TailwindIndicator/>
        </Providers>
      </body>
    </html>
  )
}
