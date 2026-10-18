'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

export default function InsuranceCalc() {
  const [vehicleType, setVehicleType] = useState('sedan')
  const [age, setAge] = useState('30-49')
  const [record, setRecord] = useState('clean')
  const [coverage, setCoverage] = useState('full')
  const [annual, setAnnual] = useState(false)

  const result = useMemo(() => {
    let base = 1800
    const vMult: Record<string, number> = {
      sedan: 1, suv: 1.1, truck: 1.15, sports: 1.8, luxury: 1.6, ev: 1.25, minivan: 0.95,
    }
    const aMult: Record<string, number> = {
      '16-19': 2.6, '20-24': 1.8, '25-29': 1.25, '30-49': 1, '50-69': 0.9, '70+': 1.1,
    }
    const rMult: Record<string, number> = {
      clean: 1, 'minor-1': 1.25, 'at-fault': 1.6, dui: 2.4,
    }
    const cMult: Record<string, number> = { full: 1, liability: 0.55 }
    const est = Math.round(base * (vMult[vehicleType] ?? 1) * (aMult[age] ?? 1) * (rMult[record] ?? 1) * (cMult[coverage] ?? 1))
    return { monthly: Math.round(est / 12), annual: est }
  }, [vehicleType, age, record, coverage])

  const fmt = (v: number) => '$' + v.toLocaleString('en-US')
  const sel = 'w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light'

  return (
    <div className="min-h-screen bg-brand-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/calculators" className="text-brand-blue text-sm font-medium hover:underline">
          ← All calculators
        </Link>
        <h1 className="font-display text-4xl font-bold text-brand-light mt-6 mb-3">
          Insurance cost estimator
        </h1>
        <p className="text-brand-muted mb-10">
          Rough estimate of annual car insurance based on national averages. Get real quotes before you buy —
          this shows which factors move your premium most.
        </p>

        <div className="glass rounded-2xl border border-brand-steel p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-brand-muted text-sm mb-2">Vehicle type</label>
              <select value={vehicleType} onChange={e => setVehicleType(e.target.value)} className={sel}>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV / Crossover</option>
                <option value="truck">Pickup truck</option>
                <option value="sports">Sports car</option>
                <option value="luxury">Luxury car</option>
                <option value="ev">Electric vehicle</option>
                <option value="minivan">Minivan</option>
              </select>
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">Driver age</label>
              <select value={age} onChange={e => setAge(e.target.value)} className={sel}>
                <option value="16-19">16–19</option>
                <option value="20-24">20–24</option>
                <option value="25-29">25–29</option>
                <option value="30-49">30–49</option>
                <option value="50-69">50–69</option>
                <option value="70+">70+</option>
              </select>
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">Driving record</label>
              <select value={record} onChange={e => setRecord(e.target.value)} className={sel}>
                <option value="clean">Clean record</option>
                <option value="minor-1">1 minor violation</option>
                <option value="at-fault">At-fault accident</option>
                <option value="dui">DUI</option>
              </select>
            </div>
            <div>
              <label className="block text-brand-muted text-sm mb-2">Coverage level</label>
              <select value={coverage} onChange={e => setCoverage(e.target.value)} className={sel}>
                <option value="full">Full coverage</option>
                <option value="liability">Liability only</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass rounded-2xl border border-brand-blue/30 p-6 text-center">
            <p className="text-brand-muted text-sm mb-1">Estimated annual premium</p>
            <p className="font-display text-3xl font-bold text-brand-light">{fmt(result.annual)}</p>
          </div>
          <div className="glass rounded-2xl border border-brand-steel p-6 text-center">
            <p className="text-brand-muted text-sm mb-1">Estimated monthly</p>
            <p className="font-display text-3xl font-bold text-brand-light">{fmt(result.monthly)}</p>
          </div>
        </div>

        <div className="mt-8 text-sm text-brand-muted space-y-2">
          <p><span className="text-brand-light font-medium">Biggest levers:</span> a clean record vs. a DUI can more than double your rate; sports cars cost ~80% more to insure than sedans.</p>
          <p><span className="text-brand-light font-medium">Ways to save:</span> raise your deductible, bundle home + auto, ask about telematics/usage-based discounts, and re-shop every year.</p>
          <p className="text-brand-muted/70">Estimates only — actual quotes vary by state, insurer, credit tier, and exact vehicle.</p>
        </div>

        <label className="flex items-center gap-2 mt-6 text-sm text-brand-muted">
          <input type="checkbox" checked={annual} onChange={e => setAnnual(e.target.checked)} />
          I understand this is an estimate, not a quote
        </label>
      </div>
    </div>
  )
}
