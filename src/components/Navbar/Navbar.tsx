import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CONTACTS', path: '/contacts' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <button className="navbar-logo" onClick={() => navigate('/')}>
        PORTFOLIO
      </button>
      <div className="navbar-links">
        {links.map((link) => (
          <button
            key={link.path}
            className={`navbar-link ${pathname === link.path ? 'active' : ''}`}
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  )
}