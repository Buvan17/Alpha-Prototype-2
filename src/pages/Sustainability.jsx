import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'

const principles = [
  ['01', 'Think beyond the build', 'Consider how a project fits into the places and everyday lives around it.'],
  ['02', 'Use resources thoughtfully', 'Look for practical ways to reduce waste and make better use of time and materials.'],
  ['03', 'Put safety in the plan', 'Make safe working and clear communication part of the conversation from the outset.'],
  ['04', 'Value what lasts', 'Keep durability, maintenance and long-term usefulness in view as decisions are made.'],
]

export default function Sustainability() {
  return (
    <>
      <PageHero
        label="THOUGHTFUL BY DESIGN"
        title="Make progress"
        accent="with tomorrow in mind."
        description="The choices made along the way shape more than a project. They shape the impact it leaves behind."
        image="/images/water-project.webp"
        imageAlt="Water infrastructure and a reservoir"
        theme="sage"
      >
        <Link className="button button-primary" to="/about">
          What guides Alpha <span aria-hidden="true">↗</span>
        </Link>
      </PageHero>

      <section className="section responsible-section">
        <div className="container">
          <Reveal className="section-heading">
            <SectionLabel>OUR RESPONSIBLE APPROACH</SectionLabel>
            <h2>Small decisions.<br /><em>Lasting difference.</em></h2>
            <p>We believe responsibility starts with asking better questions—about safety, resources, people and what happens after handover.</p>
          </Reveal>
          <div className="responsible-grid">
            {principles.map(([number, title, copy], index) => (
              <Reveal
                as="article"
                className="responsible-card"
                key={number}
                delay={index * 75}
              >
                <span className="responsible-number">{number}</span>
                <span className="responsible-spark" aria-hidden="true">{index === 1 ? '✳' : '↗'}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
          <p className="evidence-note">
            These are guiding principles, not claims of certifications or
            measured environmental performance. Verified initiatives and
            project evidence can be added here when available.
          </p>
        </div>
      </section>

      <section className="sustainability-image-band">
        <img src="/images/urban-corridor.webp" alt="Aerial view of an urban transport corridor" loading="lazy" />
        <div className="sustainability-image-overlay">
          <div className="container">
            <SectionLabel>THE LONG VIEW</SectionLabel>
            <p>Consider the whole picture.<br /><em>Leave the right things behind.</em></p>
          </div>
        </div>
      </section>

      <section className="section section-contact-bridge">
        <div className="container contact-bridge-inner">
          <div>
            <SectionLabel>LET’S THINK IT THROUGH</SectionLabel>
            <h2>Good questions<br /><em>make better projects.</em></h2>
          </div>
          <Link className="button button-dark" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  )
}
