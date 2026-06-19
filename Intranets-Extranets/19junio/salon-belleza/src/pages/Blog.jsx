import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import posts from '../data/blog-posts.json'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import EmptyState from '../components/ui/EmptyState'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const categories = ['AI & Innovation', 'Legal Tech', 'Compliance', 'Business Tips']

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)

  if (!posts || posts.length === 0) {
    return (
      <>
        <Helmet><title>Blog | CriterIA</title></Helmet>
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Blog' }]} />
        <section className="section-padding">
          <div className="container">
            <EmptyState
              icon="bi-journal-text"
              title="No posts yet"
              message="Check back soon for insights and resources."
            />
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Helmet><title>Blog | CriterIA</title></Helmet>
      <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Blog' }]} />

      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold text-brand-purple">Insights &amp; Resources</h1>
            <p className="text-muted">Thought leadership on AI, legal tech, and the future of law.</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="row g-4">
                {posts.map((post) => (
                  <div key={post.id} className="col-md-6">
                    <div className="card border-0 h-100 shadow-sm">
                      <div
                        className="bg-light d-flex align-items-center justify-content-center"
                        style={{ height: 200 }}
                      >
                        <i className="bi bi-image text-muted" style={{ fontSize: '2.5rem' }} />
                      </div>
                      <div className="card-body d-flex flex-column">
                        <p className="text-muted small mb-2">{formatDate(post.date)}</p>
                        <h5 className="card-title fw-bold">{post.title}</h5>
                        <p className="card-text text-muted small flex-grow-1">{post.excerpt}</p>
                        <Link
                          to={`/blog/${post.id}`}
                          className="btn btn-outline-primary btn-sm mt-auto align-self-start"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <nav className="mt-5" aria-label="Blog pagination">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  {[1, 2, 3].map((page) => (
                    <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => setCurrentPage(page)}>
                        {page}
                      </button>
                    </li>
                  ))}
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage((p) => Math.min(p + 1, 3))}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <aside className="col-lg-4">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Search</h6>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search articles..."
                      aria-label="Search"
                    />
                    <button className="btn btn-primary" type="button">
                      <i className="bi bi-search" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Categories</h6>
                  <ul className="list-unstyled mb-0">
                    {categories.map((cat) => (
                      <li key={cat} className="mb-2">
                        <a href="#!" className="text-decoration-none text-brand-blue">
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Recent Posts</h6>
                  <ul className="list-unstyled mb-0">
                    {posts.slice(0, 3).map((post) => (
                      <li key={post.id} className="mb-3 pb-3 border-bottom">
                        <Link to={`/blog/${post.id}`} className="text-decoration-none">
                          <p className="fw-semibold mb-1 small">{post.title}</p>
                          <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                            {formatDate(post.date)}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
