import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs({ items }) {
  const { pathname } = useLocation()

  const resolvedItems =
    items ||
    pathname
      .split('/')
      .filter(Boolean)
      .map((segment, i, arr) => {
        const path = '/' + arr.slice(0, i + 1).join('/')
        const label = segment
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase())
        return { label, path: i < arr.length - 1 ? path : undefined }
      })

  if (resolvedItems.length === 0) return null

  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {resolvedItems.map(({ label, path }) =>
          path ? (
            <li key={path} className="breadcrumb-item">
              <Link to={path}>{label}</Link>
            </li>
          ) : (
            <li key={label} className="breadcrumb-item active" aria-current="page">
              {label}
            </li>
          )
        )}
      </ol>
    </nav>
  )
}
