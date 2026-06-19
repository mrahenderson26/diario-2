import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="card">
      <h2>Page not found</h2>
      <p>This frontend route does not exist.</p>
      <Link to="/">Go back home</Link>
    </section>
  );
}
