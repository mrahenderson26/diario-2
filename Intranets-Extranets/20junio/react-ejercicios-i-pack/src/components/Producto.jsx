export default function Producto({ nombre, precio }) {
  return (
    <article>
      <span>{nombre}</span>
      <strong>{precio} €</strong>
    </article>
  );
}
