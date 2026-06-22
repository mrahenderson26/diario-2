import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import services from '../data/services.json'
import Breadcrumbs from '../components/layout/Breadcrumbs'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  function onSubmit(data) {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      reset()
    }, 1500)
  }

  return (
    <>
      <Helmet><title>Contact Us | CriterIA</title></Helmet>
      <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} />

      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold text-brand-purple">Get in Touch</h1>
            <p className="text-muted">
              Have a question or want to learn more? We'd love to hear from you.
            </p>
          </div>

          {submitted && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <i className="bi bi-check-circle-fill me-2" />
              Thank you for reaching out! We'll get back to you within 24 hours.
              <button
                type="button"
                className="btn-close"
                onClick={() => setSubmitted(false)}
                aria-label="Close"
              />
            </div>
          )}

          <div className="row g-5">
            <div className="col-lg-7">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Your full name"
                      {...register('name')}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name.message}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="you@example.com"
                      {...register('email')}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email.message}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label fw-semibold">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="+1 (555) 000-0000"
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone.message}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="company" className="form-label fw-semibold">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      className={`form-control ${errors.company ? 'is-invalid' : ''}`}
                      placeholder="Company name"
                      {...register('company')}
                    />
                    {errors.company && (
                      <div className="invalid-feedback">{errors.company.message}</div>
                    )}
                  </div>

                  <div className="col-12">
                    <label htmlFor="service" className="form-label fw-semibold">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className={`form-select ${errors.service ? 'is-invalid' : ''}`}
                      {...register('service')}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <div className="invalid-feedback">{errors.service.message}</div>
                    )}
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Tell us about your needs..."
                      {...register('message')}
                    />
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message.message}</div>
                    )}
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary px-4"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body d-flex align-items-start gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'rgba(45, 27, 105, 0.1)',
                      color: '#2D1B69',
                    }}
                  >
                    <i className="bi bi-envelope-fill fs-5" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Email</h6>
                    <p className="mb-0 text-muted small">hello@criterialegal.ai</p>
                    <p className="mb-0 text-muted small">support@criterialegal.ai</p>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body d-flex align-items-start gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'rgba(45, 27, 105, 0.1)',
                      color: '#2D1B69',
                    }}
                  >
                    <i className="bi bi-telephone-fill fs-5" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Phone</h6>
                    <p className="mb-0 text-muted small">+1 (800) 555-CRITERIA</p>
                    <p className="mb-0 text-muted small">+1 (415) 555-0199</p>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body d-flex align-items-start gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'rgba(45, 27, 105, 0.1)',
                      color: '#2D1B69',
                    }}
                  >
                    <i className="bi bi-geo-alt-fill fs-5" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Address</h6>
                    <p className="mb-0 text-muted small">
                      200 Innovation Drive, Suite 300
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body d-flex align-items-start gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'rgba(45, 27, 105, 0.1)',
                      color: '#2D1B69',
                    }}
                  >
                    <i className="bi bi-clock-fill fs-5" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Business Hours</h6>
                    <p className="mb-0 text-muted small">Monday – Friday</p>
                    <p className="mb-0 text-muted small">9:00 AM – 6:00 PM (PST)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
