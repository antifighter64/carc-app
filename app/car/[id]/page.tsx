import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getListingById } from '@/lib/marketcheck'
import { scoreListingFull } from '@/lib/claude'

export default async function CarDetailPage({ params }: { params: { id: string } }) {
  const listing = await getListingById(params.id)
  if (!listing) notFound()

  const score = await scoreListingFull(listing)
  listing.deal_score = score

  const delta = listing.price - listing.market_price
  const savings = Math.abs(delta)
  const ratingColor =
    score.rating === 'excellent' ? 'text-brand-green border-brand-green/40 bg-brand-green/10' :
    score.rating === 'good'      ? 'text-green-400 border-green-400/40 bg-green-400/10' :
    score.rating === 'fair'      ? 'text-brand-amber border-brand-amber/40 bg-brand-amber/10' :
    'text-brand-red border-brand-red/40 bg-brand-red/10'

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Nav */}
      <nav className="sticky top-0 z-40 glass border-b border-brand-steel/50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Link href="/" className="font-display font-bold text-lg">
            <span className="text-brand-blue">CARC</span><span className="text-brand-light">.com</span>
          </Link>
          <span className="text-brand-muted">›</span>
          <span className="text-brand-muted text-sm truncate">
            {listing.year} {listing.make} {listing.model} {listing.trim}
          </span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Photo */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-brand-charcoal">
              {listing.photos[0] ? (
                <img
                  src={listing.photos[0]}
                  alt={`${listing.year} ${listing.make} ${listing.model}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-6xl">🚗</div>
              )}
            </div>

            {/* Specs */}
            <div className="glass rounded-2xl border border-brand-steel p-6">
              <h3 className="font-display font-semibold text-brand-light mb-4">Vehicle details</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ['Year', listing.year],
                  ['Make', listing.make],
                  ['Model', listing.model],
                  ['Trim', listing.trim || '—'],
                  ['Mileage', `${listing.mileage.toLocaleString()} mi`],
                  ['Transmission', listing.transmission],
                  ['Fuel type', listing.fuel_type],
                  ['Exterior', listing.exterior_color],
                  ['Interior', listing.interior_color],
                  ['Days listed', `${listing.days_on_market} days`],
                ].map(([label, value]) => (
                  <div key={String(label)}>
                    <span className="text-brand-muted">{label}</span>
                    <span className="text-brand-light ml-2 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dealer */}
            <div className="glass rounded-2xl border border-brand-steel p-6">
              <h3 className="font-display font-semibold text-brand-light mb-3">Dealer</h3>
              <p className="text-brand-light font-medium">{listing.dealer_name}</p>
              <p className="text-brand-muted text-sm">{listing.dealer_city}, {listing.dealer_state} {listing.dealer_zip}</p>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Title & price */}
            <div>
              <h1 className="font-display text-2xl font-bold text-brand-light">
                {listing.year} {listing.make} {listing.model} {listing.trim}
              </h1>
              <p className="text-brand-muted text-sm mt-1">{listing.dealer_city}, {listing.dealer_state}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-display text-4xl font-bold text-brand-light">
                ${listing.price.toLocaleString()}
              </span>
              {delta < 0 && (
                <span className="text-brand-green text-sm bg-brand-green/10 border border-brand-green/25 px-3 py-1 rounded-full font-medium">
                  ${savings.toLocaleString()} below market
                </span>
              )}
            </div>

            {/* Score card */}
            <div className={`rounded-2xl border p-5 ${ratingColor}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium uppercase text-xs tracking-widest opacity-80">AI Deal Score</span>
                <span className="font-display text-4xl font-bold">{score.score.toFixed(1)}</span>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">{score.summary}</p>
            </div>

            {/* Why good */}
            {score.why_good && score.why_good.length > 0 && (
              <div className="glass rounded-2xl border border-brand-steel p-5">
                <h4 className="text-brand-green text-xs font-medium uppercase tracking-wide mb-3">Why it's a good deal</h4>
                <ul className="space-y-2">
                  {score.why_good.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-muted">
                      <span className="text-brand-green mt-0.5 shrink-0">✓</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Red flags */}
            {score.red_flags && score.red_flags.length > 0 && (
              <div className="glass rounded-2xl border border-brand-red/20 p-5">
                <h4 className="text-brand-red text-xs font-medium uppercase tracking-wide mb-3">Watch out for</h4>
                <ul className="space-y-2">
                  {score.red_flags.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-muted">
                      <span className="text-brand-red mt-0.5 shrink-0">!</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Negotiation tips */}
            {score.negotiation_tips && (
              <div className="glass rounded-2xl border border-brand-amber/20 p-5">
                <h4 className="text-brand-amber text-xs font-medium uppercase tracking-wide mb-3">Negotiation strategy</h4>
                {score.offer_suggestion && (
                  <div className="mb-3">
                    <span className="text-brand-muted text-sm">Suggested offer: </span>
                    <span className="font-display font-bold text-brand-light text-lg">${score.offer_suggestion.toLocaleString()}</span>
                  </div>
                )}
                <ul className="space-y-2">
                  {score.negotiation_tips.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-muted">
                      <span className="text-brand-amber mt-0.5 shrink-0">→</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs */}
            <div className="space-y-3">
              <a
                href={listing.listing_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-blue hover:bg-brand-blue-dim text-white text-center py-3.5 rounded-xl font-medium transition-colors"
              >
                View on dealer site ↗
              </a>
              <button className="block w-full border border-brand-steel hover:border-brand-blue/50 text-brand-muted hover:text-brand-light py-3.5 rounded-xl font-medium transition-colors text-sm">
                Save this listing
              </button>
            </div>

            {/* Affiliate */}
            <div className="glass rounded-2xl border border-brand-steel p-5 space-y-3">
              <p className="text-brand-muted text-xs uppercase tracking-wide font-medium">Also compare</p>
              <a href="https://www.cargurus.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between text-sm text-brand-muted hover:text-brand-light transition-colors">
                <span>View on CarGurus</span><span>→</span>
              </a>
              <a href="https://www.autotrader.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between text-sm text-brand-muted hover:text-brand-light transition-colors">
                <span>View on AutoTrader</span><span>→</span>
              </a>
              <hr className="border-brand-steel" />
              <a href="#" className="flex items-center justify-between text-sm text-brand-blue hover:text-brand-light transition-colors">
                <span>Get pre-approved for financing</span><span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
