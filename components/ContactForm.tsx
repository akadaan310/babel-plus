'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'asylum',
    msg: '',
  })

  if (status === 'done') {
    return (
      <div className="fade-in" style={{ padding: '24px 0' }}>
        <div className="serif-italic" style={{ fontSize: 48, color: 'var(--accent)', lineHeight: 1 }}>
          Thank you.
        </div>
        <p className="body-text" style={{ marginTop: 12 }}>
          We&rsquo;ve received your message and will reply within one business day.
        </p>
      </div>
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="eyebrow">Send a message</div>
      <div className="field-row">
        <div className="field">
          <label>Name *</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label>Phone</label>
          <input
            type="tel"
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
            <option value="asylum">Asylum</option>
            <option value="translation">Document translation</option>
            <option value="interpretation">Interpretation</option>
            <option value="passport">Passport renewal</option>
            <option value="docs">Other documents</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label>Message *</label>
        <textarea
          required
          rows={6}
          value={form.msg}
          onChange={(e) => setForm({ ...form, msg: e.target.value })}
        />
      </div>
      {status === 'error' && (
        <p style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12, margin: 0 }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}
      <button
        className="btn btn-accent btn-arrow"
        type="submit"
        disabled={status === 'loading'}
        style={{ alignSelf: 'flex-start', opacity: status === 'loading' ? 0.6 : 1 }}
      >
        {status === 'loading' ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}
