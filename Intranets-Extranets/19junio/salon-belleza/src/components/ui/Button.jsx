import { Link } from "react-router-dom";

const variantClasses = {
  primary: "btn-primary",
  "outline-primary": "btn-outline-primary",
  secondary: "btn-secondary",
};

export default function Button({
  children,
  variant = "primary",
  size,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  loading = false,
}) {
  const btnClass = [
    "btn",
    variantClasses[variant] || "btn-primary",
    size && `btn-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isDisabled = disabled || loading;

  const inner = loading ? (
    <>
      <span
        className="spinner-border spinner-border-sm me-2"
        role="status"
        aria-hidden="true"
      />
      {children}
    </>
  ) : (
    children
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link to={href} className={btnClass} onClick={onClick}>
          {inner}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={btnClass}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={btnClass}
      onClick={onClick}
      disabled={isDisabled}
    >
      {inner}
    </button>
  );
}
