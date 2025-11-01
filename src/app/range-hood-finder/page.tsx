'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

/* =========================
   Types
   ========================= */
type Size = 30 | 36
type Orientation = '直吸' | '侧吸'
type Smoke = '很少' | '普通' | '重油烟/爆炒'
type Tier = '低配' | '中配' | '高配'
const ALL_TIERS: Tier[] = ['低配', '中配', '高配']

type Answers = { size?: Size; style?: Orientation; smoke?: Smoke; budget?: Tier }
type KV = { key: string; value: string }

type Product = {
    name: string
    CFM: number
    Pressure: number
    speed_control: number
    size: Size
    color: string[]
    img_url: string
    形态: Orientation
    档位: Tier
    卖点?: string[]
    关键功能?: KV[]
}

/* =========================
   Helpers for images
   ========================= */
function resolveImg(url?: string) {
    if (!url) return ''
    if (url.startsWith('http') || url.startsWith('/')) return url
    // Map "src/assets/foo.webp" -> "/images/foo.webp" (put files under /public/images)
    return url.replace(/^src\/assets\//, '/images/')
}

function ProductImage({
    url,
    alt,
    sizes = '180px',
    className = 'h-32 w-32',
}: { url?: string; alt: string; sizes?: string; className?: string }) {
    const src = resolveImg(url)
    if (!src) {
        return (
            <div
                className={`${className} relative rounded-xl border border-zinc-700 bg-zinc-900/40 grid place-content-center text-[10px] text-zinc-300`}
            >
                无图
            </div>
        )
    }
    return (
        <div className={`${className} relative rounded-xl border border-zinc-700 bg-zinc-900/40`}>
            <Image src={src} alt={alt} fill sizes={sizes} className="object-contain" />
        </div>
    )
}

function KeyFeatures({ items }: { items?: { key: string; value: string }[] }) {
    if (!items || items.length === 0) return null
    return (
        <div className="mt-4">
            <h4 className="text-sm font-semibold text-zinc-200 mb-2">关键功能</h4>
            <div className="flex flex-wrap gap-2">
                {items.map((it, i) => (
                    <FeatureChip key={i} k={it.key} v={it.value} />
                ))}
            </div>
        </div>
    )
}

function FeatureChip({ k, v }: { k: string; v: string }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative group inline-block">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}     // mobile toggle
        onMouseLeave={() => setOpen(false)}    // desktop safety
        className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900/40 px-2.5 py-1 text-xs text-zinc-200 hover:border-zinc-500"
      >
        <span aria-hidden>✔</span>
        {k}
      </button>

      {/* Mobile-safe tooltip */}
      <TooltipCard open={open} onClose={() => setOpen(false)}>
        {v}
      </TooltipCard>
    </div>
  )
}



