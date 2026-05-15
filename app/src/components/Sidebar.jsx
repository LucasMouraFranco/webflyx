import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Main page' },
  { to: '/titles', label: 'Titles' },
  { to: '/classics', label: 'Classics' },
  { to: '/quotes', label: 'Quotes' },
  { to: '/guilty-pleasures', label: 'Guilty pleasures' },
  { to: '/about', label: 'About' },
]

export default function Sidebar() {
  return (
    <nav className="w-[180px] shrink-0 px-2 py-4">
      <div className="text-xs font-sans uppercase tracking-wider text-gray-500 mb-2">Navigation</div>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `block px-2 py-1 text-sm rounded no-underline ${
                  isActive
                    ? 'bg-gray-100 text-gray-900 font-medium'
                    : 'text-blue-700 hover:bg-gray-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}