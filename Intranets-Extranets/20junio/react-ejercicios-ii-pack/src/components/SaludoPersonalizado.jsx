import { useState } from 'react';

export default function SaludoPersonalizado() {
  const [nombreSaludo, setNombreSaludo] = useState('');

  return (
    <>
      <label>
        Nombre:
        <input type="text" value={nombreSaludo} onChange={(e) => setNombreSaludo(e.target.value)} placeholder="Escribe tu nombre"/>
      </label>

      {/* || muestra José mientras nombreSaludo esté vacío. */}
      <p>Hola {nombreSaludo || 'José'}</p>
    </>
  );
}
