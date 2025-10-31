// app/range-hood-finder/page.tsx
// Single-file, drop-in Next.js 13+/15 (App Router) page.
// Tailwind CSS friendly. No external UI libs required.
// How to use: place this file at /app/range-hood-finder/page.tsx and visit /range-hood-finder
// Optional: tweak DATA below to your products.

'use client'
import * as React from 'react'
import { useMemo, useState } from 'react'

type Fuel = 'gas' | 'electric' | 'induction'
type Mount = 'under-cabinet' | 'wall' | 'island' | 'insert' | 'otr' | 'downdraft'

type Product = {
  id: string
  brand: string
  model: string
  widthIn: 24 | 30 | 36 | 42 | 48
  mount: Mount
  cfm: number
  soneLow: number
  soneHigh: number
  ducted: boolean
  recirculatingCapable: boolean
  ductSizeIn: 4 | 6 | 8 | 10
  priceUSD: number
  features: string[]
  image?: string
  link?: string
}

// ---- SAMPLE DATA (replace with live catalog or CMS) ----
const DATA: Product[] = [
  {
    id: 'broan-uc-30-250', brand: 'Broan-NuTone', model: 'BCS330SS', widthIn: 30,
    mount: 'under-cabinet', cfm: 250, soneLow: 1.5, soneHigh: 5.5,
    ducted: true, recirculatingCapable: true, ductSizeIn: 6,
    priceUSD: 189, features: ['LED lights', '3-speed', 'Dishwasher-safe filters'],
    image: 'https://images.unsplash.com/photo-1556910633-5099dc3971b3?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'cosmo-wall-30-380', brand: 'Cosmo', model: '63175S', widthIn: 30,
    mount: 'wall', cfm: 380, soneLow: 2.0, soneHigh: 6.5,
    ducted: true, recirculatingCapable: true, ductSizeIn: 6,
    priceUSD: 229, features: ['Glass canopy', 'Auto-off timer']
  },
  {
    id: 'ge-uc-30-300', brand: 'GE', model: 'JVX5300', widthIn: 30,
    mount: 'under-cabinet', cfm: 310, soneLow: 1.0, soneHigh: 5.0,
    ducted: true, recirculatingCapable: true, ductSizeIn: 6,
    priceUSD: 279, features: ['EZ clean filters', '2 halogen lights']
  },
  {
    id: 'hauslane-wall-36-860', brand: 'Hauslane', model: 'UC-PS18', widthIn: 36,
    mount: 'wall', cfm: 860, soneLow: 1.8, soneHigh: 7.0,
    ducted: true, recirculatingCapable: true, ductSizeIn: 6,
    priceUSD: 599, features: ['6-speed', 'Baffle filters', 'Delay shutoff']
  },
  {
    id: 'zephyr-island-36-600', brand: 'Zephyr', model: 'AK2100', widthIn: 36,
    mount: 'island', cfm: 600, soneLow: 1.0, soneHigh: 6.0,
    ducted: true, recirculatingCapable: false, ductSizeIn: 8,
    priceUSD: 1099, features: ['ICON Touch', 'Airflow Control Technology']
  },
  {
    id: 'kitchenaid-wall-36-600', brand: 'KitchenAid', model: 'KVWB606DSS', widthIn: 36,
    mount: 'wall', cfm: 600, soneLow: 2.0, soneHigh: 7.4,
    ducted: true, recirculatingCapable: true, ductSizeIn: 6,
    priceUSD: 1299, features: ['Auto speed adjust', 'LED task lighting']
  },
  {
    id: 'best-insert-36-1200', brand: 'Best', model: 'P195P', widthIn: 36,
    mount: 'insert', cfm: 1200, soneLow: 2.5, soneHigh: 10.0,
    ducted: true, recirculatingCapable: false, ductSizeIn: 10,
    priceUSD: 1699, features: ['Pro-style baffles', 'External blower capable']
  },
  {
    id: 'broan-otr-30-300', brand: 'Broan', model: 'BMH2305', widthIn: 30,
    mount: 'otr', cfm: 300, soneLow: 2.0, soneHigh: 7.0,
    ducted: true, recirculatingCapable: true, ductSizeIn: 4,
    priceUSD: 339, features: ['Microwave + hood combo']
  },
]

// ---- SIZING & SCORING LOGIC ----

