import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up Free',
  description: 'Create your free CARC account. AI car search, deal scores, and price-drop alerts — no credit card required.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
