export type PageId =
  | 'start'
  | 'orientation'
  | '01'
  | '02'
  | '03'
  | '04'
  | 'toolkit'
  | 'reflect'

export type EvidenceKind = 'research' | 'guidance' | 'theory' | 'lived'

export type EvidenceEntry = {
  id: string
  why: string
  source: {
    author: string
    year: string
    title: string
  }
  supports: string
  limitation: string
  url: string
  kind: EvidenceKind
}

export type Feedback = {
  getsRight: string[]
  mayMiss: string[]
  nextStep: string
}

export type ReviewIndicator = {
  id: string
  label: string
}
