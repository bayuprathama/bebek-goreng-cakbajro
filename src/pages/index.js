import Head from 'next/head'
import Layouts from '@/components/Layouts'
import { Lobster_Two, Inter } from '@next/font/google'

import MenuSection from '@/components/MenuSection'
import OrderInfoSection from '@/components/OrderInfoSection'
import BruceLeeQuote from '@/components/BruceLeeQuote'

export const lobsterTwo = Lobster_Two({
  weight: ['700'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--lobsterTwo',
})

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Nasi Bebek Goreng Sambal Hitam Madura</title>
        <meta
          name="description"
          content="tempat kuliner lalapan bebek goreng bumbu hitam madura cak Bajro, Batubulan Bali"
        />
        <meta
          name="keywords"
          content="kuliner, lalapan, bebek goreng, bumbu hitam, batubulan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layouts>
        {/* Menu */}
        <MenuSection />

        {/* Pemesanan */}
        <OrderInfoSection />

        {/* quote */}
        <BruceLeeQuote />
      </Layouts>
    </div>
  )
}
