export default function Skeleton({
  width = "100%",
  height = "20px",
  borderRadius,
  className = "",
  count = 1,
}) {
  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={`skeleton-group ${className}`} role="status" aria-label="Loading">
      {items.map((i) => (
        <div
          key={i}
          className="placeholder-glow"
          style={{ marginBottom: i < items.length - 1 ? "12px" : 0 }}
        >
          <span
            className="placeholder rounded"
            style={{
              display: "block",
              width: typeof width === "number" ? `${width}px` : width,
              height: typeof height === "number" ? `${height}px` : height,
              borderRadius: borderRadius ?? "4px",
              opacity: 1 - i * 0.08,
              transform: `scaleY(${1 - i * 0.03})`,
            }}
          />
        </div>
      ))}
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
