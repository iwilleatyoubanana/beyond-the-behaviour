import { useState } from 'react'
import { ChoiceButton } from '../components/ChoiceButton'
import { FeedbackPanel } from '../components/FeedbackPanel'
import { KeyIdea } from '../components/KeyIdea'
import { PhotoPrint } from '../components/PhotoPrint'
import { ReviewPanel } from '../components/ReviewPanel'
import { StudentVoicePanel } from '../components/StudentVoicePanel'
import { img } from '../lib/images'
import type { Feedback } from '../types'

const OBSERVATION_TONE = {
  a: 'observation',
  b: 'assumption',
  c: 'assumption',
} as const

const RESPONSES: Record<string, Feedback> = {
  a: {
    getsRight: ['Communicates that the task expectation still exists.'],
    mayMiss: [
      'Assumes the delay reflects unwillingness.',
      'Does not check whether the barrier is task initiation, working memory, confusion or something else.',
      'Public correction may be unnecessary.',
    ],
    nextStep: 'Check the barrier first while maintaining the expectation.',
  },
  b: {
    getsRight: ['Recognises Maya may need clarification.'],
    mayMiss: [
      'Repeating the entire verbal sequence may add more working-memory demand.',
      'The issue may not be hearing the instructions.',
    ],
    nextStep: 'A brief check-in, then one visible first step.',
  },
  c: {
    getsRight: [
      'Checks rather than assumes.',
      'Supports task initiation.',
      'Can reduce unnecessary verbal load.',
      'Keeps the learning expectation.',
    ],
    mayMiss: [
      'The support still needs to be individualised.',
      'It should not become automatic without reviewing whether it helps.',
    ],
    nextStep:
      'Ask Maya which part feels unclear, then watch whether the first step actually helps her begin.',
  },
}

const INDICATORS = [
  { id: 'begin', label: 'Time taken to begin after the check-in' },
  { id: 'prompts', label: 'Number of teacher prompts still required' },
  { id: 'engage', label: 'Task engagement after the first step is made visible' },
  { id: 'maya', label: 'Maya’s own view of whether the support is useful' },
]

export function Scenario1() {
  const [observation, setObservation] = useState<string | null>(null)
  const [response, setResponse] = useState<string | null>(null)
  const [asked, setAsked] = useState(false)
  const [review, setReview] = useState<string[]>([])

  const toggleReview = (id: string) => {
    setReview((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  return (
    <main id="main" className="page page-enter">
      <p className="eyebrow">Scenario 01</p>
      <h1>He still hasn’t started.</h1>

      <section className="scene-open">
        <PhotoPrint
          src={img('notebook.jpg')}
          alt="An open notebook and idle pen on a desk, three minutes into a task."
          caption="Three minutes after the instructions… Maya still hasn’t started."
        />
        <div>
          <p className="muted">Year 9 · English · Independent writing</p>
          <p className="thought">
            “She knows what to do. Why isn’t she starting?”
          </p>
          <p>
            Freeze the moment. Before you interpret Maya, separate what
            happened from the meaning you might be adding.
          </p>
        </div>
      </section>

      <section>
        <span className="step-kicker">Notice</span>
        <h2>What do you actually know?</h2>
        <div className="choice-grid">
          <ChoiceButton
            letter="A"
            selected={observation === 'a'}
            tone={OBSERVATION_TONE.a}
            onSelect={() => setObservation('a')}
          >
            Maya has not started the task yet.
          </ChoiceButton>
          <ChoiceButton
            letter="B"
            selected={observation === 'b'}
            tone={OBSERVATION_TONE.b}
            onSelect={() => setObservation('b')}
          >
            Maya is avoiding the task.
          </ChoiceButton>
          <ChoiceButton
            letter="C"
            selected={observation === 'c'}
            tone={OBSERVATION_TONE.c}
            onSelect={() => setObservation('c')}
          >
            Maya forgot the instructions.
          </ChoiceButton>
        </div>
      </section>

      {observation ? (
        <section className="stack" style={{ marginTop: '1.5rem' }}>
          <div className="panel">
            <p className="feedback-label">Observed</p>
            <p>Maya has not started.</p>
            <p>
              Possible explanations may include an unclear first step,
              competing attention, working-memory demand, uncertainty,
              avoidance, or something else.
            </p>
            <p className="muted" style={{ marginBottom: 0 }}>
              What you cannot know yet is which explanation is operating.
              {observation !== 'a'
                ? ' B and C add a cause. That cause still needs checking.'
                : ' A stays with what you can see.'}
            </p>
          </div>
        </section>
      ) : null}

      {observation ? (
        <section style={{ marginTop: '2.5rem' }}>
          <span className="step-kicker">Respond concretely</span>
          <h2>How would you respond?</h2>
          <div className="choice-grid">
            <ChoiceButton
              letter="A"
              selected={response === 'a'}
              onSelect={() => setResponse('a')}
            >
              “Maya, everyone else has started. You need to get on with it now.”
            </ChoiceButton>
            <ChoiceButton
              letter="B"
              selected={response === 'b'}
              onSelect={() => setResponse('b')}
            >
              Repeat the full multi-step instructions again, more slowly.
            </ChoiceButton>
            <ChoiceButton
              letter="C"
              selected={response === 'c'}
              onSelect={() => setResponse('c')}
            >
              Check in privately: “What’s the first thing you think you need to
              do?” Then, if needed, make one first step visible.
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
        <div style={{ marginTop: '2rem' }}>
          <StudentVoicePanel
            question="What would you ask Maya?"
            quote="I knew what the task was about. I just didn’t know where to start."
          />
          <p style={{ marginTop: '1rem' }}>
            A useful question:{' '}
            <strong>Which part feels unclear or hardest to start?</strong>
          </p>
          {!asked ? (
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setAsked(true)}
            >
              Hold that question · continue to review
            </button>
          ) : null}
        </div>
      ) : null}

      {asked ? (
        <div style={{ marginTop: '2.5rem' }}>
          <ReviewPanel
            indicators={INDICATORS}
            selected={review}
            onToggle={toggleReview}
          />
          <KeyIdea to="/02" cta="Continue to Scenario 02 →">
            Delayed initiation is observable. Its cause is not.
          </KeyIdea>
        </div>
      ) : null}
    </main>
  )
}
