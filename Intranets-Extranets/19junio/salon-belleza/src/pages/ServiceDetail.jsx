import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import Button from '../components/ui/Button'
import EmptyState from '../components/ui/EmptyState'
import services from '../data/services.json'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.id === slug)

  if (!service) {
    return (
      <>
        <Helmet>
          <title>Service not found | CriterIA</title>
        </Helmet>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', path: '/' },
              { label: 'Services', path: '/services' },
              { label: 'Not Found' },
            ]}
          />
          <EmptyState
            icon="bi-exclamation-triangle"
            title="Service not found"
            message="The service you are looking for does not exist."
            action={{ href: '/services', label: 'Browse Services' }}
          />
        </div>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Services</title>
      </Helmet>

      <section className="bg-brand-purple text-white py-5">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', path: '/' },
              { label: 'Services', path: '/services' },
              { label: service.title },
            ]}
          />
          <div className="text-center">
            {service.icon && (
              <i
                className={`bi ${service.icon} d-block mb-3`}
                style={{ fontSize: '3rem' }}
              />
            )}
            <h1 className="fw-bold">{service.title}</h1>
            <p className="lead mb-0">{service.shortDesc}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Key Features</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="list-unstyled">
                {service.features.map((feature, i) => (
                  <li key={i} className="d-flex align-items-start mb-3">
                    <i className="bi bi-check-circle-fill text-brand-purple me-3 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light section-padding">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">
            Why This Matters for Your Business
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="mb-3">
                SMEs often lack the in-house legal resources that large
                corporations take for granted. {service.title} bridges that gap
                by delivering enterprise-grade legal capabilities at a fraction
                of the cost, helping you minimize risk and maximize efficiency.
              </p>
              <p className="mb-3">
                By automating repetitive legal tasks, your team can focus on
                growing the business. Reduce turnaround times from days to
                minutes and ensure consistency across every document and
                decision.
              </p>
              <p className="mb-0">
                With real-time insights and AI-driven recommendations, you stay
                ahead of regulatory changes and potential liabilities, giving
                you peace of mind and a competitive edge in your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container">
          <h2 className="fw-bold mb-2">{service.price}</h2>
          <p className="text-muted mb-4">
            Flexible plans designed for businesses of every size.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button href="/pricing" variant="primary" size="lg">
              Get Started
            </Button>
            <Button href="/demo" variant="outline-primary" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-brand-purple text-white text-center py-4">
        <div className="container">
          <h3 className="fw-bold mb-0">
            Have questions about this service?
          </h3>
        </div>
      </section>
    </>
  )
}
