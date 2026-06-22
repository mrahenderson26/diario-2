import './Header.css';

// No recibe props porque en este ejemplo el texto del encabezado es fijo.
export default function Header() {
  return (
    <header className="main-header">
      <p className="tag">React · useState · eventos · formularios · objetos · arrays</p>
      <h1>Ejercicios II React</h1>
      <p>
        Pack de ejercicios resuelto en una sola página. El objetivo es ver cómo se conectan
        los inputs, botones, eventos y estados en React.
      </p>
    </header>
  );
}
