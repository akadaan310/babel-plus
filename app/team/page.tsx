import type { Metadata } from 'next'
import PageHead from '@/components/PageHead'
import Placeholder from '@/components/Placeholder'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'Team — Babel Plus LLC',
  description: 'Meet the people behind Babel Plus — dedicated to helping individuals and families navigate the immigration process.',
}

const TEAM = [
  {
    name: 'Naomi <span class="em">Francois</span>',
    role: 'Operations Manager',
    bio: 'Naomi is the operational backbone of Babel Plus. She brings deep expertise in immigration application filing and is committed to making sure every case moves forward accurately and without unnecessary delays. From intake to submission, she ensures nothing falls through the cracks — and that clients always know where their case stands.',
    focus: 'Application filing · Case management',
    photo: '/naomi-removebg-preview.png',
  },
  {
    name: 'Sedrick <span class="em">Dugue</span>',
    role: 'Marketing Manager',
    bio: 'Sedrick works to connect the communities that need immigration help the most with the services available to them. His focus is on expanding the reach of Babel Plus and developing new offerings that address the real, evolving needs of immigrant populations across Florida, Massachusetts, and New York.',
    focus: 'Community outreach · Service development',
    photo: '/sedrik.jpg',
  },
]

export default function TeamPage() {
  return (
    <main>
      <PageHead
        num="№ 04 / 06"
        eyebrow="Our team"
        title='The people behind <span class="em">Babel Plus</span>.'
        sub="A small, dedicated team committed to helping individuals and families navigate the immigration process — clearly, carefully, and in your language."
      />
      <section className="section">
        <div className="container">
          <div
            className="team-grid"
            style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 860, margin: '0 auto' }}
          >
            {TEAM.map((p) => (
              <article key={p.role} className="team-card">
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt={p.role}
                    className="team-photo"
                    style={{ width: '100%', objectFit: 'cover', objectPosition: 'top', background: '#fff' }}
                  />
                ) : (
                  <Placeholder label={`Portrait — ${p.role}`} className="team-photo" />
                )}
                <h3
                  className="team-name"
                  dangerouslySetInnerHTML={{ __html: p.name }}
                />
                <div className="team-role">{p.role}</div>
                <p className="team-bio">{p.bio}</p>
                <div className="team-meta">
                  <div>
                    <span>Focus</span>
                    {p.focus}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </main>
  )
}
