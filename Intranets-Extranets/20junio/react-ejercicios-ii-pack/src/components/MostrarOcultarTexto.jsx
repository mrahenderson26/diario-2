import { useState } from 'react';
import ExerciseCard from './ExerciseCard.jsx';
import './MostrarOcultarTexto.css';

export default function MostrarOcultarTexto() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <ExerciseCard
      className="mostrar-ocultar-texto"
      number="3"
      title="Mostrar y ocultar texto"
      objective="Renderizado condicional"
    >
      <button
        className="mostrar-ocultar-texto__button"
        onClick={() => setMostrarInfo(!mostrarInfo)}
      >
        {mostrarInfo ? 'Ocultar información' : 'Mostrar información'}
      </button>

      {/* Con &&, el párrafo solo se pinta cuando mostrarInfo es true. */}
      {mostrarInfo && (
        <p className="mostrar-ocultar-texto__info">
          React es una biblioteca para crear interfaces.
        </p>
      )}
    </ExerciseCard>
  );
}
