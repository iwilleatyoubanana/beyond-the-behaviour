type StudentVoicePanelProps = {
  question?: string
  quote: string
  note?: string
}

export function StudentVoicePanel({
  question,
  quote,
  note = 'This is one possible student response. Ask the student rather than assuming.',
}: StudentVoicePanelProps) {
  return (
    <section className="voice" aria-label="Student voice">
      <span className="step-kicker">Ask the student</span>
      {question ? <p>{question}</p> : null}
      <p className="thought" style={{ marginTop: '0.6rem' }}>
        “{quote}”
      </p>
      <p className="muted" style={{ marginBottom: 0 }}>
        {note}
      </p>
    </section>
  )
}
