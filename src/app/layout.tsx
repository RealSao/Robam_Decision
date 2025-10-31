export const metadata = {
  title: '油烟机智能选型 | ROBAM Decision',
  description: '2 分钟回答 4 个问题，智能推荐适配你的厨房的油烟机型号。',
}

import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100">
        {children}
      </body>
    </html>
  )
}
