'use client'
import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type HighlightCard = {
  name: string
  size: 30 | 36
  形态: '直吸' | '侧吸'
  CFM: number
  Pressure: number
  speed_control: number
  档位: '低配' | '中配' | '高配'
  img_url: string
}

// Map CFM → usage label for the Preview
function smokeUsageFromCFM(cfm: number): string {
  if (cfm >= 1200) return '重油烟/爆炒'
  if (cfm >= 1000) return '普通'
  return '很少'
}

const HIGHLIGHTS: HighlightCard[] = [
  { name: 'A679S', size: 36, 形态: '侧吸', CFM: 1300, Pressure: 1000, speed_control: 4, 档位: '高配', img_url: '/images/a679s.webp' },
  { name: 'Max3', size: 30, 形态: '直吸', CFM: 1200, Pressure: 1000, speed_control: 9, 档位: '高配', img_url: '/images/max3.webp' },
  { name: 'A672', size: 30, 形态: '侧吸', CFM: 1050, Pressure: 450, speed_control: 3, 档位: '低配', img_url: '/images/a672.webp' },
]


export default function Home() {
  const [activeIdx, setActiveIdx] = React.useState(0)
  const active = HIGHLIGHTS[activeIdx]
  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* 背景氛围 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[40rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,.06),transparent)]" />
        <div className="absolute top-1/3 right-[-10%] h-[26rem] w-[26rem] rotate-12 rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,.06),transparent_45%,transparent_55%,rgba(255,255,255,.06))] blur-2xl" />
        <div className="absolute bottom-0 left-[-10%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,.05),transparent)] blur-xl" />
      </div>

      {/* 顶部栏 */}
      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-sm font-semibold tracking-wide">智能选型</div>
          <nav className="hidden gap-6 text-sm md:flex">
            {/*<a href="#features" className="text-zinc-300 hover:text-white">功能亮点</a>
            <a href="#how" className="text-zinc-300 hover:text-white">测算流程</a>*/}
            {/*<a href="#brands" className="text-zinc-300 hover:text-white">合作品牌</a>*/}
          </nav>
          <Link href="/range-hood-finder" className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-medium text-black hover:bg-white">
            开始测算
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-12 md:grid-cols-2 md:pt-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/50 px-3 py-1 text-[11px] uppercase tracking-wider text-zinc-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            2 分钟 4 题完成
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">智能选型</span> 你的理想油烟机
          </h1>
          <p className="mt-4 max-w-xl text-zinc-300">
            根据机位尺寸（30/36 英寸）、安装形态（直吸/侧吸）、日常“炒菜烟量”、预算四项核心指标，给出适配方案。
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/range-hood-finder" className="rounded-xl bg-gradient-to-r from-slate-200 to-slate-400 px-5 py-2.5 text-sm font-semibold text-black shadow hover:from-white hover:to-white">
              立即开始 →
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-xs text-zinc-300">
            <MiniStat k="尺寸" v='30"/36"' t="机位优先匹配" />
            <MiniStat k="形态" v="直吸/侧吸" t="适配厨房布局" />
            <MiniStat k="预算" v="多档可选" t="性价比优先" />
          </div>
        </div>

        {/* 右侧预览卡片 */}
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[conic-gradient(from_220deg,rgba(255,255,255,.12),transparent_40%)] blur-2xl" />
          <div className="rounded-[2rem] border border-zinc-700/70 bg-zinc-950/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.06)]">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-zinc-200">示意预览</h3>
              <span className="text-[11px] text-zinc-400">实际以向导为准</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
              <Preview label="机位尺寸" value={`${active.size}″`} />
              <Preview label="安装形态" value={active.形态} />
              <Preview label="日常烟量" value={smokeUsageFromCFM(active.CFM)} />
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {HIGHLIGHTS.map((p, i) => (
                <div
                  key={p.name}
                  onMouseEnter={() => setActiveIdx(i)}
                  onFocus={() => setActiveIdx(i)}
                  tabIndex={0}
                  aria-selected={activeIdx === i}
                  className={
                    "rounded-xl border p-3 bg-zinc-900/50 transition " +
                    (activeIdx === i ? "border-slate-300" : "border-zinc-700/70 hover:border-zinc-500")
                  }
                >
                  <div className="relative aspect-[16/10] w-full rounded-lg border border-zinc-700">
                    <Image
                      src={p.img_url}
                      alt={p.name}
                      fill
                      sizes="(max-width:640px) 100vw, 33vw"
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-2 text-sm text-white">
                    {p.name} — {p.size}″ {p.形态}
                  </p>
                  <p className="text-xs text-zinc-400">
                    {p.CFM} CFM • {p.Pressure} Pa • {p.speed_control} 挡 • {p.档位}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex justify-end">
              <Link href="/range-hood-finder" className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-medium text-black hover:bg-white">开始测算 →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 功能亮点 */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">功能亮点</h2>
        <ul className="mt-4 list-disc pl-6 text-zinc-300 space-y-1">
          <li>只问 4 题，结果直观不复杂；</li>
          <li>优先保证机位尺寸与安装形态匹配；</li>
          <li>结合你的“炒菜烟量”与预算档位给出推荐。</li>
        </ul>
      </section>

      {/* 品牌区 
      <section id="brands" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">合作品牌</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 md:grid-cols-6">
          {['老板'].map(b=>(
            <div key={b} className="grid h-16 place-content-center rounded-xl border border-zinc-800 bg-zinc-900/40 text-sm text-zinc-300">
              {b}
            </div>
          ))}
        </div>
      </section>
      */}

      <footer className="border-t border-zinc-800/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-400 md:flex-row">
          <div>© {new Date().getFullYear()} ROBAM Decision</div>
          <div className="flex items-center gap-6">
            <a href="/range-hood-finder" className="hover:text-white">开始测算</a>
            {/*<a href="#features" className="hover:text-white">功能亮点</a>*/}
            {/*<a href="#brands" className="hover:text-white">合作品牌</a>*/}
          </div>
        </div>
      </footer>
    </main>
  )
}

function MiniStat({ k, v, t }: { k: string; v: string; t: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
      <div className="text-xs text-zinc-400">{k}</div>
      <div className="text-sm font-medium text-white">{v}</div>
      <div className="text-[11px] text-zinc-400">{t}</div>
    </div>
  )
}
function Preview({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3">
      <div className="text-[11px] uppercase tracking-wide text-zinc-400">{label}</div>
      <div className="text-sm text-white">{value}</div>
    </div>
  )
}
