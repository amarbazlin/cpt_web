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
    { label: 'Gallery', to: '/#gallery' },
    { label: 'Contact', to: '/#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(255,255,255,1)',
      boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
      backdropFilter: 'none',
      transition: 'all 0.35s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src="/images/logo.png" alt="CPT Logo" style={{ height: 48, width: 'auto' }} />
          <div style={{ lineHeight: 1.2 }}>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: scrolled ? '#1A1A1A' : '#1A1A1A',
            }}>Ceylon Platinum Trading</div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', color: '#B61C1C', textTransform: 'uppercase' }}>(PVT) Ltd</div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <li key={link.label}>
              <Link
                to={link.to}
                style={{
                  fontWeight: 500,
                  fontSize: '0.88rem',
                  letterSpacing: '0.04em',
                  color: location.pathname === link.to ? '#B61C1C' : '#1A1A1A',
                  textDecoration: 'none',
                  padding: '0.3rem 0',
                  borderBottom: location.pathname === link.to ? '2px solid #B61C1C' : '2px solid transparent',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="tel:+94412223298" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.82rem' }}>
              <Phone size={14} /> Call Us
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', color: '#1A1A1A' }} className="hamburger">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        display: open ? 'flex' : 'none',
        flexDirection: 'column',
        background: 'white',
        padding: '1rem 1.5rem 2rem',
        borderTop: '1px solid #f0eded',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
      }}>
        {navLinks.map(link => (
          <Link key={link.label} to={link.to} style={{
            padding: '0.875rem 0',
            borderBottom: '1px solid #f0eded',
            fontWeight: 500,
            color: location.pathname === link.to ? '#B61C1C' : '#1A1A1A',
            textDecoration: 'none',
          }}>
            {link.label}
          </Link>
        ))}
        <a href="tel:+94412223298" className="btn-primary" style={{ marginTop: '1.25rem', justifyContent: 'center' }}>
          <Phone size={15} /> +94 41 222 3298
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
