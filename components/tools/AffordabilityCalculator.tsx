'use client'

import { useState, useMemo } from 'react'

const fmt$ = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

// Curated new-car MSRPs (approx) — payment at 6.9% / 60mo / 10% down
const MODELS: [string, number][] = [
  ['Hyundai Elantra', 22500], ['Volkswagen Jetta', 23500], ['Toyota Corolla', 23500],
  ['Kia K5', 28500], ['Nissan Altima', 28500], ['Hyundai Sonata', 28500],
  ['Honda Civic', 25500], ['Mazda 3', 25500], ['Toyota Camry', 29500],
  ['Honda Accord', 29500], ['Hyundai Tucson', 29500], ['Kia Sportage', 30000],
  ['Toyota RAV4', 31000], ['Subaru Forester', 31000], ['Mazda CX-5', 31000],
  ['Chevrolet Equinox', 31000], ['Subaru Outback', 31000], ['Mazda MX-5 Miata', 31000],
  ['Ford Bronco Sport', 31000], ['Honda CR-V', 31500], ['Ford Mustang', 34000],
  ['Toyota Tacoma', 34000], ['Kia Sorento', 34000], ['Ford F-150', 38500],
  ['Tesla Model 3', 42000], ['Ford Explorer', 42000], ['Toyota 4Runner', 44000],
  ['Tesla Model Y', 45000], ['Toyota Highlander', 47000], ['BMW 3 Series', 47000],
  ['Lexus RX', 52000], ['Audi Q5', 55000], ['Chevrolet Tahoe', 62000],
  ['Chevrolet Corvette', 72000], ['Mercedes S-Class', 124000], ['Porsche 911', 128000],
]

function pmtFor(price: number, apr: number, term: number, downPct: number): number {
  const fin = price * (1 - downPct), r = apr / 100 / 12
  return fin * r * Math.pow(1 + r, term) / (Math.pow(1 + r, term) - 1)
}

function Slider({ label, value, display, min, max, step, onChange }: {
  label: string; value: number; display: string
  min: number; max: number; step: number
  onChange: (v: number) => void
}) {
  return (
    <div className="mb-5">
      <label className="flex justify-between text-sm font-semibold mb-2">
        <span>{label}</span>
        <span className="text-brand-blue tabular-nums">{display}</span>
      </label>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(+e.target.value)} className="w-full accent-brand-blue" />
    </div>
  )
}

/**
 * Affordability calculator — 15% rule: total car costs ≤ 15% of take-home pay.
 * Backs out max affordable car price, shows range bar + model suggestions.
 */
