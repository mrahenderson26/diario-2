export default function Home() {
  return (
    <section>
      <h2>Home page</h2>
      <p>
        This is the index route. It appears at <code>/</code> because App.jsx has
        <code>{' <Route index element={<Home />} /> '}</code> inside the parent route.
      </p>

      <div className="explanation-box">
        <h3>What is happening?</h3>
        <p>
          The parent <code>Layout</code> component is always visible. This Home page is
          inserted into <code>{'<Outlet />'}</code> inside <code>Layout.jsx</code>.
        </p>
      </div>
    </section>
  )
}
