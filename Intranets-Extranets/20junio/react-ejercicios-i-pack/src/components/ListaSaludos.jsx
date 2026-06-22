import Saludo from './Saludo';

export default function ListaSaludos({ nombres }) {
  return (
    <div>
      {nombres.map((nombre) => (
        <Saludo key={nombre} nombre={nombre} />
      ))}
    </div>
  );
}
