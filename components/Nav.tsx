'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Journal' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">
            Babel Plus
          </span>
        </Link>
        <ul className="nav-links">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className={`nav-link${pathname === n.href ? ' active' : ''}`}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <a className="nav-phone" href="tel:+17744932817">
            (774) 493-2817
          </a>
          <a className="btn btn-accent" href="/#booking">
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}
