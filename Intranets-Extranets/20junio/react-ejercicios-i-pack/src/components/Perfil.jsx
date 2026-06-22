export default function Perfil({ nombre, profesion, empresa }) {
  return (
    <article>
      <h3>{nombre}</h3>
      <p>{profesion}</p>
      <p>{empresa}</p>
    </article>
  );
}
