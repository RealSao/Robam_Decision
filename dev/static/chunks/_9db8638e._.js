(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/range-hood-finder/page.tsx
// Single-file, drop-in Next.js 13+/15 (App Router) page.
// Tailwind CSS friendly. No external UI libs required.
// How to use: place this file at /app/range-hood-finder/page.tsx and visit /range-hood-finder
// Optional: tweak DATA below to your products.
__turbopack_context__.s([
    "default",
    ()=>RangeHoodFinderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// ---- SAMPLE DATA (replace with live catalog or CMS) ----
const DATA = [
    {
        id: 'broan-uc-30-250',
        brand: 'Broan-NuTone',
        model: 'BCS330SS',
        widthIn: 30,
        mount: 'under-cabinet',
        cfm: 250,
        soneLow: 1.5,
        soneHigh: 5.5,
        ducted: true,
        recirculatingCapable: true,
        ductSizeIn: 6,
        priceUSD: 189,
        features: [
            'LED lights',
            '3-speed',
            'Dishwasher-safe filters'
        ],
        image: 'https://images.unsplash.com/photo-1556910633-5099dc3971b3?auto=format&fit=crop&w=1200&q=60'
    },
    {
        id: 'cosmo-wall-30-380',
        brand: 'Cosmo',
        model: '63175S',
        widthIn: 30,
        mount: 'wall',
        cfm: 380,
        soneLow: 2.0,
        soneHigh: 6.5,
        ducted: true,
        recirculatingCapable: true,
        ductSizeIn: 6,
        priceUSD: 229,
        features: [
            'Glass canopy',
            'Auto-off timer'
        ]
    },
    {
        id: 'ge-uc-30-300',
        brand: 'GE',
        model: 'JVX5300',
        widthIn: 30,
        mount: 'under-cabinet',
        cfm: 310,
        soneLow: 1.0,
        soneHigh: 5.0,
        ducted: true,
        recirculatingCapable: true,
        ductSizeIn: 6,
        priceUSD: 279,
        features: [
            'EZ clean filters',
            '2 halogen lights'
        ]
    },
    {
        id: 'hauslane-wall-36-860',
        brand: 'Hauslane',
        model: 'UC-PS18',
        widthIn: 36,
        mount: 'wall',
        cfm: 860,
        soneLow: 1.8,
        soneHigh: 7.0,
        ducted: true,
        recirculatingCapable: true,
        ductSizeIn: 6,
        priceUSD: 599,
        features: [
            '6-speed',
            'Baffle filters',
            'Delay shutoff'
        ]
    },
    {
        id: 'zephyr-island-36-600',
        brand: 'Zephyr',
        model: 'AK2100',
        widthIn: 36,
        mount: 'island',
        cfm: 600,
        soneLow: 1.0,
        soneHigh: 6.0,
        ducted: true,
        recirculatingCapable: false,
        ductSizeIn: 8,
        priceUSD: 1099,
        features: [
            'ICON Touch',
            'Airflow Control Technology'
        ]
    },
    {
        id: 'kitchenaid-wall-36-600',
        brand: 'KitchenAid',
        model: 'KVWB606DSS',
        widthIn: 36,
        mount: 'wall',
        cfm: 600,
        soneLow: 2.0,
        soneHigh: 7.4,
        ducted: true,
        recirculatingCapable: true,
        ductSizeIn: 6,
        priceUSD: 1299,
        features: [
            'Auto speed adjust',
            'LED task lighting'
        ]
    },
    {
        id: 'best-insert-36-1200',
        brand: 'Best',
        model: 'P195P',
        widthIn: 36,
        mount: 'insert',
        cfm: 1200,
        soneLow: 2.5,
        soneHigh: 10.0,
        ducted: true,
        recirculatingCapable: false,
        ductSizeIn: 10,
        priceUSD: 1699,
        features: [
            'Pro-style baffles',
            'External blower capable'
        ]
    },
    {
        id: 'broan-otr-30-300',
        brand: 'Broan',
        model: 'BMH2305',
        widthIn: 30,
        mount: 'otr',
        cfm: 300,
        soneLow: 2.0,
        soneHigh: 7.0,
        ducted: true,
        recirculatingCapable: true,
        ductSizeIn: 4,
        priceUSD: 339,
        features: [
            'Microwave + hood combo'
        ]
    }
];
const DEFAULT_ANSWERS = {
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
    budgetMax: 2000
};
function widthRuleCFM(widthIn) {
    // Based on HVI guideline ~8.33 CFM per inch (30"->250, 36"->300, 48"->400)
    return Math.max(100, Math.round(widthIn * 8.33));
}
function gasRuleCFM(totalBTU) {
    if (!totalBTU || totalBTU <= 0) return 0;
    return Math.round(totalBTU / 100);
}
function styleFactor(style) {
    switch(style){
        case 'light':
            return 0.9;
        case 'typical':
            return 1.0;
        case 'heavy':
            return 1.25;
        case 'wok/searing':
            return 1.5;
    }
}
function ductPenaltyFactor(eqLengthFt) {
    if (eqLengthFt <= 30) return 1.0;
    if (eqLengthFt <= 50) return 1.15;
    if (eqLengthFt <= 80) return 1.25;
    return 1.35;
}
function islandFactor(isIsland) {
    return isIsland ? 1.2 : 1.0;
}
function calcEquivalentLength(straightFt = 0, elbows = 0) {
    const elbowEquivalent = 10; // conservative rule of thumb
    return straightFt + elbows * elbowEquivalent;
}
function recommendedCFM(ans) {
    const baseByWidth = widthRuleCFM(ans.widthIn);
    const byGas = ans.fuel === 'gas' ? gasRuleCFM(ans.totalBTU) : 0;
    const base = Math.max(baseByWidth, byGas, 150); // NKBA min 150 cfm (advisory)
    const eqLen = calcEquivalentLength(ans.straightRunFt, ans.elbows);
    const adjusted = Math.min(Math.round(base * styleFactor(ans.cookingStyle) * islandFactor(ans.isIsland) * ductPenaltyFactor(eqLen)), 1200);
    return adjusted;
}
function ductCapacityHint(ductSizeIn) {
    // Common guidance mapping
    if (ductSizeIn <= 4) return 'Best under ~300–400 CFM';
    if (ductSizeIn === 6) return 'Best up to ~600–900 CFM';
    if (ductSizeIn === 8) return 'Best up to ~900–1200 CFM';
    return 'Supports very high CFM';
}
function scoreProduct(p, targetCFM, ans) {
    let score = 0;
    // Mount match
    score += p.mount === ans.mount ? 20 : 0;
    // Width proximity
    score += 15 - Math.min(15, Math.abs(p.widthIn - ans.widthIn));
    // CFM closeness (prefer equal or slightly above)
    const cfmDelta = Math.abs(p.cfm - targetCFM);
    score += 40 * (1 - Math.min(1, cfmDelta / Math.max(200, targetCFM)));
    if (p.cfm < targetCFM * 0.9) score -= 10; // penalize too weak
    // Noise cap
    if (ans.noiseCapSone && p.soneHigh > ans.noiseCapSone) score -= 8;
    // Budget cap
    if (ans.budgetMax && p.priceUSD > ans.budgetMax) score -= 6;
    // Duct constraints
    if (ans.haveExistingDuct && ans.existingDuctSizeIn) {
        if (p.ductSizeIn > ans.existingDuctSizeIn) score -= 6; // may require upsizing
    }
    // Ductless preference
    if (ans.preferDuctless && !p.recirculatingCapable) score -= 10;
    return score;
}
function useLocalState(key, initial) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "590b4616b709509f48395dd3cb161fc8f1da98184f04d1695a576e3bfc3b0213") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "590b4616b709509f48395dd3cb161fc8f1da98184f04d1695a576e3bfc3b0213";
    }
    let t0;
    if ($[1] !== initial || $[2] !== key) {
        t0 = ({
            "useLocalState[useState()]": ()=>{
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                const raw = window.localStorage.getItem(key);
                return raw ? JSON.parse(raw) : initial;
            }
        })["useLocalState[useState()]"];
        $[1] = initial;
        $[2] = key;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[4] !== key || $[5] !== state) {
        t1 = ({
            "useLocalState[useEffect()]": ()=>{
                window.localStorage.setItem(key, JSON.stringify(state));
            }
        })["useLocalState[useEffect()]"];
        t2 = [
            key,
            state
        ];
        $[4] = key;
        $[5] = state;
        $[6] = t1;
        $[7] = t2;
    } else {
        t1 = $[6];
        t2 = $[7];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](t1, t2);
    let t3;
    if ($[8] !== state) {
        t3 = [
            state,
            setState
        ];
        $[8] = state;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_s(useLocalState, "JxtqLeQAOpJHyhwylfbSe2NhJoE=");
function RangeHoodFinderPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(161);
    if ($[0] !== "590b4616b709509f48395dd3cb161fc8f1da98184f04d1695a576e3bfc3b0213") {
        for(let $i = 0; $i < 161; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "590b4616b709509f48395dd3cb161fc8f1da98184f04d1695a576e3bfc3b0213";
    }
    const [ans, setAns] = useLocalState("rh-answers", DEFAULT_ANSWERS);
    const targetCFM = recommendedCFM(ans);
    let t0;
    if ($[1] !== ans.elbows || $[2] !== ans.straightRunFt) {
        t0 = calcEquivalentLength(ans.straightRunFt, ans.elbows);
        $[1] = ans.elbows;
        $[2] = ans.straightRunFt;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const eqLen = t0;
    let t1;
    if ($[4] !== ans || $[5] !== targetCFM) {
        let t2;
        if ($[7] !== ans.mount) {
            t2 = ({
                "RangeHoodFinderPage[DATA.filter()]": (p)=>{
                    if (ans.mount !== p.mount) {
                        return true;
                    }
                    return true;
                }
            })["RangeHoodFinderPage[DATA.filter()]"];
            $[7] = ans.mount;
            $[8] = t2;
        } else {
            t2 = $[8];
        }
        const products = DATA.filter(t2);
        t1 = products.map({
            "RangeHoodFinderPage[products.map()]": (p_0)=>({
                    p: p_0,
                    score: scoreProduct(p_0, targetCFM, ans)
                })
        }["RangeHoodFinderPage[products.map()]"]).sort(_RangeHoodFinderPageAnonymous).slice(0, 6);
        $[4] = ans;
        $[5] = targetCFM;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const ranked = t1;
    const muaFlag = targetCFM > 400;
    let t2;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-semibold",
                    children: "Range Hood Finder"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 358,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "Answer a few questions and we’ll size and rank hoods that fit your kitchen and cooking style."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 358,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 358,
            columnNumber: 10
        }, this);
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    const t3 = ans.widthIn;
    let t4;
    if ($[10] !== ans || $[11] !== setAns) {
        t4 = ({
            "RangeHoodFinderPage[<select>.onChange]": (e)=>setAns({
                    ...ans,
                    widthIn: Number(e.target.value)
                })
        })["RangeHoodFinderPage[<select>.onChange]"];
        $[10] = ans;
        $[11] = setAns;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            24,
            30,
            36,
            42,
            48
        ].map(_RangeHoodFinderPageAnonymous2);
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== ans.widthIn || $[15] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Cooktop Width (in)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "input",
                value: t3,
                onChange: t4,
                children: t5
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 387,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 387,
            columnNumber: 10
        }, this);
        $[14] = ans.widthIn;
        $[15] = t4;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    const t7 = ans.mount;
    let t8;
    if ($[17] !== ans || $[18] !== setAns) {
        t8 = ({
            "RangeHoodFinderPage[<select>.onChange]": (e_0)=>setAns({
                    ...ans,
                    mount: e_0.target.value
                })
        })["RangeHoodFinderPage[<select>.onChange]"];
        $[17] = ans;
        $[18] = setAns;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = [
            "under-cabinet",
            "wall",
            "island",
            "insert",
            "otr",
            "downdraft"
        ].map(_RangeHoodFinderPageAnonymous3);
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== ans.mount || $[22] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Mount Type",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "input",
                value: t7,
                onChange: t8,
                children: t9
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 418,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[21] = ans.mount;
        $[22] = t8;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    const t11 = ans.fuel;
    let t12;
    if ($[24] !== ans || $[25] !== setAns) {
        t12 = ({
            "RangeHoodFinderPage[<select>.onChange]": (e_1)=>setAns({
                    ...ans,
                    fuel: e_1.target.value
                })
        })["RangeHoodFinderPage[<select>.onChange]"];
        $[24] = ans;
        $[25] = setAns;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = [
            "gas",
            "electric",
            "induction"
        ].map(_RangeHoodFinderPageAnonymous4);
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== ans.fuel || $[29] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Fuel",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "input",
                value: t11,
                onChange: t12,
                children: t13
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 449,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[28] = ans.fuel;
        $[29] = t12;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== ans || $[32] !== setAns) {
        t15 = ans.fuel === "gas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Total Cooktop BTU (all burners)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "input",
                type: "number",
                min: 0,
                step: 1000,
                value: ans.totalBTU || 0,
                onChange: {
                    "RangeHoodFinderPage[<input>.onChange]": (e_2)=>setAns({
                            ...ans,
                            totalBTU: Number(e_2.target.value)
                        })
                }["RangeHoodFinderPage[<input>.onChange]"]
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 458,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 458,
            columnNumber: 33
        }, this);
        $[31] = ans;
        $[32] = setAns;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    const t16 = ans.isIsland ? "yes" : "no";
    let t17;
    if ($[34] !== ans || $[35] !== setAns) {
        t17 = ({
            "RangeHoodFinderPage[<select>.onChange]": (e_3)=>setAns({
                    ...ans,
                    isIsland: e_3.target.value === "yes"
                })
        })["RangeHoodFinderPage[<select>.onChange]"];
        $[34] = ans;
        $[35] = setAns;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    let t19;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "no",
            children: "No"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "yes",
            children: "Yes"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[37] = t18;
        $[38] = t19;
    } else {
        t18 = $[37];
        t19 = $[38];
    }
    let t20;
    if ($[39] !== t16 || $[40] !== t17) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Island Layout?",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "input",
                value: t16,
                onChange: t17,
                children: [
                    t18,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 498,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[39] = t16;
        $[40] = t17;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    const t21 = ans.cookingStyle;
    let t22;
    if ($[42] !== ans || $[43] !== setAns) {
        t22 = ({
            "RangeHoodFinderPage[<select>.onChange]": (e_4)=>setAns({
                    ...ans,
                    cookingStyle: e_4.target.value
                })
        })["RangeHoodFinderPage[<select>.onChange]"];
        $[42] = ans;
        $[43] = setAns;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    let t23;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = [
            "light",
            "typical",
            "heavy",
            "wok/searing"
        ].map(_RangeHoodFinderPageAnonymous5);
        $[45] = t23;
    } else {
        t23 = $[45];
    }
    let t24;
    if ($[46] !== ans.cookingStyle || $[47] !== t22) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Cooking Style",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "input",
                value: t21,
                onChange: t22,
                children: t23
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 529,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 529,
            columnNumber: 11
        }, this);
        $[46] = ans.cookingStyle;
        $[47] = t22;
        $[48] = t24;
    } else {
        t24 = $[48];
    }
    let t25;
    if ($[49] !== t10 || $[50] !== t14 || $[51] !== t15 || $[52] !== t20 || $[53] !== t24 || $[54] !== t6) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            title: "Cooktop & Layout",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    t6,
                    t10,
                    t14,
                    t15,
                    t20,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 538,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 538,
            columnNumber: 11
        }, this);
        $[49] = t10;
        $[50] = t14;
        $[51] = t15;
        $[52] = t20;
        $[53] = t24;
        $[54] = t6;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    const t26 = ans.preferDuctless ? "yes" : "no";
    let t27;
    if ($[56] !== ans || $[57] !== setAns) {
        t27 = ({
            "RangeHoodFinderPage[<select>.onChange]": (e_5)=>setAns({
                    ...ans,
                    preferDuctless: e_5.target.value === "yes"
                })
        })["RangeHoodFinderPage[<select>.onChange]"];
        $[56] = ans;
        $[57] = setAns;
        $[58] = t27;
    } else {
        t27 = $[58];
    }
    let t28;
    let t29;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "no",
            children: "No (duct to outside)"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, this);
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "yes",
            children: "Yes (recirculate)"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 568,
            columnNumber: 11
        }, this);
        $[59] = t28;
        $[60] = t29;
    } else {
        t28 = $[59];
        t29 = $[60];
    }
    let t30;
    if ($[61] !== t26 || $[62] !== t27) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Prefer Ductless? (recirculating)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "input",
                value: t26,
                onChange: t27,
                children: [
                    t28,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 577,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 577,
            columnNumber: 11
        }, this);
        $[61] = t26;
        $[62] = t27;
        $[63] = t30;
    } else {
        t30 = $[63];
    }
    const t31 = ans.haveExistingDuct ? "yes" : "no";
    let t32;
    if ($[64] !== ans || $[65] !== setAns) {
        t32 = ({
            "RangeHoodFinderPage[<select>.onChange]": (e_6)=>setAns({
                    ...ans,
                    haveExistingDuct: e_6.target.value === "yes"
                })
        })["RangeHoodFinderPage[<select>.onChange]"];
        $[64] = ans;
        $[65] = setAns;
        $[66] = t32;
    } else {
        t32 = $[66];
    }
    let t33;
    let t34;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "yes",
            children: "Yes"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 602,
            columnNumber: 11
        }, this);
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "no",
            children: "No / unsure"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 603,
            columnNumber: 11
        }, this);
        $[67] = t33;
        $[68] = t34;
    } else {
        t33 = $[67];
        t34 = $[68];
    }
    let t35;
    if ($[69] !== t31 || $[70] !== t32) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Existing Duct?",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "input",
                value: t31,
                onChange: t32,
                children: [
                    t33,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 612,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 612,
            columnNumber: 11
        }, this);
        $[69] = t31;
        $[70] = t32;
        $[71] = t35;
    } else {
        t35 = $[71];
    }
    let t36;
    if ($[72] !== ans || $[73] !== setAns) {
        t36 = ans.haveExistingDuct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                    label: "Existing Duct Size (in)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "input",
                        value: ans.existingDuctSizeIn,
                        onChange: {
                            "RangeHoodFinderPage[<select>.onChange]": (e_7)=>setAns({
                                    ...ans,
                                    existingDuctSizeIn: Number(e_7.target.value)
                                })
                        }["RangeHoodFinderPage[<select>.onChange]"],
                        children: [
                            4,
                            6,
                            8,
                            10
                        ].map(_RangeHoodFinderPageAnonymous6)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 621,
                        columnNumber: 76
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 621,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                    label: "Straight Run (ft)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "input",
                        type: "number",
                        min: 0,
                        value: ans.straightRunFt,
                        onChange: {
                            "RangeHoodFinderPage[<input>.onChange]": (e_8)=>setAns({
                                    ...ans,
                                    straightRunFt: Number(e_8.target.value)
                                })
                        }["RangeHoodFinderPage[<input>.onChange]"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 626,
                        columnNumber: 155
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 626,
                    columnNumber: 122
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                    label: "Elbows (90\xB0)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "input",
                        type: "number",
                        min: 0,
                        value: ans.elbows,
                        onChange: {
                            "RangeHoodFinderPage[<input>.onChange]": (e_9)=>setAns({
                                    ...ans,
                                    elbows: Number(e_9.target.value)
                                })
                        }["RangeHoodFinderPage[<input>.onChange]"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 631,
                        columnNumber: 96
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 631,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true);
        $[72] = ans;
        $[73] = setAns;
        $[74] = t36;
    } else {
        t36 = $[74];
    }
    let t37;
    if ($[75] !== ans || $[76] !== setAns) {
        t37 = ({
            "RangeHoodFinderPage[<input>.onChange]": (e_10)=>setAns({
                    ...ans,
                    noiseCapSone: Number(e_10.target.value)
                })
        })["RangeHoodFinderPage[<input>.onChange]"];
        $[75] = ans;
        $[76] = setAns;
        $[77] = t37;
    } else {
        t37 = $[77];
    }
    let t38;
    if ($[78] !== ans.noiseCapSone || $[79] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Max Noise (sones, high)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "input",
                type: "number",
                min: 2,
                step: 0.5,
                value: ans.noiseCapSone,
                onChange: t37
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 659,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 659,
            columnNumber: 11
        }, this);
        $[78] = ans.noiseCapSone;
        $[79] = t37;
        $[80] = t38;
    } else {
        t38 = $[80];
    }
    let t39;
    if ($[81] !== ans || $[82] !== setAns) {
        t39 = ({
            "RangeHoodFinderPage[<input>.onChange]": (e_11)=>setAns({
                    ...ans,
                    budgetMax: Number(e_11.target.value)
                })
        })["RangeHoodFinderPage[<input>.onChange]"];
        $[81] = ans;
        $[82] = setAns;
        $[83] = t39;
    } else {
        t39 = $[83];
    }
    let t40;
    if ($[84] !== ans.budgetMax || $[85] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Max Budget (USD)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "input",
                type: "number",
                min: 0,
                step: 50,
                value: ans.budgetMax,
                onChange: t39
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 682,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 682,
            columnNumber: 11
        }, this);
        $[84] = ans.budgetMax;
        $[85] = t39;
        $[86] = t40;
    } else {
        t40 = $[86];
    }
    let t41;
    if ($[87] !== t30 || $[88] !== t35 || $[89] !== t36 || $[90] !== t38 || $[91] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            title: "Ducting & Constraints",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    t30,
                    t35,
                    t36,
                    t38,
                    t40
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 691,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 691,
            columnNumber: 11
        }, this);
        $[87] = t30;
        $[88] = t35;
        $[89] = t36;
        $[90] = t38;
        $[91] = t40;
        $[92] = t41;
    } else {
        t41 = $[92];
    }
    let t42;
    if ($[93] !== t25 || $[94] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5",
            children: [
                t25,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 703,
            columnNumber: 11
        }, this);
        $[93] = t25;
        $[94] = t41;
        $[95] = t42;
    } else {
        t42 = $[95];
    }
    let t43;
    if ($[96] !== ans.widthIn) {
        t43 = widthRuleCFM(ans.widthIn);
        $[96] = ans.widthIn;
        $[97] = t43;
    } else {
        t43 = $[97];
    }
    let t44;
    if ($[98] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
            label: "Base by width",
            children: [
                t43,
                " CFM"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 720,
            columnNumber: 11
        }, this);
        $[98] = t43;
        $[99] = t44;
    } else {
        t44 = $[99];
    }
    let t45;
    if ($[100] !== ans.fuel || $[101] !== ans.totalBTU) {
        t45 = ans.fuel === "gas" ? gasRuleCFM(ans.totalBTU) : 0;
        $[100] = ans.fuel;
        $[101] = ans.totalBTU;
        $[102] = t45;
    } else {
        t45 = $[102];
    }
    let t46;
    if ($[103] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
            label: "Gas rule (BTU/100)",
            children: [
                t45,
                " CFM"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 737,
            columnNumber: 11
        }, this);
        $[103] = t45;
        $[104] = t46;
    } else {
        t46 = $[104];
    }
    let t47;
    if ($[105] !== ans.cookingStyle) {
        t47 = styleFactor(ans.cookingStyle).toFixed(2);
        $[105] = ans.cookingStyle;
        $[106] = t47;
    } else {
        t47 = $[106];
    }
    let t48;
    if ($[107] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
            label: "Style factor",
            children: [
                t47,
                "×"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 753,
            columnNumber: 11
        }, this);
        $[107] = t47;
        $[108] = t48;
    } else {
        t48 = $[108];
    }
    let t49;
    if ($[109] !== ans.isIsland) {
        t49 = islandFactor(ans.isIsland).toFixed(2);
        $[109] = ans.isIsland;
        $[110] = t49;
    } else {
        t49 = $[110];
    }
    let t50;
    if ($[111] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
            label: "Island factor",
            children: [
                t49,
                "×"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 769,
            columnNumber: 11
        }, this);
        $[111] = t49;
        $[112] = t50;
    } else {
        t50 = $[112];
    }
    let t51;
    if ($[113] !== ans.elbows || $[114] !== ans.straightRunFt || $[115] !== eqLen) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
            label: "Duct eq. length",
            children: [
                eqLen,
                " ft (≈ ",
                ans.straightRunFt,
                "’ + ",
                ans.elbows,
                " elbows)"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 777,
            columnNumber: 11
        }, this);
        $[113] = ans.elbows;
        $[114] = ans.straightRunFt;
        $[115] = eqLen;
        $[116] = t51;
    } else {
        t51 = $[116];
    }
    let t52;
    if ($[117] !== eqLen) {
        t52 = ductPenaltyFactor(eqLen).toFixed(2);
        $[117] = eqLen;
        $[118] = t52;
    } else {
        t52 = $[118];
    }
    let t53;
    if ($[119] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
            label: "Duct penalty",
            children: [
                t52,
                "×"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 795,
            columnNumber: 11
        }, this);
        $[119] = t52;
        $[120] = t53;
    } else {
        t53 = $[120];
    }
    let t54;
    if ($[121] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px bg-gray-200 my-2"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 803,
            columnNumber: 11
        }, this);
        $[121] = t54;
    } else {
        t54 = $[121];
    }
    let t55;
    if ($[122] !== targetCFM) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
            label: "Recommended target",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-semibold",
                children: [
                    targetCFM,
                    " CFM"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 810,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 810,
            columnNumber: 11
        }, this);
        $[122] = targetCFM;
        $[123] = t55;
    } else {
        t55 = $[123];
    }
    let t56;
    if ($[124] !== ans.existingDuctSizeIn || $[125] !== ans.haveExistingDuct) {
        t56 = ans.haveExistingDuct && ans.existingDuctSizeIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
            label: "Existing duct capacity",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                title: "Rule of thumb",
                children: [
                    ans.existingDuctSizeIn,
                    '" – ',
                    ductCapacityHint(ans.existingDuctSizeIn)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 818,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 818,
            columnNumber: 61
        }, this);
        $[124] = ans.existingDuctSizeIn;
        $[125] = ans.haveExistingDuct;
        $[126] = t56;
    } else {
        t56 = $[126];
    }
    let t57;
    if ($[127] !== t44 || $[128] !== t46 || $[129] !== t48 || $[130] !== t50 || $[131] !== t51 || $[132] !== t53 || $[133] !== t55 || $[134] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 text-sm",
            children: [
                t44,
                t46,
                t48,
                t50,
                t51,
                t53,
                t54,
                t55,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 827,
            columnNumber: 11
        }, this);
        $[127] = t44;
        $[128] = t46;
        $[129] = t48;
        $[130] = t50;
        $[131] = t51;
        $[132] = t53;
        $[133] = t55;
        $[134] = t56;
        $[135] = t57;
    } else {
        t57 = $[135];
    }
    let t58;
    if ($[136] !== muaFlag) {
        t58 = muaFlag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 rounded-xl border border-amber-300 bg-amber-50 p-3 text-amber-900 text-sm",
            children: [
                "Heads up: powerful hoods over ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "400 CFM"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 842,
                    columnNumber: 148
                }, this),
                " can trigger ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "make‑up air"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 842,
                    columnNumber: 175
                }, this),
                " requirements in many U.S. codes. Check your local jurisdiction."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 842,
            columnNumber: 22
        }, this);
        $[136] = muaFlag;
        $[137] = t58;
    } else {
        t58 = $[137];
    }
    let t59;
    if ($[138] !== t57 || $[139] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            title: "Your Sizing Summary",
            children: [
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 850,
            columnNumber: 11
        }, this);
        $[138] = t57;
        $[139] = t58;
        $[140] = t59;
    } else {
        t59 = $[140];
    }
    let t60;
    if ($[141] !== ans.existingDuctSizeIn || $[142] !== ans.haveExistingDuct || $[143] !== ranked || $[144] !== targetCFM) {
        let t61;
        if ($[146] !== ans.existingDuctSizeIn || $[147] !== ans.haveExistingDuct || $[148] !== targetCFM) {
            t61 = ({
                "RangeHoodFinderPage[ranked.map()]": (t62)=>{
                    const { p: p_1, score } = t62;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded-xl border p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                p_1.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: p_1.image,
                                    alt: p_1.model,
                                    className: "h-16 w-16 rounded-lg object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 867,
                                    columnNumber: 123
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium",
                                                    children: [
                                                        p_1.brand,
                                                        " ",
                                                        p_1.model,
                                                        " — ",
                                                        p_1.widthIn,
                                                        '" ',
                                                        title(p_1.mount)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 867,
                                                    columnNumber: 284
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        "Score ",
                                                        Math.round(score)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 867,
                                                    columnNumber: 376
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 867,
                                            columnNumber: 233
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-700",
                                            children: [
                                                p_1.cfm,
                                                " CFM • ",
                                                p_1.soneLow,
                                                "–",
                                                p_1.soneHigh,
                                                " sones • ",
                                                p_1.ductSizeIn,
                                                '" duct • ',
                                                p_1.recirculatingCapable ? "Ducted or ductless" : "Ducted only"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 867,
                                            columnNumber: 454
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-700",
                                            children: [
                                                "$",
                                                p_1.priceUSD.toLocaleString(),
                                                " • ",
                                                p_1.features.join(" \xB7 ")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 867,
                                            columnNumber: 638
                                        }, this),
                                        p_1.cfm < targetCFM && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-rose-700",
                                            children: "May be undersized for your target CFM."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 867,
                                            columnNumber: 767
                                        }, this),
                                        ans.haveExistingDuct && ans.existingDuctSizeIn && p_1.ductSizeIn > ans.existingDuctSizeIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-amber-700",
                                            children: [
                                                "Product duct size ",
                                                p_1.ductSizeIn,
                                                '" exceeds your existing ',
                                                ans.existingDuctSizeIn,
                                                '" duct — expect duct work.'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 867,
                                            columnNumber: 946
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 867,
                                    columnNumber: 209
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 867,
                            columnNumber: 69
                        }, this)
                    }, p_1.id, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 867,
                        columnNumber: 18
                    }, this);
                }
            })["RangeHoodFinderPage[ranked.map()]"];
            $[146] = ans.existingDuctSizeIn;
            $[147] = ans.haveExistingDuct;
            $[148] = targetCFM;
            $[149] = t61;
        } else {
            t61 = $[149];
        }
        t60 = ranked.map(t61);
        $[141] = ans.existingDuctSizeIn;
        $[142] = ans.haveExistingDuct;
        $[143] = ranked;
        $[144] = targetCFM;
        $[145] = t60;
    } else {
        t60 = $[145];
    }
    let t61;
    if ($[150] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            title: "Top Matches",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-4",
                children: t60
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 888,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 888,
            columnNumber: 11
        }, this);
        $[150] = t60;
        $[151] = t61;
    } else {
        t61 = $[151];
    }
    let t62;
    if ($[152] !== t59 || $[153] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5",
            children: [
                t59,
                t61
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 896,
            columnNumber: 11
        }, this);
        $[152] = t59;
        $[153] = t61;
        $[154] = t62;
    } else {
        t62 = $[154];
    }
    let t63;
    if ($[155] !== t42 || $[156] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grid grid-cols-1 gap-6 md:grid-cols-2",
            children: [
                t42,
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 905,
            columnNumber: 11
        }, this);
        $[155] = t42;
        $[156] = t62;
        $[157] = t63;
    } else {
        t63 = $[157];
    }
    let t64;
    if ($[158] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "text-xs text-gray-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Notes: This tool uses widely cited rules of thumb for residential kitchens. Always follow the hood manufacturer’s specs and local code."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 914,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 914,
            columnNumber: 11
        }, this);
        $[158] = t64;
    } else {
        t64 = $[158];
    }
    let t65;
    if ($[159] !== t63) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto max-w-5xl p-6 space-y-6",
            children: [
                t2,
                t63,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 921,
            columnNumber: 11
        }, this);
        $[159] = t63;
        $[160] = t65;
    } else {
        t65 = $[160];
    }
    return t65;
}
_s1(RangeHoodFinderPage, "s3xZ/SLJiLpHUOnvlUY1zrmoNjA=", false, function() {
    return [
        useLocalState
    ];
});
_c = RangeHoodFinderPage;
function _RangeHoodFinderPageAnonymous6(d) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: d,
        children: [
            d,
            '"'
        ]
    }, d, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 930,
        columnNumber: 10
    }, this);
}
function _RangeHoodFinderPageAnonymous5(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: s,
        children: title(s)
    }, s, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 933,
        columnNumber: 10
    }, this);
}
function _RangeHoodFinderPageAnonymous4(f) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: f,
        children: title(f)
    }, f, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 936,
        columnNumber: 10
    }, this);
}
function _RangeHoodFinderPageAnonymous3(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: m,
        children: title(m)
    }, m, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 939,
        columnNumber: 10
    }, this);
}
function _RangeHoodFinderPageAnonymous2(w) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: w,
        children: w
    }, w, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 942,
        columnNumber: 10
    }, this);
}
function _RangeHoodFinderPageAnonymous(a, b) {
    return b.score - a.score;
}
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "590b4616b709509f48395dd3cb161fc8f1da98184f04d1695a576e3bfc3b0213") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "590b4616b709509f48395dd3cb161fc8f1da98184f04d1695a576e3bfc3b0213";
    }
    const { title, children } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 961,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 961,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== children) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 969,
            columnNumber: 10
        }, this);
        $[3] = children;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border bg-white shadow-sm",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 977,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c1 = Card;
