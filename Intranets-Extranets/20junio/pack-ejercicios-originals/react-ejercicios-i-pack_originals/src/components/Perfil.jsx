import './Perfil.css';

// This component receives several props and places each one in the JSX.
export default function Perfil({ nombre, profesion, empresa }) {
  return (
    <article className="perfil">
      <h3 className="perfil__nombre">{nombre}</h3>
      <p className="perfil__dato">{profesion}</p>
      <p className="perfil__dato">{empresa}</p>
    </article>
  );
}
