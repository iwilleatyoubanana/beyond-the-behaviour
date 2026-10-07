import { useMemo, useState } from 'react'
import { ChoiceButton } from '../components/ChoiceButton'
import { KeyIdea } from '../components/KeyIdea'
import { ReviewPanel } from '../components/ReviewPanel'
import { StudentVoicePanel } from '../components/StudentVoicePanel'

const STRATEGIES = [
  {
    id: 'milestones',
    title: 'Break the task into visible milestones',
    note: 'Makes the process inspectable, not just the due date.',
    strong: true,
  },
  {
    id: 'checkpoints',
    title: 'Add brief checkpoint dates',
    note: 'Creates earlier moments to notice drift.',
    strong: true,
  },
  {
    id: 'track',
    title: 'Use one place to track materials and tasks',
    note: 'Reduces the load of searching across books, chats and folders.',
    strong: true,
  },
  {
    id: 'ask',
    title: 'Ask Noah which part of the process usually falls apart',
    note: 'Checks the actual barrier before designing the plan.',
    strong: true,
  },
  {
    id: 'extension',
    title: 'Give another blanket extension',
    note: 'Extra time can be a reasonable adjustment. Alone, it may not teach the planning process.',
    strong: false,
  },
  {
    id: 'planner',
    title: 'Tell Noah to use his planner properly',
    note: 'Names a tool without checking whether the tool is usable for him.',
    strong: false,
  },
  {
    id: 'reminders',
    title: 'Send daily reminders',
    note: 'Can support access now. The question is how teacher-managed it stays.',
    strong: false,
  },
  {
    id: 'reduce',
    title: 'Reduce the assignment requirements',
    note: 'Sometimes appropriate if the barrier is volume. It should not be the first assumption.',
    strong: false,
  },
] as const

const INDICATORS = [
  { id: 'milestones', label: 'Milestones completed by the agreed dates' },
  { id: 'materials', label: 'Missing materials or lost task information' },
  { id: 'recording', label: 'Whether homework and tasks are recorded in one place' },
  { id: 'emergencies', label: 'Number of emergency last-minute extensions' },
  { id: 'feel', label: 'Noah’s view of whether the support feels useful or controlling' },
  { id: 'independence', label: 'Independence over time — can some prompts fade?' },
]

