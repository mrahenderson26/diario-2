import { Link } from "react-router-dom";

export default function EmptyState({ icon, title, message, action }) {
  return (
    <div className="text-center py-5">
      {icon && (
        <i
          className={`bi ${icon} d-block mb-3`}
          style={{ fontSize: "3.5rem", color: "#2D1B69", opacity: 0.5 }}
        />
      )}
      {title && <h4 className="fw-bold text-dark mb-2">{title}</h4>}
      {message && <p className="text-muted mb-4">{message}</p>}
      {action && (
        <>
          {action.href?.startsWith("/") ? (
            <Link to={action.href} className="btn btn-primary">
              {action.label}
            </Link>
          ) : (
            <a
              href={action.href}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {action.label}
            </a>
          )}
        </>
      )}
    </div>
  );
}
