import './Timeline.css';

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={`${item.role}-${item.period}`} className="timeline-item">
          <div className="timeline-marker" aria-hidden="true" />
          <div>
            <p className="period">{item.period}</p>
            <h3>{item.role}</h3>
            <p className="company">{item.company}</p>
            <p className="timeline-text">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
