import Link from 'next/link'

export default function NewsFooter() {
  return (
    <footer className="border-t border-brand-steel/40 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm text-brand-muted">
        <div className="font-display font-bold text-brand-light">
          <span className="text-brand-blue">CARC</span>.com
        </div>
        <div className="flex flex-wrap gap-6">
          <Link href="/news" className="hover:text-brand-light transition-colors">News</Link>
          <Link href="/top-10" className="hover:text-brand-light transition-colors">Top 10</Link>
          <Link href="/pricing" className="hover:text-brand-light transition-colors">Pricing</Link>
          <Link href="/tools/negotiation" className="hover:text-brand-light transition-colors">Tools</Link>
          <Link href="/privacy" className="hover:text-brand-light transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-brand-light transition-colors">Terms</Link>
          <Link href="/affiliate-disclosure" className="hover:text-brand-light transition-colors">Affiliate Disclosure</Link>
        </div>
        <p className="text-brand-muted/60">© 2026 CARC.com · Kumbaya Group LLC</p>
      </div>
    </footer>
  )
}
