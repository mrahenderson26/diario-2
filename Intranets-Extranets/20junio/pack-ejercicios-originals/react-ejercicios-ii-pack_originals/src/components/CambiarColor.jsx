import { useState } from 'react';
import ExerciseCard from './ExerciseCard.jsx';
import './CambiarColor.css';

export default function CambiarColor() {
  const [colorCuadrado, setColorCuadrado] = useState('red');

  return (
    <ExerciseCard
      className="cambiar-color"
      number="2"
      title="Cambiar color"
      objective="Modificar el estado de la interfaz"
    >
      {/* Usamos style aquí porque el color cambia según el estado. */}
      <div
        className="cambiar-color__square"
        style={{ backgroundColor: colorCuadrado }}
      ></div>

      <div className="cambiar-color__buttons">
        <button onClick={() => setColorCuadrado('red')}>Rojo</button>
        <button onClick={() => setColorCuadrado('green')}>Verde</button>
        <button onClick={() => setColorCuadrado('blue')}>Azul</button>
      </div>
    </ExerciseCard>
  );
}