type Answers = {
  widthIn: 24 | 30 | 36 | 42 | 48
  mount: Mount
  fuel: Fuel
  totalBTU?: number // gas only
  cookingStyle: 'light' | 'typical' | 'heavy' | 'wok/searing'
  isIsland: boolean
  preferDuctless: boolean
  haveExistingDuct?: boolean
  existingDuctSizeIn?: 4 | 6 | 8 | 10
  straightRunFt?: number
  elbows?: number
  noiseCapSone?: number
  budgetMax?: number
}

const DEFAULT_ANSWERS: Answers = {
  widthIn: 30,
  mount: 'under-cabinet',
  fuel: 'electric',
  totalBTU: 0,
  cookingStyle: 'typical',
  isIsland: false,
  preferDuctless: false,
  haveExistingDuct: true,
  existingDuctSizeIn: 6,
  straightRunFt: 10,
  elbows: 1,
  noiseCapSone: 7,
  budgetMax: 2000,
}

function widthRuleCFM(widthIn: number) {
  // Based on HVI guideline ~8.33 CFM per inch (30"->250, 36"->300, 48"->400)
  return Math.max(100, Math.round(widthIn * 8.33))
}

function gasRuleCFM(totalBTU?: number) {
  if (!totalBTU || totalBTU <= 0) return 0
  return Math.round(totalBTU / 100)
}

function styleFactor(style: Answers['cookingStyle']) {
  switch (style) {
    case 'light': return 0.9
    case 'typical': return 1.0
    case 'heavy': return 1.25
    case 'wok/searing': return 1.5
  }
}

function ductPenaltyFactor(eqLengthFt: number) {
  if (eqLengthFt <= 30) return 1.0
  if (eqLengthFt <= 50) return 1.15
  if (eqLengthFt <= 80) return 1.25
  return 1.35
}

function islandFactor(isIsland: boolean) {
  return isIsland ? 1.2 : 1.0
}

function calcEquivalentLength(straightFt = 0, elbows = 0) {
  const elbowEquivalent = 10 // conservative rule of thumb
  return straightFt + elbows * elbowEquivalent
}

function recommendedCFM(ans: Answers) {
  const baseByWidth = widthRuleCFM(ans.widthIn)
  const byGas = ans.fuel === 'gas' ? gasRuleCFM(ans.totalBTU) : 0
  const base = Math.max(baseByWidth, byGas, 150) // NKBA min 150 cfm (advisory)
  const eqLen = calcEquivalentLength(ans.straightRunFt, ans.elbows)
  const adjusted = Math.min(
    Math.round(base * styleFactor(ans.cookingStyle) * islandFactor(ans.isIsland) * ductPenaltyFactor(eqLen)),
    1200
  )
  return adjusted
}

function ductCapacityHint(ductSizeIn: number) {
  // Common guidance mapping
  if (ductSizeIn <= 4) return 'Best under ~300–400 CFM'
  if (ductSizeIn === 6) return 'Best up to ~600–900 CFM'
  if (ductSizeIn === 8) return 'Best up to ~900–1200 CFM'
  return 'Supports very high CFM'
}

function scoreProduct(p: Product, targetCFM: number, ans: Answers) {
  let score = 0
  // Mount match
  score += p.mount === ans.mount ? 20 : 0
  // Width proximity
  score += 15 - Math.min(15, Math.abs(p.widthIn - ans.widthIn))
  // CFM closeness (prefer equal or slightly above)
  const cfmDelta = Math.abs(p.cfm - targetCFM)
  score += 40 * (1 - Math.min(1, cfmDelta / Math.max(200, targetCFM)))
  if (p.cfm < targetCFM * 0.9) score -= 10 // penalize too weak
  // Noise cap
  if (ans.noiseCapSone && p.soneHigh > ans.noiseCapSone) score -= 8
  // Budget cap
  if (ans.budgetMax && p.priceUSD > ans.budgetMax) score -= 6
  // Duct constraints
  if (ans.haveExistingDuct && ans.existingDuctSizeIn) {
    if (p.ductSizeIn > (ans.existingDuctSizeIn as number)) score -= 6 // may require upsizing
  }
  // Ductless preference
  if (ans.preferDuctless && !p.recirculatingCapable) score -= 10
  return score
}

function useLocalState<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(() => {
    if (typeof window === 'undefined') return initial
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : initial
  })
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  return [state, setState] as const
}

