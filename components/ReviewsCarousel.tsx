'use client'
import { useState } from 'react'

const REVIEWS = [
  {
    body: 'I had no idea where to begin with my asylum application. Babel Plus walked me through every document, every form, every step of the interview process. For the first time, I felt like someone actually understood what I was going through.',
    attrib: 'M. Jean-Baptiste · Asylum client',
  },
  {
    body: 'I needed certified translations of several documents on a tight deadline. They were accurate, properly formatted, and accepted by USCIS without a single issue. Fast, professional, and thorough.',
    attrib: 'R. Dorvil · Document translation client',
  },
  {
    body: 'My mother speaks no English and had a medical appointment that was critical to her case. Having someone from Babel Plus accompany her and interpret in real time made all the difference. She finally felt heard.',
    attrib: 'C. Pierre · Interpretation client',
  },
  {
    body: 'Renewing my Haitian passport from the US felt like an impossible task — until I called Babel Plus. They told me exactly what to bring, handled all the paperwork, and kept me updated the whole way through.',
    attrib: 'F. Augustin · Passport renewal client',
  },
  {
    body: 'I needed an archive certificate from Haiti for my immigration filing and had no idea how to get it. Babel Plus handled everything — retrieval, authentication, formatting. What seemed impossible was done in weeks.',
    attrib: 'N. Thermidor · Document retrieval client',
  },
]

export default function ReviewsCarousel() {
  const [idx, setIdx] = useState(0)

  function prev() {
    setIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)
  }
  function next() {
    setIdx((i) => (i + 1) % REVIEWS.length)
  }

  const review = REVIEWS[idx]

  return (
    <section
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        padding: 'clamp(32px, 4vw, 52px) 0',
      }}
    >
      <div className="container">
        <div className="section-head" style={{ marginBottom: 28 }}>
          <span className="section-num">Testimonials</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>
            What our <span className="em">clients</span> say.
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <button onClick={prev} className="carousel-arrow" aria-label="Previous review">‹</button>
          <div className="quote-row" style={{ flex: 1, gap: 40 }}>
            <div className="quote-mark" style={{ fontSize: 80 }}>&ldquo;</div>
            <div key={idx} className="fade-in">
              <p className="quote-body" style={{ fontSize: 'clamp(15px, 1.6vw, 20px)' }}>{review.body}</p>
              <div className="quote-attrib" style={{ marginTop: 16 }}>— {review.attrib}</div>
            </div>
          </div>
          <button onClick={next} className="carousel-arrow" aria-label="Next review">›</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Review ${i + 1}`}
              style={{
                width: i === idx ? 28 : 8,
                height: 8,
                background: i === idx ? 'var(--ink)' : 'var(--rule)',
                border: 'none',
                borderRadius: 0,
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.25s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
