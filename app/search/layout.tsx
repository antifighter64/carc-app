import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Cars with AI',
  description: 'Search every car listing with AI. Describe what you want in plain English — CARC finds the best deals, scores them, and preps your negotiation.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
