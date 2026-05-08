import type { Metadata } from 'next'
import Link from 'next/link'
import PageHead from '@/components/PageHead'

export const metadata: Metadata = {
  title: 'Journal — Babel Plus LLC',
  description: 'Immigration guides and updates from the team at Babel Plus.',
}

export default function BlogPage() {
  return (
    <main>
      <PageHead
        num="№ 06 / 06"
        eyebrow="Journal"
        title='Immigration <span class="em">guides</span> & updates.'
        sub="Plain-language articles on immigration topics — written to help you understand your options before you make any decisions."
      />
      <section className="section">
        <div className="container">
          <Link href="/blog/tps" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article className="blog-feature">
              <img
                src="https://images.unsplash.com/photo-1602027333786-373a1b858831?w=900&q=80&auto=format&fit=crop"
                alt="Aerial view of Haiti — photo by Reynaldo Mirault on Unsplash"
                className="blog-feature-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div>
                <div className="blog-feature-meta">
                  <span className="blog-tag">Immigration basics</span>
                  <span className="blog-date">May 7, 2026 · 5 min read</span>
                </div>
                <h2 className="blog-feature-title">
                  What is Temporary Protected Status <span className="em">(TPS)</span>?
                </h2>
                <p className="blog-feature-excerpt">
                  TPS is a form of humanitarian relief that allows nationals of certain countries
                  to live and work legally in the United States when conditions at home make
                  return unsafe. Here is what it covers, who qualifies, and what it does — and
                  does not — offer.
                </p>
                <div className="blog-feature-author">Babel Plus</div>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </main>
  )
}
