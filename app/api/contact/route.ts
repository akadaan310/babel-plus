import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO = 'Babelplus24@gmail.com'
const FROM = 'Babel Plus <abed@abedkadaan.com>'

export async function POST(req: Request) {
  const { name, email, phone, subject, msg } = await req.json()

  const subjectLabels: Record<string, string> = {
    asylum: 'Asylum',
    translation: 'Document translation',
    interpretation: 'Interpretation',
    passport: 'Passport renewal',
    docs: 'Other documents',
    other: 'Other',
  }

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `New message from ${name} — ${subjectLabels[subject] ?? subject}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || '—'}</p>
      <p><strong>Subject:</strong> ${subjectLabels[subject] ?? subject}</p>
      <hr />
      <p>${msg.replace(/\n/g, '<br />')}</p>
    `,
  })

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ ok: true })
}
