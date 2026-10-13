
export default function SectionLabel({ children, className = '' }) {
  return (
    <div className={`section-label ${className}`.trim()}>
      <span aria-hidden="true" />
      {children}
    </div>
  )
}
