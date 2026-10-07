import { useState } from 'react'
import { Link } from 'react-router-dom'

export function FinalReflection() {
  const [assumption, setAssumption] = useState('')
  const [change, setChange] = useState('')

  return (
    <main id="main" className="page page-enter">
      <p className="eyebrow">Reflection</p>
      <h1>Pause and think…</h1>
      <p className="lede">
        There is no score. The useful ending is a more careful next decision.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <label htmlFor="assumption">
          What assumption are you most likely to make under pressure?
        </label>
        <textarea
          id="assumption"
          className="reflect-field"
          value={assumption}
          onChange={(event) => setAssumption(event.target.value)}
        />
      </section>

      <section style={{ marginTop: '1.75rem' }}>
        <label htmlFor="change">
          What is one response you would change in your own classroom tomorrow?
        </label>
        <textarea
          id="change"
          className="reflect-field"
          value={change}
          onChange={(event) => setChange(event.target.value)}
        />
      </section>

      <p className="quote-mark">
        See the behaviour. Question the assumption. Support the student. Review
        what works.
      </p>

      <p className="muted">
        These notes stay on this device for this session. Nothing is submitted
        or stored on a server.
      </p>

      <div className="cta-row">
        <Link className="btn-secondary" to="/">
          Return to the start
        </Link>
      </div>
    </main>
  )
}
