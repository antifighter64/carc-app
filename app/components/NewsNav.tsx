import Link from 'next/link'

export default function NewsNav() {
  return (
    <nav className="sticky top-0 z-40 glass border-b border-brand-steel/50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-lg">
          <span className="text-brand-blue">CARC</span><span className="text-brand-light">.com</span>
        </Link>
        <div className="flex items-center gap-5 text-sm">
          <Link href="/news" className="text-brand-light font-medium">
            News
          </Link>
          <Link href="/top-10" className="text-brand-muted hover:text-brand-light transition-colors">
            Top 10
          </Link>
          <Link href="/compare" className="text-brand-muted hover:text-brand-light transition-colors">
            Compare
          </Link>
          <Link href="/guides" className="text-brand-muted hover:text-brand-light transition-colors">
            Guides
          </Link>
          <Link href="/calculators" className="text-brand-muted hover:text-brand-light transition-colors">
            Calculators
          </Link>
          <Link href="/pricing" className="text-brand-muted hover:text-brand-light transition-colors">
            Pricing
          </Link>
          <Link
            href="/signup"
            className="bg-brand-blue hover:bg-brand-blue-dim text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  )
}
