export default function Card({
  children,
  className = "",
  hover = false,
  bordered = false,
  onClick,
}) {
  const classes = [
    "card",
    hover && "card-hover",
    bordered && "border",
    !bordered && "border-0",
    onClick && "cursor-pointer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick(e);
            }
          : undefined
      }
      style={
        hover
          ? { transition: "box-shadow 0.3s ease, transform 0.3s ease" }
          : undefined
      }
    >
      {children}
    </div>
  );
}
