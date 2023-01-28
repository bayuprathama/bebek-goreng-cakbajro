import clsx from 'clsx'
function NavLink({ children, button, href, className }) {
  return (
    <li>
      <a
        className={clsx(
          button ? 'border-slate-200 border rounded px-4 py-1' : '',
          ' cursor-pointer',
          className
        )}
        href={href}
      >
        {children}
      </a>
    </li>
  )
}
export default NavLink
