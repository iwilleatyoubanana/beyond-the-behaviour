import type { ReviewIndicator } from '../types'

type ReviewPanelProps = {
  indicators: ReviewIndicator[]
  selected: string[]
  onToggle: (id: string) => void
}

export function ReviewPanel({ indicators, selected, onToggle }: ReviewPanelProps) {
  return (
    <section>
      <span className="step-kicker">Review impact</span>
      <h2>What would tell you whether the support is helping?</h2>
      <p className="muted">
        A strategy is not successful simply because it sounds reasonable. Look
        for observable indicators — including the student’s own view.
      </p>
      <div className="review-list" role="group" aria-label="Possible indicators">
        {indicators.map((item) => {
          const checked = selected.includes(item.id)
          return (
            <label key={item.id} className="review-item">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(item.id)}
              />
              <span>{item.label}</span>
            </label>
          )
        })}
      </div>
    </section>
  )
}
