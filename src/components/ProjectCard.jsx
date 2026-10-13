
import { Link } from 'react-router-dom'

export default function ProjectCard({
  project,
  href = '/contact',
}) {
  const {
    title,
    category,
    description,
    image,
    imageAlt,
    location,
    status,
  } = project

  return (
    <article className="project-card">
      <Link
        className="project-image-wrap"
        to={href}
        aria-label={`Learn more about ${title}`}
      >
        <img
          className="project-image"
          src={image || '/images/road-project.webp'}
          alt={imageAlt || title}
          loading="lazy"
        />

        {category && (
          <span className="project-tag">{category}</span>
        )}
      </Link>

      <div className="project-meta">
        <span>{location || category || 'PROJECT'}</span>

        <Link
          to={href}
          aria-label={`Enquire about ${title}`}
        >
          ↗
        </Link>
      </div>

      <h3>
        <Link to={href}>{title}</Link>
      </h3>

      {description && <p>{description}</p>}

      {status && (
        <p className="project-status">
          <strong>Status:</strong> {status}
        </p>
      )}
    </article>
  )
}
