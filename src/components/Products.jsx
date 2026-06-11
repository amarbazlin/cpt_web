import { useEffect, useRef } from 'react'
import { Hammer, Zap, Droplets, Wrench, Settings, Shield } from 'lucide-react'

const categories = [
  {
    icon: <Zap size={28} />,
    title: 'Power Tools',
    brands: 'Bosch · Humhon · Tolsen',
    desc: 'Drills, grinders, jigsaws, circular saws, sanders and more. Professional-grade power tools for every application.',
    img: '/images/power-tools.jpg',
  },
  {
    icon: <Hammer size={28} />,
    title: 'Hand Tools',
    brands: 'Tolsen · Lesso',
    desc: 'Complete hand tool sets — spanners, screwdrivers, hammers, pliers, chisels and specialty tools for every trade.',
    img: '/images/tools-wall.jpg',
  },
  {
    icon: <Droplets size={28} />,
    title: 'Paints & Coatings',
    brands: 'Asian Paints Causeway',
    desc: 'Interior emulsions, exterior weather guard, waterproofing solutions, and custom colour mixing with our in-store machine.',
    img: '/images/paints.jpg',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Door & Window Hardware',
    brands: 'Bellucci · OMAC',
    desc: 'Premium door handles, hinges, locks, bolts, and complete access hardware systems for residential and commercial projects.',
    img: '/images/hinges.jpg',
  },
  {
    icon: <Settings size={28} />,
    title: 'Machinery & Compressors',
    brands: 'Giant · Wipro',
    desc: 'Air compressors, water pumps, pressure washers, welding machines and heavy machinery for construction sites.',
    img: '/images/compressors.jpg',
  },
  {
    icon: <Shield size={28} />,
    title: 'Sealants & Adhesives',
    brands: 'Multibond · As-Ron',
    desc: 'Silicone sealants, weatherproofing compounds, adhesives, and specialty chemicals for all construction needs.',
    img: '/images/sealants.jpg',
  },
]

export default function Products() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const targets = sectionRef.current?.querySelectorAll('.hidden-anim, .hidden-left, .hidden-scale')
    targets?.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="section" style={{ background: 'white' }} ref={sectionRef}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-eyebrow hidden-anim">What We Stock</div>
          <h2 className="section-title hidden-anim" style={{ maxWidth: 600, margin: '0 auto 1rem' }}>
            A Full Spectrum of <span>Hardware Solutions</span>
          </h2>
          <div className="red-line hidden-anim" style={{ margin: '0 auto 1.25rem' }} />
          <p className="section-subtitle hidden-anim" style={{ margin: '0 auto' }}>
            From power tools to paints, structural hardware to sanitary ware — we carry premium brands trusted by professionals across Sri Lanka's Southern Province.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="hidden-scale"
              style={{
                transitionDelay: `${i * 0.08}s`,
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #f0eded',
                background: 'white',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = '' }}
            >
              <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                <img
                  src={cat.img}
                  alt={cat.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = ''}
                />
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: '#B61C1C', color: 'white',
                  borderRadius: '6px', padding: '0.5rem',
                  display: 'flex', alignItems: 'center',
                }}>
                  {cat.icon}
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', color: '#B61C1C', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {cat.brands}
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#1A1A1A' }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.7 }}>{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
