import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'CARC.com — The AI That Finds Your Best Car Deal',
    template: '%s | CARC.com',
  },
  description:
    'Find the best deal on any car in seconds. AI-powered search, deal scoring, and negotiation prep across every listing online.',
  keywords: ['car deals', 'AI car search', 'best car deals', 'car buying', 'used cars'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://carc.com',
    siteName: 'CARC.com',
    title: 'CARC.com — The AI That Finds Your Best Car Deal',
    description:
      'Find the best deal on any car in seconds. Natural language search → AI deal score → ranked results.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CARC.com — The AI That Finds Your Best Car Deal',
    description: 'Find the best deal on any car in seconds.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-brand-black text-brand-light font-body antialiased">
        {children}
      </body>
    </html>
  )
}
