import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Products', to: '/#products' },
    { label: 'Contact', to: '/#contact' },
  ]

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="/images/logo.png" alt="CPT Logo" className="navbar-logo" />
          <div className="navbar-title">
            <div className="navbar-name">Ceylon Platinum Trading</div>
            <div className="navbar-sub">(PVT) Ltd</div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="desktop-nav">
          {navLinks.map(link => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => {
                    if (link.to.startsWith('/#') && location.pathname === '/') {
                      const id = link.to.replace('/#', '')
                      setTimeout(() => {
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                      }, 0)
                    }
                  }}
                  className={`nav-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
          <li>
            <a href="tel:+94412223298" className="btn-primary nav-cta">
              <Phone size={14} /> Call Us
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="hamburger">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {navLinks.map(link => {
          const isActive = location.pathname === link.to
          return (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => {
                if (link.to.startsWith('/#') && location.pathname === '/') {
                  const id = link.to.replace('/#', '')
                  setTimeout(() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                  }, 0)
                }
              }}
              style={{
                padding: '0.875rem 1.5rem',
                borderBottom: '1px solid #f0eded',
                fontWeight: 500,
                color: isActive ? '#B61C1C' : '#1A1A1A',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              {link.label}
            </Link>
          )
        })}
        <a href="tel:+94412223298" className="btn-primary" style={{ margin: '1.25rem 1.5rem', justifyContent: 'center', display: 'flex' }}>
          <Phone size={15} /> +94 41 222 3298
        </a>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: white;
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          min-width: 0;
          flex-shrink: 1;
          flex: 1;
        }
        .navbar-logo {
          height: 48px;
          width: auto;
          flex-shrink: 0;
        }
        .navbar-title {
          line-height: 1.2;
          min-width: 0;
          overflow: hidden;
        }
        .navbar-name {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: #1A1A1A;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .navbar-sub {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #B61C1C;
          text-transform: uppercase;
        }
        .desktop-nav {
          display: flex;
          gap: 2rem;
          list-style: none;
          align-items: center;
          flex-shrink: 0;
        }
        .nav-link {
          font-weight: 500;
          font-size: 0.88rem;
          letter-spacing: 0.04em;
          color: #1A1A1A;
          text-decoration: none;
          padding: 0.3rem 0;
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .nav-link:hover,
        .nav-link.active {
          color: #B61C1C;
          border-bottom-color: #B61C1C;
        }
        .nav-cta {
          padding: 0.6rem 1.25rem !important;
          font-size: 0.82rem !important;
        }
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #1A1A1A;
          flex-shrink: 0;
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          background: white;
          border-top: 1px solid #f0eded;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .mobile-menu.open {
          display: flex;
        }

        @media (max-width: 850px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }

        @media (max-width: 500px) {
          .navbar-inner { height: 56px; padding: 0 1rem; }
          .navbar-logo { height: 32px; }
          .navbar-title { overflow: hidden; }
          .navbar-name { font-size: 0.78rem; overflow: hidden; text-overflow: ellipsis; }
          .navbar-sub { font-size: 0.58rem; }
          .navbar-brand { gap: 0.4rem; }
        }

        @media (max-width: 400px) {
          .navbar-name { font-size: 0.7rem; }
          .navbar-logo { height: 28px; }
        }

      `}</style>
    </nav>
  )
}