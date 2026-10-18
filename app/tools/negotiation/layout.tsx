import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Negotiation Prep Tool',
  description: 'Word-for-word negotiation scripts for any car deal. CARC preps you with data-backed talking points to get the best price.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
