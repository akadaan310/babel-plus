import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-mark">
            Babel Plus
          </div>
          <p className="footer-tagline">
            Immigration services for individuals and families — asylum, document translation,
            interpretation, and more. We navigate the system with you, in your language.
          </p>
        </div>
        <div className="footer-col">
          <h4>Office</h4>
          <ul>
            <li>9340 North 56th Street</li>
            <li>Temple Terrace, FL 33617</li>
            <li>United States</li>
            <li>(774) 493-2817</li>
            <li>Babelplus24@gmail.com</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services">Asylum</Link></li>
            <li><Link href="/services">Document translation</Link></li>
            <li><Link href="/services">Interpretation</Link></li>
            <li><Link href="/services">Passport renewal</Link></li>
            <li><Link href="/services">Other documents</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Firm</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/team">Attorneys</Link></li>
            <li><Link href="/blog">Journal</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Babel Plus LLC</span>
      </div>
    </footer>
  )
}
