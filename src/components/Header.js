import NavLink from './NavLink'

function Header() {
  return (
    <header id="home" className=" bg-slate-100">
      {/* xl-container */}
      <ul className="flex items-center justify-between h-16 mx-6 xl:mx-auto xl:max-w-7xl">
        <NavLink href="#home">Home</NavLink>
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
