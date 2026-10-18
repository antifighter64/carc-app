'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

export default function AutoLoanCalc() {
  const [price, setPrice] = useState(35000)
  const [down, setDown] = useState(7000)
  const [rate, setRate] = useState(6.5)
  const [term, setTerm] = useState(60)

  const result = useMemo(() => {
    const principal = Math.max(0, price - down)
    const r = rate / 100 / 12
    const n = term
    if (r === 0) {
      const m = principal / n
      return { monthly: m, totalInterest: 0, totalCost: principal }
    }
    const m = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalCost = m * n
    return { monthly: m, totalInterest: totalCost - principal, totalCost }
  }, [price, down, rate, term])

  const fmt = (v: number) =>
    v.toLocaleString('en-US', { maximumFractionDigits: 0 })

  return (
    <div className="min-h-screen bg-brand-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/calculators" className="text-brand-blue text-sm font-medium hover:underline">
          ← All calculators
        </Link>
        <h1 className="font-display text-4xl font-bold text-brand-light mt-6 mb-3">
          Auto loan calculator
        </h1>
        <p className="text-brand-muted mb-10">
          See your true monthly payment and how much interest you will pay over the life of the loan.
        </p>

        <div className="glass rounded-2xl border border-brand-steel p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-brand-muted text-sm mb-2">Vehicle price ($)</label>
              <input type="number" value={price} onChange={e => setPrice(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light" />
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">Down payment ($)</label>
              <input type="number" value={down} onChange={e => setDown(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light" />
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">APR (%)</label>
              <input type="number" step="0.1" value={rate} onChange={e => setRate(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light" />
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">Term (months)</label>
              <select value={term} onChange={e => setTerm(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light">
                {[36, 48, 60, 72, 84].map(t => (
                  <option key={t} value={t}>{t} months</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass rounded-2xl border border-brand-blue/30 p-6 text-center">
            <p className="text-brand-muted text-sm mb-1">Monthly payment</p>
            <p className="font-display text-3xl font-bold text-brand-light">${fmt(result.monthly)}</p>
          </div>
          <div className="glass rounded-2xl border border-brand-steel p-6 text-center">
            <p className="text-brand-muted text-sm mb-1">Total interest</p>
            <p className="font-display text-3xl font-bold text-brand-light">${fmt(result.totalInterest)}</p>
          </div>
          <div className="glass rounded-2xl border border-brand-steel p-6 text-center">
            <p className="text-brand-muted text-sm mb-1">Total of payments</p>
            <p className="font-display text-3xl font-bold text-brand-light">${fmt(result.totalCost + down)}</p>
          </div>
        </div>

        <p className="text-brand-muted/70 text-sm mt-8">
          Tip: a 60-month term at 6.5% on $28,000 financed costs about $3,500 less in interest
          than the same loan at 84 months — and you are never underwater as long.
        </p>
      </div>
    </div>
  )
}
