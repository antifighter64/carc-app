'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

// Average retained-value curve (mainstream cars). Year index 0 = new.
const CURVE = [1, 0.8, 0.68, 0.58, 0.5, 0.43, 0.37, 0.32, 0.28, 0.25, 0.22]

export default function DepreciationCalc() {
  const [price, setPrice] = useState(35000)
  const [condition, setCondition] = useState('average')

  const mult = condition === 'excellent' ? 1.08 : condition === 'poor' ? 0.9 : 1

  const rows = useMemo(
    () =>
      CURVE.map((pct, i) => ({
        year: i,
        value: Math.round(price * pct * mult),
        lost: Math.round(price - price * pct * mult),
      })),
    [price, mult],
  )

  const fmt = (v: number) => '$' + v.toLocaleString('en-US')

  return (
    <div className="min-h-screen bg-brand-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/calculators" className="text-brand-blue text-sm font-medium hover:underline">
          ← All calculators
        </Link>
        <h1 className="font-display text-4xl font-bold text-brand-light mt-6 mb-3">
          Depreciation calculator
        </h1>
        <p className="text-brand-muted mb-10">
          See what your car will be worth each year — depreciation is the biggest cost of car ownership.
        </p>

        <div className="glass rounded-2xl border border-brand-steel p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-brand-muted text-sm mb-2">Current value / purchase price ($)</label>
              <input type="number" value={price} onChange={e => setPrice(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light" />
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">Condition</label>
              <select value={condition} onChange={e => setCondition(e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light">
                <option value="excellent">Excellent — garaged, low miles</option>
                <option value="average">Average — normal wear</option>
                <option value="poor">Below average — high miles/wear</option>
              </select>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl border border-brand-steel overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-brand-steel text-brand-muted">
                <th className="text-left p-4 font-normal">Year</th>
                <th className="text-right p-4 font-normal">Est. value</th>
                <th className="text-right p-4 font-normal">Total lost</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.year} className="border-b border-brand-steel/50 last:border-0">
                  <td className="p-4 text-brand-light">{r.year === 0 ? 'New' : `After ${r.year} yr`}</td>
                  <td className="p-4 text-right text-brand-light font-medium">{fmt(r.value)}</td>
                  <td className="p-4 text-right text-brand-muted">{fmt(r.lost)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-brand-muted/70 text-sm">
          Based on average mainstream depreciation curves. Luxury cars and EVs can depreciate faster;
          Toyotas, Hondas, and Porsches typically hold value better than average.
        </p>
      </div>
    </div>
  )
}
