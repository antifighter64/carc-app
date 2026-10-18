'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

export default function TotalCostCalc() {
  const [price, setPrice] = useState(35000)
  const [years, setYears] = useState(5)
  const [milesPerYear, setMilesPerYear] = useState(12000)
  const [mpg, setMpg] = useState(30)
  const [fuelPrice, setFuelPrice] = useState(3.5)
  const [insuranceYear, setInsuranceYear] = useState(1800)
  const [maintYear, setMaintYear] = useState(800)

  const result = useMemo(() => {
    const residualPct = [1, 0.8, 0.68, 0.58, 0.5, 0.43, 0.37, 0.32, 0.28, 0.25][Math.min(years, 10) - 1] ?? 0.25
    const depreciation = price * (1 - residualPct)
    const fuel = (milesPerYear / Math.max(1, mpg)) * fuelPrice * years
    const insurance = insuranceYear * years
    const maint = maintYear * years
    const total = depreciation + fuel + insurance + maint
    return { depreciation, fuel, insurance, maint, total, perYear: total / years, perMile: total / Math.max(1, milesPerYear * years) }
  }, [price, years, milesPerYear, mpg, fuelPrice, insuranceYear, maintYear])

  const fmt = (v: number) => '$' + v.toLocaleString('en-US', { maximumFractionDigits: 0 })
  const rows = [
    ['Depreciation', result.depreciation],
    ['Fuel', result.fuel],
    ['Insurance', result.insurance],
    ['Maintenance & repairs', result.maint],
  ]

  return (
    <div className="min-h-screen bg-brand-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/calculators" className="text-brand-blue text-sm font-medium hover:underline">
          ← All calculators
        </Link>
        <h1 className="font-display text-4xl font-bold text-brand-light mt-6 mb-3">
          Total cost of ownership
        </h1>
        <p className="text-brand-muted mb-10">
          The sticker price is just the beginning. See what a car really costs per year and per mile.
        </p>

        <div className="glass rounded-2xl border border-brand-steel p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-brand-muted text-sm mb-2">Purchase price ($)</label>
              <input type="number" value={price} onChange={e => setPrice(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light" />
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">Years of ownership</label>
              <select value={years} onChange={e => setYears(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(t => <option key={t} value={t}>{t} years</option>)}
              </select>
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">Miles driven per year</label>
              <input type="number" value={milesPerYear} onChange={e => setMilesPerYear(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light" />
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">Fuel economy (MPG)</label>
              <input type="number" value={mpg} onChange={e => setMpg(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light" />
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">Fuel price ($/gal)</label>
              <input type="number" step="0.1" value={fuelPrice} onChange={e => setFuelPrice(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light" />
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">Insurance ($/year)</label>
              <input type="number" value={insuranceYear} onChange={e => setInsuranceYear(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-brand-muted text-sm mb-2">Maintenance & repairs ($/year)</label>
              <input type="number" value={maintYear} onChange={e => setMaintYear(+e.target.value)}
                className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light" />
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl border border-brand-steel p-6 md:p-8 mb-6">
          <h2 className="font-display font-bold text-brand-light mb-4">Cost breakdown ({years} years)</h2>
          {rows.map(([label, v]) => (
            <div key={label as string} className="flex justify-between py-2 border-b border-brand-steel/50 text-sm">
              <span className="text-brand-muted">{label}</span>
              <span className="text-brand-light font-medium">{fmt(v as number)}</span>
            </div>
          ))}
          <div className="flex justify-between py-3 text-base font-bold">
            <span className="text-brand-light">Total</span>
            <span className="text-brand-blue">{fmt(result.total)}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass rounded-2xl border border-brand-blue/30 p-6 text-center">
            <p className="text-brand-muted text-sm mb-1">True cost per year</p>
            <p className="font-display text-3xl font-bold text-brand-light">{fmt(result.perYear)}</p>
          </div>
          <div className="glass rounded-2xl border border-brand-steel p-6 text-center">
            <p className="text-brand-muted text-sm mb-1">True cost per mile</p>
            <p className="font-display text-3xl font-bold text-brand-light">${result.perMile.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
