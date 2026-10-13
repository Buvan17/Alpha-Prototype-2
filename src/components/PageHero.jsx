import SectionLabel from './SectionLabel'

export default function PageHero({
  label,
  title,
  accent,
  description,
  image,
  imageAlt,
  theme = 'sage',
  children,
}) {
  return (
    <section className={`page-hero page-hero-${theme}`}>
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <SectionLabel>{label}</SectionLabel>
          <h1>
            {title}
            <br />
            <em>{accent}</em>
          </h1>
          <p>{description}</p>
          {children}
        </div>
        <div className="page-hero-visual">
          <img src={image} alt={imageAlt || ''} />
          <span className="page-hero-stamp">
            <span>ALPHA</span>
            <small>BUILT WITH INTENT</small>
          </span>
          <span className="page-hero-orbit" />
        </div>
      </div>
    </section>
  )
}
