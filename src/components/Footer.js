import { Lobster_Two } from '@next/font/google'

const lobsterTwo = Lobster_Two({
  weight: ['700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--lobsterTwo',
})

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 text-center text-red-700 bg-yellow-300 py-7">
      <h4 className={`${lobsterTwo.variable} font-lobsterTwo font-bold`}>
        Nasi Bebek Goreng Sambal Hitam Madura Cak Bajro
      </h4>
      <h5 className="text-xs font-medium">{year} @nmlssowl</h5>
    </footer>
  )
}
export default Footer
