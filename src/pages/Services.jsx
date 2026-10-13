import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { services } from '../data/siteData'

const waysOfWorking = [
  ['01', 'A clear brief', 'Align on outcomes, priorities and the people each project is for.'],
  ['02', 'Joined-up thinking', 'Keep planning, coordination and communication moving together.'],
  ['03', 'Care through delivery', 'Stay close to the details that matter from start to finish.'],
]

export default function Services() {
  return (
    <>
      <PageHero
        label="OUR CAPABILITIES"
        title="Good thinking,"
        accent="built into the work."
        description="A considered approach to infrastructure starts with understanding the brief—and stays focused through every stage of delivery."
        image="/images/urban-corridor.webp"
        imageAlt="Urban transportation corridor"
        theme="sage"
      >
        <Link className="button button-primary" to="/contact">
          Tell us what you’re planning <span aria-hidden="true">↗</span>
        </Link>
      </PageHero>

      <section className="section services-detail">
        <div className="container">
          <Reveal className="section-heading">
            <SectionLabel>AREAS OF FOCUS</SectionLabel>
            <h2>Different disciplines.<br /><em>One joined-up view.</em></h2>
            <p>Explore the broad areas Alpha is set up to support. Scope and specific project experience can be tailored here as the company profile is confirmed.</p>
          </Reveal>
          <div className="capability-grid">
            {services.map((service, index) => (
              <Reveal
                as="article"
                className="capability-card"
                key={service.id}
                delay={index * 90}
              >
                <div className="capability-photo">
                  <img src={service.image} alt="" loading="lazy" />
                  <span>{service.number}</span>
                  <span className="capability-photo-label">ALPHA CAPABILITY</span>
                </div>
                <div className="capability-card-body">
                  <div>
                    <span className="capability-kicker">{service.number} / INFRASTRUCTURE</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <Link to="/contact" aria-label={`Discuss ${service.title}`}>
                    <span>Discuss this capability</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ways-section">
        <div className="container ways-layout">
          <Reveal>
            <SectionLabel>HOW WE MAKE IT WORK</SectionLabel>
            <h2>A better process<br /><em>makes better ground.</em></h2>
            <p>Every brief is different. The care we bring to the process stays constant.</p>
          </Reveal>
          <div className="ways-list">
            {waysOfWorking.map(([number, title, copy], index) => (
              <Reveal as="article" className="ways-item" key={number} delay={index * 90}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
                <span aria-hidden="true">↗</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contact-bridge">
        <div className="container contact-bridge-inner">
          <div>
            <SectionLabel>HAVE A BRIEF IN MIND?</SectionLabel>
            <h2>Let’s find the<br /><em>right way forward.</em></h2>
          </div>
          <Link className="button button-dark" to="/contact">Talk to Alpha <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  )
}
