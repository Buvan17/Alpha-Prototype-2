
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  category: '',
  message: '',
}

export default function ContactForm({ onSubmit, submitLabel = 'Send enquiry' }) {
  const [searchParams] = useSearchParams()
  const [values, setValues] = useState(() => ({
    ...initialValues,
    category: searchParams.get('type') || '',
  }))
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    setStatus('')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('')

    if (!onSubmit) {
      setStatus(
        'The form is ready, but email delivery has not been configured yet.'
      )
      return
    }

    setSubmitting(true)

    try {
      await onSubmit({ ...values })

      setValues(initialValues)
      setStatus('Thank you. Your enquiry has been submitted successfully.')
    } catch {
      setStatus(
        'We could not submit your enquiry. Please try again or contact the company directly.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="enquiry-name">Full name *</label>
          <input
            id="enquiry-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            maxLength={120}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="enquiry-email">Work email *</label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@company.com"
            maxLength={254}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="enquiry-phone">Phone number</label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="Your contact number"
            maxLength={30}
          />
        </div>

        <div className="field">
          <label htmlFor="enquiry-category">Enquiry type *</label>
          <select
            id="enquiry-category"
            name="category"
            value={values.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select an enquiry
            </option>
            <option value="Project">Project enquiry</option>
            <option value="Business">Business collaboration</option>
            <option value="Career">Career enquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="field field-full">
          <label htmlFor="enquiry-message">Your message *</label>
          <textarea
            id="enquiry-message"
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Tell us about your project or enquiry..."
            maxLength={5000}
            required
          />
        </div>
      </div>

      <div className="form-foot">
        <small>
          Fields marked * are required. Please do not include confidential
          information.
        </small>

        <button
          className="button button-primary"
          type="submit"
          disabled={submitting}
        >
          {submitting ? 'Submitting…' : submitLabel}
          <span aria-hidden="true">↗</span>
        </button>
      </div>

      {status && (
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      )}
    </form>
  )
}
