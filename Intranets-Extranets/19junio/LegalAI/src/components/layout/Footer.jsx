import { Link } from 'react-router-dom'
import {
  SITE_NAME,
  SITE_TAGLINE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SOCIAL_LINKS,
} from '../../utils/constants'

const services = [
  { label: 'Contract Review', slug: 'contract-review' },
  { label: 'Legal Research', slug: 'legal-research' },
  { label: 'Document Automation', slug: 'document-automation' },
  { label: 'Due Diligence', slug: 'due-diligence' },
  { label: 'Compliance Monitoring', slug: 'compliance-monitoring' },
  { label: 'Litigation Analytics', slug: 'litigation-analytics' },
  { label: 'AI Legal Assistant', slug: 'ai-legal-assistant' },
  { label: 'E-Discovery', slug: 'e-discovery' },
]

const companyLinks = [
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Resources', path: '/resources' },
]

const socialKeys = [
  { key: 'linkedin', icon: 'bi-linkedin' },
  { key: 'twitter', icon: 'bi-twitter-x' },
  { key: 'github', icon: 'bi-github' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-5 pb-0">
      <div className="container">
        <div className="row g-4">
          {/* Column 1 — Brand */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">{SITE_NAME}</h5>
            <p className="text-white-50">{SITE_TAGLINE}</p>
            <div className="d-flex gap-3 fs-5">
              {socialKeys.map(
                ({ key, icon }) =>
                  SOCIAL_LINKS[key] && (
                    <a
                      key={key}
                      href={SOCIAL_LINKS[key]}
                      className="text-white-50 text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                    >
                      <i className={`bi ${icon}`} />
                    </a>
                  )
              )}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled mb-0">
              {services.map(({ label, slug }) => (
                <li key={slug} className="mb-2">
                  <Link
                    to={`/services/${slug}`}
                    className="text-white-50 text-decoration-none"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled mb-0">
              {companyLinks.map(({ label, path }) => (
                <li key={path} className="mb-2">
                  <Link to={path} className="text-white-50 text-decoration-none">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter + Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="text-white-50 small">Stay up to date with the latest in AI legal tech.</p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                aria-label="Email for newsletter"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
            <div className="small text-white-50">
              <p className="mb-1">
                <i className="bi bi-envelope me-2" />
                {CONTACT_EMAIL}
              </p>
              <p className="mb-0">
                <i className="bi bi-telephone me-2" />
                {CONTACT_PHONE}
              </p>
            </div>
          </div>
        </div>

        <hr className="border-white-50 my-4" />

        <div className="row pb-3">
          <div className="col text-center small text-white-50">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