type RawProduct = Omit<Product, '档位'>;
/* ─────────── 你的产品数据（已补齐形态，并自动推断“档位”） ─────────── */
const RAW: RawProduct[] = [
    {
        name: 'Max3', CFM: 1200, Pressure: 1000, speed_control: 9, size: 30, color: ['Black', 'Gray', 'White'], img_url: 'src/assets/max3.webp', 形态: '侧吸', 关键功能: [
            {
                key: '体验巅峰吸排',
                value: '搭载先进 BLDC 无刷电机，提供 1200 CFM 强劲风量，轻松排走油烟与异味，保持厨房空气清新纯净。'
            },
            {
                key: '免拆免洗',
                value: '专利 A++ 过滤系统高效分离 98% 油污；腔体内壁防粘涂层抑制积垢，真正实现免拆洗，省心更洁净。'
            },
            {
                key: '易清洁',
                value: '纳米抗污涂层让表面抗油拒水，指纹与油渍一抹即净，让 30 英寸机型日常维护更轻松。'
            },
            {
                key: 'AI 手势控制',
                value: '挥手即可调节风量，悬停即可开关，无需触碰，精准操控 30 英寸可转换式油烟机。'
            },
            {
                key: '灶吸联动',
                value: '打造一体化厨房体验。与兼容灶具智能联动，开火即启、自动抽排。'
            }
        ]
    },
    {
        name: 'A6720', CFM: 850, Pressure: 450, speed_control: 3, size: 30, color: ['Black'], img_url: 'src/assets/a6720.webp', 形态: '侧吸', 关键功能: [
            {
                key: '强劲性能',
                value: '850 CFM 电机，稳定高效地抽走油烟与油脂。'
            },
            {
                key: '免拆免洗',
                value: '专利 A++ 过滤系统高效分离 98% 油污；腔体内壁防粘涂层抑制积垢，真正实现免拆洗，省心更洁净。'
            },
            {
                key: '大面积拢烟屏',
                value: '3.1 平方英尺最大覆盖，满足多炉头同时烹饪。'
            },
            {
                key: '雅致外观',
                value: '30 英寸黑色壁挂式设计，契合现代厨房。'
            },
            {
                key: '易维护',
                value: '磁吸式可机洗滤网，玻璃面板一擦即净。'
            },
            {
                key: '易上手',
                value: '灵敏触控，内置 LED 照明。'
            }
        ]
    },
    {
        name: 'A672', CFM: 1050, Pressure: 450, speed_control: 3, size: 30, color: ['Black'], img_url: 'src/assets/a672.webp', 形态: '侧吸', 关键功能: [
            {
                key: '强力吸排',
                value: '提供 1050 CFM 风量与 450 Pa 静压，稳定高效地排走油烟与异味。'
            },
            {
                key: '免拆免洗',
                value: '专利 A++ 过滤系统高效分离 98% 油污；腔体内壁防粘涂层抑制积垢，真正实现免拆洗，省心更洁净。'
            },
            {
                key: '挥手控制',
                value: '挥手即可开机，并一键切换至 Turbo 爆炒档。'
            },
            {
                key: '大面积拢烟屏',
                value: '3.1 平方英尺覆盖，满足多炉头同时烹饪。'
            }
        ]
    },
    {
        name: 'A678S', CFM: 1200, Pressure: 1000, speed_control: 3, size: 36, color: ['Black'], img_url: 'src/assets/a678s.webp', 形态: '侧吸', 关键功能: [
            {
                key: '免触控操作',
                value: '通过红外感应实现免触控操作，只需挥手即可开启/关闭风机，真正解放双手。'
            },
            {
                key: '强劲电机',
                value: '强劲电机配备 Turbo 爆炒模式，尽情煎炸/爆炒，强力控烟，减少油污对厨房的污染与损伤。'
            },
            {
                key: '你所需功能，一机到位',
                value: '配置可机洗金属网滤网、节能 LED 照明与灵敏触控屏；适配 6″ 管径排风。'
            }
        ]
    },
    {
        name: 'A679S', CFM: 1300, Pressure: 1000, speed_control: 4, size: 36, color: ['Black'], img_url: 'src/assets/a679s.webp', 形态: '侧吸', 关键功能: [
            {
                key: '体验巅峰吸排',
                value: '搭载 BLDC 无刷电机，提供 1300 CFM 风量与 1000 Pa 静压，强力高效排走油烟与异味。'
            },
            {
                key: '免拆免洗',
                value: '专利 A++ 过滤系统高效分离 98% 油污；腔体内壁防粘涂层抑制积垢，真正实现免拆洗，省心更洁净。'
            },
            {
                key: '挥手控制',
                value: '挥手即可开机，并可通过手势调节风量。'
            },
            {
                key: '大面积拢烟屏',
                value: '3.9 sq.ft 拢烟覆盖，满足多炉头同时烹饪。'
            }
        ]
    },
    {
        name: '52H1S', CFM: 1100, Pressure: 1000, speed_control: 3, size: 30, color: ['Black', 'White'], img_url: 'src/assets/52h1s.webp', 形态: '侧吸', 关键功能: [
            {
                key: '体验巅峰吸排',
                value: '搭载 BLDC 无刷电机，提供 1100 CFM 风量与 1000 Pa 静压，强力高效排走油烟与异味。'
            },
            {
                key: '免拆免洗',
                value: '专利 A++ 过滤系统高效分离 98% 油污；腔体内壁防粘涂层抑制积垢，真正实现免拆洗，省心更洁净。'
            },
            {
                key: '挥手控制',
                value: '挥手即可开启油烟机，并可通过手势调节风量。'
            },
            {
                key: '大面积拢烟屏',
                value: '3.1 sq.ft 最大拢烟覆盖，满足多炉头同时烹饪。'
            }
        ]
    },
    {
        name: 'A831', CFM: 1100, Pressure: 800, speed_control: 9, size: 30, color: ['Gray'], img_url: 'src/assets/a831.webp', 形态: '直吸', 关键功能: [
            {
                key: '体验巅峰吸排',
                value: '搭载 BLDC 无刷电机，提供 1100 CFM 风量与 800 Pa 静压，强力高效排走油烟与异味。'
            },
            {
                key: '净烟技术',
                value: '采用 ROBAM 专利活性炭过滤技术，油脂分离率达 98.1%。'
            },
            {
                key: '9 档调速',
                value: '滑动 + 触控一体化面板，轻松精准调节风量。'
            },
            {
                key: '纤薄机身',
                value: '适用于 under-cabinet 柜下与壁挂两种安装方式。'
            }
        ]
    },
    {
        name: 'A832', CFM: 1100, Pressure: 800, speed_control: 9, size: 36, color: ['Black'], img_url: 'src/assets/a832.webp', 形态: '直吸', 关键功能: [
            {
                key: '体验巅峰吸排',
                value: '搭载 BLDC 无刷电机，提供 1100 CFM 风量与 800 Pa 静压，强力高效排走油烟与异味。'
            },
            {
                key: '净烟技术',
                value: '采用 ROBAM 专利活性炭过滤技术，油脂分离率达 98.1%。'
            },
            {
                key: '9 档调速',
                value: '滑动 + 触控一体化面板，轻松精准调节风量。'
            },
            {
                key: '纤薄机身',
                value: '适用于 under-cabinet 柜下与壁挂两种安装方式。'
            }
        ]
    },
    {
        name: '86H1S', CFM: 1300, Pressure: 1000, speed_control: 3, size: 30, color: ['Black'], img_url: 'src/assets/86h1s.webp', 形态: '直吸', 关键功能: [
            {
                key: '体验巅峰吸排',
                value: '搭载 BLDC 无刷电机，提供 1300 CFM 风量与 1000 Pa 静压，强力高效排走油烟与异味。'
            },
            {
                key: '灶吸联动',
                value: '油烟机与灶具智能联动，开火即启、随炉火同步。'
            },
            {
                key: 'AI 挥手控制',
                value: '挥手可调节风量，悬停可开/关机，全程免触控。'
            },
            {
                key: '自动调速',
                value: '根据风道空气状况实时无缝调节吸力，匹配管道工况。'
            },
            {
                key: '净烟技术',
                value: '采用 ROBAM 专利活性炭过滤技术，油脂分离率达 98.1%。'
            },
            {
                key: '纤薄机身',
                value: '支持 under-cabinet 柜下与壁挂两种安装方式。'
            }
        ]
    },
    {
        name: 'A837', CFM: 1200, Pressure: 800, speed_control: 4, size: 36, color: ['Black'], img_url: 'src/assets/a837.webp', 形态: '直吸', 关键功能: [
            {
                key: '体验巅峰吸排',
                value: '搭载 BLDC 无刷电机，提供 1200 CFM 风量与 800 Pa 静压，强力排走油烟与异味。'
            },
            {
                key: '免拆免洗',
                value: '专利 A++ 过滤系统高效分离 98% 油污；腔体内壁防粘涂层抑制积垢，真正实现免拆洗，省心更洁净。'
            },
            {
                key: '深腔拢烟',
                value: '深腔广角集烟设计，有效汇聚油烟、降低外溢扩散。'
            },
            {
                key: '爆炒增强',
                value: '15 分钟爆炒增强档，一键应对重油烟，时间到自动退出。'
            },
            {
                key: '定时',
                value: '支持定时功能，烹饪结束可延时抽排并自动关机。'
            }
        ]
    },
]