function Field(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "590b4616b709509f48395dd3cb161fc8f1da98184f04d1695a576e3bfc3b0213") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "590b4616b709509f48395dd3cb161fc8f1da98184f04d1695a576e3bfc3b0213";
    }
    const { label, children } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-700",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1000,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== children || $[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "grid gap-1 text-sm",
            children: [
                t1,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1008,
            columnNumber: 10
        }, this);
        $[3] = children;
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c2 = Field;
function Row(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "590b4616b709509f48395dd3cb161fc8f1da98184f04d1695a576e3bfc3b0213") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "590b4616b709509f48395dd3cb161fc8f1da98184f04d1695a576e3bfc3b0213";
    }
    const { label, children } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-600",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1031,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== children) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1039,
            columnNumber: 10
        }, this);
        $[3] = children;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1047,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c3 = Row;
function title(s) {
    return s.split('/').map((x)=>x.replace(/-/g, ' ')).map((w)=>w[0]?.toUpperCase() + w.slice(1)).join('/');
}
// Minimal styles if Tailwind is not installed (safe no-op when Tailwind exists)
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = `
  .input { @apply w-full rounded-lg border px-3 py-2; }
  `;
    document.head.appendChild(style);
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "RangeHoodFinderPage");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "Field");
__turbopack_context__.k.register(_c3, "Row");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_9db8638e._.js.map