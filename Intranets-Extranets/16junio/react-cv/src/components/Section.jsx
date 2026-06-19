import './Section.css';

export default function Section({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-heading">
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}
