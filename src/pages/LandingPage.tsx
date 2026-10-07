import { Link } from 'react-router-dom'
import { PhotoPrint } from '../components/PhotoPrint'
import { useExperience } from '../context/Experience'
import { img } from '../lib/images'

export function LandingPage() {
  const { setAboutOpen, replayIntro } = useExperience()

  return (
    <main id="main" className="page page--wide page-enter">
      <section className="hero">
        <div className="hero-copy">
          <h1>Beyond the Behaviour</h1>
          <p className="hero-support">
            You see the behaviour.
            <br />
            What might you be missing?
          </p>
          <p className="hero-sub">
            An interactive decision-making experience for secondary teachers
            supporting students with ADHD.
          </p>
          <p>
            Practise separating what you observe from what you assume, then
            choose, review and refine a response.
          </p>
          <div className="cta-row">
            <Link className="btn-primary" to="/before">
              Start with what you notice →
            </Link>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setAboutOpen(true)}
            >
              About this resource
            </button>
          </div>
          <div className="hero-meta">
            <span>4 classroom scenarios</span>
            <span>8–10 minutes</span>
            <span>Designed for secondary teachers</span>
          </div>
          <p className="hero-note">
            This resource supports professional judgement. It does not diagnose
            ADHD.
          </p>
          <p>
            <button type="button" className="btn-text" onClick={replayIntro}>
              Replay opening
            </button>
          </p>
          <p className="muted" style={{ fontSize: '0.82rem' }}>
            Classroom photographs from Unsplash, used as documentary stills
            rather than portraits of named students.
          </p>
        </div>

        <div className="collage">
          <p className="hand collage-note collage-note-a">
            What do you actually know?
          </p>
          <PhotoPrint
            className="collage-main"
            src={img('students-desks.jpg')}
            alt="Secondary students at desks, seen from behind during a lesson."
            caption="Period 3. The room is already moving."
          />
          <PhotoPrint
            className="collage-mid"
            src={img('notebook.jpg')}
            alt="A student’s hand resting on a page, work not yet underway."
            caption="Work begun is easier to see than work delayed."
          />
          <p className="hand collage-note collage-note-b">Ask, don’t assume.</p>
          <PhotoPrint
            className="collage-small"
            src={img('books.jpg')}
            alt="A stack of exercise books on a desk."
          />
        </div>
      </section>
    </main>
  )
}
