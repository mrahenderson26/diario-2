import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/layout/SEO'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import jobs from '../data/jobs.json'

export default function Careers() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <>
      <SEO title="Careers" />
      <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Careers' }]} />
      <section className="section-padding text-center">
        <div className="container">
          <h1 className="fw-bold text-brand-purple">Join the Team</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: 700 }}>
            At CriterIA, we're building the future of legal intelligence. Our team thrives on innovation,
            collaboration, and a shared commitment to transforming how legal professionals work. If you're
            passionate about AI and ready to make a real impact, we want to hear from you.
          </p>
        </div>
      </section>
      <section className="pb-5">
        <div className="container" style={{ maxWidth: 800 }}>
          {jobs.map((job) => (
            <div key={job.id} className="card mb-3 border-0 shadow-sm">
              <div className="card-body d-flex align-items-center justify-content-between">
                <div className="flex-grow-1">
                  <h5 className="fw-bold mb-1">{job.title}</h5>
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    <span className="text-muted small"><i className="bi bi-geo-alt me-1" />{job.location}</span>
                    <span className="badge bg-brand-purple">{job.type}</span>
                    <span className="badge bg-brand-blue">{job.department}</span>
                  </div>
                </div>
                <button
                  className="btn btn-outline-primary btn-sm ms-3"
                  onClick={() => toggle(job.id)}
                  aria-expanded={openId === job.id}
                  aria-controls={`job-collapse-${job.id}`}
                >
                  <i className={`bi ${openId === job.id ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
                </button>
              </div>
              <div className={`collapse ${openId === job.id ? 'show' : ''}`} id={`job-collapse-${job.id}`}>
                <div className="card-body border-top pt-3">
                  <p>{job.description}</p>
                  {job.requirements?.length > 0 && (
                    <>
                      <h6 className="fw-bold">Requirements</h6>
                      <ul>
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <a
                    href={`mailto:careers@citeria.com?subject=Application for ${encodeURIComponent(job.title)}`}
                    className="btn btn-primary"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-brand-purple text-white text-center py-4">
        <div className="container">
          <h4 className="fw-bold mb-2">Don't see the right role?</h4>
          <p className="mb-3">Send us your CV and we'll keep you in mind for future opportunities.</p>
          <a href="mailto:careers@citeria.com?subject=General Application" className="btn btn-light fw-semibold px-4">
            Send Your CV
          </a>
        </div>
      </section>
    </>
  )
}