export default function AffordabilityCalculator() {
  const [income, setIncome] = useState(6000)
  const [debts, setDebts] = useState(500)
  const [down, setDown] = useState(5000)
  const [term, setTerm] = useState(60)
  const [apr, setApr] = useState(6.9)

  const calc = useMemo(() => {
    const maxCarCost = income * 0.15
    const maxPayment = Math.max(0, maxCarCost - 300) // net of ~$150 ins + ~$150 fuel
    const r = apr / 100 / 12
    const factor = r * Math.pow(1 + r, term) / (Math.pow(1 + r, term) - 1)
    const maxPrice = factor > 0 ? maxPayment / factor + down : down
    const dti = income > 0 ? (debts / income) * 100 : 0
    const suggestions = MODELS
      .map(([name, msrp]) => ({ name, msrp, pmt: pmtFor(msrp, apr, term, 0.1) }))
      .filter(m => m.pmt <= maxPayment * 1.02)
      .sort((a, b) => b.msrp - a.msrp)
      .slice(0, 6)
    return { maxCarCost, maxPayment, maxPrice, dti, suggestions }
  }, [income, debts, down, term, apr])

  const markerPos = Math.min(98, Math.max(2, (calc.maxPrice / 160000) * 100))

  return (
    <div className="max-w-2xl mx-auto bg-brand-charcoal border border-brand-steel rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center font-display font-extrabold text-lg">C</div>
        <h2 className="font-display text-xl font-bold">What Car Can I Afford?</h2>
      </div>
      <p className="text-brand-muted text-sm mb-6">The 15% rule: your total car costs shouldn&apos;t exceed 15% of take-home pay.</p>

      <Slider label="Monthly take-home pay" value={income} display={fmt$(income)} min={2000} max={30000} step={100} onChange={setIncome} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Slider label="Monthly debts" value={debts} display={fmt$(debts)} min={0} max={5000} step={25} onChange={setDebts} />
        <Slider label="Down payment" value={down} display={fmt$(down)} min={0} max={50000} step={500} onChange={setDown} />
        <Slider label="Loan term" value={term} display={term + ' mo'} min={36} max={84} step={12} onChange={setTerm} />
        <Slider label="APR" value={apr} display={apr.toFixed(1) + '%'} min={3} max={18} step={0.1} onChange={setApr} />
      </div>

      <div className="mt-6 bg-brand-black border border-brand-steel rounded-xl p-5">
        <div className="text-xs uppercase tracking-wider text-brand-muted mb-1">You can afford cars up to</div>
        <div className="font-display text-5xl font-extrabold text-brand-green tabular-nums">{fmt$(calc.maxPrice)}</div>

        <div className="flex justify-between text-[11px] text-brand-muted mt-5 mb-1.5">
          <span>Comfortable</span><span>Stretch</span><span>Over budget</span>
        </div>
        <div className="h-6 rounded-full relative" style={{ background: 'linear-gradient(90deg,#00E676 0%,#00E676 55%,#FFB400 55%,#FFB400 80%,#FF3B3B 80%,#FF3B3B 100%)' }}>
          <div className="absolute w-1 h-10 bg-white rounded -top-2 shadow-lg" style={{ left: `${markerPos}%` }} />
        </div>

        <div className="mt-4 p-4 rounded-lg bg-brand-green/10 border border-brand-green/30 text-[15px] font-semibold">
          💡 With {fmt$(income)}/mo take-home, your safe car budget is <span className="text-brand-green">{fmt$(calc.maxPayment)}/mo</span> for the payment itself ({fmt$(calc.maxCarCost)}/mo all-in). That buys you a <span className="text-brand-green">{fmt$(calc.maxPrice)} car</span> with {fmt$(down)} down.
        </div>

        <div className="mt-3 text-[13px] text-brand-muted bg-brand-charcoal border border-brand-steel rounded-lg p-3">
          📐 <b>The 15% rule:</b> payment + insurance (~$150/mo) + fuel (~$150/mo) ≤ 15% of take-home. We back out the max car price from your safe monthly payment.
        </div>

        {calc.dti > 20 && (
          <div className="mt-3 p-3.5 rounded-lg bg-brand-red/10 border border-brand-red/30 text-sm">
            ⚠️ Your existing debts eat {calc.dti.toFixed(0)}% of take-home. Lenders get nervous above 36% total DTI — consider paying down debt before adding a car payment.
          </div>
        )}

        <div className="mt-5">
          <h3 className="font-display text-[15px] font-bold mb-2.5">🚗 Cars in your range</h3>
          {calc.suggestions.length ? (
            <div className="space-y-2">
              {calc.suggestions.map(m => (
                <a key={m.name} href={`https://carc.com/search/?q=${encodeURIComponent(m.name)}`}
                  className="flex justify-between items-center p-3 border border-brand-steel rounded-lg bg-brand-charcoal hover:border-brand-blue no-underline text-brand-light">
                  <div>
                    <div className="font-semibold text-sm">{m.name}</div>
                    <div className="text-xs text-brand-muted">~{fmt$(m.msrp)} MSRP</div>
                  </div>
                  <div className="font-bold text-brand-green tabular-nums text-sm text-right">{fmt$(m.pmt)}/mo</div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-brand-muted text-sm">Tight budget — consider a quality used car 3–5 years old. Depreciation is your friend here.</div>
          )}
        </div>
      </div>

      <p className="mt-4 text-xs text-brand-muted">Estimates only. Insurance and fuel vary by car and location. &quot;Affordable&quot; means the payment fits the 15% rule — not that you should max it out.</p>
    </div>
  )
}