// 档位：Pressure≥1000 或 speed_control≥9 => 高配；≥800 或 ≥4 => 中配；否则低配
const deriveTier = (p: { CFM: number; speed_control: number }): Tier => {
    if (p.CFM >= 1200 || p.speed_control >= 9) return '高配'
    if (p.CFM >= 1000 || p.speed_control >= 4) return '中配'
    return '低配'
}

const PRODUCTS: Product[] = RAW.map((r) => ({ ...r, 档位: deriveTier(r) }))

/* =========================
   Target CFM mapping (by size + smoke)
   ========================= */
const TARGET_CFM: Record<Smoke, number> = {
    '很少': 850,
    '普通': 1000,
    '重油烟/爆炒': 1200,
}

/* =========================
   Scoring (dynamic weights by smoke)
   ========================= */
type Weights = { wCFM: number; wPress: number; wTier: number; wSpeed: number }
const SMOKE_WEIGHTS: Record<Smoke, Weights> = {
    '很少': { wCFM: 0.4, wPress: 0.15, wTier: 0.25, wSpeed: 0.2 },
    '普通': { wCFM: 0.5, wPress: 0.2, wTier: 0.2, wSpeed: 0.1 },
    '重油烟/爆炒': { wCFM: 0.6, wPress: 0.3, wTier: 0.1, wSpeed: 0.0 }, // 取更严格的“爆炒”权重
}

const TIER_INDEX: Record<Tier, number> = { 低配: 0, 中配: 1, 高配: 2 }

function calcTargetCFM(smoke?: Smoke) {
    return smoke ? TARGET_CFM[smoke] : 0
}

function cfmSimilarity(productCFM: number, targetCFM: number) {
    if (!targetCFM) return 0
    // Linear falloff within ±40% band
    const ratio = Math.abs(productCFM - targetCFM) / (targetCFM * 0.4)
    return Math.max(0, 1 - ratio)
}

// Normalize Pressure: 450 -> 0, 800 -> ~0.64, 1000 -> 1
function pressScore(pa: number) {
    const s = (pa - 450) / (1000 - 450)
    return Math.max(0, Math.min(1, s))
}

function tierSimilarity(productTier: Tier, selected?: Tier) {
    if (!selected) return 0.6
    const d = Math.abs(TIER_INDEX[productTier] - TIER_INDEX[selected])
    return d === 0 ? 1 : d === 1 ? 0.6 : 0.2
}

// 3 -> 0.33, 4 -> 0.44, 9 -> 1
function speedScore(n: number) {
    return Math.max(0, Math.min(1, n / 9))
}

function totalScore(
    p: Product,
    targetCFM: number,
    selectedTier: Tier | undefined,
    smoke: Smoke | undefined
) {
    const w = smoke ? SMOKE_WEIGHTS[smoke] : { wCFM: 0.5, wPress: 0.2, wTier: 0.2, wSpeed: 0.1 }
    const sCFM = cfmSimilarity(p.CFM, targetCFM)
    const sPress = pressScore(p.Pressure)
    const sTier = tierSimilarity(p.档位, selectedTier)
    const sSpeed = speedScore(p.speed_control)
    return w.wCFM * sCFM + w.wPress * sPress + w.wTier * sTier + w.wSpeed * sSpeed
}

