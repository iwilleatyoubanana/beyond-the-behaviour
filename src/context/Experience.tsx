import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

const INTRO_KEY = 'btb-intro-seen'

type ExperienceContextValue = {
  introComplete: boolean
  replayIntro: () => void
  finishIntro: () => void
  aboutOpen: boolean
  setAboutOpen: (open: boolean) => void
  evidenceOpen: boolean
  setEvidenceOpen: (open: boolean) => void
  evidenceScenario: '01' | '02' | '03' | '04' | null
  openEvidence: (scenario: '01' | '02' | '03' | '04') => void
}

const ExperienceContext = createContext<ExperienceContextValue | null>(null)

function hasSeenIntro() {
  try {
    return sessionStorage.getItem(INTRO_KEY) === '1'
  } catch {
    return false
  }
}

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [introComplete, setIntroComplete] = useState(hasSeenIntro)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [evidenceOpen, setEvidenceOpen] = useState(false)
  const [evidenceScenario, setEvidenceScenario] = useState<
    '01' | '02' | '03' | '04' | null
  >(null)

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1')
    } catch {
      /* ignore */
    }
    setIntroComplete(true)
  }, [])

  const replayIntro = useCallback(() => {
    try {
      sessionStorage.removeItem(INTRO_KEY)
    } catch {
      /* ignore */
    }
    setIntroComplete(false)
  }, [])

  const openEvidence = useCallback((scenario: '01' | '02' | '03' | '04') => {
    setEvidenceScenario(scenario)
    setEvidenceOpen(true)
  }, [])

  const value = useMemo(
    () => ({
      introComplete,
      replayIntro,
      finishIntro,
      aboutOpen,
      setAboutOpen,
      evidenceOpen,
      setEvidenceOpen,
      evidenceScenario,
      openEvidence,
    }),
    [
      introComplete,
      replayIntro,
      finishIntro,
      aboutOpen,
      evidenceOpen,
      evidenceScenario,
      openEvidence,
    ],
  )

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  )
}

export function useExperience() {
  const context = useContext(ExperienceContext)
  if (!context) {
    throw new Error('useExperience must be used within ExperienceProvider')
  }
  return context
}
