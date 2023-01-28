import NavLink from './NavLink'
import { Lobster_Two } from '@next/font/google'

export const lobsterTwo = Lobster_Two({
  weight: ['700'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--lobsterTwo',
})

function Header() {
  return (
    <header id="home" className="shadow-sm">
      {/* xl-container */}
      <ul className="flex items-center justify-between h-16 mx-6 xl:mx-auto xl:max-w-7xl">
        <NavLink
          href="#home"
          className={`${lobsterTwo.variable} font-lobsterTwo text-lg`}
        >
          Cak Bajro
        </NavLink>
        <ul className="flex gap-4 xl:gap-6">
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#pemesanan" button>
            Pesan
          </NavLink>
        </ul>
      </ul>
    </header>
  )
}
export default Header
