'use client'

import { useState } from 'react'
import Link from 'next/link'

const TRUST_LOGOS = ['CarGurus', 'AutoTrader', 'Cars.com', 'KBB', 'Edmunds']

const EXAMPLE_QUERIES = [
  'RAV4 under $28K near Boca Raton',
  'Tesla Model 3 with low miles in Florida',
  'Best deal on a Honda Civic in Miami',
  'Pickup truck under $35K automatic near me',
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Describe what you want',
    body: 'Type naturally — make, model, budget, location. No forms, no filters to click.',
  },
  {
    step: '02',
    title: 'AI scores every deal',
    body: 'We scan 6M+ live listings and score each one 1–10. Bad deals get buried. Great deals float up.',
  },
  {
    step: '03',
    title: 'Know exactly what to pay',
    body: 'See why a deal is good, flag red flags, and get a negotiation script before you walk in.',
  },
]

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [zip, setZip] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [demoQuery, setDemoQuery] = useState('')
  const [activeExample, setActiveExample] = useState(0)

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, zip }),
      })
      if (res.ok) setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand-black overflow-x-hidden">
      {/* ── NAV ─────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass border-b border-brand-steel/50">
        <a href="/" className="font-display font-bold text-xl tracking-tight">
          <span className="text-brand-blue">CARC</span>
          <span className="text-brand-light">.com</span>
        </a>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/pricing" className="text-brand-muted hover:text-brand-light transition-colors">
            Pricing
          </Link>
          <Link href="/login" className="text-brand-muted hover:text-brand-light transition-colors">
            Sign in
          </Link>
          <Link
            href="#waitlist"
            className="bg-brand-blue hover:bg-brand-blue-dim text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Get early access
          </Link>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-blue-glow pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-charcoal border border-brand-steel rounded-full px-4 py-1.5 text-sm text-brand-muted mb-8 animate-slide-up">
          <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse-glow" />
          Powered by Claude (Anthropic)
        </div>

        <h1
          className="font-display text-5xl md:text-7xl font-bold text-brand-light leading-tight mb-6 animate-slide-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          The AI that finds
          <br />
          <span className="text-brand-blue">your best car deal</span>
        </h1>

        <p
          className="text-xl text-brand-muted max-w-2xl mx-auto mb-12 animate-slide-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Type what you want in plain English. We scan 6 million live listings,
          score every deal with AI, and tell you exactly what to pay.
        </p>

        {/* Demo search bar */}
        <div
          className="relative max-w-2xl mx-auto mb-4 animate-slide-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          <div className="glass rounded-xl border border-brand-steel p-2 flex gap-2">
            <input
              type="text"
              value={demoQuery}
              onChange={(e) => setDemoQuery(e.target.value)}
              placeholder={EXAMPLE_QUERIES[activeExample]}
              className="flex-1 bg-transparent px-4 py-3 text-brand-light placeholder-brand-muted/60 focus:outline-none text-base"
            />
            <Link
              href={`/search?q=${encodeURIComponent(demoQuery || EXAMPLE_QUERIES[activeExample])}`}
              className="bg-brand-blue hover:bg-brand-blue-dim text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Find deals
            </Link>
          </div>
          {/* Example queries */}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {EXAMPLE_QUERIES.map((q, i) => (
              <button
                key={i}
                onClick={() => { setDemoQuery(q); setActiveExample(i) }}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  activeExample === i
                    ? 'border-brand-blue/60 bg-brand-blue/10 text-brand-blue'
                    : 'border-brand-steel text-brand-muted hover:border-brand-blue/40 hover:text-brand-light'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-12 animate-slide-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          {[
            { value: '6M+', label: 'Live listings' },
            { value: '< 10s', label: 'To find best deal' },
            { value: '1–10', label: 'AI deal score' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-3xl font-bold text-brand-light">{value}</div>
              <div className="text-sm text-brand-muted mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────── */}
      <section className="border-y border-brand-steel/40 py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 text-brand-muted text-sm">
          <span className="text-brand-muted/60 text-xs uppercase tracking-widest">Data from</span>
          {TRUST_LOGOS.map((name) => (
            <span key={name} className="font-medium text-brand-muted/80">{name}</span>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-brand-blue text-sm font-medium uppercase tracking-widest mb-3">How it works</div>
            <h2 className="font-display text-4xl font-bold text-brand-light">
              From search to deal in seconds
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map(({ step, title, body }) => (
              <div key={step} className="glass rounded-2xl p-8 border border-brand-steel/60">
                <div className="font-display text-5xl font-bold text-brand-blue/20 mb-4">{step}</div>
                <h3 className="font-display text-xl font-semibold text-brand-light mb-3">{title}</h3>
                <p className="text-brand-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO RESULT CARD ────────────────────────────── */}
      <section className="py-16 px-6 bg-brand-charcoal/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-brand-light">
              This is what a great deal looks like
            </h2>
            <p className="text-brand-muted mt-3">Every result comes with a score, explanation, and what to pay.</p>
          </div>

          {/* Mock result card */}
          <div className="glass rounded-2xl border border-brand-steel overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-light">2022 Toyota RAV4 XLE</h3>
                  <p className="text-brand-muted text-sm mt-1">38,200 mi · Automatic · Boca Raton, FL · 4 days on market</p>
                </div>
                {/* Score badge */}
                <div className="text-right">
                  <div className="inline-flex flex-col items-center bg-score-excellent border rounded-xl px-4 py-2">
                    <span className="font-display text-3xl font-bold score-excellent">9.1</span>
                    <span className="text-xs score-excellent font-medium uppercase tracking-wide">Excellent</span>
                  </div>
                </div>
              </div>

              <div className="flex items-end gap-3 mb-5">
                <span className="font-display text-3xl font-bold text-brand-light">$26,500</span>
                <span className="text-brand-muted line-through text-lg">$28,800</span>
                <span className="text-brand-green text-sm font-medium bg-brand-green/10 border border-brand-green/25 px-2 py-0.5 rounded-full">
                  $2,300 below market
                </span>
              </div>

              <p className="text-brand-muted text-sm mb-5">
                Priced 8% below the local market average for this trim and mileage. Low days-on-market
                suggests the dealer is motivated. Excellent opportunity.
              </p>

              {/* Why good */}
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div>
                  <div className="text-xs text-brand-green font-medium uppercase tracking-wide mb-2">Why it's good</div>
                  <ul className="space-y-1.5 text-sm text-brand-muted">
                    {['$2,300 below market avg', 'Only 38K miles for a 2022', 'Clean Carfax likely', '4 days listed — motivated dealer'].map(reason => (
                      <li key={reason} className="flex items-center gap-2">
                        <span className="text-brand-green">✓</span> {reason}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs text-brand-amber font-medium uppercase tracking-wide mb-2">Negotiation tips</div>
                  <ul className="space-y-1.5 text-sm text-brand-muted">
                    {["Offer $25,800 to start", "Ask for free first service", "Request Carfax before visit", "Check for extended warranty"].map(tip => (
                      <li key={tip} className="flex items-center gap-2">
                        <span className="text-brand-amber">→</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-brand-blue hover:bg-brand-blue-dim text-white py-3 rounded-xl font-medium transition-colors text-sm">
                  View full analysis
                </button>
                <button className="px-4 py-3 border border-brand-steel rounded-xl text-brand-muted hover:text-brand-light hover:border-brand-blue/40 transition-colors text-sm">
                  Save deal
                </button>
              </div>
            </div>
            <div className="bg-brand-blue/5 border-t border-brand-steel/50 px-6 py-3 flex items-center justify-between text-xs text-brand-muted">
              <span>via MarketCheck · Updated 3 min ago</span>
              <span className="text-brand-blue">Pro feature: full VIN history →</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ─────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-brand-light mb-4">Simple pricing</h2>
          <p className="text-brand-muted mb-16">Start free. Upgrade when you need the edge.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Free',
                price: '$0',
                desc: 'Casual shoppers',
                features: ['5 AI searches/day', 'Deal scores', 'Top 5 results', '1 saved search'],
                cta: 'Start free',
                href: '/signup',
              },
              {
                name: 'Pro',
                price: '$9/mo',
                desc: 'Serious buyers',
                features: ['Unlimited searches', 'Full AI analysis', 'Negotiation scripts', 'Price alerts', '5 saved searches'],
                cta: 'Start free trial',
                href: '/signup?plan=pro',
                popular: true,
              },
              {
                name: 'Growth',
                price: '$29/mo',
                desc: 'Power users',
                features: ['Everything in Pro', 'Real-time alerts', 'VIN reports included', 'Market trend data', 'Unlimited saves'],
                cta: 'Start free trial',
                href: '/signup?plan=growth',
              },
            ].map(plan => (
              <div
                key={plan.name}
                className={`glass rounded-2xl p-7 border text-left relative ${
                  plan.popular
                    ? 'border-brand-blue/60 ring-1 ring-brand-blue/30'
                    : 'border-brand-steel'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-medium px-4 py-1 rounded-full">
                    Most popular
                  </div>
                )}
                <div className="font-display text-sm text-brand-muted mb-1">{plan.desc}</div>
                <div className="font-display text-2xl font-bold text-brand-light mb-1">{plan.name}</div>
                <div className="font-display text-3xl font-bold text-brand-blue mb-6">{plan.price}</div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-brand-muted">
                      <span className="text-brand-green">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={`block text-center py-3 rounded-xl font-medium transition-colors text-sm ${
                    plan.popular
                      ? 'bg-brand-blue hover:bg-brand-blue-dim text-white'
                      : 'border border-brand-steel hover:border-brand-blue/50 text-brand-muted hover:text-brand-light'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-brand-muted/60 text-sm mt-6">
            7-day free trial on Pro & Growth. No credit card to start free.
          </p>
        </div>
      </section>

      {/* ── WAITLIST ────────────────────────────────────── */}
      <section id="waitlist" className="py-24 px-6 bg-gradient-to-b from-brand-charcoal/20 to-brand-black">
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-blue-glow absolute inset-0 pointer-events-none" />
          <h2 className="font-display text-4xl font-bold text-brand-light mb-4">
            Get early access
          </h2>
          <p className="text-brand-muted mb-10">
            Join the waitlist. Get 30 days of Pro free when we launch.
          </p>

          {submitted ? (
            <div className="glass rounded-2xl border border-brand-green/30 p-8">
              <div className="text-brand-green text-4xl mb-4">✓</div>
              <div className="font-display text-xl font-bold text-brand-light mb-2">You're on the list!</div>
              <p className="text-brand-muted text-sm">We'll email you as soon as CARC launches. Watch for great deals.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="glass rounded-2xl border border-brand-steel p-6 space-y-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light placeholder-brand-muted/60 focus:outline-none focus:border-brand-blue/60 transition-colors"
              />
              <input
                type="text"
                value={zip}
                onChange={e => setZip(e.target.value)}
                placeholder="Zip code (optional)"
                maxLength={5}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light placeholder-brand-muted/60 focus:outline-none focus:border-brand-blue/60 transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !email}
                className="w-full bg-brand-blue hover:bg-brand-blue-dim disabled:opacity-50 text-white py-3 rounded-xl font-medium transition-colors"
              >
                {loading ? 'Joining...' : 'Join waitlist — get 30 days Pro free'}
              </button>
              <p className="text-xs text-brand-muted/60">No spam. No credit card. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="border-t border-brand-steel/40 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm text-brand-muted">
          <div className="font-display font-bold text-brand-light">
            <span className="text-brand-blue">CARC</span>.com
          </div>
          <div className="flex gap-6">
            <Link href="/pricing" className="hover:text-brand-light transition-colors">Pricing</Link>
            <Link href="/blog" className="hover:text-brand-light transition-colors">Blog</Link>
            <Link href="/tools/negotiation" className="hover:text-brand-light transition-colors">Tools</Link>
          </div>
          <p className="text-brand-muted/60">© 2025 CARC.com · Kumbaya Group LLC</p>
        </div>
      </footer>
    </div>
  )
}
