import type { Metadata } from 'next'
import PageHead from '@/components/PageHead'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'About — Babel Plus LLC',
  description: 'Babel Plus specializes in immigration services for individuals and families — with deep roots in communities where language barriers make the process hardest.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHead
        num="№ 02 / 06"
        eyebrow="The firm"
        title='Immigration help, in your <span class="em">language</span>.'
        sub="Babel Plus specializes in immigration services for individuals and families — with deep roots in communities where language barriers make an already difficult process even harder."
      />

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <img
              src="/sedrik.jpg"
              alt="Sedrick Dugue"
              className="about-img"
              style={{ width: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
            <div className="about-prose dropcap">
              <p>
                The U.S. immigration system is difficult to navigate even under the best
                circumstances. When the forms, hearings, and decisions arrive in a language that is
                not your own, the difficulty becomes something else entirely.
              </p>
              <p>
                Babel Plus was built around that reality. We are an immigration services firm with
                deep roots in communities where the gap between language and bureaucracy is felt
                most acutely. Our team has extensive experience helping individuals and families
                file for asylum, apply for parole and change of status, obtain employment
                authorization, and move through the complex procedures that determine whether
                people can stay, work, and build a life in the United States.
              </p>
              <p>
                We have a particular connection to the Haitian community. We understand the
                specific landscape that Haitian clients navigate — from the asylum process to
                consular procedures for passport renewal and official document retrieval — and we
                work in Haitian Creole alongside English, French, and Spanish.
              </p>
              <p>
                If you have found the immigration process confusing, inaccessible, or simply
                overwhelming, that is precisely the problem we exist to solve. We translate the
                system — in every sense of the word — so that you can make informed decisions
                about your own future.
              </p>
              <p>Whatever your situation, the first conversation is free.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <span className="section-num">Principles</span>
            <h2 className="section-title">
              Four <span className="em">things</span> we hold to.
            </h2>
          </div>
          <div className="principles">
            <div className="principle">
              <span className="principle-num">i.</span>
              <h3 className="principle-title">Accuracy</h3>
              <p className="principle-body">
                Petitions are read by overworked officers in seconds. A clean record,
                well-organized, is itself an argument.
              </p>
            </div>
            <div className="principle">
              <span className="principle-num">ii.</span>
              <h3 className="principle-title">Candor</h3>
              <p className="principle-body">
                We will tell you the truth about your odds, your timeline, and the risks of any
                path — even when the truth is hard.
              </p>
            </div>
            <div className="principle">
              <span className="principle-num">iii.</span>
              <h3 className="principle-title">Care</h3>
              <p className="principle-body">
                Many of our clients are in long stretches of uncertainty. We answer the phone. We
                return the email the same day.
              </p>
            </div>
            <div className="principle">
              <span className="principle-num">iv.</span>
              <h3 className="principle-title">Continuity</h3>
              <p className="principle-body">
                The attorney you meet in your consultation is the attorney who will represent you.
                We do not hand off.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
