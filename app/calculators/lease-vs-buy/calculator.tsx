'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

export default function LeaseVsBuyCalc() {
  const [price, setPrice] = useState(40000)
  const [leaseMonthly, setLeaseMonthly] = useState(499)
  const [leaseDown, setLeaseDown] = useState(3000)
  const [leaseTerm, setLeaseTerm] = useState(36)
  const [loanRate, setLoanRate] = useState(6.5)
  const [loanDown, setLoanDown] = useState(8000)
  const [loanTerm, setLoanTerm] = useState(60)
  const [years, setYears] = useState(9)

  const result = useMemo(() => {
    // Lease: repeat leases to cover `years`
    const leaseCycles = Math.ceil((years * 12) / leaseTerm)
    const leaseTotal = leaseCycles * (leaseDown + leaseMonthly * leaseTerm)
    // Buy: one loan, then own outright
    const principal = Math.max(0, price - loanDown)
    const r = loanRate / 100 / 12
    const n = loanTerm
    const monthly = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const buyTotal = loanDown + monthly * Math.min(n, years * 12)
    // Rough residual value after `years` (50% at 3yr, 35% at 6yr, 25% at 9yr)
    const residualPct = years <= 3 ? 0.55 : years <= 6 ? 0.38 : 0.25
    const residual = price * residualPct
    return { leaseTotal, buyTotal, netBuy: buyTotal - residual, residual }
  }, [price, leaseMonthly, leaseDown, leaseTerm, loanRate, loanDown, loanTerm, years])

  const fmt = (v: number) => '$' + v.toLocaleString('en-US', { maximumFractionDigits: 0 })
  const winner = result.leaseTotal < result.netBuy ? 'Leasing' : 'Buying'

  return (
    <div className="min-h-screen bg-brand-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/calculators" className="text-brand-blue text-sm font-medium hover:underline">
          ← All calculators
        </Link>
        <h1 className="font-display text-4xl font-bold text-brand-light mt-6 mb-3">
          Lease vs. buy calculator
        </h1>
        <p className="text-brand-muted mb-10">
          Compare the true cost of leasing versus buying the same car over time.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass rounded-2xl border border-brand-steel p-6">
            <h2 className="font-display font-bold text-brand-light mb-4">Lease terms</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-brand-muted text-sm mb-1">Vehicle price ($)</label>
                <input type="number" value={price} onChange={e => setPrice(+e.target.value)}
                  className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-2 text-brand-light" />
              </div>
              <div>
                <label className="block text-brand-muted text-sm mb-1">Monthly lease payment ($)</label>
                <input type="number" value={leaseMonthly} onChange={e => setLeaseMonthly(+e.target.value)}
                  className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-2 text-brand-light" />
              </div>
              <div>
                <label className="block text-brand-muted text-sm mb-1">Due at signing ($)</label>
                <input type="number" value={leaseDown} onChange={e => setLeaseDown(+e.target.value)}
                  className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-2 text-brand-light" />
              </div>
              <div>
                <label className="block text-brand-muted text-sm mb-1">Lease term (months)</label>
                <select value={leaseTerm} onChange={e => setLeaseTerm(+e.target.value)}
                  className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-2 text-brand-light">
                  {[24, 36, 39, 48].map(t => <option key={t} value={t}>{t} months</option>)}
                </select>
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl border border-brand-steel p-6">
            <h2 className="font-display font-bold text-brand-light mb-4">Purchase terms</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-brand-muted text-sm mb-1">Down payment ($)</label>
                <input type="number" value={loanDown} onChange={e => setLoanDown(+e.target.value)}
                  className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-2 text-brand-light" />
              </div>
              <div>
                <label className="block text-brand-muted text-sm mb-1">Loan APR (%)</label>
                <input type="number" step="0.1" value={loanRate} onChange={e => setLoanRate(+e.target.value)}
                  className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-2 text-brand-light" />
              </div>
              <div>
                <label className="block text-brand-muted text-sm mb-1">Loan term (months)</label>
                <select value={loanTerm} onChange={e => setLoanTerm(+e.target.value)}
                  className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-2 text-brand-light">
                  {[36, 48, 60, 72].map(t => <option key={t} value={t}>{t} months</option>)}
                </select>
              </div>
              <div>
                <label className="block text-brand-muted text-sm mb-1">Compare over (years)</label>
                <select value={years} onChange={e => setYears(+e.target.value)}
                  className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-2 text-brand-light">
                  {[3, 6, 9].map(t => <option key={t} value={t}>{t} years</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass rounded-2xl border border-brand-steel p-6 text-center">
            <p className="text-brand-muted text-sm mb-1">Total lease cost ({years} yrs)</p>
            <p className="font-display text-2xl font-bold text-brand-light">{fmt(result.leaseTotal)}</p>
            <p className="text-brand-muted/70 text-xs mt-1">no equity at the end</p>
          </div>
          <div className="glass rounded-2xl border border-brand-steel p-6 text-center">
            <p className="text-brand-muted text-sm mb-1">Total buy cost ({years} yrs)</p>
            <p className="font-display text-2xl font-bold text-brand-light">{fmt(result.buyTotal)}</p>
            <p className="text-brand-muted/70 text-xs mt-1">before resale value</p>
          </div>
          <div className="glass rounded-2xl border border-brand-blue/30 p-6 text-center">
            <p className="text-brand-muted text-sm mb-1">Net buy cost (minus resale)</p>
            <p className="font-display text-2xl font-bold text-brand-green">{fmt(result.netBuy)}</p>
            <p className="text-brand-muted/70 text-xs mt-1">est. resale {fmt(result.residual)}</p>
          </div>
        </div>

        <p className="text-brand-light text-center mt-8 text-lg">
          Over {years} years, <span className="font-bold text-brand-blue">{winner}</span> costs less.
        </p>
      </div>
    </div>
  )
}
