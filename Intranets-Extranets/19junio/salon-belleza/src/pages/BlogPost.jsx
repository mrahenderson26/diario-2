import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
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

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.id === slug)

  if (!post) {
    return (
      <>
        <Helmet><title>Post Not Found | Blog | CriterIA</title></Helmet>
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Blog', path: '/blog' },
            { label: 'Not Found' },
          ]}
        />
        <section className="section-padding">
          <div className="container">
            <EmptyState
              icon="bi-exclamation-triangle"
              title="Post not found"
              message="The article you're looking for doesn't exist or has been removed."
              action={{ label: 'Back to Blog', href: '/blog' }}
            />
          </div>
        </section>
      </>
    )
  }

  const relatedPosts = posts.filter((p) => p.id !== slug).slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog | CriterIA</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="section-padding">
        <div className="container" style={{ maxWidth: 800 }}>
          <header className="mb-4">
            <span className="badge bg-brand-purple mb-3">{post.category}</span>
            <h1 className="fw-bold text-brand-purple">{post.title}</h1>
            <p className="text-muted mb-0">
              By {post.author} &middot; {formatDate(post.date)}
            </p>
          </header>

          <div className="bg-light d-flex align-items-center justify-content-center rounded mb-4" style={{ height: 320 }}>
            <i className="bi bi-image text-muted" style={{ fontSize: '3.5rem' }} />
          </div>

          {post.content.map((paragraph, i) => (
            <p key={i} className="mb-3" style={{ lineHeight: 1.8 }}>
              {paragraph}
            </p>
          ))}

          <hr className="my-4" />

          <div className="mb-4">
            <h6 className="fw-bold mb-3">Share this article</h6>
            <div className="d-flex gap-2">
              <a
                href="#!"
                className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1"
                onClick={(e) => {
                  e.preventDefault()
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                    '_blank'
                  )
                }}
              >
                <i className="bi bi-linkedin" /> LinkedIn
              </a>
              <a
                href="#!"
                className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1"
                onClick={(e) => {
                  e.preventDefault()
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`,
                    '_blank'
                  )
                }}
              >
                <i className="bi bi-twitter-x" /> Twitter
              </a>
              <button
                className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1"
                onClick={() => navigator.clipboard.writeText(window.location.href)}
              >
                <i className="bi bi-link-45deg" /> Copy Link
              </button>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container">
            <h2 className="fw-bold text-brand-purple mb-4">Related Articles</h2>
            <div className="row g-4">
              {relatedPosts.map((rp) => (
                <div key={rp.id} className="col-md-4">
                  <div className="card border-0 h-100 shadow-sm">
                    <div
                      className="bg-white d-flex align-items-center justify-content-center"
                      style={{ height: 160 }}
                    >
                      <i className="bi bi-file-text text-muted" style={{ fontSize: '2rem' }} />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <p className="text-muted small mb-1">{formatDate(rp.date)}</p>
                      <h6 className="fw-bold">{rp.title}</h6>
                      <Link
                        to={`/blog/${rp.id}`}
                        className="btn btn-outline-primary btn-sm mt-auto align-self-start"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
