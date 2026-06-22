import './ListaTecnologias.css';

export default function ListaTecnologias({ tecnologias }) {
  return (
    <ul className="lista-tecnologias">
      {/* map() returns a new <li> for each item in the array. */}
      {tecnologias.map((tecnologia) => (
        <li className="lista-tecnologias__item" key={tecnologia}>
          {tecnologia}
        </li>
      ))}
    </ul>
  );
}