export function Scenario2() {
  const [observations, setObservations] = useState<string[]>([])
  const [strategies, setStrategies] = useState<string[]>([])
  const [continuum, setContinuum] = useState(40)
  const [review, setReview] = useState<string[]>([])
  const [showPlan, setShowPlan] = useState(false)

  const toggleObservation = (id: string) => {
    setObservations((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  const toggleStrategy = (id: string) => {
    setStrategies((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id)
      if (current.length >= 4) return current
      return [...current, id]
    })
  }

  const toggleReview = (id: string) => {
    setReview((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  const observationReady = observations.length > 0
  const planReady = strategies.length >= 3

  const timeline = useMemo(() => {
    const items = [
      { week: 'Week 1', text: 'Topic and source selection' },
      { week: 'Week 2', text: 'Research check and outline' },
      { week: 'Week 3', text: 'Draft checkpoint' },
      { week: 'Friday', text: 'Final submission' },
    ]
    if (strategies.includes('extension')) {
      items[3] = {
        week: 'Extended date',
        text: 'Final submission — extra time added. The planning steps still need to exist.',
      }
    }
    return items
  }, [strategies])

  return (
    <main id="main" className="page page-enter">
      <p className="eyebrow">Scenario 02 · Year 10</p>
      <h1>Smart, but missing every deadline.</h1>
      <p className="lede">
        Noah understands the work. So why does the work keep arriving late?
      </p>

      <section className="dash-grid">
        <article className="dash-col">
          <span className="choice-kicker">In class</span>
          <h2>Strong on the floor</h2>
          <ul>
            <li>Contributes strong ideas</li>
            <li>Understands the content</li>
            <li>Participates confidently</li>
          </ul>
        </article>
        <article className="dash-col dash-col--warn">
          <span className="choice-kicker">Recent assignments</span>
          <h2>The work after class</h2>
          <ul className="late-list">
            <li>
              <span>Draft 1</span>
              <span>Late</span>
            </li>
            <li>
              <span>Research notes</span>
              <span>Incomplete</span>
            </li>
            <li>
              <span>Major task</span>
              <span>2 days late</span>
            </li>
            <li>
              <span>Current task</span>
              <span>Due Friday, barely started</span>
            </li>
          </ul>
        </article>
      </section>

      <p className="thought">
        Capability and executive performance are not the same thing.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <span className="step-kicker">Interpret carefully</span>
        <h2>What is supported by the information you have?</h2>
        <p className="muted">Select every statement that fits the evidence.</p>
        <div className="choice-grid">
          <ChoiceButton
            letter="A"
            selected={observations.includes('a')}
            tone="observation"
            onSelect={() => toggleObservation('a')}
          >
            Noah is capable of understanding the subject matter.
          </ChoiceButton>
          <ChoiceButton
            letter="B"
            selected={observations.includes('b')}
            tone="assumption"
            onSelect={() => toggleObservation('b')}
          >
            Noah does not care about deadlines.
          </ChoiceButton>
          <ChoiceButton
            letter="C"
            selected={observations.includes('c')}
            tone="observation"
            onSelect={() => toggleObservation('c')}
          >
            Noah has shown a repeated pattern of difficulty managing longer
            assignments.
          </ChoiceButton>
        </div>
      </section>

      {observationReady ? (
        <div className="panel" style={{ marginTop: '1.25rem' }}>
          <p>
            A and C are supported by the available information. B is an
            assumption about intention.
          </p>
          <p className="muted" style={{ marginBottom: 0 }}>
            The pattern matters. The explanation still needs checking.
          </p>
        </div>
      ) : null}

      {observationReady ? (
        <section style={{ marginTop: '2.5rem' }}>
          <span className="step-kicker">Build a support plan</span>
          <h2>Research report · due in 3 weeks</h2>
          <p>
            Choose 3–4 moves. Extra time is not automatically the wrong choice.
            The question is whether the plan supports the process, not only the
            deadline.
          </p>
          <div className="strategy-grid">
            {STRATEGIES.map((item) => (
              <button
                key={item.id}
                type="button"
                className={strategies.includes(item.id) ? 'strategy is-on' : 'strategy'}
                onClick={() => toggleStrategy(item.id)}
                aria-pressed={strategies.includes(item.id)}
              >
                <strong>{item.title}</strong>
                <p className="muted" style={{ margin: '0.4rem 0 0' }}>
                  {item.note}
                </p>
              </button>
            ))}
          </div>
          <p className="muted">{strategies.length} of 4 selected</p>
          {planReady ? (
            <button
              type="button"
              className="btn-primary"
              onClick={() => setShowPlan(true)}
            >
              See the plan as a timeline
            </button>
          ) : null}
        </section>
      ) : null}

      {showPlan ? (
        <section style={{ marginTop: '2rem' }}>
          <div className="panel">
            <span className="choice-kicker">The next assignment, made visible</span>
            <div className="timeline">
              {timeline.map((item) => (
                <div key={item.week} className="timeline-item">
                  <strong>{item.week}</strong>
                  <p style={{ margin: '0.2rem 0 0' }}>{item.text}</p>
                </div>
              ))}
            </div>
            {strategies.includes('track') ? (
              <p>One central place for tasks and materials sits beside the dates.</p>
            ) : (
              <p className="muted">
                Without one tracking place, the timeline can still scatter
                across books and chats.
              </p>
            )}
            {strategies.includes('ask') ? (
              <p>Noah’s view of where the process fails is part of the plan, not an afterthought.</p>
            ) : null}
            {strategies.includes('planner') ? (
              <p>
                “Use your planner properly” names a tool. It does not yet check
                whether that tool reduces the barrier.
              </p>
            ) : null}
            {strategies.includes('reduce') ? (
              <p>
                Reducing requirements may be reasonable if volume is the
                barrier. It should be reviewed against the learning goal, not
                used as a default.
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      {showPlan ? (
        <section style={{ marginTop: '2.5rem' }}>
          <span className="step-kicker">A second dilemma</span>
          <h2>Noah says: “Can you just remind me every day?”</h2>
          <p>What is your goal here?</p>
          <div className="continuum">
            <label htmlFor="continuum">
              Enough structure for access, with room to grow independence
            </label>
            <input
              id="continuum"
              type="range"
              min={0}
              max={100}
              value={continuum}
              onChange={(event) => setContinuum(Number(event.target.value))}
            />
            <div className="continuum-labels">
              <span>Teacher-managed</span>
              <span>Student-managed</span>
            </div>
          </div>
          <div className="panel">
            <p>
              The goal is not independence at all costs. The goal is enough
              external structure to support access and success, with increasing
              independence where appropriate.
            </p>
            <p className="muted" style={{ marginBottom: 0 }}>
              The appropriate level depends on current need, task demands,
              existing adjustments, student preference, and observed outcomes.
              {continuum < 35
                ? ' Daily teacher reminders may be needed now — review whether they can fade.'
                : continuum > 70
                  ? ' A more student-managed system still needs to be visible and reviewable.'
                  : ' Shared checkpoints can hold the middle: structure without taking the whole process away.'}
            </p>
          </div>
        </section>
      ) : null}

      {showPlan ? (
        <div style={{ marginTop: '2rem' }}>
          <StudentVoicePanel
            question="Where does it usually fall apart: starting, keeping track of materials, estimating time, or remembering the next step?"
            quote="I usually think I have way more time than I actually do."
          />
          <div style={{ marginTop: '2rem' }}>
            <ReviewPanel
              indicators={INDICATORS}
              selected={review}
              onToggle={toggleReview}
            />
            <KeyIdea to="/03" cta="Continue to Scenario 03 →">
              Support the process, not just the deadline.
            </KeyIdea>
          </div>
        </div>
      ) : null}
    </main>
  )
}
