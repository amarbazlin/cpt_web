import { useEffect, useRef } from 'react'
import { Linkedin, Award, Users, Target, TrendingUp } from 'lucide-react'

const board = [
  {
    name: 'Bazlin Salih',
    role: 'Chairman',
    linkedin: 'https://www.linkedin.com/in/bazlin-salih-959873244/',
    photo: '/images/bazlinsalih.jpg',
    bio: 'Bazlin Salih is the founder and Chairman of Ceylon Platinum Trading (PVT) Ltd, bringing decades of entrepreneurial leadership and deep-rooted experience in Sri Lanka\'s hardware and construction materials sector. With a strong commercial vision, he established CPT to raise the standard of hardware retail in the Southern Province — creating a one-stop destination offering premium brands, expert service, and genuine quality. His leadership has been pivotal in building strategic relationships with international brands including Bosch, Asian Paints, Lesso, and Tolsen, positioning CPT as one of Matara\'s most trusted hardware destinations since its 2026 launch.',
    initials: 'BS',
  },
  {
    name: 'Himaz Bazlin',
    role: 'Director',
    linkedin: 'https://www.linkedin.com/in/himaz-bazlin-0996731b3/',
    photo: '/images/Logo/himazbalin.jpeg',
    bio: 'Himaz Bazlin serves as Director of Ceylon Platinum Trading, overseeing day-to-day operations and retail management at the Matara showroom. With hands-on involvement in procurement, supplier relations, and customer engagement, Himaz is instrumental in maintaining CPT\'s high standards of service and product availability. His practical knowledge of the construction trade and genuine commitment to customer satisfaction have made him a trusted figure among the contractors and builders who rely on CPT for their projects across the Southern Province.',
    initials: 'HB',
  },
  {
    name: 'Amar Bazlin',
    role: 'Director',
    linkedin: 'https://www.linkedin.com/in/amar-bazlin/',
    photo: '/images/Logo/amarbazlin.png',
    bio: 'Amar Bazlin is a Director of Ceylon Platinum Trading and the founder of Forgera, an AI automation company building intelligent business operations platforms for Sri Lankan SMEs. A Computer Science undergraduate at the University of Colombo (Staffordshire University / APIIT Sri Lanka) and a nationally ranked swimmer, Amar brings a technology-forward perspective to CPT\'s operations — driving digital presence, brand strategy, and data-driven business improvements. His dual expertise in software development and hardware distribution is shaping CPT\'s growth into a modern, technology-enabled retail business.',
    initials: 'AB',
  },
]

export default function AboutPage() {
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    const targets = document.querySelectorAll('.hidden-anim, .hidden-left, .hidden-right, .hidden-scale')
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Page hero */}
      <div style={{
        position: 'relative', background: '#1A1A1A',
        padding: '80px 0', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/opening-crowd.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.2,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ color: '#E84040' }}>Our Story</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            About Ceylon Platinum <span style={{ color: '#E84040' }}>Trading</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: 560, margin: '0 auto' }}>
            A family-built enterprise committed to delivering quality hardware solutions to the builders of Southern Sri Lanka.
          </p>
        </div>
      </div>

      {/* Our Story section */}
      <section className="section" style={{ background: 'white' }} ref={ref}>
        <div className="container">
          <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="hidden-left">
              <div className="section-eyebrow">Who We Are</div>
              <h2 className="section-title">Hardware Excellence,<br /><span>Southern Sri Lanka</span></h2>
              <div className="red-line" />
              <p style={{ color: '#555', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                Ceylon Platinum Trading (PVT) Ltd is a Matara-based hardware and construction products retailer dedicated to providing high-quality tools, materials, and equipment to homeowners, contractors, and builders across Sri Lanka's Southern Province.
              </p>
              <p style={{ color: '#555', lineHeight: 1.85, fontSize: '0.95rem' }}>
                Founded in 2026, CPT was built on the conviction that Southern Sri Lanka deserves access to the same premium hardware brands and expert service available in Colombo — without the distance. Our 167/B1 Old Tangalle Road showroom was designed to reflect that ambition: a professional retail space stocking over 500 products across six major categories.
              </p>
            </div>

            <div className="about-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: <Target size={24} />, title: 'Our Mission', text: 'To be the most trusted hardware partner for builders across Southern Sri Lanka.' },
                { icon: <Award size={24} />, title: 'Quality First', text: 'Every brand we carry is vetted for durability, performance, and after-sales support.' },
                { icon: <Users size={24} />, title: 'Customer Focus', text: 'Expert advice from a team that understands what construction really demands.' },
                { icon: <TrendingUp size={24} />, title: 'Growth Vision', text: 'Expanding our range and reach to serve more of Sri Lanka\'s construction community.' },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '1.5rem', background: 'var(--cream)',
                  borderRadius: '8px', border: '1px solid #f0eded',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                >
                  <div style={{ color: '#B61C1C', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.6 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-eyebrow hidden-anim">Leadership</div>
            <h2 className="section-title hidden-anim">Board of <span>Directors</span></h2>
            <div className="red-line hidden-anim" style={{ margin: '0 auto 1.25rem' }} />
            <p className="section-subtitle hidden-anim" style={{ margin: '0 auto' }}>
              CPT is led by a family team combining decades of hardware industry experience with modern business thinking.
            </p>
          </div>

          <div className="board-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {board.map((member, i) => (
              <div key={i} className="hidden-scale" style={{
                transitionDelay: `${i * 0.12}s`,
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid #f0eded',
                background: 'white',
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = '' }}
              >
                {/* Avatar with photo */}
                <div style={{
                  height: 200,
                  background: `linear-gradient(135deg, #B61C1C 0%, #8B1414 100%)`,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${member.photo})`,
                    backgroundSize: 'cover', backgroundPosition: 'top center',
                    opacity: 0.15,
                  }} />
                  <div style={{
                    width: 80, height: 80,
                    borderRadius: '50%',
                    backgroundImage: `url(${member.photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    border: '3px solid rgba(255,255,255,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem', fontWeight: 800,
                    color: 'white', marginBottom: '0.75rem',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  }}>
                    {member.initials}
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.15)',
                    padding: '0.25rem 0.875rem',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'white',
                  }}>{member.role}</div>
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.2rem' }}>{member.name}</h3>
                      <div style={{ fontSize: '0.78rem', color: '#B61C1C', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{member.role}</div>
                    </div>
                    <a href={member.linkedin} target="_blank" rel="noreferrer" style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: '#0077B5', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', textDecoration: 'none', flexShrink: 0,
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = ''}
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#555', lineHeight: 1.75 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-cards-grid { grid-template-columns: 1fr !important; }
          .board-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}