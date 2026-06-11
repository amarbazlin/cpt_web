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

  const contactItems = [
    { icon: <MapPin size={20} />, label: 'Address', value: '167/B1 Old Tangalle Rd, Matara 81000, Sri Lanka' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+94 41 222 3298', href: 'tel:+94412223298' },
    { icon: <Mail size={20} />, label: 'Email', value: 'ceylonglobal.hq@gmail.com', href: 'mailto:ceylonglobal.hq@gmail.com' },
    { icon: <Clock size={20} />, label: 'Hours', value: 'Mon–Sat: 8:00 AM – 6:00 PM' },
  ]

  return (
    <section id="contact" className="section" style={{ background: 'white' }} ref={ref}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem', width: '100%', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="hidden-anim" style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
            fontWeight: 700,
            color: '#B61C1C',
            textAlign: 'center',
            marginBottom: '0.5rem',
          }}>Find Us</div>
          <div className="hidden-anim" style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700,
            color: '#1A1A1A',
            lineHeight: 1.15,
            textAlign: 'center',
            width: '100%',
            marginBottom: '0.75rem',
          }}>Visit Our <span className="showroom-mobile" style={{ color: '#B61C1C' }}>Showroom</span></div>
          <div className="red-line hidden-anim" style={{ margin: '0 auto' }} />
        </div>

        <div className="contact-grid">
          {/* Contact info */}
          <div className="hidden-left contact-info">
            <h3 className="contact-heading">
              Ceylon Platinum Trading (PVT) Ltd
            </h3>

            {contactItems.map((item, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <div className="contact-label">{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="contact-value contact-link" target={item.href.startsWith('http') && !item.href.startsWith('mailto') ? '_blank' : undefined} rel="noreferrer">{item.value}</a>
                    : <span className="contact-value">{item.value}</span>
                  }
                </div>
              </div>
            ))}

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Ceylon+Platinum+Trading+(Pvt)+Ltd,+167%2FB1+Old+Tangalle+Rd,+Matara+81000"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: '0.5rem', display: 'inline-flex' }}
            >
              <ExternalLink size={16} /> Get Directions
            </a>
          </div>

          {/* Map embed */}
          <div className="hidden-right contact-map">
            <iframe
              title="Ceylon Platinum Trading Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.3!2d80.555!3d5.947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13900628b948f%3A0x419ca554c9ebd82!2sCeylon%20Platinum%20Trading%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: 320 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-heading {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #1A1A1A;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }

        .contact-icon {
          color: #B61C1C;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 0.25rem;
        }

        .contact-value {
          color: #1A1A1A;
          font-weight: 500;
        }

        .contact-link {
          text-decoration: none;
        }

        .contact-link:hover {
          color: #B61C1C;
        }

        .contact-map {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          border: 1px solid #f0eded;
          height: 400px;
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-map { height: 300px; }
        }

        @media (max-width: 480px) {
          .showroom-mobile { display: none; }

          .contact-grid {
            gap: 2rem !important;
          }

          #contact .container > div:first-child .red-line {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .contact-heading {
            text-align: center;
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
          }

          .contact-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
            background: #FAF7F4;
            padding: 1.25rem 1rem;
            border-radius: 8px;
            border: 1px solid #f0eded;
            margin-bottom: 0.75rem;
          }

          .contact-icon {
            margin-top: 0;
            margin-bottom: 0.5rem;
          }

          .contact-info .btn-primary {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .contact-map { height: 250px; }
        }
      `}</style>
    </section>
  )
}