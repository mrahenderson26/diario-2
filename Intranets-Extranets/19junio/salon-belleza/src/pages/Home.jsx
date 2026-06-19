import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import TestimonialCarousel from '../components/ui/TestimonialCarousel'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import testimonials from '../data/testimonials.json'
import services from '../data/services.json'

export default function Home() {
  const features = [
    {
      icon: 'bi-lightning-charge',
      title: 'Speed',
      desc: 'Process thousands of pages in seconds. Our AI delivers results 10x faster than traditional legal review methods.',
    },
    {
      icon: 'bi-crosshair',
      title: 'Accuracy',
      desc: 'Trained on millions of legal documents with 99.2% accuracy in clause detection and risk identification.',
    },
    {
      icon: 'bi-wallet2',
      title: 'Affordability',
      desc: 'Enterprise-grade legal intelligence at a fraction of the cost. No retainers, no hourly billing.',
    },
    {
      icon: 'bi-shield-lock',
      title: 'Security',
      desc: 'SOC 2 Type II certified with end-to-end encryption. Your data remains confidential and protected.',
    },
  ]

  const steps = [
    { number: 1, title: 'Upload Your Documents', desc: 'Drag and drop contracts, filings, or any legal documents into our secure portal. We support PDF, DOCX, and 20+ other formats.' },
    { number: 2, title: 'AI Analyzes Instantly', desc: 'Our engine scans every clause, cross-references precedents, and identifies risks using advanced NLP models trained on legal corpora.' },
    { number: 3, title: 'Get Actionable Results', desc: 'Receive a clear, prioritized report with risk scores, suggested edits, and compliance flags ready for your team to act on.' },
  ]

  return (
    <>
      <Helmet>
        <title>AI-Powered Legal Intelligence for SMEs | CriterIA</title>
      </Helmet>

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-3 fw-bold mb-3">Legal Intelligence, Powered by AI</h1>
              <p className="lead mb-4 opacity-90">
                CriterIA brings enterprise-grade AI legal tools to SMEs and startups. Faster, smarter, affordable.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button href="/services" variant="primary" size="lg">Explore Services</Button>
                <Button href="/demo" variant="outline-primary" size="lg">Request a Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-4">
        <div className="container">
          <div className="row text-center text-muted g-3">
            <div className="col-4 col-md-2"><span className="fw-semibold small">Trusted by 500+ Companies</span></div>
            <div className="col-4 col-md-2"><span className="fw-semibold small">ISO 27001 Certified</span></div>
            <div className="col-4 col-md-2"><span className="fw-semibold small">GDPR Compliant</span></div>
            <div className="col-4 col-md-2"><span className="fw-semibold small">SSL Encrypted</span></div>
            <div className="col-4 col-md-2"><span className="fw-semibold small">99.9% Uptime</span></div>
            <div className="col-4 col-md-2"><span className="fw-semibold small">4.9/5 Rating</span></div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-brand-purple">Why Choose CriterIA?</h2>
          <div className="row g-4">
            {features.map((f) => (
              <div key={f.title} className="col-md-6 col-lg-3">
                <Card hover className="feature-card h-100 p-4 text-center">
                  <i className={`bi ${f.icon} fs-1 text-brand-blue mb-3 d-block`} />
                  <h5 className="fw-bold mb-2">{f.title}</h5>
                  <p className="text-muted small mb-0">{f.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-brand-purple">How It Works</h2>
          <div className="row g-4">
            {steps.map((s) => (
              <div key={s.number} className="col-md-4">
                <div className="text-center">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-brand-purple text-white fw-bold mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    {s.number}
                  </div>
                  <h5 className="fw-bold mb-2">{s.title}</h5>
                  <p className="text-muted small mb-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-brand-purple">What Our Clients Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-brand-purple">Our Services</h2>
          <div className="row g-4">
            {services.slice(0, 4).map((s) => (
              <div key={s.id} className="col-md-6 col-lg-3">
                <Card hover className="service-card h-100 p-4">
                  <i className={`bi ${s.icon} fs-1 text-brand-blue mb-3 d-block`} />
                  <h5 className="fw-bold mb-2">{s.title}</h5>
                  <p className="text-muted small mb-3">{s.shortDesc}</p>
                  <Link to={`/services/${s.id}`} className="btn btn-outline-primary btn-sm stretched-link">
                    Learn More
                  </Link>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-purple text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Transform Your Legal Workflow?</h2>
          <Link to="/pricing" className="btn btn-light btn-lg text-brand-purple fw-semibold">View Pricing</Link>
        </div>
      </section>
    </>
  )
}
