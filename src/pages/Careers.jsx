import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'

const qualities = [
  ['Curiosity', 'Bring questions, ideas and the willingness to keep learning.'],
  ['Consideration', 'Work thoughtfully with the people, places and teams around you.'],
  ['Follow-through', 'Care about the details and take pride in seeing good work through.'],
]

export default function Careers() {
  return (
    <>
      <PageHero
        label="CAREERS AT ALPHA"
        title="Do work that"
        accent="moves things forward."
        description="Good projects are made by good people. We’re always glad to hear from thoughtful professionals who care about what they build."
        image="/images/site-team.webp"
        imageAlt="A construction team collaborating at a project site"
        theme="peach"
      >
        <Link className="button button-primary" to="/contact?type=Career">
          Introduce yourself <span aria-hidden="true">↗</span>
        </Link>
      </PageHero>

      <section className="section careers-section">
        <div className="container">
          <Reveal className="careers-lead">
            <div>
              <SectionLabel>PEOPLE MAKE THE DIFFERENCE</SectionLabel>
              <h2>Bring your point<br /><em>of view to the work.</em></h2>
            </div>
            <p>
              We welcome expressions of interest from people with a
              thoughtful approach to engineering, infrastructure,
              construction and collaboration.
            </p>
          </Reveal>

          <div className="career-values">
            {qualities.map(([title, copy], index) => (
              <Reveal as="article" className="career-value" key={title} delay={index * 90}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="career-opportunities">
        <div className="container career-opportunities-inner">
          <div className="opportunity-image">
            <img src="/images/about-company.webp" alt="Architectural detail in a contemporary building" loading="lazy" />
          </div>
          <Reveal className="opportunity-copy">
            <span className="opportunity-status"><span /> OPEN CONVERSATION</span>
            <h2>No roles listed<br /><em>just yet.</em></h2>
            <p>
              We’re not advertising specific vacancies here today. If
              your experience feels like a good fit for the work we do,
              tell us a little about yourself and the kind of role you’re
              looking for.
            </p>
            <Link className="button button-dark" to="/contact?type=Career">
              Send a career enquiry <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
