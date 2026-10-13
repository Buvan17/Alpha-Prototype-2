import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { projectShowcase, services } from '../data/siteData'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <section className="not-found container">
        <span className="eyebrow">CAPABILITY NOT FOUND</span>
        <h1>Let’s find the right direction.</h1>
        <p>This capability may have moved or may not exist.</p>
        <Link className="button button-primary" to="/services">
          Browse all capabilities <span aria-hidden="true">↗</span>
        </Link>
      </section>
    )
  }

  const relatedProjects = projectShowcase.filter(
    (project) => project.serviceSlug === service.slug,
  )

  return (
    <>
      <PageHero
        label={`CAPABILITY ${service.number} · ${service.category.toUpperCase()}`}
        title={service.title}
        accent="Infrastructure, built for the long run."
        description={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
        theme={service.category === 'Water' ? 'sage' : 'peach'}
      >
        <Link className="button button-primary" to="/contact">
          Discuss a project <span aria-hidden="true">↗</span>
        </Link>
      </PageHero>

      <section className="section service-detail-overview">
        <div className="container service-detail-grid">
          <Reveal className="service-detail-intro">
            <SectionLabel>THE BIGGER PICTURE</SectionLabel>
            <h2>Built around<br /><em>what matters.</em></h2>
            <p>{service.overview}</p>
            <p>{service.detail}</p>
          </Reveal>

          <Reveal className="service-focus-card" delay={110}>
            <span className="service-focus-kicker">AREAS OF FOCUS</span>
            <h3>{service.shortTitle}, considered.</h3>
            <ul>
              {service.focus.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">↗</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link className="text-link" to="/contact">
              Talk through your brief <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="service-reference-band">
        <div className="container service-reference-inner">
          <span className="reference-mark" aria-hidden="true">A</span>
          <div>
            <SectionLabel>FROM THE COMPANY PROFILE</SectionLabel>
            <p>{service.projectReference}</p>
            <small>
              Project dates, package names, clients and photography should be
              confirmed against company records before publication.
            </small>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section service-related-section">
          <div className="container service-related-layout">
            <Reveal>
              <SectionLabel>RELATED REFERENCE</SectionLabel>
              <h2>Work with<br /><em>a wider purpose.</em></h2>
              <p>
                The previous company profile references this area of work.
                The current image is illustrative, not a photograph of the
                named project.
              </p>
            </Reveal>
            <Reveal className="service-related-card" delay={100}>
              {relatedProjects.map((project) => (
                <article key={project.id}>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  <div>
                    <span>{project.location}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <section className="service-detail-cta">
        <div className="container service-detail-cta-inner">
          <div>
            <SectionLabel>HAVE A PROJECT IN MIND?</SectionLabel>
            <h2>Let’s build the<br /><em>right connection.</em></h2>
          </div>
          <Link className="button button-dark" to="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  )
}
