// src/app/api/lead/route.ts
import { NextResponse } from 'next/server'
import { GAS_ENDPOINT } from '../../../config'

export async function POST(req: Request) {
  try {
    const { name, phone, source } = await req.json()

    if (!name || !phone) {
      return NextResponse.json({ ok:false, error:'Missing name/phone' }, { status: 400 })
    }
    // Optional: keep the strict pretty format guard
    if (!/^\([2-9]\d{2}\) [2-9]\d{2}-\d{4}$/.test(phone)) {
      return NextResponse.json({ ok:false, error:'Invalid phone format' }, { status: 400 })
    }

    const ua = req.headers.get('user-agent') || ''

    const res = await fetch(GAS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, source: source || 'finder', ua }),
      // No secret, just pass-through
    })

    // Try to parse JSON; if GAS returns text, still handle gracefully
    let data: any = null
    const text = await res.text()
    try { data = JSON.parse(text) } catch { data = { ok: res.ok, raw: text } }

    if (!res.ok || data?.ok === false) {
      return NextResponse.json(
        { ok:false, error: data?.error || `GAS error ${res.status}`, raw: data?.raw ?? text },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok:true })
  } catch (err: any) {
    return NextResponse.json({ ok:false, error: String(err) }, { status: 500 })
  }
}
