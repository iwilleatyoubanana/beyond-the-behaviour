import type { EvidenceEntry } from '../types'

export const evidenceByScenario: Record<'01' | '02' | '03' | '04', EvidenceEntry[]> = {
  '01': [
    {
      id: 's1-check-in',
      why: 'A brief private check-in plus one visible first step keeps the learning expectation while checking the barrier, instead of assuming Maya is unwilling.',
      source: {
        author: 'Australian ADHD Professionals Association',
        year: '2022',
        title: 'ADHD Guideline: Educational adjustments',
      },
      supports:
        'Breaking tasks into manageable steps and making the next action visible is a recognised educational adjustment for students with ADHD.',
      limitation:
        'This does not prove that one particular phrasing, or a private check-in, is experimentally effective for every student with ADHD.',
      url: 'https://adhdguideline.aadpa.com.au/adhd-educational-adjustments/',
      kind: 'guidance',
    },
    {
      id: 's1-theory',
      why: 'Repeating a long verbal sequence can add load if the difficulty is starting, holding steps in mind, or finding the first action.',
      source: {
        author: 'Bergin, C. et al.',
        year: '2023',
        title: 'Child and Adolescent Development for Educators',
      },
      supports:
        'This is consistent with reducing unnecessary working-memory or executive load: give instructions in manageable amounts, externalise information, and break complex tasks into sequential subtasks.',
      limitation:
        'Information processing ideas help interpret possible barriers. They do not tell you which barrier is operating for Maya in this moment.',
      url: 'https://adhdguideline.aadpa.com.au/wp-content/uploads/2023/12/AADPA-ADHD-Factsheet-For-Educators.pdf',
      kind: 'theory',
    },
    {
      id: 's1-voice',
      why: 'Maya’s possible comment — knowing the task but not the first step — is one plausible student view, not a diagnosis of the cause.',
      source: {
        author: 'Lived-experience synthesis of ADHD in youth',
        year: '2025',
        title: 'Qualitative synthesis of young people’s experiences of ADHD',
      },
      supports:
        'Young people with ADHD often describe being misunderstood when visible behaviour is treated as the whole story. Asking the student is part of respectful support.',
      limitation:
        'A qualitative synthesis cannot prescribe what Maya would say, or prove that any one question will uncover the barrier.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/41739150/',
      kind: 'lived',
    },
  ],
  '02': [
    {
      id: 's2-organisation',
      why: 'Noah understands the work, yet longer assignments keep arriving late. Support may need to target the planning process, not only the due date.',
      source: {
        author: 'Langberg, J. M. et al.',
        year: '2018',
        title: 'School-based organisation intervention (HOPS / CHIEF trial)',
      },
      supports:
        'School-based organisation and homework-management interventions for adolescents with ADHD have evidence for improving organisation and assignment tracking when they are structured and taught.',
      limitation:
        'A classroom teacher selecting a few checkpoints is not the same as delivering a full HOPS-style program. Results cannot be assumed from a single strategy card.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29172596/',
      kind: 'research',
    },
    {
      id: 's2-extension',
      why: 'Extra time can be reasonable for some students, but an extension alone may leave the planning problem untouched.',
      source: {
        author: 'Australian ADHD Professionals Association',
        year: '2022',
        title: 'Educational adjustments factsheet',
      },
      supports:
        'Additional time and organisational supports are recognised educational adjustments. They are not interchangeable, and they are not automatically required in the same form for every student.',
      limitation:
        'Guideline recognition is not the same as experimental proof that extra time, or daily teacher reminders, will improve outcomes for every student with ADHD.',
      url: 'https://adhdguideline.aadpa.com.au/wp-content/uploads/2023/12/AADPA-Factsheets-ADHD-Educational-Adjustments.pdf',
      kind: 'guidance',
    },
    {
      id: 's2-independence',
      why: 'Daily reminders can support access now. The professional question is how much structure is needed, and whether it can be faded as Noah’s process becomes more reliable.',
      source: {
        author: 'Victorian Department of Education',
        year: 'n.d.',
        title: 'Making reasonable adjustments',
      },
      supports:
        'Reasonable adjustments should respond to actual barriers, support participation, and be reviewed. Maintaining access and building independence are not opposites.',
      limitation:
        'Policy describes an obligation to consider adjustments. It does not specify the correct point on a teacher-managed to student-managed continuum.',
      url: 'https://www2.education.vic.gov.au/pal/students-disability/guidance/making-reasonable-adjustments',
      kind: 'guidance',
    },
  ],
  '03': [
    {
      id: 's3-relationship',
      why: 'A brief, neutral cue can protect the peer’s turn and the classroom rule without turning the moment into a public confrontation.',
      source: {
        author: 'MacLean, J. et al.',
        year: '2023',
        title: 'Student–teacher relationship and ADHD: a meta-analysis',
      },
      supports:
        'Teacher–student relationship research suggests that conflict and closeness matter for students with ADHD. Lower-key responses may help avoid unnecessary escalation.',
      limitation:
        'Relationship research does not prove that a particular cue, or private follow-up, is the best ADHD intervention. The exact cue is a professional design choice.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/37507182/',
      kind: 'research',
    },
    {
      id: 's3-behaviour',
      why: 'ADHD does not remove classroom expectations. Support is about making the expectation more achievable, including a replacement behaviour Eli can use.',
      source: {
        author: 'DuPaul, G. J. et al.',
        year: '2012 / later syntheses',
        title: 'Classroom interventions for ADHD: meta-analysis',
      },
      supports:
        'Structured behavioural and self-regulation approaches in classrooms have support in intervention syntheses. Clear expectations plus a workable alternative can sit together.',
      limitation:
        'Meta-analytic support for classroom interventions does not identify one script as universally correct, and many included studies are not Australian secondary classrooms.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26886218/',
      kind: 'research',
    },
    {
      id: 's3-expectations',
      why: 'Public correction can keep the rule visible, but it may add shame when a quieter redirect would have been enough.',
      source: {
        author: 'Australian ADHD Professionals Association',
        year: '2022',
        title: 'ADHD factsheet for educators',
      },
      supports:
        'Educator guidance treats ADHD-related difficulties as real while keeping the teacher’s role as support, not diagnosis, and keeping classroom expectations in place.',
      limitation:
        'A factsheet cannot tell you whether Eli’s interruption was impulsive, excited, or something else. Intention still needs checking.',
      url: 'https://adhdguideline.aadpa.com.au/wp-content/uploads/2023/12/AADPA-ADHD-Factsheet-For-Educators.pdf',
      kind: 'guidance',
    },
  ],
  '04': [
    {
      id: 's4-voice',
      why: 'Priya’s refusal is information about stigma and dignity. It is not an instruction to abandon support, or to force a visible adjustment.',
      source: {
        author: 'Lived-experience synthesis of ADHD in youth',
        year: '2025',
        title: 'Qualitative synthesis of young people’s experiences of ADHD',
      },
      supports:
        'Young people with ADHD frequently describe stigma, feeling different, and wanting support that does not single them out. Student voice belongs in the design of adjustments.',
      limitation:
        'Lived-experience research explains why visibility can matter. It cannot decide which adjustment is reasonable in Priya’s subject, school, or assessment context.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/41739150/',
      kind: 'lived',
    },
    {
      id: 's4-adjustments',
      why: 'An adjustment has to respond to an actual barrier, remain feasible, and be reviewed. Student preference is necessary to consider, not automatically decisive on its own.',
      source: {
        author: 'Victorian Department of Education',
        year: 'n.d.',
        title: 'Making reasonable adjustments',
      },
      supports:
        'Reasonable adjustments are a recognised educational obligation. They should support participation and be considered through school processes, not only personal goodwill.',
      limitation:
        'Policy does not require every requested option to be provided, and it does not make a written plan successful simply because it exists on paper.',
      url: 'https://www2.education.vic.gov.au/pal/students-disability/guidance/making-reasonable-adjustments',
      kind: 'guidance',
    },
    {
      id: 's4-aadpa',
      why: 'Less visible alternatives — a private checklist, a quieter room arranged without announcement, a whole-class routine — can sometimes meet the same barrier with less stigma.',
      source: {
        author: 'Australian ADHD Professionals Association',
        year: '2022',
        title: 'Educational adjustments',
      },
      supports:
        'Educational adjustments for ADHD include organisational supports, assessment access, and environmental changes. Form should follow the barrier and the student’s context.',
      limitation:
        'Guideline examples are not a menu that must be used in public, and they are not experimentally proven for every student in every classroom.',
      url: 'https://adhdguideline.aadpa.com.au/adhd-educational-adjustments/',
      kind: 'guidance',
    },
  ],
}

export const evidenceKindLabel: Record<EvidenceEntry['kind'], string> = {
  research: 'ADHD research',
  guidance: 'Australian / Victorian guidance',
  theory: 'Learning theory',
  lived: 'Lived experience',
}
