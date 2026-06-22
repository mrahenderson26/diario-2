import './Presentacion.css';

// Simple component: it does not need props because the text is fixed.
export default function Presentacion() {
  return (
    <div className="presentacion">
      <p className="presentacion__linea">Hola, me llamo Ana.</p>
      <p className="presentacion__linea">Estoy aprendiendo React.</p>
    </div>
  );
}
