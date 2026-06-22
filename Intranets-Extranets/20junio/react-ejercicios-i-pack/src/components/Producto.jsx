import './Producto.css';

// Destructuring lets us use nombre and precio directly instead of props.nombre.
export default function Producto({ nombre, precio }) {
  return (
    <article className="producto">
      <span>{nombre}</span>
      <strong>{precio} €</strong>
    </article>
  );
}
