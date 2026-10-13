
import { Brand } from './Navbar'
import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'About Alpha', href: '/about' },
      { label: 'Our services', href: '/services' },
      { label: 'Our projects', href: '/projects' },
      { label: 'Sustainability', href: '/sustainability' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Project enquiries', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact us', href: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <Brand />

          <p className="footer-brand-copy">
            Alpha Private Limited — infrastructure and construction.
            Discover our capabilities, explore our work, and get in touch
            with our team.
          </p>
        </div>

        {footerGroups.map((group) => (
            <div key={group.title}>
            <div className="footer-heading">{group.title}</div>

            <div className="footer-links">
              {group.links.map((link) => (
                <Link key={link.href + link.label} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Alpha Private Limited.
          All rights reserved.
        </span>

        <Link className="back-top" to="/">
          <span>ALPHA PRIVATE LIMITED</span>
          <span>Returning home ↑</span>
        </Link>
      </div>
    </footer>
  )
}
