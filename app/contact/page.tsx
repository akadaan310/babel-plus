import type { Metadata } from 'next'
import PageHead from '@/components/PageHead'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Babel Plus LLC',
  description: 'Write, call, or visit. 9340 North 56th Street, Temple Terrace, Florida 33617.',
}

export default function ContactPage() {
  return (
    <main>
      <PageHead
        num="№ 05 / 06"
        eyebrow="In touch"
        title='Write, <span class="em">call</span>, or visit.'
        sub="The fastest way to reach us is the booking form on the home page — but the door is open here too."
      />
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <ContactForm />
            <div className="contact-info">
              <div className="info-block">
                <h4>Office</h4>
                <p>
                  9340 North 56th Street
                  <br />
                  Temple Terrace, FL 33617
                  <br />
                  United States
                </p>
              </div>
              <div className="info-block">
                <h4>Telephone</h4>
                <p>
                  <a href="tel:+17744932817">(774) 493-2817</a>
                </p>
              </div>
              <div className="info-block">
                <h4>Email</h4>
                <p>
                  <a href="mailto:Babelplus24@gmail.com">Babelplus24@gmail.com</a>
                </p>
              </div>
              <div className="info-block">
                <h4>Hours</h4>
                <p>
                  Monday — Friday
                  <br />
                  9:00 — 18:00 ET
                </p>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=9340+North+56th+Street,+Temple+Terrace,+FL+33617,+USA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="contact-map"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
