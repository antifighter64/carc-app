'use client'

import { useState, useMemo } from 'react'

const fmt$ = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

const COLORS: Record<string, string> = {
  dep: '#1E6BFF', fuel: '#FFB400', ins: '#7B2FF7', maint: '#00E676', finance: '#FF3B3B',
}
const LABELS: Record<string, string> = {
  dep: 'Depreciation', fuel: 'Fuel', ins: 'Insurance', maint: 'Maintenance', finance: 'Financing',
}

// Depreciation curve — ported from lib/private-party.ts (Phase 1 engine)
function baseDepreciation(age: number): number {
  if (age <= 0) return 0
  if (age === 1) return 0.20
  if (age === 2) return 0.30
  if (age === 3) return 0.40
  if (age === 4) return 0.48
  if (age === 5) return 0.55
  let dep = 0.55, rem = 0.45
  for (let y = 6; y <= age; y++) { const l = rem * 0.07; dep += l; rem -= l }
  return Math.min(dep, 0.92)
}
const CLASS_ADJ: Record<string, number> = {
  sports: 0.05, luxury: 0.05, ev: 0.06, truck: -0.05, suv: -0.03, sedan: 0,
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
 * Total Cost of Ownership calculator — 5-year true cost with stacked yearly chart.
 * Punchy insight: "This $25,000 car actually costs $41,000 over 5 years."
 * Depreciation logic mirrors lib/private-party.ts.
 */
export default function TcoCalculator() {
  const [price, setPrice] = useState(25000)
  const [vclass, setVclass] = useState('sedan')
  const [mpg, setMpg] = useState(28)
  const [miles, setMiles] = useState(12000)
  const [gas, setGas] = useState(3.5)
  const [ins, setIns] = useState(1800)
  const [maint, setMaint] = useState(800)

  const calc = useMemo(() => {
    const adj = CLASS_ADJ[vclass] ?? 0
    const isEV = vclass === 'ev'
    const years: { dep: number; fuel: number; ins: number; maint: number }[] = []
    let totalDep = 0, totalFuel = 0, totalIns = 0, totalMaint = 0
    for (let y = 1; y <= 5; y++) {
      const depStart = baseDepreciation(y - 1) + adj
      const depEnd = baseDepreciation(y) + adj
      const depLoss = Math.max(0, (Math.min(depEnd, 0.92) - Math.max(depStart, 0)) * price)
      const fuel = isEV ? (miles / mpg) * gas * 0.35 : (miles / mpg) * gas
      const m = maint * (1 + (y - 1) * 0.15)
      totalDep += depLoss; totalFuel += fuel; totalIns += ins; totalMaint += m
      years.push({ dep: depLoss, fuel, ins, maint: m })
    }
    const financed = price * 0.9, r = 0.069 / 12, n = 60
    const mo = financed * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
    const totalFinance = Math.max(0, mo * n - financed)
    const grand = totalDep + totalFuel + totalIns + totalMaint + totalFinance
    const cats: [string, number][] = [
      ['dep', totalDep], ['fuel', totalFuel], ['ins', totalIns],
      ['maint', totalMaint], ['finance', totalFinance],
    ]
    return { years, cats, grand, totalDep, extra: grand - price }
  }, [price, vclass, mpg, miles, gas, ins, maint])

  const maxY = Math.max(...calc.years.map(y => y.dep + y.fuel + y.ins + y.maint))

  return (
    <div className="max-w-2xl mx-auto bg-brand-charcoal border border-brand-steel rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center font-display font-extrabold text-lg">C</div>
        <h2 className="font-display text-xl font-bold">True Cost of Ownership</h2>
      </div>
      <p className="text-brand-muted text-sm mb-6">The sticker price is a lie. Here&apos;s what the car <em>actually</em> costs over 5 years.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Slider label="Car price" value={price} display={fmt$(price)} min={5000} max={150000} step={500} onChange={setPrice} />
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">Vehicle type</label>
          <select value={vclass} onChange={e => setVclass(e.target.value)}
            className="w-full bg-brand-black text-brand-light border border-brand-steel rounded-lg p-2.5 text-sm">
            <option value="sedan">Sedan / Hatchback</option>
            <option value="suv">SUV / Crossover</option>
            <option value="truck">Pickup Truck</option>
            <option value="luxury">Luxury</option>
            <option value="sports">Sports / Performance</option>
            <option value="ev">Electric (EV)</option>
          </select>
        </div>
        <Slider label="Fuel economy" value={mpg} display={vclass === 'ev' ? `${mpg} MPGe` : `${mpg} MPG`} min={10} max={140} step={1} onChange={setMpg} />
        <Slider label="Miles driven / year" value={miles} display={miles.toLocaleString()} min={3000} max={30000} step={500} onChange={setMiles} />
        <Slider label="Gas price" value={gas} display={'$' + gas.toFixed(2)} min={2} max={7} step={0.05} onChange={setGas} />
        <Slider label="Insurance / year" value={ins} display={fmt$(ins)} min={600} max={6000} step={50} onChange={setIns} />
      </div>
      <Slider label="Maintenance & repairs / year" value={maint} display={fmt$(maint)} min={200} max={4000} step={50} onChange={setMaint} />

      <div className="mt-6 bg-brand-black border border-brand-steel rounded-xl p-5">
        <div className="text-xs uppercase tracking-wider text-brand-muted mb-1">5-year true cost</div>
        <div className="font-display text-5xl font-extrabold text-brand-amber tabular-nums">{fmt$(calc.grand)}</div>

        <div className="mt-4 p-4 rounded-lg bg-brand-amber/10 border border-brand-amber/30 text-[15px] font-semibold">
          💡 This <span className="text-brand-amber">{fmt$(price)} car actually costs {fmt$(calc.grand)}</span> over 5 years — that&apos;s <span className="text-brand-amber">{fmt$(calc.extra)} more</span> than the sticker price. Depreciation alone eats {fmt$(calc.totalDep)}.
        </div>

        <div className="flex flex-wrap gap-3 my-4 text-xs text-brand-muted">
          {calc.cats.map(([k, v]) => (
            <span key={k}><span className="inline-block w-2.5 h-2.5 rounded-sm mr-1.5" style={{ background: COLORS[k] }} />{LABELS[k]} {fmt$(v)}</span>
          ))}
        </div>

        <div className="flex gap-2.5">
          {calc.years.map((y, i) => {
            const tot = y.dep + y.fuel + y.ins + y.maint
            const h = Math.max(6, (tot / maxY) * 100)
            return (
              <div key={i} className="flex-1">
                <div className="flex h-28 items-end">
                  <div className="w-full flex flex-col justify-end rounded-t-md overflow-hidden" style={{ height: `${h}%` }}>
                    {(['dep', 'fuel', 'ins', 'maint'] as const).map(k => (
                      <div key={k} style={{ height: `${(y[k] / tot * 100).toFixed(1)}%`, background: COLORS[k] }}
                        title={`${LABELS[k]}: ${fmt$(y[k])}`} />
                    ))}
                  </div>
                </div>
                <div className="text-[11px] text-brand-muted text-center mt-1.5">Yr {i + 1}<br />{fmt$(tot)}</div>
              </div>
            )
          })}
        </div>

        <table className="w-full mt-4 text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-brand-muted">
              <th className="py-2 border-b border-brand-steel">Cost</th>
              <th className="py-2 border-b border-brand-steel text-right">5-year total</th>
            </tr>
          </thead>
          <tbody>
            {calc.cats.map(([k, v]) => (
              <tr key={k} className="border-b border-brand-steel/50">
                <td className="py-2"><span className="inline-block w-2.5 h-2.5 rounded-sm mr-2" style={{ background: COLORS[k] }} />{LABELS[k]}</td>
                <td className="py-2 text-right tabular-nums">{fmt$(v)}</td>
              </tr>
            ))}
            <tr className="font-extrabold text-[15px]">
              <td className="py-2">5-year true cost</td>
              <td className="py-2 text-right tabular-nums">{fmt$(calc.grand)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-brand-muted">Depreciation uses CARC&apos;s valuation curve (20% year 1, ~55% by year 5, adjusted by vehicle type). Fuel = miles ÷ MPG × gas price. Estimates only.</p>
    </div>
  )
}
