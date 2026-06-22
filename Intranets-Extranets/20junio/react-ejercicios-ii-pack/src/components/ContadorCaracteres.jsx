import { useState } from 'react';

export default function ContadorCaracteres() {
  const [texto, setTexto] = useState('');

  return (
    <>
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo..."
        rows="5"
      />

      {/* No hace falta otro estado: el contador se calcula directamente desde texto. */}
      <p>Caracteres escritos: {texto.length}</p>
    </>
  );
}
