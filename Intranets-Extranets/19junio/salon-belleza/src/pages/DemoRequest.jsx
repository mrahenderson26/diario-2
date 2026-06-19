import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import SEO from '../components/layout/SEO'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import servicesData from '../data/services.json'

const schema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  phone: z.string().optional(),
  companyName: z.string().min(1, 'Company name is required'),
  companySize: z.string().min(1, 'Please select company size'),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a time'),
  message: z.string().optional(),
})

const companySizes = ['1-10', '11-50', '51-200', '200+']

export default function DemoRequest() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { services: [] },
  })

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <SEO title="Book a Demo" />
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Book a Demo' }]} />
        <section className="section-padding">
          <div className="container" style={{ maxWidth: 700 }}>
            <div className="alert alert-success text-center py-4">
              <i className="bi bi-check-circle-fill fs-3 d-block mb-2" />
              <h4 className="alert-heading">Demo Request Submitted!</h4>
              <p className="mb-0">Our team will reach out within 24 hours to schedule your personalized demo.</p>
            </div>
            <div className="text-center mt-3">
              <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <SEO title="Book a Demo" />
      <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Book a Demo' }]} />
      <section className="section-padding text-center">
        <div className="container">
          <h1 className="fw-bold text-brand-purple">See CriterIA in Action</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: 600 }}>
            Schedule a personalized demo with our team
          </p>
        </div>
      </section>
      <section className="pb-5">
        <div className="container" style={{ maxWidth: 700 }}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Full Name *</label>
                <input
                  {...register('fullName')}
                  className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                  placeholder="John Doe"
                />
                {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Email *</label>
                <input
                  {...register('email')}
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="john@example.com"
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Phone</label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="form-control"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Company Name *</label>
                <input
                  {...register('companyName')}
                  className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                  placeholder="Acme Corp"
                />
                {errors.companyName && <div className="invalid-feedback">{errors.companyName.message}</div>}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Company Size *</label>
                <select
                  {...register('companySize')}
                  className={`form-select ${errors.companySize ? 'is-invalid' : ''}`}
                >
                  <option value="">Select…</option>
                  {companySizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.companySize && <div className="invalid-feedback">{errors.companySize.message}</div>}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Preferred Date *</label>
                <input
                  {...register('preferredDate')}
                  type="date"
                  className={`form-control ${errors.preferredDate ? 'is-invalid' : ''}`}
                />
                {errors.preferredDate && <div className="invalid-feedback">{errors.preferredDate.message}</div>}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Preferred Time *</label>
                <select
                  {...register('preferredTime')}
                  className={`form-select ${errors.preferredTime ? 'is-invalid' : ''}`}
                >
                  <option value="">Select…</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                </select>
                {errors.preferredTime && <div className="invalid-feedback">{errors.preferredTime.message}</div>}
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold">Services of Interest *</label>
                <div className={`border rounded p-3 ${errors.services ? 'border-danger' : ''}`}>
                  <div className="row">
                    {servicesData.map((s) => (
                      <div key={s.id} className="col-12 col-md-6 mb-2">
                        <div className="form-check">
                          <input
                            {...register('services')}
                            type="checkbox"
                            className="form-check-input"
                            value={s.id}
                            id={s.id}
                          />
                          <label className="form-check-label" htmlFor={s.id}>
                            {s.title}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {errors.services && <div className="text-danger small mt-1">{errors.services.message}</div>}
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  {...register('message')}
                  className="form-control"
                  rows={4}
                  placeholder="Tell us about your needs..."
                />
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" />
                    Submitting…
                  </>
                ) : (
                  'Request Demo'
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
