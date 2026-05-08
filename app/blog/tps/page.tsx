import type { Metadata } from 'next'
import Link from 'next/link'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'What is Temporary Protected Status (TPS)? — Babel Plus LLC',
  description:
    'TPS allows nationals of designated countries to live and work legally in the U.S. when conditions at home make return unsafe. Learn who qualifies and what it offers.',
}

export default function TPSPage() {
  return (
    <main>
      <section
        style={{
          borderBottom: '1px solid var(--rule)',
          padding: 'clamp(48px, 6vw, 88px) 0 clamp(32px, 4vw, 56px)',
        }}
      >
        <div className="container" style={{ maxWidth: 800 }}>
          <Link
            href="/blog"
            className="eyebrow"
            style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 32 }}
          >
            ← Journal
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24 }}>
            <span
              className="blog-tag"
              style={{ position: 'static', fontSize: 10 }}
            >
              Immigration basics
            </span>
            <span className="blog-date">May 7, 2026 · 5 min read</span>
          </div>
          <h1
            className="display display-l"
            style={{ marginBottom: 24 }}
          >
            What is Temporary Protected{' '}
            <span className="serif-italic" style={{ color: 'var(--accent)' }}>
              Status (TPS)
            </span>
            ?
          </h1>
          <p className="lede">
            TPS is a form of humanitarian relief that allows nationals of certain countries to
            live and work legally in the United States when conditions at home make return
            unsafe. Here is what it covers, who qualifies, and what it does — and does not —
            offer.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="about-prose">

            <p>
              Temporary Protected Status (TPS) is an immigration status granted by the U.S.
              government to nationals of specific countries experiencing conditions that make
              safe return impossible — including armed conflict, environmental disasters, or
              other extraordinary and temporary circumstances. It allows eligible individuals
              already inside the United States to remain and work legally for a defined period
              of time.
            </p>

            <h2
              className="display display-m"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', marginTop: '1.6em', marginBottom: '0.5em' }}
            >
              Who is eligible?
            </h2>
            <p>
              To qualify for TPS, you must have been physically present in the United States at
              the time your country was officially designated. You must also demonstrate
              continuous residence in the U.S. since that designation date, and you cannot have
              any disqualifying criminal convictions or other bars to immigration benefits.
            </p>
            <p>
              Eligibility requirements vary slightly by country designation, so it is important
              to verify the specific conditions that apply to your situation.
            </p>

            <h2
              className="display display-m"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', marginTop: '1.6em', marginBottom: '0.5em' }}
            >
              What does TPS offer?
            </h2>
            <p>TPS provides three core protections while it remains in effect:</p>
            <ul
              className="svc-detail-list"
              style={{ gridTemplateColumns: '1fr', marginTop: 16 }}
            >
              <li>
                <strong>Protection from deportation</strong> — you cannot be removed from the
                U.S. while your TPS is active and properly maintained.
              </li>
              <li>
                <strong>Work authorization</strong> — you are eligible to receive an Employment
                Authorization Document (EAD), allowing you to work legally in the United States.
              </li>
              <li>
                <strong>Travel permission</strong> — with advance parole approved in advance,
                TPS holders may be permitted to travel internationally and re-enter the U.S.
              </li>
            </ul>

            <h2
              className="display display-m"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', marginTop: '1.6em', marginBottom: '0.5em' }}
            >
              How long does it last?
            </h2>
            <p>
              TPS is granted in periods of 6, 12, or 18 months at a time. The U.S. government
              reviews conditions in each designated country and decides whether to extend or
              terminate TPS based on its assessment. If TPS is extended, holders must re-register
              during each renewal window to maintain their status — missing that window can put
              your protection at risk.
            </p>

            <h2
              className="display display-m"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', marginTop: '1.6em', marginBottom: '0.5em' }}
            >
              What TPS does not do
            </h2>
            <p>
              It is important to understand that TPS is a temporary status. It does not lead
              directly to a green card, lawful permanent residence, or U.S. citizenship.
              However, holding TPS does not prevent you from pursuing other immigration benefits
              you may independently qualify for. If your circumstances change — or if another
              immigration pathway becomes available to you — TPS holders can apply for those
              benefits separately.
            </p>

            <h2
              className="display display-m"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', marginTop: '1.6em', marginBottom: '0.5em' }}
            >
              Countries recently designated for TPS
            </h2>
            <p>
              The following countries have active or recently active TPS designations. Each
              designation is based on the U.S. government&rsquo;s ongoing assessment of
              conditions in that country:
            </p>
            <ul
              className="svc-detail-list"
              style={{ gridTemplateColumns: '1fr 1fr', marginTop: 16 }}
            >
              <li>El Salvador</li>
              <li>Honduras</li>
              <li>Haiti</li>
              <li>Venezuela</li>
              <li>Sudan</li>
              <li>Ukraine</li>
            </ul>
            <p style={{ marginTop: '1.2em' }}>
              Designations are subject to change. If your country is not listed here, it is
              worth confirming the current status directly, as new designations are occasionally
              announced.
            </p>

            <div
              style={{
                marginTop: '2.5em',
                padding: '28px 32px',
                background: 'var(--bg-card)',
                borderLeft: '3px solid var(--accent)',
              }}
            >
              <p
                className="eyebrow"
                style={{ marginBottom: 10 }}
              >
                Have questions about your TPS eligibility?
              </p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                The rules around TPS — eligibility dates, re-registration deadlines, and what
                it means for your broader immigration situation — can be difficult to navigate
                alone. If you have questions specific to your case, we are happy to talk it
                through. The initial consultation is free.
              </p>
              <Link
                href="/#booking"
                className="btn btn-accent btn-arrow"
                style={{ marginTop: 20, display: 'inline-flex' }}
              >
                Book a free consultation
              </Link>
            </div>

          </div>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
