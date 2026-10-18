import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log In',
  description: 'Log in to your CARC account to access saved searches, alerts, and Pro features.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
