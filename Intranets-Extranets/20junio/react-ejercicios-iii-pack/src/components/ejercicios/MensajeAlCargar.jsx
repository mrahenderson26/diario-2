import { useEffect, useState } from 'react';

export default function MensajeAlCargar() {
  const [mensajeVisible, setMensajeVisible] = useState(false);

  useEffect(() => {
    console.log('Componente cargado');
    setMensajeVisible(true);
  }, []);

  return (
    <section>
      <h3>Mensaje al cargar</h3>
      {mensajeVisible && <p>El componente ya se ha cargado.</p>}
    </section>
  );
}
