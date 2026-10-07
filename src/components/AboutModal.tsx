import { useEffect, useId, useRef } from 'react'
import { useExperience } from '../context/Experience'

export function AboutModal() {
  const { aboutOpen, setAboutOpen } = useExperience()
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!aboutOpen) return
    closeRef.current?.focus()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setAboutOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [aboutOpen, setAboutOpen])

  if (!aboutOpen) return null

  return (
    <div className="modal-backdrop" onClick={() => setAboutOpen(false)}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id={titleId}>About this resource</h2>
        <p>
          This resource is designed for secondary teachers working with
          students who have an established ADHD diagnosis or identified support
          need.
        </p>
        <p>
          It focuses on classroom decision-making rather than diagnosis.
          Teachers support; they do not diagnose.
        </p>
        <p>The scenarios ask you to:</p>
        <ul>
          <li>notice observable behaviour</li>
          <li>distinguish observation from assumption</li>
          <li>consider possible barriers</li>
          <li>choose a response</li>
          <li>hear the student perspective</li>
          <li>review whether support is helping</li>
        </ul>
        <p className="muted">
          ADHD support is not one-size-fits-all. Maintaining expectations and
          providing support are not opposites.
        </p>
        <button
          ref={closeRef}
          type="button"
          className="btn-primary"
          onClick={() => setAboutOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  )
}
