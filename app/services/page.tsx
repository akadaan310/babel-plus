import type { Metadata } from 'next'
import PageHead from '@/components/PageHead'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'Services — Babel Plus LLC',
  description: 'Immigration services including asylum, certified legal document translation, interpretation, Haitian passport renewal, and official document assistance.',
}

const SERVICES = [
  {
    n: 'i.',
    title: 'Asylum <span class="em">representation</span>',
    tag: 'Protection',
    body: [
      'For individuals and families seeking safety in the United States, we build the asylum case from the ground up — organizing document bundles, preparing and filing all required forms, providing certified translations of supporting materials, and expediting filings when urgency demands it.',
      'Asylum cases are won or lost on the quality of the record. We gather evidence, draft the personal statement, prepare you thoroughly for the interview, and anticipate the questions an officer or immigration judge will raise before they raise them.',
    ],
    items: [
      'Affirmative & defensive asylum (I-589)',
      'Document bundle preparation',
      'Certified legal document translation',
      'Form preparation & filing',
      'Expedited processing support',
      'Interview & hearing preparation',
      'Country conditions research',
      'Immigration court representation',
    ],
  },
  {
    n: 'ii.',
    title: 'Legal document <span class="em">translation</span>',
    tag: 'Certified & notarized',
    body: [
      'Every document submitted to USCIS or an immigration court in a foreign language must be accompanied by a certified English translation. We provide translations that satisfy the federal standard: complete, accurate, and signed by a competent translator.',
      'We also notarize documents that require an official seal for use in U.S. immigration proceedings or for submission abroad — a service that spares you a separate appointment.',
    ],
    items: [
      'Certified translation (all languages)',
      'Notarized translations',
      'USCIS-compliant formatting',
      'Birth, marriage & death certificates',
      'Court & legal records',
      'Academic & professional credentials',
      'Affidavits & declarations',
      'Personal & civil documents',
    ],
  },
  {
    n: 'iii.',
    title: 'Interpretation <span class="em">services</span>',
    tag: 'In-person & remote',
    body: [
      'We provide professional interpretation for immigration interviews, medical appointments, court hearings, and any proceeding where you need a skilled, trusted voice in the room — or on the call.',
      'For elderly clients navigating an unfamiliar system without family support nearby, we offer in-person accompaniment: an interpreter who attends alongside you, explains every exchange in real time, and ensures your voice is heard with full accuracy.',
    ],
    items: [
      'Immigration interview interpretation',
      'Medical appointment interpretation',
      'Court & administrative hearings',
      'In-person accompaniment',
      'Support for elderly clients',
      'Remote interpretation (phone & video)',
      'Haitian Creole, French, Spanish & more',
      'Consecutive & simultaneous modes',
    ],
  },
  {
    n: 'iv.',
    title: 'Haitian passport <span class="em">renewal</span>',
    tag: 'Consular services',
    body: [
      'Renewing a Haitian passport from the United States has its own requirements, timelines, and consular procedures — and the process can feel opaque if you have not done it before. We guide you through every step: gathering the documents the Haitian consulate requires, completing the applications correctly, and coordinating submission on your behalf.',
      'Whether your passport has expired, been lost, or requires a correction, we handle the logistics so that the burden does not fall on you alone.',
    ],
    items: [
      'Expired passport renewal',
      'Lost passport replacement',
      'Document requirement checklist',
      'Consular application preparation',
      'Submission coordination',
      'Name & data corrections',
      'Children\'s passport applications',
      'Status follow-up',
    ],
  },
  {
    n: 'v.',
    title: 'Other official <span class="em">documents</span>',
    tag: 'Vital records & legalization',
    body: [
      'Immigration petitions frequently require official records that must be obtained from abroad — divorce decrees, archive certificates, civil status documents, and more. We know which agencies issue them, what they require, and how to get them authenticated for use in U.S. proceedings.',
      'If a document needs to exist before your case can move forward, this is the place to start.',
    ],
    items: [
      'Divorce certificates & decrees',
      'Archive certificates',
      'Civil status documents',
      'Birth & marriage records',
      'Apostille & authentication',
      'Document legalization',
      'Police clearance letters',
      'Record retrieval from abroad',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>
      <PageHead
        num="№ 03 / 06"
        eyebrow="Services"
        title='What we <span class="em">do</span>.'
        sub="Five services, one standard: clear communication, careful preparation, and an honest assessment of your situation before you commit to anything."
      />

      <div className="container">
        {SERVICES.map((s) => (
          <article key={s.n} className="svc-detail">
            <div className="svc-detail-num">{s.n}</div>
            <div>
              <h2
                className="svc-detail-title"
                dangerouslySetInnerHTML={{ __html: s.title }}
              />
              <div className="svc-detail-tag">— {s.tag}</div>
            </div>
            <div className="svc-detail-body">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <ul className="svc-detail-list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <CTABand />
    </main>
  )
}
