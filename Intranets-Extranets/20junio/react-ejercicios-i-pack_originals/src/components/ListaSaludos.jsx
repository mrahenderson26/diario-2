import Saludo from './Saludo';
import './ListaSaludos.css';

export default function ListaSaludos({ nombres }) {
  return (
    <div className="lista-saludos">
      {nombres.map((nombre) => (
        // Here the name works as a key because this small list has no duplicates.
        <Saludo key={nombre} nombre={nombre} />
      ))}
    </div>
  );
}
