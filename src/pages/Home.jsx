import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import InfrastructureIllustration from '../components/InfrastructureIllustration'
import { company, projectShowcase, services } from '../data/siteData'

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="hero-kicker">
              <span className="hero-kicker-line" />
              ALPHA PRIVATE LIMITED · INDIA
            </span>
            <h1>
              Good ground.
              <br />
              <em>Great things</em>
              <br />
              ahead.
            </h1>
            <p>
              {company.tagline} We bring people, planning and purpose
              together to shape the places that move us forward.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/services">
                Explore our capabilities <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-quiet" to="/about">
                Meet Alpha <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="hero-signature">
              <span className="signature-mark" aria-hidden="true">A</span>
              <span>Infrastructure shaped<br />around what matters.</span>
            </div>
          </div>

          <div className="home-hero-art">
            <div className="hero-photo-frame">
              <img
                src="/images/transport-network.webp"
                alt="Elevated road infrastructure and a coastal transport route"
                fetchPriority="high"
              />
            </div>
            <InfrastructureIllustration />
            <div className="hero-image-note">
              <span className="note-spark" aria-hidden="true">✳</span>
              <span>Built for<br /><strong>what’s next.</strong></span>
            </div>
            <span className="hero-vertical-note">PLAN WITH PURPOSE · BUILD WITH CARE</span>
            <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
          </div>
        </div>
        <div className="hero-bottomline">
          <div className="container hero-bottomline-inner">
            <span>01 — 04</span>
            <span>Better connections begin with better foundations.</span>
            <Link to="/about">THE ALPHA APPROACH <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section home-intro">
        <div className="container intro-editorial">
          <Reveal className="intro-visual">
            <img
              src="/images/site-team.webp"
              alt="Construction team working together on site"
              loading="lazy"
            />
            <span className="image-caption">
              <span>PEOPLE FIRST</span>
              Better work starts with working together.
            </span>
          </Reveal>
          <Reveal className="intro-content" delay={120}>
            <SectionLabel>WHO WE ARE</SectionLabel>
            <h2>
              The best work
              <br />
              starts with <em>why.</em>
            </h2>
            <p>
              We believe infrastructure is more than what gets built.
              It is the journeys made easier, the essential services
              brought closer and the opportunities opened up along the way.
            </p>
            <p>
              At Alpha, a clear purpose helps guide every conversation,
              every detail and every decision from first idea to finish.
            </p>
            <Link className="text-link" to="/about">
              Get to know Alpha <span aria-hidden="true">↗</span>
            </Link>
            <div className="intro-footnote">
              <span>{company.experienceYears}+</span>
              <span>Years of experience stated in Alpha’s previous company profile.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <Reveal className="section-heading section-heading-split">
            <div>
              <SectionLabel>WHAT WE DO</SectionLabel>
              <h2>Big-picture thinking.<br /><em>Ground-level care.</em></h2>
            </div>
            <p>
              From the first line on a plan to the final detail on site,
              explore the areas where our work can make a difference.
            </p>
          </Reveal>
          <div className="service-grid">
            {services.slice(0, 4).map((service, index) => (
              <Reveal
                as="article"
                className="service-card"
                key={service.id}
                delay={index * 90}
              >
                <Link className="service-card-link" to={`/services/${service.slug}`}>
                  <div className="service-card-image">
                    <img src={service.image} alt="" loading="lazy" />
                    <span className="service-card-number">{service.number}</span>
                    <span className="service-image-arrow" aria-hidden="true">↗</span>
                  </div>
                  <div className="service-card-copy">
                    <span className="service-card-overline">CAPABILITY {service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="text-link">Explore capability <span aria-hidden="true">↗</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="services-bottom">
            <span>Different challenges. One thoughtful approach.</span>
            <Link className="text-link" to="/services">
              All capabilities <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="approach-band">
        <div className="container approach-band-inner">
          <Reveal className="approach-band-copy">
            <SectionLabel>HOW WE THINK</SectionLabel>
            <h2>
              Intentional in
              <br />
              every <em>detail.</em>
            </h2>
            <p>
              Good delivery is rarely one big moment. It is a series of
              considered choices, made together, and followed through.
            </p>
            <Link className="button button-outline-light" to="/sustainability">
              What guides us <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
          <div className="approach-steps">
            {[
              ['01', 'Listen closely', 'Start by understanding the brief, the place and the people it serves.'],
              ['02', 'Bring it together', 'Keep communication clear and the moving parts in step.'],
              ['03', 'Follow it through', 'Stay attentive to the details that make an idea work in the real world.'],
            ].map(([number, title, text], index) => (
              <Reveal as="article" className="approach-step" key={number} delay={index * 100}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="step-mark" aria-hidden="true">↗</span>
              </Reveal>
            ))}
          </div>
          <span className="approach-decoration" aria-hidden="true">A</span>
        </div>
      </section>

      <section className="section section-projects">
        <div className="container">
          <Reveal className="section-heading section-heading-split">
            <div>
              <SectionLabel>THE WORK, IN PICTURES</SectionLabel>
              <h2>Possibility takes<br /><em>many forms.</em></h2>
            </div>
            <div className="heading-aside">
              <p>A gallery preview of the places, connections and systems our capabilities speak to.</p>
              <Link className="text-link" to="/projects">Visit the gallery <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
          <div className="project-grid project-grid-featured">
            {projectShowcase.map((project, index) => (
              <Reveal key={project.id} delay={index * 100}>
                <ProjectCard project={project} href={`/services/${project.serviceSlug}`} />
              </Reveal>
            ))}
          </div>
          <p className="gallery-note">Illustrative imagery. Project-specific details and photography can be added here.</p>
        </div>
      </section>

      <section className="home-contact">
        <div className="container home-contact-inner">
          <Reveal>
            <span className="contact-sunburst" aria-hidden="true">✳</span>
            <SectionLabel>GOOD THINGS START SOMEWHERE</SectionLabel>
            <h2>Let’s make the<br /><em>next thing matter.</em></h2>
          </Reveal>
          <Reveal delay={130} className="home-contact-action">
            <p>Have a project, a question or an idea to explore? We’re ready when you are.</p>
            <Link className="button button-dark" to="/contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
