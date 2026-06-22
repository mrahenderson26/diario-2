export default function About() {
  return (
    <section>
      <h2>About page</h2>
      <p>
        This page appears when the URL is <code>/about</code>.
      </p>
      <p>
        Notice that the header and footer do not disappear. Only the content inside
        <code>{' <Outlet /> '}</code> changes.
      </p>
    </section>
  )
}