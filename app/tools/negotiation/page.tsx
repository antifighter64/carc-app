'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NegotiationToolPage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  async function analyze(e: React.FormEvent) {
    e.preventDefault()
    if (!url) return
    setLoading(true)
    // TODO: call /api/negotiate endpoint
    // Placeholder output for demo
    await new Promise(r => setTimeout(r, 1500))
    setResult({
      offer: 24800,
      opening: "I've done my research and comparable vehicles in the area are selling for $24,200–$25,800. I'd like to start at $24,800.",
      tips: [
        "Ask for a pre-purchase inspection by your own mechanic",
        "Request a full Carfax report before signing",
        "See if they'll include the first oil change or tire rotation",
        "Check if there's room on dealer fees — doc fees are often negotiable",
        "Don't discuss monthly payments — negotiate total price first",
      ],
      timing: "Best time to buy: last few days of the month when dealers are hitting quotas.",
    })
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-brand-black">
      <nav className="sticky top-0 z-40 glass border-b border-brand-steel/50 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link href="/" className="font-display font-bold text-lg">
            <span className="text-brand-blue">CARC</span><span className="text-brand-light">.com</span>
          </Link>
          <span className="text-brand-muted text-sm">› Negotiation Tool</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold text-brand-light mb-4">
            AI Negotiation Prep
          </h1>
          <p className="text-brand-muted text-lg">
            Paste any car listing URL. Get your offer price, opening script, and negotiation tips in seconds.
          </p>
        </div>

        <form onSubmit={analyze} className="glass rounded-2xl border border-brand-steel p-6 mb-8">
          <label className="block text-brand-muted text-sm mb-2">Listing URL (CarGurus, AutoTrader, Cars.com, or dealer site)</label>
          <div className="flex gap-2">
            <input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://www.cargurus.com/Cars/..."
              required
              className="flex-1 bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light placeholder-brand-muted/60 focus:outline-none focus:border-brand-blue/60 transition-colors text-sm"
            />
            <button
              type="submit"
              disabled={loading || !url}
              className="bg-brand-blue hover:bg-brand-blue-dim disabled:opacity-50 text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors whitespace-nowrap"
            >
              {loading ? 'Analyzing...' : 'Get strategy'}
            </button>
          </div>
        </form>

        {result && (
          <div className="space-y-5 animate-slide-up">
            <div className="glass rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-6">
              <div className="text-brand-blue text-xs font-medium uppercase tracking-wide mb-2">Suggested offer</div>
              <div className="font-display text-4xl font-bold text-brand-light">${result.offer.toLocaleString()}</div>
            </div>

            <div className="glass rounded-2xl border border-brand-steel p-6">
              <div className="text-brand-muted text-xs font-medium uppercase tracking-wide mb-3">Opening line to say</div>
              <p className="text-brand-light italic leading-relaxed">"{result.opening}"</p>
            </div>

            <div className="glass rounded-2xl border border-brand-steel p-6">
              <div className="text-brand-amber text-xs font-medium uppercase tracking-wide mb-3">Negotiation tips</div>
              <ul className="space-y-2">
                {result.tips.map((t: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-muted">
                    <span className="text-brand-amber mt-0.5 shrink-0">→</span> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl border border-brand-steel p-6">
              <div className="text-brand-muted text-xs font-medium uppercase tracking-wide mb-2">Timing tip</div>
              <p className="text-brand-muted text-sm">{result.timing}</p>
            </div>

            <div className="glass rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-5 text-center">
              <p className="text-brand-muted text-sm mb-3">Want the full VIN history + market deep-dive?</p>
              <Link href="/pricing" className="bg-brand-blue hover:bg-brand-blue-dim text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors inline-block">
                Upgrade to Pro
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
