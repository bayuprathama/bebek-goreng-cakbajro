import '@/styles/globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--poppins',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-poppins`}>
      <Component {...pageProps} />
    </main>
  )
}
