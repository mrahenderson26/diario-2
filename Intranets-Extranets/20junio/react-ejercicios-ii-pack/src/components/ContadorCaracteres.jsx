import { useState } from 'react';
import ExerciseCard from './ExerciseCard.jsx';
import './ContadorCaracteres.css';

export default function ContadorCaracteres() {
  const [texto, setTexto] = useState('');

  return (
    <ExerciseCard
      className="contador-caracteres"
      number="5"
      title="Contador de caracteres"
      objective="Leer valores de inputs"
    >
      <textarea
        className="contador-caracteres__textarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo..."
        rows="5"
      />

      {/* No hace falta otro estado: el contador se calcula directamente desde texto. */}
      <p className="contador-caracteres__result">Caracteres escritos: {texto.length}</p>
    </ExerciseCard>
  );
}
