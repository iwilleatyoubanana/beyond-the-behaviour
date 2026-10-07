import type { Feedback } from '../types'

export function FeedbackPanel({ feedback }: { feedback: Feedback }) {
  return (
    <section className="stack" aria-live="polite">
      <div className="feedback-grid">
        <div className="panel">
          <p className="feedback-label">What this response gets right</p>
          <ul>
            {feedback.getsRight.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <p className="feedback-label">What it may miss</p>
          <ul>
            {feedback.mayMiss.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="panel">
        <p className="feedback-label">A stronger next step</p>
        <p>{feedback.nextStep}</p>
      </div>
    </section>
  )
}
