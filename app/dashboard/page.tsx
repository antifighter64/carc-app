import Link from 'next/link'

// In a real app, this would fetch data server-side from Supabase
// using the authenticated user's session

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <nav className="sticky top-0 z-40 glass border-b border-brand-steel/50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-lg">
            <span className="text-brand-blue">CARC</span><span className="text-brand-light">.com</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/dashboard/alerts" className="text-brand-muted hover:text-brand-light">Alerts</Link>
            <Link href="/dashboard/saved" className="text-brand-muted hover:text-brand-light">Saved</Link>
            <Link href="/dashboard/settings" className="text-brand-muted hover:text-brand-light">Settings</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="font-display text-3xl font-bold text-brand-light mb-8">Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Searches today', value: '3 / 5', note: 'Free plan' },
            { label: 'Saved listings', value: '0', note: 'None yet' },
            { label: 'Active alerts', value: '0', note: 'Upgrade to Pro' },
            { label: 'VIN reports', value: '0', note: 'None purchased' },
          ].map(({ label, value, note }) => (
            <div key={label} className="glass rounded-2xl border border-brand-steel p-5">
              <div className="text-brand-muted text-xs uppercase tracking-wide mb-2">{label}</div>
              <div className="font-display text-2xl font-bold text-brand-light">{value}</div>
              <div className="text-brand-muted/60 text-xs mt-1">{note}</div>
            </div>
          ))}
        </div>

        {/* Quick search */}
        <div className="glass rounded-2xl border border-brand-steel p-6 mb-6">
          <h2 className="font-display font-semibold text-brand-light mb-4">Quick search</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="RAV4 under $28K near me..."
              className="flex-1 bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light placeholder-brand-muted/60 focus:outline-none focus:border-brand-blue/60 text-sm transition-colors"
            />
            <Link
              href="/search"
              className="bg-brand-blue hover:bg-brand-blue-dim text-white px-5 py-3 rounded-xl text-sm font-medium transition-colors"
            >
              Search
            </Link>
          </div>
        </div>

        {/* Upgrade CTA for free users */}
        <div className="glass rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-brand-light">You're on the Free plan</p>
            <p className="text-brand-muted text-sm mt-1">
              Upgrade to Pro for unlimited searches, price alerts, and full AI analysis.
            </p>
          </div>
          <Link
            href="/pricing"
            className="bg-brand-blue hover:bg-brand-blue-dim text-white px-6 py-3 rounded-xl font-medium transition-colors shrink-0 text-sm"
          >
            Upgrade to Pro — $9/mo
          </Link>
        </div>
      </div>
    </div>
  )
}
