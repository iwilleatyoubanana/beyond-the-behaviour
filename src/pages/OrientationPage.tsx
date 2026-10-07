import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function OrientationPage() {
  const reduced = usePrefersReducedMotion()
  const [blurAssumption, setBlurAssumption] = useState(false)

  useEffect(() => {
    if (reduced) {
      setBlurAssumption(true)
      return
    }
    const timer = window.setTimeout(() => setBlurAssumption(true), 1400)
    return () => window.clearTimeout(timer)
  }, [reduced])

  return (
    <main id="main" className="page page-enter">
      <p className="eyebrow">Before the scenarios</p>
      <h1>Before you enter the classroom…</h1>
      <p className="lede">
        Three key ideas to guide your decisions in these scenarios.
      </p>

      <div className="orient-grid">
        <article className="orient-card orient-card--lead">
          <span className="step-kicker">01</span>
          <h2>Behaviour is not intention.</h2>
          <p>What you observe is real. Why it happened may not be obvious.</p>
          <div className="pair">
            <div className="pair-box">
              <span className="choice-kicker">Observed</span>
              The student has not started the task.
            </div>
            <div className={blurAssumption ? 'pair-box is-blurred' : 'pair-box'}>
              <span className="choice-kicker">Assumption</span>
              <span className="assumption-line">The student does not care.</span>
            </div>
          </div>
        </article>

        <article className="orient-card">
          <span className="step-kicker">02</span>
          <h2>Support, don’t diagnose.</h2>
          <p>
            Teachers can notice patterns, make adjustments, document concerns
            and involve appropriate supports.
          </p>
          <p>Diagnosis is not the teacher’s role.</p>
          <p className="mini-flow">Notice → Document → Support</p>
        </article>

        <article className="orient-card">
          <span className="step-kicker">03</span>
          <h2>No one-size-fits-all response.</h2>
          <p>
            An adjustment is useful when it responds to the student’s actual
            needs, supports participation and independence, and is reviewed
            over time.
          </p>
        </article>
      </div>

      <section className="panel">
        <p className="feedback-label">In every scenario, ask yourself</p>
        <p>
          What do I know? What am I assuming? What could I try? How would I
          know if it helped?
        </p>
        <p>
          Assume the student has an established ADHD diagnosis or support need.
          Your task is not to diagnose. Your task is to decide how to respond.
        </p>
      </section>

      <div className="cta-row">
        <Link className="btn-primary" to="/01">
          Enter Scenario 01 →
        </Link>
      </div>
    </main>
  )
}
