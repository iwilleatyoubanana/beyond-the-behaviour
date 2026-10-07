import { useEffect, useId, useState } from 'react'
import { useExperience } from '../context/Experience'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Phase =
  | 'lazy'
  | 'disruptive'
  | 'careless'
  | 'pause'
  | 'question'
  | 'done'

const PHASES: { id: Phase; ms: number }[] = [
  { id: 'lazy', ms: 1100 },
  { id: 'disruptive', ms: 1100 },
  { id: 'careless', ms: 1100 },
  { id: 'pause', ms: 400 },
  { id: 'question', ms: 1600 },
]

export function IntroSequence() {
  const { introComplete, finishIntro } = useExperience()
  const reduced = usePrefersReducedMotion()
  const [phase, setPhase] = useState<Phase>(reduced ? 'question' : 'lazy')
  const [visible, setVisible] = useState(true)
  const titleId = useId()

  useEffect(() => {
    if (introComplete) return

    if (reduced) {
      const timer = window.setTimeout(finishIntro, 1400)
      return () => window.clearTimeout(timer)
    }

    let index = 0
    let timeout = window.setTimeout(function tick() {
      const next = PHASES[index + 1]
      if (!next) {
        setVisible(false)
        window.setTimeout(finishIntro, 280)
        return
      }
      index += 1
      setPhase(next.id)
      timeout = window.setTimeout(tick, next.ms)
    }, PHASES[0].ms)

    return () => window.clearTimeout(timeout)
  }, [finishIntro, introComplete, reduced])

  if (introComplete) return null

  return (
    <div
      className="intro"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <h1 id={titleId} className="visually-hidden">
        Opening
      </h1>
      {visible && phase === 'lazy' ? (
        <p className="intro-word intro-anim">LAZY?</p>
      ) : null}
      {visible && phase === 'disruptive' ? (
        <p className="intro-word is-wide intro-anim">DISRUPTIVE?</p>
      ) : null}
      {visible && phase === 'careless' ? (
        <p className="intro-word is-offset intro-anim">CARELESS?</p>
      ) : null}
      {visible && phase === 'question' ? (
        <p className="intro-line intro-anim-soft">
          What if the behaviour is only the part you can see?
        </p>
      ) : null}
      <button type="button" className="btn-text intro-skip" onClick={finishIntro}>
        Skip intro
      </button>
    </div>
  )
}
