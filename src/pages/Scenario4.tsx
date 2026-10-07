import { useMemo, useState } from 'react'
import { ChoiceButton } from '../components/ChoiceButton'
import { FeedbackPanel } from '../components/FeedbackPanel'
import { KeyIdea } from '../components/KeyIdea'
import { PhotoPrint } from '../components/PhotoPrint'
import { ReviewPanel } from '../components/ReviewPanel'
import { StudentVoicePanel } from '../components/StudentVoicePanel'
import { img } from '../lib/images'
import type { Feedback } from '../types'

const RESPONSES: Record<string, Feedback> = {
  a: {
    getsRight: [
      'Takes the documented support need seriously.',
      'Does not abandon an adjustment because it is awkward.',
    ],
    mayMiss: [
      'Treats the plan as more important than dignity and stigma.',
      'Can make support feel like something done to Priya, not with her.',
    ],
    nextStep:
      'Keep the need on the table. Explore a less visible way to meet it, then agree when you will review.',
  },
  b: {
    getsRight: ['Takes Priya’s discomfort seriously.'],
    mayMiss: [
      'Treats student voice as an instruction to stop all support.',
      'May leave the original barrier unaddressed.',
    ],
    nextStep:
      'Ask what feels helpful and what feels embarrassing. Student voice matters; it does not cancel educational need.',
  },
  c: {
    getsRight: [
      'Protects dignity.',
      'Keeps the support need visible to the teacher.',
      'Makes room for a less visible alternative and a review point.',
    ],
    mayMiss: [
      'Not every preferred option will be feasible or reasonable.',
      'Others may still need to be involved through school processes.',
    ],
    nextStep:
      'Co-design qualities of the adjustment, then try one version and review it.',
  },
}

const QUALITIES = [
  { id: 'discreet', label: 'Discreet' },
  { id: 'accessible', label: 'Accessible' },
  { id: 'consistent', label: 'Consistent' },
  { id: 'participation', label: 'Preserves participation' },
  { id: 'independence', label: 'Supports independence' },
  { id: 'reviewable', label: 'Reviewable' },
  { id: 'acceptable', label: 'Acceptable to the student' },
]

const INDICATORS = [
  { id: 'used', label: 'Whether the adjustment is actually used' },
  { id: 'participation', label: 'Participation in class or assessment' },
  { id: 'completion', label: 'Task completion' },
  { id: 'useful', label: 'Priya’s view of usefulness' },
  { id: 'stigma', label: 'Priya’s view of embarrassment or stigma' },
  { id: 'change', label: 'Whether the adjustment should be changed' },
  { id: 'necessary', label: 'Whether this support remains necessary' },
]

export function Scenario4() {
  const [response, setResponse] = useState<string | null>(null)
  const [qualities, setQualities] = useState<string[]>([])
  const [review, setReview] = useState<string[]>([])

  const toggleQuality = (id: string) => {
    setQualities((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  const toggleReview = (id: string) => {
    setReview((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  const composed = useMemo(() => {
    if (qualities.length === 0) return null
    const discreet = qualities.includes('discreet')
    const independence = qualities.includes('independence')
    return discreet
      ? `Try a private written checklist and extra time arranged without announcement.${
          independence
            ? ' Priya keeps the checklist; you review it together after the next assessment.'
            : ' Review after the next assessment whether it is used, and how it felt.'
        }`
      : `Try a support that is visible only to Priya first — for example a quieter assessment space booked as a routine, not a special announcement.${
          qualities.includes('reviewable')
            ? ' Set a date to ask whether it helped, embarrassed her, or should change.'
            : ' Ask after the next task whether it should stay.'
        }`
  }, [qualities])

  return (
    <main id="main" className="page page-enter">
      <p className="eyebrow">Scenario 04 · Year 10</p>
      <h1>I don’t want special treatment.</h1>

      <section className="scene-open">
        <PhotoPrint
          src={img('students-writing.jpg')}
          alt="A student walking a library aisle, seen from behind."
          caption="The offer is reasonable. The visibility is the problem."
        />
        <div>
          <p className="muted">Adjustment offered: extra time and a written checklist</p>
          <p className="thought">
            “I don’t want everyone knowing. It makes me look different.”
          </p>
          <p>
            Priya has an established support need. She is not refusing help in
            the abstract. She is refusing being marked out.
          </p>
        </div>
      </section>

      <section className="panel">
        <p className="feedback-label">The teacher tension</p>
        <p>
          You are holding support need, student preference, stigma,
          participation, independence, existing plans, practicality, and school
          obligations at the same time.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <span className="step-kicker">Respond concretely</span>
        <h2>How do you answer Priya?</h2>
        <div className="choice-grid">
          <ChoiceButton
            letter="A"
            selected={response === 'a'}
            onSelect={() => setResponse('a')}
          >
            “It’s on your plan, so we have to use it.”
          </ChoiceButton>
          <ChoiceButton
            letter="B"
            selected={response === 'b'}
            onSelect={() => setResponse('b')}
          >
            “Okay. Then we’ll stop all adjustments.”
          </ChoiceButton>
          <ChoiceButton
            letter="C"
            selected={response === 'c'}
            onSelect={() => setResponse('c')}
          >
            Explore privately what feels helpful, what feels embarrassing, and
            whether a less visible alternative is possible. Then agree what to
            try, when to review it, and who else needs to be involved.
          </ChoiceButton>
        </div>
      </section>

      {response ? (
        <div style={{ marginTop: '1.5rem' }}>
          <FeedbackPanel feedback={RESPONSES[response]} />
          <div className="panel" style={{ marginTop: '1rem' }}>
            <p>
              Student voice matters. It does not mean every requested option
              must automatically be provided. Adjustments still depend on
              educational need, participation, safety, feasibility, reasonable
              adjustment obligations, and school processes.
            </p>
          </div>
        </div>
      ) : null}

      {response ? (
        <section style={{ marginTop: '2.5rem' }}>
          <span className="step-kicker">Co-design</span>
          <h2>What should this adjustment be like?</h2>
          <p>Choose the qualities that matter most in this situation.</p>
          <div className="quality-grid">
            {QUALITIES.map((item) => (
              <button
                key={item.id}
                type="button"
                className={qualities.includes(item.id) ? 'chip is-on' : 'chip'}
                onClick={() => toggleQuality(item.id)}
                aria-pressed={qualities.includes(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          {composed ? (
            <div className="panel" style={{ marginTop: '1.25rem' }}>
              <p className="feedback-label">A version to try</p>
              <p>{composed}</p>
              <p className="muted" style={{ marginBottom: 0 }}>
                An adjustment is not successful because it exists on paper. It
                has to work in practice for the student.
              </p>
            </div>
          ) : null}
        </section>
      ) : null}

      {qualities.length > 0 ? (
        <div style={{ marginTop: '2rem' }}>
          <StudentVoicePanel
            question="What would support you without making you feel singled out?"
            quote="If it looks like something everyone could use, I can take it. If it’s just me, I won’t."
          />
          <div style={{ marginTop: '2rem' }}>
            <ReviewPanel
              indicators={INDICATORS}
              selected={review}
              onToggle={toggleReview}
            />
            <KeyIdea to="/toolkit" cta="Open the teacher toolkit →">
              An adjustment has to work in practice, not only on paper.
            </KeyIdea>
          </div>
        </div>
      ) : null}
    </main>
  )
}
