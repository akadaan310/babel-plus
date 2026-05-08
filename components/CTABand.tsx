import Link from 'next/link'

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>
          An <span className="em">honest</span> conversation about your case — at{' '}
          <span className="em">no cost</span>.
        </h2>
        <a className="btn btn-accent btn-arrow" href="/#booking">
          Book Consultation
        </a>
      </div>
    </section>
  )
}
