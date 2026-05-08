import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const OFFICE_EMAIL = 'Babelplus24@gmail.com'
const FROM = 'Babel Plus <abed@abedkadaan.com>'

export async function POST(req: Request) {
  const { name, email, phone, service, date, time, note } = await req.json()

  const serviceLabels: Record<string, string> = {
    asylum: 'Asylum',
    translation: 'Document translation',
    interpretation: 'Interpretation',
    passport: 'Passport renewal',
    docs: 'Other documents',
  }

  const serviceLabel = serviceLabels[service] ?? service

  const { error } = await resend.batch.send([
    // Internal notification to the office
    {
      from: FROM,
      to: OFFICE_EMAIL,
      replyTo: email,
      subject: `New booking from ${name} — ${date} at ${time}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${serviceLabel}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time} EST</p>
        ${note ? `<hr /><p><strong>Note:</strong><br />${note.replace(/\n/g, '<br />')}</p>` : ''}
      `,
    },
    // Confirmation email to the client
    {
      from: FROM,
      to: email,
      subject: `Your consultation is confirmed — ${date} at ${time}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for booking a consultation with Babel Plus. Here is a summary of your appointment:</p>
        <p><strong>Date:</strong> ${date}<br />
        <strong>Time:</strong> ${time} EST<br />
        <strong>Service:</strong> ${serviceLabel}<br />
        <strong>Format:</strong> Phone call (1 hour)</p>
        <p>We will call you at <strong>${phone}</strong> at the scheduled time. If you need to reschedule or have any questions beforehand, you can reach us at:</p>
        <p>📞 (774) 493-2817<br />
        ✉️ Babelplus24@gmail.com</p>
        <p>This is an automated notification — please do not reply to this email. To reach us directly, call (774) 493-2817 or email Babelplus24@gmail.com.</p>
        <p>We look forward to speaking with you.</p>
        <p>— The Babel Plus Team</p>
      `,
    },
  ])

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ ok: true })
}
