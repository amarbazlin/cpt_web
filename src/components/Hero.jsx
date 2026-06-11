import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/interior.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        transform: 'scale(1.04)',
        transition: 'transform 6s ease',
        ...(loaded ? { transform: 'scale(1)' } : {}),
      }} />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(110deg, rgba(26,26,26,0.82) 0%, rgba(26,26,26,0.55) 50%, rgba(182,28,28,0.18) 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '100px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.2s',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(182,28,28,0.9)', color: 'white',
            padding: '0.4rem 1rem', borderRadius: '2px', marginBottom: '1.5rem',
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>
            <MapPin size={12} /> Matara, Sri Lanka · Est. 2026
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.1,
            color: 'white',
            marginBottom: '1.5rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.35s',
          }}>
            Complete Hardware<br />
            <span style={{ color: '#E84040' }}>Solutions</span> Under<br />One Roof
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
            maxWidth: 500,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.5s',
          }}>
            Sri Lanka's premier hardware and construction products store - power tools, paints, PVC, sanitary ware, and more. Built for homeowners, contractors, and builders.
          </p>

          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.65s',
          }}>
            <a href="#products" className="btn-primary" style={{ fontSize: '0.95rem' }}>
              Explore Products
            </a>
            <Link to="/about" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              About Us
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div:first-of-type {
            background-size: auto 120% !important;
            background-position: center 20% !important;
          }
        }
        @media (max-width: 480px) {
          section > div:first-of-type {
            background-size: auto 140% !important;
            background-position: center 10% !important;
          }
        }
      `}</style>
    </section>
  )
}