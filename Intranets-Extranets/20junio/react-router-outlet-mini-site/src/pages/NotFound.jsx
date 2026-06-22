import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h2>404 - Page not found</h2>
      <p>
        This appears because of the catch-all route: <code>path="*"</code>.
      </p>
      <Link className="button-link" to="/">Go back home</Link>
    </section>
  )
}