export default function RangeHoodFinderPage() {
  const [ans, setAns] = useLocalState<Answers>('rh-answers', DEFAULT_ANSWERS)

  const targetCFM = useMemo(() => recommendedCFM(ans), [ans])
  const eqLen = useMemo(() => calcEquivalentLength(ans.straightRunFt, ans.elbows), [ans])

  const ranked = useMemo(() => {
    const products = DATA.filter(p => {
      if (ans.mount !== p.mount) return true // keep options open but lower score later
      return true
    })
    return products
      .map(p => ({ p, score: scoreProduct(p, targetCFM, ans) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
  }, [ans, targetCFM])

  const muaFlag = targetCFM > 400 // prompt user about potential Make-Up Air requirements

  return (
    <main className="mx-auto max-w-5xl p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Range Hood Finder</h1>
        <p className="text-sm text-gray-600">Answer a few questions and we’ll size and rank hoods that fit your kitchen and cooking style.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* LEFT: Questionnaire */}
        <div className="space-y-5">
          <Card title="Cooktop & Layout">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Cooktop Width (in)">
                <select className="input" value={ans.widthIn} onChange={e => setAns({ ...ans, widthIn: Number(e.target.value) as any })}>
                  {[24, 30, 36, 42, 48].map(w => <option key={w} value={w}>{w}</option>)}
                </select>
              </Field>
              <Field label="Mount Type">
                <select className="input" value={ans.mount} onChange={e => setAns({ ...ans, mount: e.target.value as Mount })}>
                  {['under-cabinet','wall','island','insert','otr','downdraft'].map(m => <option key={m} value={m}>{title(m)}</option>)}
                </select>
              </Field>
              <Field label="Fuel">
                <select className="input" value={ans.fuel} onChange={e => setAns({ ...ans, fuel: e.target.value as Fuel })}>
                  {['gas','electric','induction'].map(f => <option key={f} value={f}>{title(f)}</option>)}
                </select>
              </Field>
              {ans.fuel==='gas' && (
                <Field label="Total Cooktop BTU (all burners)">
                  <input className="input" type="number" min={0} step={1000} value={ans.totalBTU || 0} onChange={e => setAns({ ...ans, totalBTU: Number(e.target.value) })} />
                </Field>
              )}
              <Field label="Island Layout?">
                <select className="input" value={ans.isIsland? 'yes':'no'} onChange={e => setAns({ ...ans, isIsland: e.target.value==='yes' })}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </Field>
              <Field label="Cooking Style">
                <select className="input" value={ans.cookingStyle} onChange={e => setAns({ ...ans, cookingStyle: e.target.value as any })}>
                  {['light','typical','heavy','wok/searing'].map(s => <option key={s} value={s}>{title(s)}</option>)}
                </select>
              </Field>
            </div>
          </Card>

          <Card title="Ducting & Constraints">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Prefer Ductless? (recirculating)">
                <select className="input" value={ans.preferDuctless? 'yes':'no'} onChange={e => setAns({ ...ans, preferDuctless: e.target.value==='yes' })}>
                  <option value="no">No (duct to outside)</option>
                  <option value="yes">Yes (recirculate)</option>
                </select>
              </Field>
              <Field label="Existing Duct?">
                <select className="input" value={ans.haveExistingDuct? 'yes':'no'} onChange={e => setAns({ ...ans, haveExistingDuct: e.target.value==='yes' })}>
                  <option value="yes">Yes</option>
                  <option value="no">No / unsure</option>
                </select>
              </Field>
              {ans.haveExistingDuct && (
                <>
                  <Field label="Existing Duct Size (in)">
                    <select className="input" value={ans.existingDuctSizeIn} onChange={e => setAns({ ...ans, existingDuctSizeIn: Number(e.target.value) as any })}>
                      {[4,6,8,10].map(d => <option key={d} value={d}>{d}"</option>)}
                    </select>
                  </Field>
                  <Field label="Straight Run (ft)">
                    <input className="input" type="number" min={0} value={ans.straightRunFt} onChange={e => setAns({ ...ans, straightRunFt: Number(e.target.value) })} />
                  </Field>
                  <Field label="Elbows (90°)">
                    <input className="input" type="number" min={0} value={ans.elbows} onChange={e => setAns({ ...ans, elbows: Number(e.target.value) })} />
                  </Field>
                </>
              )}
              <Field label="Max Noise (sones, high)">
                <input className="input" type="number" min={2} step={0.5} value={ans.noiseCapSone} onChange={e => setAns({ ...ans, noiseCapSone: Number(e.target.value) })} />
              </Field>
              <Field label="Max Budget (USD)">
                <input className="input" type="number" min={0} step={50} value={ans.budgetMax} onChange={e => setAns({ ...ans, budgetMax: Number(e.target.value) })} />
              </Field>
            </div>
          </Card>
        </div>

        {/* RIGHT: Summary & Picks */}
        <div className="space-y-5">
          <Card title="Your Sizing Summary">
            <div className="space-y-2 text-sm">
              <Row label="Base by width">{widthRuleCFM(ans.widthIn)} CFM</Row>
              <Row label="Gas rule (BTU/100)">{ans.fuel==='gas' ? gasRuleCFM(ans.totalBTU) : 0} CFM</Row>
              <Row label="Style factor">{styleFactor(ans.cookingStyle).toFixed(2)}×</Row>
              <Row label="Island factor">{islandFactor(ans.isIsland).toFixed(2)}×</Row>
              <Row label="Duct eq. length">{eqLen} ft (≈ {ans.straightRunFt}’ + {ans.elbows} elbows)</Row>
              <Row label="Duct penalty">{ductPenaltyFactor(eqLen).toFixed(2)}×</Row>
              <div className="h-px bg-gray-200 my-2" />
              <Row label="Recommended target"><span className="font-semibold">{targetCFM} CFM</span></Row>
              {ans.haveExistingDuct && ans.existingDuctSizeIn && (
                <Row label="Existing duct capacity"><span title="Rule of thumb">{ans.existingDuctSizeIn}" – {ductCapacityHint(ans.existingDuctSizeIn)}</span></Row>
              )}
            </div>
            {muaFlag && (
              <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-3 text-amber-900 text-sm">
                Heads up: powerful hoods over <b>400 CFM</b> can trigger <b>make‑up air</b> requirements in many U.S. codes. Check your local jurisdiction.
              </div>
            )}
          </Card>

          <Card title="Top Matches">
            <ul className="space-y-4">
              {ranked.map(({ p, score }) => (
                <li key={p.id} className="rounded-xl border p-3">
                  <div className="flex items-start gap-3">
                    {p.image && (<img src={p.image} alt={p.model} className="h-16 w-16 rounded-lg object-cover" />)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{p.brand} {p.model} — {p.widthIn}" {title(p.mount)}</h3>
                        <span className="text-sm text-gray-600">Score {Math.round(score)}</span>
                      </div>
                      <p className="text-sm text-gray-700">{p.cfm} CFM • {p.soneLow}–{p.soneHigh} sones • {p.ductSizeIn}" duct • {p.recirculatingCapable ? 'Ducted or ductless' : 'Ducted only'}</p>
                      <p className="text-sm text-gray-700">${p.priceUSD.toLocaleString()} • {p.features.join(' · ')}</p>
                      {p.cfm < targetCFM && (
                        <p className="mt-1 text-xs text-rose-700">May be undersized for your target CFM.</p>
                      )}
                      {ans.haveExistingDuct && ans.existingDuctSizeIn && p.ductSizeIn > ans.existingDuctSizeIn && (
                        <p className="mt-1 text-xs text-amber-700">Product duct size {p.ductSizeIn}" exceeds your existing {ans.existingDuctSizeIn}" duct — expect duct work.</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <footer className="text-xs text-gray-500">
        <p>Notes: This tool uses widely cited rules of thumb for residential kitchens. Always follow the hood manufacturer’s specs and local code.</p>
      </footer>
    </main>
  )
}

function Card({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      <div className="border-b px-4 py-3">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

function Field({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-gray-700">{label}</span>
      {children}
    </label>
  )
}

function Row({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-600">{label}</span>
      <span>{children}</span>
    </div>
  )
}

function title(s: string) { return s.split('/').map(x => x.replace(/-/g,' ')).map(w => w[0]?.toUpperCase() + w.slice(1)).join('/') }

// Minimal styles if Tailwind is not installed (safe no-op when Tailwind exists)
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.innerHTML = `
  .input { @apply w-full rounded-lg border px-3 py-2; }
  `
  document.head.appendChild(style)
}
