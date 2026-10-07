type ChoiceButtonProps = {
  letter: string
  children: string
  selected?: boolean
  tone?: 'observation' | 'assumption' | 'neutral'
  onSelect: () => void
}

export function ChoiceButton({
  letter,
  children,
  selected = false,
  tone = 'neutral',
  onSelect,
}: ChoiceButtonProps) {
  const toneClass =
    selected && tone === 'observation'
      ? ' is-selected is-observation'
      : selected && tone === 'assumption'
        ? ' is-selected is-assumption'
        : selected
          ? ' is-selected'
          : ''

  return (
    <button type="button" className={`choice${toneClass}`} onClick={onSelect}>
      <span className="choice-kicker">{letter}</span>
      {children}
    </button>
  )
}
