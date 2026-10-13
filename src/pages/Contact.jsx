import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { company } from '../data/siteData'

export default function Contact() {
  return (
    <>
      <PageHero
        label="LET’S TALK"
        title="A good place"
        accent="to start is here."
        description="Have a project in mind, a business enquiry or a question for our team? Tell us a little about it."
        image="/images/bridge-construction.webp"
        imageAlt="Illustrative image of bridge infrastructure under construction"
        theme="peach"
      />

      <section className="section contact-page-section">
        <div className="container contact-page-grid">
          <Reveal className="contact-page-aside">
            <SectionLabel>START A CONVERSATION</SectionLabel>
            <h2>Tell us what<br /><em>you’re thinking.</em></h2>
            <p>
              A few details will help us understand what you need. Our
              team can follow up to learn more and explore the next step.
            </p>
            <div className="contact-prompt">
              <span aria-hidden="true">✳</span>
              <span>Clear brief. Open conversation. A good way forward.</span>
            </div>
            <div className="contact-details">
              {company.email && (
                <div className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true">↗</span>
                  <div><strong>Write to us</strong><a href={`mailto:${company.email}`}>{company.email}</a></div>
                </div>
              )}
              {company.phone && (
                <div className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true">✆</span>
                  <div>
                    <strong>Give us a call</strong>
                    <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}>
                      {company.phone}
                    </a>
                  </div>
                </div>
              )}
              {company.address && (
                <div className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true">⌖</span>
                  <div>
                    <strong>Find us</strong>
                    <span>{company.address}</span>
                    <a href={company.mapUrl} target="_blank" rel="noreferrer">
                      Open map <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              )}
              {!company.email && !company.phone && !company.address && (
                <p className="contact-details-note">
                  Official email, phone and office details will be added
                  here once confirmed.
                </p>
              )}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
