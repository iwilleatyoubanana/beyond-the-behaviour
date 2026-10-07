import { Link } from 'react-router-dom'

const STEPS = [
  {
    title: 'Notice',
    ask: 'What happened?',
    example:
      'Maya has not started three minutes after the instructions. That is the observation. It is not yet a story about care.',
  },
  {
    title: 'Interpret carefully',
    ask: 'What do you know? What are you assuming?',
    example:
      'Noah understands the content and has a pattern of late longer tasks. “He does not care” is still an assumption.',
  },
  {
    title: 'Respond concretely',
    ask: 'What small support or boundary fits the barrier?',
    example:
      'Eli interrupted. A brief cue can return the turn to the peer. The classroom expectation stays. The public shaming does not have to.',
  },
  {
    title: 'Ask the student',
    ask: 'What helps? What feels unhelpful or stigmatising?',
    example:
      'Priya is not refusing support. She is refusing being marked out. Ask what would work without making her look different.',
  },
  {
    title: 'Review impact',
    ask: 'What tells you whether it is working?',
    example:
      'Time to begin, missed milestones, whether a cue is used, whether an adjustment is actually taken up, and the student’s own view.',
  },
]

export function TeacherToolkit() {
  return (
    <main id="main" className="page page-enter">
      <p className="eyebrow">After the scenarios</p>
      <h1>A simple framework for everyday decisions.</h1>
      <p className="lede">
        Notice. Interpret carefully. Respond concretely. Ask the student.
        Review impact.
      </p>

      <div className="framework">
        {STEPS.map((step) => (
          <details key={step.title} className="framework-item">
            <summary>
              {step.title}
              <span className="muted" style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '1rem', marginTop: 6 }}>
                {step.ask}
              </span>
            </summary>
            <div className="framework-body">
              <p>{step.example}</p>
            </div>
          </details>
        ))}
      </div>

      <p className="quote-mark">
        If the strategy is not helping, change the strategy — not the story you
        tell yourself about the student.
      </p>

      <div className="cta-row">
        <Link className="btn-primary" to="/reflect">
          Pause and think →
        </Link>
      </div>
    </main>
  )
}
