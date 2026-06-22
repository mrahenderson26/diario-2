import './ExerciseCard.css';

// Caja visual reutilizable para todos los ejercicios.
// children es lo que escribimos entre <ExerciseCard> y </ExerciseCard>.
export default function ExerciseCard({ number, title, objective, children, className = '' }) {
  return (
    // className añade una clase específica sin perder la clase base exercise-card.
    <section className={`exercise-card ${className}`.trim()}>
      <p className="exercise-number">Ejercicio {number}</p>
      <h2>{title}</h2>
      <p className="objective">Objetivo: {objective}</p>
      <div className="exercise-content">{children}</div>
    </section>
  );
}
