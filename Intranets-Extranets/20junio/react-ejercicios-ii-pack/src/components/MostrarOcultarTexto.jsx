import { useState } from 'react';

export default function MostrarOcultarTexto() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <>
      <button onClick={() => setMostrarInfo(!mostrarInfo)}>
        {mostrarInfo ? 'Ocultar información' : 'Mostrar información'}
      </button>

      {/* Con &&, el párrafo solo se pinta cuando mostrarInfo es true. */}
      {mostrarInfo && (
        <p>React es una biblioteca para crear interfaces.</p>
      )}
    </>
  );
}
