import './Saludo.css';

// The displayed name changes depending on the prop received from App.jsx.
export default function Saludo({ nombre }) {
  return <p className="saludo">Hola {nombre}</p>;
}
