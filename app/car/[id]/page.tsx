import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getListingById } from '@/lib/marketcheck'
import { scoreListingFull } from '@/lib/claude'
import { getAllAffiliatesForListing } from '@/lib/affiliates'

// ── Affiliate Card ──────────────────────────────────────────────────────────
function AffiliateCard({
  name,
  badge,
  cta,
  description,
  url,
  accent = 'blue',
}: {
  name: string
  badge?: string
  cta: string
  description: string
  url: string
  accent?: 'blue' | 'green' | 'amber'
}) {
  const colors = {
    blue: 'border-brand-blue/25 hover:border-brand-blue/50 hover:bg-brand-blue/5',
    green: 'border-brand-green/25 hover:border-brand-green/40 hover:bg-brand-green/5',
    amber: 'border-brand-amber/25 hover:border-brand-amber/40 hover:bg-brand-amber/5',
  }
  const badgeColors = {
    blue: 'text-brand-blue bg-brand-blue/10',
    green: 'text-brand-green bg-brand-green/10',
    amber: 'text-brand-amber bg-brand-amber/10',
  }
  const ctaColors = {
    blue: 'bg-brand-blue hover:bg-brand-blue-dim text-white',
    green: 'bg-brand-green/90 hover:bg-brand-green text-brand-black',
    amber: 'bg-brand-amber/90 hover:bg-brand-amber text-brand-black',
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`block glass rounded-xl border p-4 transition-all group ${colors[accent]}`}
    >
      <div className="flex items-start justify-between mb-1.5">
        <span className="text-brand-light text-sm font-medium">{name}</span>
        {badge && (
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeColors[accent]}`}>
            {badge}
          </span>
        )}
      </div>
      <p className="text-brand-muted text-xs mb-3 leading-relaxed">{description}</p>
      <span className={`inline-block text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${ctaColors[accent]}`}>
        {cta} →
      </span>
    </a>
  )
}

// ── Section header ──────────────────────────────────────────────────────────
function SectionHeader({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-base">{icon}</span>
      <span className="text-brand-muted text-xs font-medium uppercase tracking-widest">{label}</span>
    </div>
  )
}

// ── Main page ───────────────────────────────────────────────────────────────
export default async function CarDetailPage({ params }: { params: { id: string } }) {
  const listing = await getListingById(params.id)
  if (!listing) notFound()

  const [score, affiliates] = await Promise.all([
    scoreListingFull(listing),
    Promise.resolve(getAllAffiliatesForListing(listing)),
  ])
  listing.deal_score = score

  const delta = listing.price - listing.market_price
  const savings = Math.abs(delta)
  const ratingColor =
    score.rating === 'excellent' ? 'text-brand-green border-brand-green/40 bg-brand-green/10' :
    score.rating === 'good'      ? 'text-green-400 border-green-400/40 bg-green-400/10' :
    score.rating === 'fair'      ? 'text-brand-amber border-brand-amber/40 bg-brand-amber/10' :
    'text-brand-red border-brand-red/40 bg-brand-red/10'

  const monthlyPayment = Math.round((listing.price * 0.6 * 0.067) / (1 - Math.pow(1 + 0.067 / 12, -60)))

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Nav */}
      <nav className="sticky top-0 z-40 glass border-b border-brand-steel/50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/" className="font-display font-bold text-lg">
            <span className="text-brand-blue">CARC</span><span className="text-brand-light">.com</span>
          </Link>
          <span className="text-brand-muted">›</span>
          <Link href="/search" className="text-brand-muted text-sm hover:text-brand-light transition-colors">
            Search
          </Link>
          <span className="text-brand-muted">›</span>
          <span className="text-brand-muted text-sm truncate">
            {listing.year} {listing.make} {listing.model} {listing.trim}
          </span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* ── Left column (photos + specs) ── */}
          <div className="lg:col-span-5 space-y-6">
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

            {/* Photo strip */}
            {listing.photos.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {listing.photos.slice(1, 6).map((photo, i) => (
                  <div key={i} className="shrink-0 w-20 h-14 rounded-lg overflow-hidden">
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}

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
                  <div key={String(label)} className="flex flex-col">
                    <span className="text-brand-muted/70 text-xs uppercase tracking-wide">{label}</span>
                    <span className="text-brand-light font-medium mt-0.5">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dealer */}
            <div className="glass rounded-2xl border border-brand-steel p-5">
              <h3 className="font-display font-semibold text-brand-light mb-2">Dealer</h3>
              <p className="text-brand-light font-medium">{listing.dealer_name}</p>
              <p className="text-brand-muted text-sm">{listing.dealer_city}, {listing.dealer_state} {listing.dealer_zip}</p>
            </div>
          </div>

          {/* ── Center column (price + AI score + analysis) ── */}
          <div className="lg:col-span-4 space-y-5">
            {/* Title & price */}
            <div>
              <h1 className="font-display text-2xl font-bold text-brand-light">
                {listing.year} {listing.make} {listing.model} {listing.trim}
              </h1>
              <p className="text-brand-muted text-sm mt-1">{listing.dealer_city}, {listing.dealer_state}</p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-display text-4xl font-bold text-brand-light">
                ${listing.price.toLocaleString()}
              </span>
              {delta < 0 && (
                <span className="text-brand-green text-sm bg-brand-green/10 border border-brand-green/25 px-3 py-1 rounded-full font-medium">
                  ${savings.toLocaleString()} below market
                </span>
              )}
              {delta > 0 && (
                <span className="text-brand-amber text-sm bg-brand-amber/10 border border-brand-amber/25 px-3 py-1 rounded-full font-medium">
                  ${savings.toLocaleString()} above market
                </span>
              )}
            </div>

            {/* Est. monthly */}
            <p className="text-brand-muted text-sm">
              Est. <span className="text-brand-light font-medium">${monthlyPayment}/mo</span>{' '}
              with 40% down · 60 months · ~6.7% APR —{' '}
              <a href={affiliates.loans[0].url} target="_blank" rel="noopener noreferrer sponsored"
                className="text-brand-blue hover:underline">
                get a real rate →
              </a>
            </p>

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

            {/* Primary CTAs */}
            <div className="space-y-3 pt-1">
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

            {/* Compare on other sites */}
            <div className="glass rounded-2xl border border-brand-steel p-5 space-y-2">
              <p className="text-brand-muted text-xs uppercase tracking-wide font-medium mb-3">Also compare on</p>
              {affiliates.listings.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center justify-between text-sm text-brand-muted hover:text-brand-light transition-colors py-1"
                >
                  <span>{link.name}</span><span>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right column (affiliate sidebar) ── */}
          <div className="lg:col-span-3 space-y-6">

            {/* Financing */}
            <div>
              <SectionHeader icon="💳" label="Financing" />
              <div className="space-y-3">
                {affiliates.loans.map(link => (
                  <AffiliateCard
                    key={link.name}
                    name={link.name}
                    badge={link.badge}
                    cta={link.cta}
                    description={link.description}
                    url={link.url}
                    accent="blue"
                  />
                ))}
              </div>
              <p className="text-brand-muted/50 text-xs mt-2 leading-relaxed">
                * Estimated payment shown is illustrative. Get an actual rate from a lender.
              </p>
            </div>

            {/* Insurance */}
            <div>
              <SectionHeader icon="🛡️" label="Insurance" />
              <div className="space-y-3">
                {affiliates.insurance.map(link => (
                  <AffiliateCard
                    key={link.name}
                    name={link.name}
                    badge={link.badge}
                    cta={link.cta}
                    description={link.description}
                    url={link.url}
                    accent="green"
                  />
                ))}
              </div>
            </div>

            {/* Warranty — show for vehicles with some age/miles */}
            {(listing.mileage > 30000 || (new Date().getFullYear() - listing.year) >= 3) && (
              <div>
                <SectionHeader icon="🔧" label="Extended Warranty" />
                <div className="space-y-3">
                  {affiliates.warranty.map(link => (
                    <AffiliateCard
                      key={link.name}
                      name={link.name}
                      badge={link.badge}
                      cta={link.cta}
                      description={link.description}
                      url={link.url}
                      accent="amber"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Disclosure */}
            <p className="text-brand-muted/40 text-xs leading-relaxed">
              CARC may earn a commission when you click affiliate links. This doesn't affect our deal scores or rankings.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
