'use client'
import { useState, useMemo } from 'react'

const SERVICES = [
  { id: 'asylum', label: 'Asylum' },
  { id: 'translation', label: 'Document translation' },
  { id: 'interpretation', label: 'Interpretation' },
  { id: 'passport', label: 'Passport renewal' },
  { id: 'docs', label: 'Other documents' },
]

function slotsFor(dt: Date) {
  const base = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']
  return base.map((t) => ({
    t,
    available: true,
    unavail: false,
  }))
}

function formatDate(d: Date | null) {
  if (!d) return '—'
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })
}

export default function BookingWidget() {
  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() })
  const [service, setService] = useState('asylum')
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState<string | null>(null)
  const [step, setStep] = useState<'schedule' | 'details' | 'done'>('schedule')
  const [details, setDetails] = useState({ name: '', email: '', phone: '', note: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const monthName = new Date(view.y, view.m, 1).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  const firstDow = new Date(view.y, view.m, 1).getDay()
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate()
  const cells: Array<{ empty: true; key: string } | { d: number; dateObj: Date; past: boolean; weekend: boolean; key: string }> = []
  for (let i = 0; i < firstDow; i++) cells.push({ empty: true, key: `e${i}` })
  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(view.y, view.m, d)
    const dow = dateObj.getDay()
    cells.push({ d, dateObj, past: dateObj < today, weekend: dow === 0 || dow === 6, key: `d${d}` })
  }

  const slots = date ? slotsFor(date) : []

  function navMonth(delta: number) {
    let m = view.m + delta
    let y = view.y
    if (m < 0) { m = 11; y-- }
    if (m > 11) { m = 0; y++ }
    if (y < today.getFullYear() || (y === today.getFullYear() && m < today.getMonth())) return
    setView({ y, m })
  }

  if (step === 'done') {
    return (
      <aside className="booking-card" id="booking">
        <div className="booking-success fade-in">
          <div className="booking-success-mark">✓</div>
          <h3 className="display display-m" style={{ marginTop: 16 }}>
            You&rsquo;re <span className="serif-italic">scheduled</span>.
          </h3>
          <p className="body-text" style={{ marginTop: 12 }}>
            We&rsquo;ve sent a confirmation to{' '}
            <strong style={{ color: 'var(--ink)' }}>{details.email}</strong>.
            We will call you on{' '}
            <strong style={{ color: 'var(--ink)' }}>{formatDate(date)}</strong> at{' '}
            <strong style={{ color: 'var(--ink)' }}>{time}</strong>.
          </p>
          <button
            className="btn btn-outline"
            style={{ marginTop: 24 }}
            onClick={() => {
              setStep('schedule')
              setDate(null)
              setTime(null)
              setDetails({ name: '', email: '', phone: '', note: '' })
            }}
          >
            Book another
          </button>
        </div>
      </aside>
    )
  }

  return (
    <aside className="booking-card" id="booking">
      <div className="booking-head">
        <h3 className="booking-title">
          Book a <span className="em">consultation</span>
        </h3>
        <span className="booking-free">No fee</span>
      </div>

      {step === 'schedule' && (
        <>
          <div className="booking-step">
            <span className="booking-step-num">1</span>
            <span className="booking-step-label">Matter</span>
          </div>
          <div className="svc-pills">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                className={`svc-pill${service === s.id ? ' selected' : ''}`}
                onClick={() => setService(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="booking-step">
            <span className="booking-step-num">2</span>
            <span className="booking-step-label">Date</span>
          </div>
          <div className="cal-wrap">
            <div className="cal-head">
              <span className="cal-month">{monthName}</span>
              <div className="cal-nav">
                <button onClick={() => navMonth(-1)} aria-label="Previous month">‹</button>
                <button onClick={() => navMonth(1)} aria-label="Next month">›</button>
              </div>
            </div>
            <div className="cal-grid">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                <div key={i} className="cal-dow">{d}</div>
              ))}
              {cells.map((c) => {
                if ('empty' in c) return <div key={c.key} className="cal-day empty" />
                const disabled = c.past || c.weekend
                const selected =
                  date !== null &&
                  date.getDate() === c.d &&
                  date.getMonth() === view.m &&
                  date.getFullYear() === view.y
                return (
                  <button
                    key={c.key}
                    className={[
                      'cal-day',
                      disabled ? 'muted' : 'has-slots',
                      selected ? 'selected' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    disabled={disabled}
                    onClick={() => { setDate(c.dateObj); setTime(null) }}
                  >
                    {c.d}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="booking-step">
            <span className="booking-step-num">3</span>
            <span className="booking-step-label">Time · Eastern</span>
          </div>
          {date ? (
            <div className="slots">
              {slots.map((s) => (
                <button
                  key={s.t}
                  className={`slot${time === s.t ? ' selected' : ''}`}
                  disabled={s.unavail || !s.available}
                  onClick={() => setTime(s.t)}
                >
                  {s.t}
                </button>
              ))}
            </div>
          ) : (
            <p
              className="body-text"
              style={{ fontSize: 13, color: 'var(--ink-mute)', fontStyle: 'italic', margin: 0 }}
            >
              Select a date to see available times.
            </p>
          )}

          <div className="booking-summary">
            <span>
              {date ? formatDate(date) : 'Pick a date'}{' '}
              {time && <span className="em">· {time}</span>}
            </span>
            <span className="label-mono">1 hr · phone</span>
          </div>
          <button
            className="btn btn-accent btn-arrow booking-confirm"
            disabled={!date || !time}
            style={{ opacity: !date || !time ? 0.45 : 1, cursor: !date || !time ? 'not-allowed' : 'pointer' }}
            onClick={() => setStep('details')}
          >
            Continue
          </button>
        </>
      )}

      {step === 'details' && (
        <div className="fade-in">
          <div className="booking-step">
            <span className="booking-step-num">4</span>
            <span className="booking-step-label">Your details</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="field">
              <label>Full name *</label>
              <input
                required
                value={details.name}
                onChange={(e) => setDetails({ ...details, name: e.target.value })}
                placeholder="Maria Hernández"
              />
            </div>
            <div className="field-row">
              <div className="field">
                <label>Email *</label>
                <input
                  required
                  type="email"
                  value={details.email}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label>Phone *</label>
                <input
                  required
                  type="tel"
                  value={details.phone}
                  onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                  placeholder="(774) 493-2817"
                />
              </div>
            </div>
            <div className="field">
              <label>Briefly, what brings you in?</label>
              <textarea
                rows={3}
                value={details.note}
                onChange={(e) => setDetails({ ...details, note: e.target.value })}
                placeholder="A few sentences on your situation…"
              />
            </div>
          </div>
          <div className="booking-summary" style={{ marginTop: 18 }}>
            <span>
              {formatDate(date)} <span className="em">· {time}</span>
            </span>
            <span className="label-mono">
              {SERVICES.find((s) => s.id === service)?.label}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <button
              className="btn btn-outline"
              onClick={() => setStep('schedule')}
              style={{ flex: '0 0 auto' }}
            >
              Back
            </button>
            {submitError && (
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 11, margin: 0 }}>
                Something went wrong. Please try again.
              </p>
            )}
            <button
              className="btn btn-accent btn-arrow"
              style={{
                flex: 1,
                justifyContent: 'center',
                opacity: details.name && details.email && details.phone && !submitting ? 1 : 0.45,
                cursor: details.name && details.email && details.phone && !submitting ? 'pointer' : 'not-allowed',
              }}
              disabled={!details.name || !details.email || !details.phone || submitting}
              onClick={async () => {
                setSubmitting(true)
                setSubmitError(false)
                try {
                  const res = await fetch('/api/booking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      name: details.name,
                      email: details.email,
                      phone: details.phone,
                      note: details.note,
                      service,
                      date: formatDate(date),
                      time,
                    }),
                  })
                  if (!res.ok) throw new Error()
                  setStep('done')
                } catch {
                  setSubmitError(true)
                } finally {
                  setSubmitting(false)
                }
              }}
            >
              {submitting ? 'Confirming…' : 'Confirm booking'}
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}
