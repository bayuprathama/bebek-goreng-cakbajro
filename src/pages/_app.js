import '@/styles/globals.css'
import { Poppins, Lobster_Two } from '@next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--poppins',
})
const lobsterTwo = Lobster_Two({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--lobsterTwo',
})
export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-poppins`}>
      <Component {...pageProps} />
    </main>
  )
}
