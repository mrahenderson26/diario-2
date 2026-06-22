import './Ejercicio.css';

// Reusable wrapper: keeps every exercise with the same visual structure.
export default function Ejercicio({ titulo, objetivo, children }) {
  return (
    <section className="ejercicio">
      <h2 className="ejercicio__title">{titulo}</h2>
      <p className="ejercicio__objetivo">{objetivo}</p>

      {/* children is the component/content placed between the tags in App.jsx. */}
      {children}
    </section>
  );
}
