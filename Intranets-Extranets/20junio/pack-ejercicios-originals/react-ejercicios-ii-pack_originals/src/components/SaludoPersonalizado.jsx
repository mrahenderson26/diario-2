import { useState } from 'react';
import ExerciseCard from './ExerciseCard.jsx';
import './SaludoPersonalizado.css';

export default function SaludoPersonalizado() {
  const [nombreSaludo, setNombreSaludo] = useState('');

  return (
    <ExerciseCard
      className="saludo-personalizado"
      number="4"
      title="Saludo personalizado"
      objective="Practicar onChange"
    >
      <label className="saludo-personalizado__label">
        Nombre:
        <input
          type="text"
          value={nombreSaludo}
          onChange={(e) => setNombreSaludo(e.target.value)}
          placeholder="Escribe tu nombre"
        />
      </label>

      {/* || muestra José mientras nombreSaludo esté vacío. */}
      <p className="saludo-personalizado__result">Hola {nombreSaludo || 'José'}</p>
    </ExerciseCard>
  );
}