function chip(size: 'lg' | 'sm', variant: 'primary' | 'muted' = 'muted') {
    const base = size === 'lg'
        ? 'inline-block rounded-full px-3 py-1.5 text-xs'
        : 'inline-block rounded-full px-2 py-0.5 text-[10px]'
    const color = variant === 'primary'
        ? 'bg-slate-200 text-black'
        : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
    return `${base} ${color}`
}

function TitleWithTip({ title, tip }: { title: string; tip?: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative flex items-center gap-2">
      <h2 className="text-xl font-semibold">{title}</h2>

      {tip && (
        <div className="relative group">
          <button
            type="button"
            aria-label="帮助"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)} // mobile toggle
            onMouseLeave={() => setOpen(false)} // desktop hover out safety
            className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-600 text-[11px] text-zinc-300 hover:text-white"
          >
            ?
          </button>

          {/* Mobile-safe tooltip */}
          <TooltipCard open={open} onClose={() => setOpen(false)}>
            {tip}
          </TooltipCard>
        </div>
      )}
    </div>
  )
}


function TooltipCard({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose?: () => void
  children: React.ReactNode
}) {
  return (
    <>
      {/* Desktop: anchored popover */}
      <div
        className={
          'hidden sm:block pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-80 -translate-x-1/2 ' +
          'rounded-xl border border-zinc-700 bg-zinc-900/95 p-3 text-xs text-zinc-200 shadow-2xl ' +
          'opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100 ' +
          (open ? 'opacity-100 pointer-events-auto' : '')
        }
      >
        <div className="max-h-[60vh] overflow-auto">{children}</div>
      </div>

      {/* Mobile: bottom sheet, full safe width */}
      <div className={'sm:hidden ' + (open ? 'pointer-events-auto' : 'pointer-events-none')}>
        {/* backdrop */}
        <div
          className={'fixed inset-0 z-[60] transition ' + (open ? 'opacity-100 bg-black/40' : 'opacity-0')}
          onClick={onClose}
        />
        <div
          className={
            'fixed z-[61] inset-x-4 bottom-4 rounded-xl border border-zinc-700 bg-zinc-900/95 p-4 ' +
            'text-xs text-zinc-200 shadow-2xl max-w-[calc(100vw-2rem)] ' +
            (open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2')
          }
        >
          <div className="max-h-[50vh] overflow-auto">{children}</div>
        </div>
      </div>
    </>
  )
}




/* =========================
   UI State
   ========================= */
type View = 'wizard' | 'calculating' | 'result'

const USE_SUBSET_POOL = false
const SUBSET_NAMES = ['A672', 'A6720', 'Max3', 'Max 3', 'A831', 'A837'] as const
const norm = (s: string) => s.replace(/\s+/g, '').toLowerCase()
const ACTIVE_PRODUCTS: Product[] = USE_SUBSET_POOL
    ? PRODUCTS.filter(p => SUBSET_NAMES.map(norm).includes(norm(p.name)))
    : PRODUCTS


export default function Finder() {
    const [view, setView] = React.useState<View>('wizard')
    const [progress, setProgress] = React.useState(0)
    const [step, setStep] = React.useState(0)
    const [ans, setAns] = React.useState<Answers>({})

    const steps: {
        key: keyof Answers
        title: string
        tip?: React.ReactNode
        content: React.ReactNode
        done: boolean
    }[] = [
            {
                key: 'size',
                title: '1/4 机位尺寸',
                tip: (
                    <div>
                        <div className="font-medium mb-1">如何选择尺寸？</div>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>换新：看旧机身/量宽度，常见为 <b>30″</b> 或 <b>36″</b>。</li>
                            <li>新装：量吊柜或预留机位宽度；36″ 更适合 36″ 炉灶与更大捕烟面。</li>
                            <li>请按橱柜实际预留空间决定尺寸</li>
                            <li>尺寸决定可选型号（会做<b>严格筛选</b>）。</li>
                        </ul>
                    </div>
                ),
                done: !!ans.size,
                content: (
                    <div className="grid gap-6">
                        <StepImages labels={['30″ 示意', '36″ 示意']} srcs={["/images/30inches.png", "/images/36inches.png"]} />
                        <div className="flex flex-wrap gap-4">
                            {[30, 36].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setAns((a) => ({ ...a, size: s as Size }))}
                                    className={btnChoiceBig(ans.size === s)}
                                >
                                    {s}"
                                </button>
                            ))}
                        </div>
                    </div>
                ),
            },
            {
                key: 'style',
                title: '2/4 安装形态（直吸/侧吸）',
                tip: (
                    <div>
                        <div className="font-medium mb-1">如何选择形态？</div>
                        <ul className="list-disc pl-4 space-y-1">
                            <li><b>直吸</b>：外形平直，对上方烟囱罩垂直空间要求更明确；距离灶台的高度，一般在65-75cm间；建议预留空间大时选择直吸</li>
                            <li><b>侧吸</b>：机身前倾靠近锅沿，不易碰头、爆炒控烟好；底部距离灶台距离更近，一般在35-45cm间；建议预留空间相对小时选择侧吸</li>
                            <li>此选择同样用于<b>严格筛选</b>可用型号。</li>
                        </ul>
                    </div>
                ),
                done: !!ans.style,
                content: (
                    <div className="grid gap-6">
                        <StepImages labels={['直吸 示意', '侧吸 示意']} srcs={["/images/a831.webp", "/images/52h1s.webp"]} />
                        <div className="flex flex-wrap gap-4">
                            {(['直吸', '侧吸'] as Orientation[]).map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setAns((a) => ({ ...a, style: s }))}
                                    className={btnChoiceBig(ans.style === s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                ),
            },
            {
                key: 'smoke',
                title: '3/4 炒菜需求（油烟量）',
                done: !!ans.smoke,
                content: (
                    <div className="grid gap-4 sm:grid-cols-2">
                        {(['很少', '普通', '重油烟/爆炒'] as Smoke[]).map((s) => (
                            <button
                                key={s}
                                onClick={() => setAns((a) => ({ ...a, smoke: s }))}
                                className={btnChoiceBig(ans.smoke === s)}
                            >
                                <div className="text-base">{s}</div>
                                <div className="text-xs text-zinc-400">目标风量：{TARGET_CFM[s]} CFM</div>
                            </button>
                        ))}
                    </div>
                ),
            },
            {
                key: 'budget',
                title: '4/4 预算档位',
                done: !!ans.budget,
                content: (
                    <div className="flex flex-wrap gap-4">
                        {(['低配', '中配', '高配'] as Tier[]).map((b) => (
                            <button
                                key={b}
                                onClick={() => setAns((a) => ({ ...a, budget: b }))}
                                className={btnChoiceBig(ans.budget === b)}
                            >
                                {b}
                            </button>
                        ))}
                    </div>
                ),
            },
        ]

    const atLast = step === steps.length - 1
    const canNext = steps[step].done

    function handleCalculate() {
        setView('calculating')
        setProgress(0)
    }

    // progress animation
    React.useEffect(() => {
        if (view !== 'calculating') return
        let p = 0
        const start = Date.now()
        const dur = 1800
        const tmr = setInterval(() => {
            const t = Math.min(1, (Date.now() - start) / dur)
            p = Math.round(100 * (1 - Math.pow(1 - t, 3))) // easeOutCubic
            setProgress(p)
            if (t >= 1) {
                clearInterval(tmr)
                setTimeout(() => setView('result'), 250)
            }
        }, 30)
        return () => clearInterval(tmr)
    }, [view])

    // compute result
    const targetCFM = React.useMemo(() => calcTargetCFM(ans.smoke), [ans.smoke])
    const strictFiltered = React.useMemo(() => {
        if (!ans.size || !ans.style) return []
        return ACTIVE_PRODUCTS.filter(p => p.size === ans.size && p.形态 === ans.style)
    }, [ans.size, ans.style])
    type Ranked = { p: Product; score: number }
    const ranked: Ranked[] = React.useMemo(() => {
        const tcfm = targetCFM
        return strictFiltered
            .map(p => ({ p, score: totalScore(p, tcfm, ans.budget, ans.smoke) }))
            .sort((a, b) => b.score - a.score)
    }, [strictFiltered, targetCFM, ans.budget, ans.smoke])
    const best = ranked[0]?.p
    const bestScore = ranked[0]?.score ?? 0

    // Top item per tier (from already-ranked, strictly filtered list)
    const topByTier = React.useMemo(() => {
        const map: Partial<Record<Tier, { p: Product; score: number }>> = {}
        for (const t of ALL_TIERS) {
            const item = ranked.find((r) => r.p.档位 === t)
            if (item) map[t] = item
        }
        return map
    }, [ranked])

    // Decide primary tier: user's budget if set, otherwise overall top's tier
    const primaryTier: Tier | undefined =
        (ans.budget && ALL_TIERS.includes(ans.budget) ? ans.budget : ranked[0]?.p.档位) as Tier | undefined

    const primary = (primaryTier && topByTier[primaryTier]) || ranked[0]

    const otherTiers = ALL_TIERS.filter((t) => t !== primaryTier)
    const compare1 = otherTiers[0] ? topByTier[otherTiers[0]] : undefined
    const compare2 = otherTiers[1] ? topByTier[otherTiers[1]] : undefined

    const [tierTab, setTierTab] = React.useState<Tier | undefined>(undefined)
    React.useEffect(() => {
        const preferred = ans.budget && topByTier[ans.budget] ? ans.budget : undefined
        const fallback = ALL_TIERS.find(t => !!topByTier[t]) as Tier | undefined
        setTierTab(preferred ?? fallback)
    }, [ans.budget, topByTier])

    const tabOrder: Tier[] = React.useMemo(() => {
        const pref = ans.budget as Tier | undefined
        return pref ? [pref, ...ALL_TIERS.filter(t => t !== pref)] : ALL_TIERS
    }, [ans.budget])

    const active = tierTab ? topByTier[tierTab] : undefined

    function resetAll() {
        setAns({})
        setStep(0)
        setView('wizard')
    }

    function tabChip(size: 'lg' | 'sm', active: boolean, disabled?: boolean) {
        const base =
            (size === 'lg'
                ? 'px-4 py-2 text-sm rounded-full'
                : 'px-3 py-1.5 text-xs rounded-full') + ' border transition'
        const state = disabled
            ? ' opacity-40 cursor-not-allowed border-zinc-800 text-zinc-500'
            : active
                ? ' bg-slate-200 text-black border-slate-300'
                : ' border-zinc-700 text-zinc-300 hover:border-zinc-500'
        const extra = size === 'lg' ? ' shadow-sm' : ''
        return base + state + extra
    }


    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white">
                        <span className="text-lg">←</span> 返回首页
                    </Link>
                    <div className="text-xs text-zinc-500">油烟机智能选型</div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-8 py-10">
                {/* Wizard */}
                {view === 'wizard' && (
                    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 flex flex-col min-h-[22rem]">
                        <div className="border-b border-zinc-800 px-8 py-5 flex items-center justify-between">
                            <TitleWithTip title={steps[step].title} tip={steps[step].tip} />
                            <span className="text-sm text-zinc-400">
                                {step + 1}/{steps.length}
                            </span>
                        </div>
                        <div className="p-8 min-h-[60vh] grid">
                            <div className="place-self-center w-full max-w-3xl">
                                {steps[step].content}
                                <div className="mt-10 flex items-center justify-between">
                                    {step > 0 ? (
                                        <button
                                            onClick={() => setStep((s) => s - 1)}
                                            className={btn('ghost')}
                                        >
                                            ← 上一步
                                        </button>
                                    ) : (
                                        // Invisible placeholder occupies the same space
                                        <button
                                            aria-hidden="true"
                                            tabIndex={-1}
                                            className={btn('ghost') + ' invisible pointer-events-none'}
                                        >
                                            占位
                                        </button>
                                    )}

                                    {/* Right: Next / Calculate (always aligned right) */}
                                    {!atLast ? (
                                        <button
                                            onClick={() => canNext && setStep((s) => s + 1)}
                                            disabled={!canNext}
                                            className={btnLarge(canNext ? 'primary' : 'disabled')}
                                        >
                                            下一步 →
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleCalculate}
                                            disabled={!canNext}
                                            className={btnLarge(canNext ? 'accent' : 'disabled')}
                                        >
                                            计算推荐型号
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Calculating */}
                {view === 'calculating' && (
                    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-12 text-center min-h-[50vh] grid place-items-center">
                        <div>
                            <div className="mx-auto mb-8 h-24 w-24 animate-spin rounded-full border-2 border-zinc-700 border-t-white" />
                            <h3 className="text-xl font-semibold">正在计算最优型号…</h3>
                            <p className="mt-2 text-sm text-zinc-400">基于尺寸、形态、油烟量与预算档位</p>
                            <div className="mx-auto mt-6 h-3 w-full max-w-xl rounded-full bg-zinc-800">
                                <div
                                    className="h-3 rounded-full bg-gradient-to-r from-slate-200 to-slate-400 transition-all"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <div className="mt-2 text-sm text-zinc-300">{progress}%</div>
                        </div>
                    </div>
                )}

                {/* Result */}
                {view === 'result' && (
                    <section className="grid gap-8 lg:grid-cols-2">
                        {/* Left: Recommendation */}
                        <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-950/60">
                            <h3 className="text-xl font-semibold mb-3">为你推荐</h3>
                            <p className="text-sm text-zinc-300 mb-4">
                                目标风量：<b>{targetCFM || '—'} CFM</b>　相似度：<b>{best ? (bestScore * 100).toFixed(0) : '--'}%</b>
                            </p>

                            <div className="mb-4 flex flex-wrap items-center gap-2">
                                {tabOrder.map((t) => {
                                    const isPreferred = t === ans.budget
                                    const disabled = !topByTier[t]
                                    return (
                                        <button
                                            key={t}
                                            type="button"
                                            disabled={disabled}
                                            onClick={() => !disabled && setTierTab(t)}
                                            className={tabChip(isPreferred ? 'lg' : 'sm', tierTab === t, disabled)}
                                        >
                                            {t}{disabled ? '（无）' : ''}{isPreferred ? <span className="ml-1 opacity-70 text-[10px]">已选</span> : null}
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Active pane */}
                            {!active ? (
                                <p className="text-sm text-zinc-400">
                                    没有符合 <b>{ans.size}" + {ans.style}</b> 的型号。
                                </p>
                            ) : (
                                <>
                                    <div className="flex items-start gap-4">
                                        <ProductImage url={active.p.img_url} alt={active.p.name} className="h-28 w-28" sizes="180px" />
                                        <div className="flex-1 text-sm">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-block rounded-full bg-slate-200 text-black px-3 py-1 text-xs">
                                                    {active.p.档位} · {tierTab === ans.budget ? '首选' : '该档最佳'}
                                                </span>
                                                <span className="text-xs text-zinc-400">相似度 {(active.score * 100).toFixed(0)}%</span>
                                            </div>
                                            <p className="mt-1 text-white font-medium">
                                                {active.p.name} — {active.p.size}" {active.p.形态}
                                            </p>
                                            <p className="text-sm text-zinc-300">
                                                {active.p.CFM} CFM · {active.p.Pressure} Pa · {active.p.speed_control} 挡
                                            </p>
                                            {active.p.color?.length ? (
                                                <p className="text-xs text-zinc-500 mt-1">颜色：{active.p.color.join(' / ')}</p>
                                            ) : null}
                                        </div>
                                    </div>

                                    <KeyFeatures items={active.p.关键功能} />

                                    {/* 卖点（含规格） */}
                                    <div className="mt-4">
                                        <h4 className="text-sm font-semibold text-zinc-200 mb-2">产品卖点</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-300">
                                            <li>风量：<b>{active.p.CFM}</b> CFM</li>
                                            <li>静压：<b>{active.p.Pressure}</b> Pa</li>
                                            <li>速度档位：<b>{active.p.speed_control}</b> 挡</li>
                                            <li>档位：<b>{active.p.档位}</b></li>
                                            <li>颜色：<b>{active.p.color.join(' / ')}</b></li>
                                            {active.p.卖点?.map((m, i) => <li key={i}>{m}</li>)}
                                        </ul>
                                    </div>
                                </>
                            )}
                            <div className="mt-auto pt-6 flex justify-end gap-3">
                                <button onClick={resetAll} className={btn('ghost')}>
                                    ↺ 重新填写
                                </button>
                                <Link href="/" className={btn('primary')}>
                                    ← 返回首页
                                </Link>
                            </div>
                        </div>

                        {/* Right: Summary + Lead form */}
                        <div className="space-y-8">
                            <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-950/60">
                                <h3 className="text-lg font-semibold mb-4">你的答案摘要</h3>
                                <ul className="grid gap-2 text-sm text-zinc-300">
                                    <li>
                                        机位尺寸：<b>{ans.size ? `${ans.size}"` : '—'}</b>
                                    </li>
                                    <li>
                                        安装形态：<b>{ans.style ?? '—'}</b>
                                    </li>
                                    <li>
                                        炒菜需求：<b>{ans.smoke ?? '—'}</b>
                                    </li>
                                    <li>
                                        预算档位：<b>{ans.budget ?? '—'}</b>
                                    </li>
                                </ul>
                            </div>
                            <LeadForm />
                        </div>
                    </section>
                )}
            </main>
        </>
    )
}

/* =========================
   Components
   ========================= */
function StepImages({ labels, srcs }: { labels: [string, string] | string[]; srcs?: [string, string] }) {
    const [l1, l2] = labels as string[]
    const [s1, s2] = (srcs ?? ['', '']) as string[]
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProductImage url={s1} alt={l1} className="aspect-[16/10] w-full" sizes="(max-width:640px) 100vw, 50vw" />
            <ProductImage url={s2} alt={l2} className="aspect-[16/10] w-full" sizes="(max-width:640px) 100vw, 50vw" />
        </div>
    )
}

function LeadForm() {
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [err, setErr] = React.useState<string | null>(null)
    const [ok, setOk] = React.useState(false)
    const [showQR, setShowQR] = React.useState(false)

    // format digits → "(xxx) xxx-xxxx" progressively
    function formatPhone(raw: string) {
        const d = raw.replace(/\D/g, '').slice(0, 10)
        const a = d.slice(0, 3)
        const b = d.slice(3, 6)
        const c = d.slice(6, 10)
        if (d.length <= 3) return `(${a}`
        if (d.length <= 6) return `(${a}) ${b}`
        return `(${a}) ${b}-${c}`
    }

    // must be exactly "(555) 123-4567", with NANP rules (area/exchange start 2–9)
    function validatePretty(p: string) {
        const m = p.match(/^\(([2-9]\d{2})\) ([2-9]\d{2})-(\d{4})$/)
        return !!m
    }

    function onPhoneChange(v: string) {
        const f = formatPhone(v)
        setPhone(f)
        const digits = v.replace(/\D/g, '')
        if (digits.length < 10) setErr('请输入 10 位号码，格式 (555) 123-4567')
        else setErr(validatePretty(f) ? null : '区号/前缀需以 2–9 开头')
    }

    function valid() {
        return name.trim().length > 1 && validatePretty(phone)
    }

    const [loading, setLoading] = React.useState(false)
    const [pressing, setPressing] = React.useState(false)
    const [serverErr, setServerErr] = React.useState<string | null>(null)

    // helper: fetch with timeout
    async function fetchWithTimeout(input: RequestInfo | URL, init: RequestInit = {}, ms = 12000) {
        const ctrl = new AbortController()
        const id = setTimeout(() => ctrl.abort(), ms)
        try {
            const res = await fetch(input, { ...init, signal: ctrl.signal, cache: 'no-store' })
            return res
        } finally {
            clearTimeout(id)
        }
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        setServerErr(null)

        if (!valid()) {
            setErr('请按 (555) 123-4567 格式输入有效号码')
            return
        }

        try {
            setLoading(true)
            const res = await fetchWithTimeout('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, source: 'finder' }),
            })

            // Try to parse JSON either way
            let data: any = {}
            try { data = await res.json() } catch { data = {} }

            if (!res.ok || data?.ok !== true) {
                throw new Error(data?.error || `提交失败（${res.status}）`)
            }

            setOk(true)
        } catch (err: any) {
            setServerErr(err?.message || '网络异常，请稍后再试')
        } finally {
            setLoading(false)
        }
    }

    // If user opts out, show QR instead of the form
    if (showQR) {
        return (
            <div className="rounded-3xl border border-zinc-800 p-6 bg-zinc-950/60 text-center">
                <h3 className="text-lg font-semibold mb-3">扫码联系我们</h3>
                <div className="mx-auto relative h-48 w-48 rounded-xl overflow-hidden border border-zinc-700 bg-white">
                    <Image src="/images/libai.jpg" alt="Contact QR" fill className="object-contain" />
                </div>
                <p className="mt-3 text-xs text-zinc-500">使用微信扫描二维码</p>
                <button
                    type="button"
                    onClick={() => setShowQR(false)}
                    className="mt-4 text-xs text-zinc-500 hover:text-zinc-200 underline"
                >
                    ← 返回表单
                </button>
            </div>
        )
    }

    if (ok) {
        return (
            <div className="rounded-3xl border border-emerald-600/40 bg-emerald-900/10 p-6">
                <h3 className="text-lg font-semibold text-emerald-300">提交成功</h3>
                <p className="text-sm text-emerald-200 mt-1">
                    我们会尽快联系您。已保存：<b>{name}</b>（{phone}）
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={onSubmit} className="rounded-3xl border border-zinc-800 p-6 bg-zinc-950/60">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">留下联系方式</h3>
                <button
                    type="button"
                    onClick={() => setShowQR(true)}
                    className="text-xs text-zinc-500 hover:text-zinc-200 underline"
                >
                    I dont want to share my info
                </button>
            </div>

            <div className="mt-4 grid gap-4">
                <label className="grid gap-1 text-sm">
                    <span className="text-gray-200">
                        姓名 <span className="text-rose-400">*</span>
                    </span>
                    <input
                        className="input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="姓名"
                        required
                        autoComplete="name"
                    />
                </label>

                <label className="grid gap-1 text-sm">
                    <span className="text-gray-200">
                        手机号 <span className="text-rose-400">*</span>
                    </span>
                    <input
                        className={'input ' + (err ? 'border-rose-500' : '')}
                        value={phone}
                        onChange={(e) => onPhoneChange(e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        aria-invalid={!!err}
                        aria-describedby="phone-help"
                        pattern="^\([2-9]\d{2}\) [2-9]\d{2}-\d{4}$"
                        title="格式必须为 (555) 123-4567，且区号/前缀以 2–9 开头"
                    />
                    <div id="phone-help" className="min-h-[1.25rem] text-xs">
                        {err ? <span className="text-rose-400">{err}</span> : <span className="text-zinc-500">格式：(555) 123-4567</span>}
                    </div>
                </label>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={loading || !valid()}
                        onMouseDown={() => setPressing(true)}
                        onMouseUp={() => setPressing(false)}
                        onMouseLeave={() => setPressing(false)}
                        className={
                            btnLarge(valid() && !loading ? 'primary' : 'disabled') +
                            (pressing && !loading ? ' translate-y-[1px] scale-[0.98]' : '') +
                            (loading ? ' opacity-60 cursor-wait' : '')
                        }
                    >
                        {loading ? (
                            <span className="inline-flex items-center gap-2">
                                <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin spin" />
                                Submitting...
                            </span>
                        ) : (
                            '提交'
                        )}
                    </button>

                    {/* place this line under the button to show server errors */}
                    {serverErr ? <p className="mt-2 text-xs text-rose-400">{serverErr}</p> : null}
                </div>
            </div>
        </form>
    )
}

/* =========================
   Small UI helpers
   ========================= */
function btnChoiceBig(active?: boolean) {
    return (
        'rounded-2xl border px-6 py-3 text-base transition ' +
        (active
            ? 'border-slate-200 bg-slate-100 text-black'
            : 'border-zinc-700 bg-zinc-900/40 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900')
    )
}
function btn(kind: 'primary' | 'ghost' | 'disabled' | 'accent') {
    const base = 'rounded-xl px-4 py-2 text-sm font-medium transition '
    switch (kind) {
        case 'primary':
            return base + 'bg-slate-200 text-black hover:bg-white'
        case 'accent':
            return base + 'bg-gradient-to-r from-slate-200 to-slate-400 text-black hover:from-white hover:to-white'
        case 'ghost':
            return base + 'border border-zinc-700 bg-zinc-900/40 text-zinc-200 hover:border-zinc-500'
        case 'disabled':
            return base + 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
    }
}
function btnLarge(kind: 'primary' | 'disabled' | 'accent') {
    const base = 'rounded-2xl px-6 py-3 text-base font-medium transition '
    switch (kind) {
        case 'primary':
            return base + 'bg-slate-200 text-black hover:bg-white'
        case 'accent':
            return base + 'bg-gradient-to-r from-slate-200 to-slate-400 text-black hover:from-white hover:to-white'
        case 'disabled':
            return base + 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
    }
}

/* Tailwind-less minimal input style fallback (safe to keep) */
if (typeof document !== 'undefined') {
    const s = document.createElement('style')
    s.textContent =
        '.input{width:100%;border:1px solid #3f3f46;background:rgba(0,0,0,.4);color:#e4e4e7;border-radius:.75rem;padding:.75rem 1rem;outline:none}.input:focus{border-color:#a1a1aa}'
    document.head.appendChild(s)
}