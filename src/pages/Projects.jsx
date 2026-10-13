import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projectCategories, projectShowcase } from '../data/siteData'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleProjects = useMemo(() => (
    activeCategory === 'All'
      ? projectShowcase
      : projectShowcase.filter((project) => project.category === activeCategory)
  ), [activeCategory])

  return (
    <>
      <PageHero
        label="THE WORK, IN PICTURES"
        title="Grounded in"
        accent="real references."
        description="Explore infrastructure and project references described in the previous Alpha company profile—from NH45C highway facilities to river regulators and water-supply works."
        image="/images/transport-network.webp"
        imageAlt="Elevated highway infrastructure and a coastal transport route"
        theme="peach"
      />

      <section className="section project-gallery-section">
        <div className="container">
          <Reveal className="gallery-intro">
            <div>
              <span className="gallery-count">PROJECT REFERENCES · DETAILS TO CONFIRM</span>
              <h2>A practical record.<br /><em>A bigger purpose.</em></h2>
            </div>
            <p>
              These descriptions are paraphrased from the previous company
              website. The photographs are illustrative; confirm package
              names, clients, dates and scope before using this as a formal
              project portfolio.
            </p>
          </Reveal>

          <div className="gallery-filters" role="group" aria-label="Filter gallery by capability">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-grid project-grid-gallery">
            {visibleProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 100}>
                <ProjectCard project={project} href={`/services/${project.serviceSlug}`} />
              </Reveal>
            ))}
          </div>
          <p className="gallery-note">All photographs are illustrative placeholders, not representations of completed Alpha projects. Project descriptions are based on the supplied former-website material; verify details against company records.</p>
        </div>
      </section>

      <section className="gallery-outro">
        <div className="container gallery-outro-inner">
          <div>
            <span className="gallery-count">YOUR PROJECT COULD BE NEXT</span>
            <h2>Let’s make room<br /><em>for the real story.</em></h2>
          </div>
          <Link className="button button-dark" to="/contact">
            Share your project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  )
}
