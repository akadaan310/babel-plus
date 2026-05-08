'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'family',
    msg: '',
  })

  if (sent) {
    return (
      <div className="fade-in" style={{ padding: '24px 0' }}>
        <div className="serif-italic" style={{ fontSize: 48, color: 'var(--accent)', lineHeight: 1 }}>
          Thank you.
        </div>
        <p className="body-text" style={{ marginTop: 12 }}>
          We&rsquo;ve received your note and will reply within one business day.
        </p>
      </div>
    )
  }

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className="eyebrow">Send a message</div>
      <div className="field-row">
        <div className="field">
          <label>Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label>Phone</label>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Subject</label>
          <select
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          >
            <option value="family">Family-based / Green card</option>
            <option value="employ">Employment visa</option>
            <option value="natz">Citizenship</option>
            <option value="asylum">Asylum &amp; humanitarian</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label>Message</label>
        <textarea
          rows={6}
          value={form.msg}
          onChange={(e) => setForm({ ...form, msg: e.target.value })}
          required
        />
      </div>
      <button
        className="btn btn-accent btn-arrow"
        type="submit"
        style={{ alignSelf: 'flex-start' }}
      >
        Send
      </button>
    </form>
  )
}
