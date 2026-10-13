import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { company } from '../data/siteData'

const values = [
  {
    number: '01',
    title: 'Trust is built.',
    description: 'Through open communication, clear expectations and doing what we say we will.',
    mark: '↗',
  },
  {
    number: '02',
    title: 'Details matter.',
    description: 'Careful thinking at each step can shape a stronger result at the end.',
    mark: '✳',
  },
  {
    number: '03',
    title: 'Progress is shared.',
    description: 'The best outcomes come from bringing the right people into the conversation.',
    mark: '∞',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        label="A LITTLE ABOUT US"
        title="We build with"
        accent="a bigger picture."
        description="Alpha’s previous company profile cites 25 years of experience in infrastructure works that help connect people and places across Tamil Nadu."
        image="/images/site-team.webp"
        imageAlt="Construction professionals working together"
        theme="peach"
      >
        <Link className="button button-primary" to="/services">
          See how we work <span aria-hidden="true">↗</span>
        </Link>
      </PageHero>

      <section className="section about-story">
        <div className="container about-story-layout">
          <Reveal className="about-story-lead">
            <SectionLabel>OUR POINT OF VIEW</SectionLabel>
            <h2>
              Build for the
              <br />
              <em>life around it.</em>
            </h2>
            <span className="story-rule" />
            <p className="story-aside">Good infrastructure<br />does more than stand.</p>
          </Reveal>
          <Reveal className="about-story-body" delay={120}>
            <p className="story-dropcap">
              We see every project as a promise to the people and places
              around it. A promise to listen well, plan carefully and keep
              the purpose in view as the work takes shape.
            </p>
            <p>
              The previous company profile cites 25 years of
              experience across road and highway construction, bridges,
              irrigation, pipeline works and infrastructure development.
              Its philosophy is simple: “{company.philosophy}”.
            </p>
            <p>
              That breadth points to work with a practical purpose: making
              journeys easier, supporting water systems and delivering
              facilities that communities rely on. We bring a client-focused
              approach, close coordination and care for the details to each
              brief.
            </p>
            <Link className="text-link" to="/contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="about-experience-band" aria-label="Company experience">
        <div className="container about-experience-inner">
          <div className="experience-number">
            <span>25</span>
            <span>YEARS</span>
          </div>
          <div>
            <SectionLabel>EXPERIENCE THAT CONNECTS THE DOTS</SectionLabel>
            <p>
              The former company website references 25 years of experience
              and project work across transport, water management and
              community infrastructure.
            </p>
          </div>
          <Link className="text-link" to="/projects">
            Explore project references <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="about-manifesto">
        <div className="container manifesto-grid">
          <Reveal className="manifesto-image">
            <img
              src="/images/about-company.webp"
              alt="Light-filled contemporary building and architectural detail"
              loading="lazy"
            />
            <span>IDEAS MADE TANGIBLE</span>
          </Reveal>
          <Reveal className="manifesto-copy" delay={110}>
            <span className="manifesto-quote-mark" aria-hidden="true">“</span>
            <SectionLabel>OUR PHILOSOPHY</SectionLabel>
            <h2>{company.philosophy}<em>.</em></h2>
            <p>
              Assurance is not a slogan at the end of a project. It is the
              feeling created by every clear answer, every careful handover
              and every detail that has been thought through.
            </p>
            <Link className="text-link" to="/sustainability">
              The principles behind our work <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section about-values-section">
        <div className="container">
          <Reveal className="section-heading">
            <SectionLabel>WHAT WE HOLD CLOSE</SectionLabel>
            <h2>Good work has<br /><em>good foundations.</em></h2>
          </Reveal>
          <div className="values-grid">
            {values.map((value, index) => (
              <Reveal
                as="article"
                className="value-card"
                key={value.number}
                delay={index * 100}
              >
                <span className="value-number">{value.number}</span>
                <span className="value-mark" aria-hidden="true">{value.mark}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-ribbon">
        <div className="container about-ribbon-inner">
          <div>
            <SectionLabel>YOUR NEXT PROJECT STARTS HERE</SectionLabel>
            <h2>Let’s make a good<br /><em>thing happen.</em></h2>
          </div>
          <Link className="button button-dark" to="/contact">
            Talk with our team <span aria-hidden="true">↗</span>
          </Link>
          <span className="ribbon-orbit" aria-hidden="true">A</span>
        </div>
      </section>
    </>
  )
}
