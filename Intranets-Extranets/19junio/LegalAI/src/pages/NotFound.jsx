import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Breadcrumbs from '../components/layout/Breadcrumbs'

const jokes = [
  "Why did the lawyer break up with his calculator? He couldn't count on it.",
  "What's the difference between a lawyer and a herd of buffalo? The lawyer charges more.",
  'They bury lawyers 12 feet deep because deep down they\'re good people.',
  "What do you call a lawyer who doesn't chase ambulances? Unemployed.",
  "Why did the paralegal get locked out of the courthouse? She lost the keys to the brief.",
  'How many lawyers does it take to change a lightbulb? One, but he\'ll bill you for six.',
  'A good lawyer knows the law; a great lawyer knows the judge.',
  "Why don't sharks attack lawyers? Professional courtesy.",
  "What's the difference between a lawyer and a platypus? One is a bottom-dwelling, venomous creature, and the other is a small aquatic mammal.",
]

export default function NotFound() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)]

  return (
    <>
      <Helmet>
        <title>Page Not Found | CriterIA</title>
      </Helmet>
      <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Page Not Found' }]} />
      <section className="section-padding">
        <div className="container text-center">
          <h1 className="display-1 fw-bold text-brand-purple" style={{ fontSize: '8rem' }}>404</h1>
          <h2 className="fw-bold mb-3">Page Not Found</h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: 500 }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/" className="btn btn-primary px-4">Go Home</Link>
            <Link to="/contact" className="btn btn-outline-primary px-4">Contact Us</Link>
          </div>
          <p className="small text-muted mt-5 mb-0" style={{ fontStyle: 'italic' }}>
            {joke}
          </p>
        </div>
      </section>
    </>
  )
}
