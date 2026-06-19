import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/layout/SEO'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import resources from '../data/resources.json'
import EmptyState from '../components/ui/EmptyState'

const types = ['All', 'Whitepaper', 'Guide', 'Case Study']

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? resources
    : resources.filter((r) => r.type === activeFilter)

  return (
    <>
      <SEO title="Resources" />
      <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Resources' }]} />
      <section className="section-padding text-center">
        <div className="container">
          <h1 className="fw-bold text-brand-purple">Knowledge Base</h1>
          <p className="lead text-muted">Whitepapers, guides, and case studies</p>
        </div>
      </section>
      <section className="pb-5">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-auto">
              <div className="d-flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type}
                    className={`btn ${activeFilter === type ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveFilter(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {filtered.length === 0 ? (
            <EmptyState
              icon="bi-journal"
              title="No resources found"
              message={`No ${activeFilter.toLowerCase()} resources are available at this time.`}
              action={{ label: 'View All Resources', href: '#' }}
            />
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filtered.map((r) => (
                <div key={r.id} className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="position-relative">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          height: 200,
                          background: 'linear-gradient(135deg, #2D1B69, #0055FF)',
                          borderRadius: '0.75rem 0.75rem 0 0',
                        }}
                      >
                        <i className="bi bi-file-earmark-text text-white" style={{ fontSize: 48 }} />
                      </div>
                      <span
                        className="position-absolute top-0 start-0 badge m-2"
                        style={{ backgroundColor: '#0055FF' }}
                      >
                        {r.type}
                      </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{r.title}</h5>
                      <p className="card-text text-muted small flex-grow-1">{r.description}</p>
                      <a
                        href={r.downloadUrl}
                        className="btn btn-primary w-100 mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-download me-2" />Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
