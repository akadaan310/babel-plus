import Link from 'next/link'
import BookingWidget from '@/components/BookingWidget'
import CTABand from '@/components/CTABand'
import ReviewsCarousel from '@/components/ReviewsCarousel'

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container-wide">
          <div className="hero-meta">
            <span className="hero-meta-center">
              <span>Florida · Massachusetts · New York · Remote / Virtual</span>
            </span>
            <span>Free initial consultation</span>
          </div>
          <div className="hero-grid">
            <div>
              <h1 className="hero-headline">
                A new home
                <br />
                begins with a
                <br />
                <span className="em">careful</span> first
                <br />
                conversation.
              </h1>
              <p className="hero-sub">
                Babel Plus specializes in immigration services for individuals and families —
                asylum, change of status, employment authorization, and more. We have deep roots in
                communities where language barriers make the process hardest, and we work in
                Haitian Creole, French, Spanish, and English.
              </p>
              <div className="hero-stats">
                <div>
                  <div className="hero-stat-num">
                    2,140
                    <span
                      className="serif-italic"
                      style={{ color: 'var(--accent)', fontSize: 24, marginLeft: 4 }}
                    >
                      +
                    </span>
                  </div>
                  <div className="hero-stat-label">
                    Cases
                    <br />
                    Concluded
                  </div>
                </div>
                <div>
                  <div className="hero-stat-num">
                    96
                    <span
                      className="serif-italic"
                      style={{ color: 'var(--accent)', fontSize: 24, marginLeft: 4 }}
                    >
                      %
                    </span>
                  </div>
                  <div className="hero-stat-label">
                    Approval rate
                    <br />
                    since 2014
                  </div>
                </div>
                <div>
                  <div className="hero-stat-num">11</div>
                  <div className="hero-stat-label">
                    Languages
                    <br />
                    spoken in-house
                  </div>
                </div>
              </div>
            </div>
            <BookingWidget />
          </div>
        </div>
      </section>

<section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">№ 02 — Services</span>
            <h2 className="section-title">
              What we <span className="em">do</span>.
            </h2>
          </div>
          <div className="svc-grid">
            <Link href="/services" className="svc-cell" style={{ textDecoration: 'none' }}>
              <span className="svc-num">i.</span>
              <h3 className="svc-title">
                Asylum <span className="em">representation</span>
              </h3>
              <p className="svc-body">
                Document bundles, form preparation, certified translation of supporting materials,
                and expedited filing when time is critical. We build the record that gives your
                case its best chance.
              </p>
              <span className="svc-cta">Read more</span>
            </Link>
            <Link href="/services" className="svc-cell" style={{ textDecoration: 'none' }}>
              <span className="svc-num">ii.</span>
              <h3 className="svc-title">
                Legal document <span className="em">translation</span>
              </h3>
              <p className="svc-body">
                Certified and notarized translation of immigration documents, court records,
                personal certificates, and any foreign-language materials required for U.S.
                filings.
              </p>
              <span className="svc-cta">Read more</span>
            </Link>
            <Link href="/services" className="svc-cell" style={{ textDecoration: 'none' }}>
              <span className="svc-num">iii.</span>
              <h3 className="svc-title">
                Interpretation <span className="em">services</span>
              </h3>
              <p className="svc-body">
                Professional interpretation for medical appointments, immigration interviews, and
                court hearings — including in-person accompaniment for elderly clients who need a
                trusted advocate present.
              </p>
              <span className="svc-cta">Read more</span>
            </Link>
            <Link href="/services" className="svc-cell" style={{ textDecoration: 'none' }}>
              <span className="svc-num">iv.</span>
              <h3 className="svc-title">
                Haitian passport <span className="em">renewal</span>
              </h3>
              <p className="svc-body">
                Full guidance for Haitian nationals living in the United States who need to renew
                or replace a passport — document checklist, consular application preparation, and
                submission coordination.
              </p>
              <span className="svc-cta">Read more</span>
            </Link>
            <Link href="/services" className="svc-cell" style={{ textDecoration: 'none' }}>
              <span className="svc-num">v.</span>
              <h3 className="svc-title">
                Other official <span className="em">documents</span>
              </h3>
              <p className="svc-body">
                Divorce certificates, archive documents, civil records, apostilles, and other
                official paperwork that immigration petitions depend on — obtained, authenticated,
                and delivered.
              </p>
              <span className="svc-cta">Read more</span>
            </Link>
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">№ 03 — Approach</span>
            <h2 className="section-title">
              Why clients <span className="em">choose</span> us.
            </h2>
          </div>
          <div className="approach-grid">
            <div className="approach-cell">
              <div className="approach-num">i.</div>
              <h3 className="approach-title">We speak your language.</h3>
              <p className="approach-body">
                Our team works in Haitian Creole, French, Spanish, and English. Language should
                never be the reason a case goes wrong — and with us, it won&rsquo;t be.
              </p>
            </div>
            <div className="approach-cell">
              <div className="approach-num">ii.</div>
              <h3 className="approach-title">Experience with complex cases.</h3>
              <p className="approach-body">
                Asylum filings, parole programs, change of status, employment authorization — we
                have guided clients through the full range of immigration challenges, including the
                ones other offices turn away.
              </p>
            </div>
            <div className="approach-cell">
              <div className="approach-num">iii.</div>
              <h3 className="approach-title">Deep roots in the community.</h3>
              <p className="approach-body">
                We have a long history serving the Haitian community in particular — from asylum
                representation to passport renewal to official document assistance. We understand
                the specific paths our clients walk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
