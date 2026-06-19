export default function PricingToggle({ monthly, onChange }) {
  return (
    <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
      <span
        className={`fw-semibold ${monthly ? "text-brand-purple" : "text-muted"}`}
      >
        Monthly
      </span>

      <div className="form-check form-switch mb-0">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="pricingToggle"
          checked={!monthly}
          onChange={() => onChange(!monthly)}
          style={{
            width: "3rem",
            height: "1.5rem",
            cursor: "pointer",
            backgroundColor: monthly ? "#2D1B69" : "#0055FF",
            borderColor: monthly ? "#2D1B69" : "#0055FF",
          }}
        />
      </div>

      <span className="d-flex align-items-center gap-2">
        <span
          className={`fw-semibold ${!monthly ? "text-brand-purple" : "text-muted"}`}
        >
          Annual
        </span>
        <span className="badge bg-success fs-xs px-2 py-1">Save 17%</span>
      </span>
    </div>
  );
}
