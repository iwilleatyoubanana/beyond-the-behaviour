import { Link } from 'react-router-dom'

type KeyIdeaProps = {
  children: string
  to: string
  cta: string
}

export function KeyIdea({ children, to, cta }: KeyIdeaProps) {
  return (
    <section className="key-idea">
      <span className="step-kicker">Key idea</span>
      <blockquote>{children}</blockquote>
      <div className="cta-row">
        <Link className="btn-primary" to={to}>
          {cta}
        </Link>
      </div>
    </section>
  )
}
