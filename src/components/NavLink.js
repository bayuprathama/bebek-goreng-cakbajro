import clsx from 'clsx'
function NavLink({ children, button, href }) {
  return (
    <li>
      <a
        className={clsx(
          button ? 'border border-green-700 rounded px-4 py-1' : '',
          ' cursor-pointer'
        )}
        href={href}
      >
        {children}
      </a>
    </li>
  )
}
export default NavLink
