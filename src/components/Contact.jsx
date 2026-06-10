import { useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.hidden-anim, .hidden-left, .hidden-right').forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="section" style={{ background: 'white' }} ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow hidden-anim">Find Us</div>
          <h2 className="section-title hidden-anim">Visit Our <span>Showroom</span></h2>
          <div className="red-line hidden-anim" style={{ margin: '0 auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Contact info */}
          <div className="hidden-left">
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '2rem', color: '#1A1A1A' }}>
              Ceylon Platinum Trading (PVT) Ltd
            </h3>

            {[
              { icon: <MapPin size={20} />, label: 'Address', value: '167/B1 Old Tangalle Rd, Matara 81000, Sri Lanka' },
              { icon: <Phone size={20} />, label: 'Phone', value: '+94 41 222 3298', href: 'tel:+94412223298' },
              { icon: <Mail size={20} />, label: 'Instagram', value: '@cpt_pvt_ltd', href: 'https://www.instagram.com/cpt_pvt_ltd' },
              { icon: <Clock size={20} />, label: 'Hours', value: 'Mon–Sat: 8:00 AM – 6:00 PM' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ color: '#B61C1C', flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: '0.25rem' }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ color: '#1A1A1A', textDecoration: 'none', fontWeight: 500 }} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{item.value}</a>
                    : <span style={{ color: '#1A1A1A', fontWeight: 500 }}>{item.value}</span>
                  }
                </div>
              </div>
            ))}

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Ceylon+Platinum+Trading+(Pvt)+Ltd,+167%2FB1+Old+Tangalle+Rd,+Matara+81000"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: '1rem', display: 'inline-flex' }}
            >
              <ExternalLink size={16} /> Get Directions
            </a>
          </div>

          {/* Map embed */}
          <div className="hidden-right" style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '1px solid #f0eded' }}>
            <iframe
              title="Ceylon Platinum Trading Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.3!2d80.555!3d5.947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13900628b948f%3A0x419ca554c9ebd82!2sCeylon%20Platinum%20Trading%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
