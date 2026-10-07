import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AboutModal } from './components/AboutModal'
import { EvidenceDrawer } from './components/EvidenceDrawer'
import { IntroSequence } from './components/IntroSequence'
import { Navbar } from './components/Navbar'
import { ExperienceProvider, useExperience } from './context/Experience'
import { FinalReflection } from './pages/FinalReflection'
import { LandingPage } from './pages/LandingPage'
import { OrientationPage } from './pages/OrientationPage'
import { Scenario1 } from './pages/Scenario1'
import { Scenario2 } from './pages/Scenario2'
import { Scenario3 } from './pages/Scenario3'
import { Scenario4 } from './pages/Scenario4'
import { TeacherToolkit } from './pages/TeacherToolkit'

function RouteEffects() {
  const { pathname } = useLocation()
  const { setEvidenceOpen, setAboutOpen } = useExperience()

  useEffect(() => {
    window.scrollTo(0, 0)
    setEvidenceOpen(false)
    setAboutOpen(false)
  }, [pathname, setAboutOpen, setEvidenceOpen])

  return null
}

function Shell() {
  const { introComplete } = useExperience()

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <IntroSequence />
      {introComplete ? (
        <>
          <Navbar />
          <RouteEffects />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/before" element={<OrientationPage />} />
            <Route path="/01" element={<Scenario1 />} />
            <Route path="/02" element={<Scenario2 />} />
            <Route path="/03" element={<Scenario3 />} />
            <Route path="/04" element={<Scenario4 />} />
            <Route path="/toolkit" element={<TeacherToolkit />} />
            <Route path="/reflect" element={<FinalReflection />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <AboutModal />
          <EvidenceDrawer />
        </>
      ) : null}
    </div>
  )
}

export default function App() {
  return (
    <ExperienceProvider>
      <Shell />
    </ExperienceProvider>
  )
}
