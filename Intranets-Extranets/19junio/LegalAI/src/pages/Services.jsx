import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import Card from '../components/ui/Card'
import services from '../data/services.json'

const categories = ['All', 'Contract', 'Research', 'Compliance', 'Litigation', 'General']

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory.toLowerCase())

  return (
    <>
      <Helmet>
        <title>Our Services | CriterIA</title>
      </Helmet>

      <div className="container section-padding pb-0">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services' }]} />
      </div>

      <section className="section-padding">
        <div className="container">
          <h2 className="fw-bold text-brand-purple mb-3">AI-Powered Legal Services</h2>
          <p className="lead mb-4" style={{ maxWidth: 700 }}>
            From contract review to litigation analytics, CriterIA offers a comprehensive suite of AI-driven legal tools 
            designed to save you time, reduce risk, and cut costs.
          </p>

          <div className="d-flex flex-wrap gap-2 mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn btn-sm rounded-pill fw-semibold ${
                  activeCategory === cat
                    ? 'btn-primary'
                    : 'btn-outline-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            {filtered.map((s) => (
              <div key={s.id}>
                <Card hover className="service-card h-100 p-4 d-flex flex-column">
                  <i className={`bi ${s.icon} fs-1 text-brand-blue mb-3`} />
                  <h5 className="fw-bold mb-2">{s.title}</h5>
                  <p className="text-muted small mb-3 flex-grow-1">{s.shortDesc}</p>
                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <span className="badge bg-brand-purple text-white text-capitalize">{s.category}</span>
                    <Link to={`/services/${s.id}`} className="btn btn-outline-primary btn-sm">
                      Learn More
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-purple text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Need Help Choosing?</h2>
          <p className="lead mb-4 opacity-90">Not sure which service fits your needs? Our team is here to help.</p>
          <Link to="/contact" className="btn btn-light btn-lg text-brand-purple fw-semibold">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
