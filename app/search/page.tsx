'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { CarListing } from '@/types'

// Phase 1 inline affiliate data (client-side, no server needed)
const LOAN_STRIP = {
  name: 'LendingTree Auto',
  headline: 'Get pre-approved before you buy',
  sub: 'Compare rates from 30+ lenders in 60 seconds. No hard credit pull.',
  cta: 'Check my rate — free',
  url: 'https://www.lendingtree.com/auto/?utm_source=carc&utm_medium=affiliate&utm_campaign=lendingtree_search',
  badge: 'Up to $70/lead · Phase 1',
}

const INSURANCE_STRIP = {
  name: 'Jerry.ai',
  headline: 'Don\'t overpay for insurance on your next car',
  sub: 'Jerry compares 55+ insurers in 45 seconds. Average savings: $887/year.',
  cta: 'Compare insurance quotes',
  url: 'https://getjerry.com/?utm_source=carc&utm_medium=affiliate&utm_campaign=jerry_search',
  badge: '$10–$30/lead · Phase 1',
}

function ScoreBadge({ score, rating }: { score: number; rating: string }) {
  const cls =
    rating === 'excellent' ? 'bg-score-excellent score-excellent' :
    rating === 'good'      ? 'bg-score-good score-good' :
    rating === 'fair'      ? 'bg-score-fair score-fair' :
    'bg-score-overpriced score-overpriced'

  return (
    <div className={`inline-flex flex-col items-center border rounded-xl px-3 py-2 ${cls}`}>
      <span className="font-display text-2xl font-bold leading-none">{score.toFixed(1)}</span>
      <span className="text-xs font-medium uppercase tracking-wide capitalize mt-0.5">{rating}</span>
    </div>
  )
}

