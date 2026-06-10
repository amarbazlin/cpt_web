import { useEffect, useRef } from 'react'

const stats = [
  { number: '500+', label: 'Products In Stock' },
  { number: '5+', label: 'Premium Brands' },
  { number: '2026', label: 'Established' },
  { number: '167/B1', label: 'Old Tangalle Rd, Matara' },
]

const pillars = [
  { title: 'Quality Brands', desc: 'We partner only with verified manufacturers — Bosch, Tolsen, Asian Paints, and more — so every product we sell carries a guarantee.' },
  { title: 'Expert Guidance', desc: 'Our team brings practical construction knowledge. Whether you\'re a homeowner or a contractor, we help you find exactly what the job needs.' },
  { title: 'One-Stop Shop', desc: 'From the first nail to the final coat of paint — find everything for a complete build under one roof, so you waste less time sourcing.' },
]

export default function WhyCPT() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.hidden-anim, .hidden-left, .hidden-right, .hidden-scale').forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" style={{ background: '#1A1A1A', color: 'white' }} ref={ref}>
      <div className="container">
        {/* Stats bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '5rem',
        }}>
          {stats.map((s, i) => (
            <div key={i} className="hidden-scale" style={{
              transitionDelay: `${i * 0.1}s`,
              background: '#1A1A1A',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#E84040', marginBottom: '0.35rem' }}>
                {s.number}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500, letterSpacing: '0.06em' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div className="hidden-left">
            <div className="section-eyebrow" style={{ color: '#E84040' }}>Why Choose CPT</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Built for the People<br />Who <span style={{ color: '#E84040' }}>Build Sri Lanka</span>
            </h2>
            <div className="red-line" />
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.95rem', maxWidth: 480 }}>
              Ceylon Platinum Trading was founded with one purpose: to give builders, contractors, and homeowners in Southern Sri Lanka access to professional-grade hardware without compromising on quality or price.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <a href="tel:+94412223298" className="btn-primary">Call +94 41 222 3298</a>
            </div>
          </div>

          <div className="hidden-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: '3px solid #B61C1C',
                borderRadius: '0 6px 6px 0',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(182,28,28,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
              >
                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
