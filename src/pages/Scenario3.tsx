import { useState } from 'react'
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
    getsRight: ['Protects the classroom rule and names that the behaviour has continued.'],
    mayMiss: [
      'May escalate conflict or shame when a lower-key response may have been sufficient.',
      'Treats the interruption as deliberate disrespect before checking.',
    ],
    nextStep:
      'Keep the expectation. Return the speaking turn first, then follow up privately if needed.',
  },
  b: {
    getsRight: ['Tries to avoid embarrassing Eli.'],
    mayMiss: [
      'Fails to protect peer participation.',
      'Leaves the discussion norm unclear.',
    ],
    nextStep:
      'A brief, neutral cue can protect both Eli’s dignity and the peer’s turn.',
  },
  c: {
    getsRight: [
      'Maintains the expectation.',
      'Protects the peer’s turn.',
      'Reduces unnecessary public escalation.',
    ],
    mayMiss: [
      'The cue still has to be agreed and practised.',
      'Relationship research supports care about conflict; it does not prove one script is best for ADHD.',
    ],
    nextStep:
      'Agree a replacement behaviour Eli can use before the next discussion.',
  },
}

const CUES = [
  { id: 'signal', label: 'A discreet hand signal' },
  { id: 'note', label: 'Jot the idea down before speaking' },
  { id: 'visual', label: 'A visual reminder on the desk' },
  { id: 'pre', label: 'A quick pre-discussion reminder' },
]

const INDICATORS = [
  { id: 'count', label: 'Interruptions during one defined discussion segment' },
  { id: 'corrections', label: 'Need for repeated teacher corrections' },
  { id: 'peers', label: 'Whether peers can finish a turn' },
  { id: 'used', label: 'Whether the agreed cue is actually used' },
  { id: 'feel', label: 'Eli’s view of whether the cue feels workable' },
]

export function Scenario3() {
  const [known, setKnown] = useState<string[]>([])
  const [response, setResponse] = useState<string | null>(null)
  const [cue, setCue] = useState<string | null>(null)
  const [review, setReview] = useState<string[]>([])

  const toggleKnown = (id: string) => {
    setKnown((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  const toggleReview = (id: string) => {
    setReview((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  return (
    <main id="main" className="page page-enter">
      <p className="eyebrow">Scenario 03 · Year 8 humanities</p>
      <h1>He interrupted again.</h1>

      <section className="scene-open">
        <PhotoPrint
          src={img('students-desks.jpg')}
          alt="Students facing the front of a classroom during a discussion."
          caption="Third interruption. Same lesson."
        />
        <div>
          <p className="muted">Class discussion · peer sharing a source</p>
          <p className="thought">“He knows the rule.”</p>
          <p>
            Eli cuts across another student for the third time. The behaviour
            is visible. The intention is not.
          </p>
        </div>
      </section>

      <section>
        <span className="step-kicker">Notice</span>
        <h2>What do you actually know?</h2>
        <p className="muted">Select every statement that is observable or contextual.</p>
        <div className="choice-grid">
          <ChoiceButton
            letter="A"
            selected={known.includes('a')}
            tone="observation"
            onSelect={() => toggleKnown('a')}
          >
            Eli interrupted a peer.
          </ChoiceButton>
          <ChoiceButton
            letter="B"
            selected={known.includes('b')}
            tone="assumption"
            onSelect={() => toggleKnown('b')}
          >
            Eli is trying to be disrespectful.
          </ChoiceButton>
          <ChoiceButton
            letter="C"
            selected={known.includes('c')}
            tone="observation"
            onSelect={() => toggleKnown('c')}
          >
            The behaviour is affecting turn-taking in the discussion.
          </ChoiceButton>
        </div>
      </section>

      {known.length > 0 ? (
        <div className="panel" style={{ marginTop: '1.25rem' }}>
          <p>A and C are observable or contextual. B assumes intention.</p>
          <p>
            ADHD does not remove classroom expectations. Behaviour should not
            automatically be interpreted as deliberate disrespect.
          </p>
        </div>
      ) : null}

      {known.length > 0 ? (
        <section style={{ marginTop: '2.5rem' }}>
          <span className="step-kicker">Respond concretely</span>
          <h2>What do you do in the moment?</h2>
          <div className="choice-grid">
            <ChoiceButton
              letter="A"
              selected={response === 'a'}
              onSelect={() => setResponse('a')}
            >
              Publicly say: “Eli, stop interrupting. You’ve been told three
              times.”
            </ChoiceButton>
            <ChoiceButton
              letter="B"
              selected={response === 'b'}
              onSelect={() => setResponse('b')}
            >
              Ignore the interruption so Eli is not embarrassed.
            </ChoiceButton>
            <ChoiceButton
              letter="C"
              selected={response === 'c'}
              onSelect={() => setResponse('c')}
            >
              Use a brief, neutral cue to return the speaking turn to the peer.
              Follow up privately if needed.
            </ChoiceButton>
          </div>
        </section>
      ) : null}

      {response ? (
        <div style={{ marginTop: '1.5rem' }}>
          <FeedbackPanel feedback={RESPONSES[response]} />
        </div>
      ) : null}

      {response ? (
        <section style={{ marginTop: '2.5rem' }}>
          <span className="step-kicker">A replacement behaviour</span>
          <h2>What cue would help Eli catch himself before he jumps in?</h2>
          <p>
            The goal is not to remove the expectation. It is to make the
            expectation more achievable.
          </p>
          <div className="cue-grid">
            {CUES.map((item) => (
              <button
                key={item.id}
                type="button"
                className={cue === item.id ? 'chip is-on' : 'chip'}
                onClick={() => setCue(item.id)}
                aria-pressed={cue === item.id}
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {cue ? (
        <div style={{ marginTop: '2rem' }}>
          <StudentVoicePanel
            question="Ask Eli which cue he can actually use in a live discussion."
            quote="If I write it down first, I don’t lose the idea. Then I can wait."
          />
          <div style={{ marginTop: '2rem' }}>
            <ReviewPanel
              indicators={INDICATORS}
              selected={review}
              onToggle={toggleReview}
            />
            <KeyIdea to="/04" cta="Continue to Scenario 04 →">
              Support does not replace boundaries. It helps students meet them.
            </KeyIdea>
          </div>
        </div>
      ) : null}
    </main>
  )
}