function ListingCard({ listing }: { listing: CarListing }) {
  const delta = listing.price_delta
  const savings = Math.abs(delta)

  return (
    <div className="glass rounded-2xl border border-brand-steel hover:border-brand-blue/40 transition-colors overflow-hidden group">
      {/* Photo */}
      <div className="aspect-[16/9] bg-brand-charcoal relative overflow-hidden">
        {listing.photos[0] ? (
          <img
            src={listing.photos[0]}
            alt={`${listing.year} ${listing.make} ${listing.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-brand-muted/30 text-5xl">🚗</div>
        )}
        {listing.days_on_market > 0 && (
          <div className="absolute top-3 left-3 bg-brand-black/70 backdrop-blur-sm text-xs text-brand-muted px-2 py-1 rounded-full">
            {listing.days_on_market}d listed
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display font-semibold text-brand-light text-lg leading-tight">
              {listing.year} {listing.make} {listing.model}
            </h3>
            <p className="text-brand-muted text-sm mt-0.5">
              {listing.trim} · {listing.mileage.toLocaleString()} mi · {listing.dealer_city}, {listing.dealer_state}
            </p>
          </div>
          {listing.deal_score && (
            <ScoreBadge score={listing.deal_score.score} rating={listing.deal_score.rating} />
          )}
        </div>

        <div className="flex items-end gap-2 mb-3">
          <span className="font-display text-2xl font-bold text-brand-light">
            ${listing.price.toLocaleString()}
          </span>
          {delta < 0 && (
            <span className="text-brand-green text-sm font-medium bg-brand-green/10 border border-brand-green/25 px-2 py-0.5 rounded-full">
              ${savings.toLocaleString()} below market
            </span>
          )}
          {delta > 0 && (
            <span className="text-brand-amber text-sm bg-brand-amber/10 border border-brand-amber/25 px-2 py-0.5 rounded-full">
              ${savings.toLocaleString()} above market
            </span>
          )}
        </div>

        {listing.deal_score?.summary && (
          <p className="text-brand-muted text-sm mb-4 line-clamp-2">
            {listing.deal_score.summary}
          </p>
        )}

        <div className="flex gap-2">
          <Link
            href={`/car/${listing.id}`}
            className="flex-1 bg-brand-blue hover:bg-brand-blue-dim text-white text-center py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            Full analysis
          </Link>
          <button className="px-3 py-2.5 border border-brand-steel rounded-xl text-brand-muted hover:text-brand-light hover:border-brand-blue/40 transition-colors text-sm">
            Save
          </button>
          <a
            href={listing.listing_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 border border-brand-steel rounded-xl text-brand-muted hover:text-brand-light hover:border-brand-blue/40 transition-colors text-sm"
          >
            ↗
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Affiliate Strip ────────────────────────────────────────────────────────
function AffiliateStrip({
  type,
  compact = false,
}: {
  type: 'loan' | 'insurance'
  compact?: boolean
}) {
  const data = type === 'loan' ? LOAN_STRIP : INSURANCE_STRIP
  const accent = type === 'loan' ? 'border-brand-blue/30 bg-brand-blue/5' : 'border-brand-green/30 bg-brand-green/5'
  const ctaColor = type === 'loan'
    ? 'bg-brand-blue hover:bg-brand-blue-dim text-white'
    : 'bg-brand-green/90 hover:bg-brand-green text-brand-black font-medium'
  const icon = type === 'loan' ? '💳' : '🛡️'

  if (compact) {
    return (
      <div className={`col-span-full glass rounded-xl border ${accent} px-5 py-4 flex items-center justify-between gap-4`}>
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <div>
            <p className="text-brand-light text-sm font-medium">{data.headline}</p>
            <p className="text-brand-muted text-xs mt-0.5">{data.sub}</p>
          </div>
        </div>
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`shrink-0 text-xs px-4 py-2 rounded-lg transition-colors ${ctaColor}`}
        >
          {data.cta}
        </a>
      </div>
    )
  }

  return (
    <div className={`col-span-full glass rounded-2xl border ${accent} p-6 flex flex-col md:flex-row items-center justify-between gap-5`}>
      <div className="flex items-center gap-4">
        <span className="text-3xl">{icon}</span>
        <div>
          <p className="font-semibold text-brand-light">{data.headline}</p>
          <p className="text-brand-muted text-sm mt-1">{data.sub}</p>
        </div>
      </div>
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`shrink-0 px-6 py-3 rounded-xl font-medium transition-colors text-sm ${ctaColor}`}
      >
        {data.cta} →
      </a>
    </div>
  )
}

// ── Filters sidebar ────────────────────────────────────────────────────────
function SortSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="bg-brand-charcoal border border-brand-steel rounded-lg px-3 py-1.5 text-brand-muted text-sm focus:outline-none focus:border-brand-blue/60 cursor-pointer"
    >
      <option value="score">Sort: Best deal first</option>
      <option value="price_asc">Price: low to high</option>
      <option value="price_desc">Price: high to low</option>
      <option value="miles">Mileage: low to high</option>
      <option value="dom">Newest listings</option>
    </select>
  )
}

function WaitlistCapture() {
  const [email, setEmail] = useState('')
  const [zip, setZip] = useState('')
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)

  async function join() {
    if (!email.trim()) return
    setBusy(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, zip }),
      })
      setDone(true)
    } catch {
      setDone(true)
    } finally {
      setBusy(false)
    }
  }

  if (done) {
    return (
      <div className="glass rounded-2xl border border-brand-green/30 bg-brand-green/5 p-8 text-center mb-8">
        <p className="text-brand-green font-semibold text-lg mb-1">You're on the list.</p>
        <p className="text-brand-muted text-sm">We'll email you the moment live deal search opens — with 30 days of Pro free.</p>
      </div>
    )
  }

  return (
    <div className="glass rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-8 text-center mb-8">
      <p className="font-display text-xl font-bold text-brand-light mb-2">Live deal search is in private beta</p>
      <p className="text-brand-muted text-sm mb-5 max-w-md mx-auto">
        We're connecting the live listing feed now. Leave your email and ZIP and you'll be first in when it opens.
      </p>
      <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="flex-1 bg-brand-charcoal border border-brand-steel rounded-xl px-4 py-2.5 text-brand-light placeholder-brand-muted/60 focus:outline-none focus:border-brand-blue/60 text-sm"
        />
        <input
          type="text"
          value={zip}
          onChange={e => setZip(e.target.value)}
          placeholder="ZIP"
          className="sm:w-24 bg-brand-charcoal border border-brand-steel rounded-xl px-4 py-2.5 text-brand-light placeholder-brand-muted/60 focus:outline-none focus:border-brand-blue/60 text-sm"
        />
        <button
          onClick={join}
          disabled={busy}
          className="bg-brand-blue hover:bg-brand-blue-dim text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors disabled:opacity-50"
        >
          {busy ? '...' : 'Notify me'}
        </button>
      </div>
    </div>
  )
}

// ── Main content ───────────────────────────────────────────────────────────
function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get('q') ?? ''

  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<CarListing[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [errorKind, setErrorKind] = useState<'limit' | 'down' | null>(null)
  const [total, setTotal] = useState(0)
  const [remaining, setRemaining] = useState<number | null>(null)
  const [sort, setSort] = useState('score')

  useEffect(() => {
    if (initialQuery) runSearch(initialQuery)
  }, [])

  // Client-side sort
  const sorted = [...results].sort((a, b) => {
    if (sort === 'price_asc') return a.price - b.price
    if (sort === 'price_desc') return b.price - a.price
    if (sort === 'miles') return a.mileage - b.mileage
    if (sort === 'dom') return a.days_on_market - b.days_on_market
    return (b.deal_score?.score ?? 0) - (a.deal_score?.score ?? 0)
  })

  async function runSearch(q: string) {
    if (!q.trim()) return
    setLoading(true)
    setError('')
    router.replace(`/search?q=${encodeURIComponent(q)}`, { scroll: false })

    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q }),
      })
      const data = await res.json()

      if (!res.ok) {
        if (res.status === 429) {
          setErrorKind('limit')
          setError(`You've used all your free searches today. Upgrade to Pro for unlimited.`)
        } else {
          setErrorKind('down')
          setError(data.error ?? 'Search failed. Please try again.')
        }
        return
      }

      setResults(data.listings)
      setTotal(data.total)
      setRemaining(data.remaining)
    } catch {
      setErrorKind('down')
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Build result rows with affiliate strips injected at positions 3 and 6
  function buildResultRows(listings: CarListing[]) {
    const rows: React.ReactNode[] = []
    listings.forEach((listing, i) => {
      rows.push(<ListingCard key={listing.id} listing={listing} />)
      // After 3rd card → loan strip
      if (i === 2) {
        rows.push(<AffiliateStrip key="loan-strip" type="loan" compact />)
      }
      // After 6th card → insurance strip
      if (i === 5) {
        rows.push(<AffiliateStrip key="insurance-strip" type="insurance" compact />)
      }
    })
    return rows
  }

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Sticky search header */}
      <div className="sticky top-0 z-40 glass border-b border-brand-steel/50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex gap-3 items-center">
          <Link href="/" className="font-display font-bold text-lg text-brand-light shrink-0">
            <span className="text-brand-blue">CARC</span>.com
          </Link>
          <div className="flex-1 flex gap-2">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && runSearch(query)}
              className="flex-1 bg-brand-charcoal border border-brand-steel rounded-xl px-4 py-2.5 text-brand-light placeholder-brand-muted/60 focus:outline-none focus:border-brand-blue/60 text-sm transition-colors"
              placeholder="Search cars in plain English..."
            />
            <button
              onClick={() => runSearch(query)}
              disabled={loading}
              className="bg-brand-blue hover:bg-brand-blue-dim text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors disabled:opacity-50"
            >
              {loading ? '...' : 'Search'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Results header */}
        {results.length > 0 && (
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <p className="text-brand-light font-medium">
                {total.toLocaleString()} results for <span className="text-brand-blue">"{initialQuery || query}"</span>
              </p>
              <p className="text-brand-muted text-sm mt-0.5">Ranked by AI deal score</p>
            </div>
            <div className="flex items-center gap-3">
              <SortSelect value={sort} onChange={setSort} />
              {remaining !== null && (
                <div className="text-xs text-brand-muted bg-brand-charcoal border border-brand-steel rounded-lg px-3 py-2">
                  {remaining > 0
                    ? `${remaining} free searches left today`
                    : <Link href="/pricing" className="text-brand-blue hover:underline">Upgrade for unlimited →</Link>
                  }
                </div>
              )}
            </div>
          </div>
        )}

        {/* Error */}
        {error && errorKind === 'limit' && (
          <div className="glass rounded-2xl border border-brand-red/30 bg-brand-red/5 p-6 text-center mb-8">
            <p className="text-brand-red/90 mb-3">{error}</p>
            <Link href="/pricing" className="bg-brand-blue hover:bg-brand-blue-dim text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors inline-block">
              Upgrade to Pro
            </Link>
          </div>
        )}

        {error && errorKind === 'down' && <WaitlistCapture />}

        {/* Loading skeleton */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass rounded-2xl border border-brand-steel overflow-hidden animate-pulse">
                <div className="aspect-[16/9] bg-brand-charcoal" />
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-brand-steel rounded w-3/4" />
                  <div className="h-4 bg-brand-steel/60 rounded w-1/2" />
                  <div className="h-7 bg-brand-steel rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results grid with inline affiliate strips */}
        {!loading && sorted.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildResultRows(sorted)}
            </div>

            {/* Bottom affiliate block — loan + insurance side by side */}
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              <AffiliateStrip type="loan" />
              <AffiliateStrip type="insurance" />
            </div>
          </>
        )}

        {/* Empty state */}
        {!loading && !error && results.length === 0 && initialQuery && (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-display text-xl font-bold text-brand-light mb-2">No results found</h3>
            <p className="text-brand-muted">Try adjusting your search — be less specific or expand the price range.</p>
          </div>
        )}

        {/* Pro upsell strip */}
        {!loading && results.length > 0 && (
          <div className="mt-8 glass rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-brand-light">Get the full picture with Pro</p>
              <p className="text-brand-muted text-sm mt-1">Negotiation scripts, VIN history, price alerts, and unlimited searches.</p>
            </div>
            <Link
              href="/signup?plan=pro"
              className="bg-brand-blue hover:bg-brand-blue-dim text-white px-6 py-3 rounded-xl font-medium transition-colors shrink-0 text-sm"
            >
              Start free trial — $9/mo
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchContent />
    </Suspense>
  )
}
