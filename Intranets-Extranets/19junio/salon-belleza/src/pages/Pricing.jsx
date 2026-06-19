import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'
import PricingToggle from '../components/ui/PricingToggle'
import faqData from '../data/faq.json'
import pricingData from '../data/pricing.json'

export default function Pricing() {
  const [monthly, setMonthly] = useState(true)
  const { plans } = pricingData

  const billingFaqs = faqData
    .filter((item) => item.category === 'Billing')
    .map(({ id, question, answer }) => ({ id, title: question, content: answer }))

  return (
    <>
      <Helmet>
        <title>Pricing</title>
      </Helmet>

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Pricing' },
          ]}
        />
      </div>

      <section className="section-padding text-center">
        <div className="container">
          <h1 className="fw-bold">Simple, Transparent Pricing</h1>
          <p className="text-muted lead">
            No hidden fees. No surprises. Scale as you grow.
          </p>
        </div>
      </section>

      <div className="container">
        <PricingToggle monthly={monthly} onChange={setMonthly} />
      </div>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {plans.map((plan) => (
              <div className="col-lg-4 col-md-6" key={plan.id}>
                <div
                  className={`card pricing-card h-100${plan.highlighted ? ' featured border-primary' : ''}`}
                >
                  {plan.highlighted && (
                    <span className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-2">
                      Most Popular
                    </span>
                  )}
                  <div className="card-body d-flex flex-column p-4">
                    <h3 className="fw-bold mb-1">{plan.name}</h3>
                    <p className="text-muted small mb-3">{plan.description}</p>

                    <div className="mb-3">
                      {plan.monthlyPrice === null ? (
                        <span className="display-5 fw-bold text-brand-purple">
                          Custom
                        </span>
                      ) : (
                        <>
                          <span className="display-5 fw-bold text-brand-purple">
                            ${monthly ? plan.monthlyPrice : plan.annualPrice}
                          </span>
                          <span className="text-muted">
                            /{monthly ? 'mo' : 'yr'}
                          </span>
                        </>
                      )}
                    </div>

                    <ul className="list-unstyled mb-4 flex-grow-1">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="d-flex align-items-start mb-2">
                          <i className="bi bi-check-circle-fill text-brand-purple me-2" />
                          <small>{feat}</small>
                        </li>
                      ))}
                    </ul>

                    <Button
                      href={plan.id === 'enterprise' ? '/contact' : '/signup'}
                      variant={plan.highlighted ? 'primary' : 'outline-primary'}
                      className="w-100"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold text-center mb-4">Billing FAQs</h2>
              <Accordion items={billingFaqs} flush />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
