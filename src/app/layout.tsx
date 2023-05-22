import './globals.css'
import { ReactNode } from 'react'

import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { Hero } from '@/components/hero'
import { Profile } from '@/components/profile'
import { SignIn } from '@/components/sign-in'
import { Copyright } from '@/components/copyright'
import { cookies } from 'next/headers'


const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW spacetime',
  description: 'uma cápsula do tempo construida com React, Next.js, TailwindCSS e typescript.',
}

export default function RootLayout({children}: { children: ReactNode }) {
  const isAuthenticated = cookies().has("token")

  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}>
        

        <main className="grid grid-cols-2 min-h-screen font-sans">

        {/*left*/}

        <div className="flex flex-col items-start justify-between px-28
        py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

          {/*blur*/}

          <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-yellow-700
          opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full"/>

          {/*stripes*/}

          <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"/> 

          {/*sign-in*/}

          {isAuthenticated ? <Profile/> :<SignIn/>}

          {/*hero*/}

          <Hero />

          {/*copyright*/}
          < Copyright />

        </div>

        {/*right*/}

        <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
          {children}
        </div>
      </main>
      </body>
    </html>
  )
}
