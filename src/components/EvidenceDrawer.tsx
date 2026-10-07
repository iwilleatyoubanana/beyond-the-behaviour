import { useEffect, useId, useRef } from 'react'
import { useExperience } from '../context/Experience'
import { evidenceByScenario, evidenceKindLabel } from '../data/evidence'

export function EvidenceDrawer() {
  const { evidenceOpen, setEvidenceOpen, evidenceScenario } = useExperience()
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const entries = evidenceScenario ? evidenceByScenario[evidenceScenario] : []

  useEffect(() => {
    if (!evidenceOpen) return
    closeRef.current?.focus()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setEvidenceOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [evidenceOpen, setEvidenceOpen])

  if (!evidenceOpen || !evidenceScenario) return null

  return (
    <div className="drawer-backdrop" onClick={() => setEvidenceOpen(false)}>
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="btn-text"
          onClick={() => setEvidenceOpen(false)}
        >
          Close
        </button>
        <p className="eyebrow">Scenario {evidenceScenario}</p>
        <h2 id={titleId}>Evidence</h2>
        <p className="muted">
          These notes keep research, guidance, theory and lived experience
          distinct. A recognised adjustment is not automatically an
          experimentally proven intervention for every student.
        </p>
        {entries.map((entry) => (
          <article key={entry.id} className="evidence-card">
            <span className="kind-pill">{evidenceKindLabel[entry.kind]}</span>
            <h3>Why this response?</h3>
            <p>{entry.why}</p>
            <h3>Evidence</h3>
            <p>
              {entry.source.author}, {entry.source.year}. {entry.source.title}.
            </p>
            <h3>What it supports</h3>
            <p>{entry.supports}</p>
            <h3>Limitation</h3>
            <p>{entry.limitation}</p>
            <p>
              <a href={entry.url} target="_blank" rel="noreferrer">
                View source
              </a>
            </p>
          </article>
        ))}
      </aside>
    </div>
  )
}
