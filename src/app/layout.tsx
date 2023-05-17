import './globals.css'
import { Roboto_Flex as Roboto , Bai_Jamjuree as Baijamjuree , } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = Baijamjuree({ subsets: ['latin'], weight: "700", variable: '--font-baijamjuree' })

export const metadata = {
  title: 'NLW spacetime',
  description: 'uma cápsula do tempo construida com React, Next.js, TailwindCSS e typescript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
