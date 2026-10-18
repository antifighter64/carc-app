'use client'

import { useState } from 'react'

/**
 * CARC "Best Deals" weekly newsletter signup.
 * POSTs to /api/waitlist with source='newsletter'.
 * Variants: hero | inline | compact
 */
export default function NewsletterSignup({
  variant = 'inline',
  carContext,
}: {
  variant?: 'hero' | 'inline' | 'compact'
  carContext?: string
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'newsletter', placement: variant }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('done')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  if (variant === 'compact') {
    return (
      <div className="rounded-xl bg-brand-charcoal/60 border border-brand-steel/50 p-4">
        {status === 'done' ? (
          <p className="text-green-400 text-sm font-semibold">✅ You're in! First issue lands Sunday.</p>
        ) : (
          <form onSubmit={submit} className="flex gap-2">
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Get Sunday deals" aria-label="Email address"
              className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-brand-black border border-brand-steel text-sm text-white placeholder:text-brand-muted focus:border-brand-blue focus:outline-none"
            />
            <button type="submit" disabled={status === 'loading'}
              className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-bold whitespace-nowrap disabled:opacity-50">
              {status === 'loading' ? '...' : 'Join'}
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-red-400 text-xs mt-2">⚠️ {errorMsg}</p>}
      </div>
    )
  }

  return (
    <div className={`rounded-2xl p-8 text-center ${variant === 'hero'
      ? 'bg-gradient-to-br from-brand-navy to-brand-charcoal border border-brand-steel'
      : 'bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] my-8'}`}>
      <div className="text-4xl mb-2">🚗</div>
      <h3 className="text-white text-2xl font-bold mb-2">Get the 10 best car deals every Sunday.</h3>
      <p className="text-brand-muted text-[15px] mb-5 max-w-lg mx-auto leading-relaxed">
        {carContext ? `Loved this ${carContext} deal score? ` : ''}
        One email a week. The biggest below-market finds, one investment-grade spotlight,
        one overpriced listing to avoid. No spam, unsubscribe anytime.
      </p>
      {status === 'done' ? (
        <p className="text-green-400 font-semibold text-lg">✅ You're in! First issue lands Sunday.</p>
      ) : (
        <form onSubmit={submit} className="flex gap-2.5 justify-center flex-wrap max-w-md mx-auto">
          <input
            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com" aria-label="Email address"
            className="flex-1 min-w-[200px] px-4 py-3 rounded-[10px] bg-[#1e293b] border-2 border-[#334155] text-white text-[15px] placeholder:text-[#64748b] focus:border-[#38bdf8] focus:outline-none"
          />
          <button type="submit" disabled={status === 'loading'}
            className="px-6 py-3 rounded-[10px] bg-green-600 hover:bg-green-700 text-white text-[15px] font-bold whitespace-nowrap disabled:opacity-50">
            {status === 'loading' ? 'Joining...' : 'Send me deals'}
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-red-400 text-sm mt-3">⚠️ {errorMsg}</p>}
      <p className="text-xs text-brand-muted mt-3">Join 12,000+ smart car buyers. Free forever.</p>
    </div>
  )
}
