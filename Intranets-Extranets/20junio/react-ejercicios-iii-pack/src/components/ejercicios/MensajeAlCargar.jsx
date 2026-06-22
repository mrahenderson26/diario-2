import { useEffect, useState } from 'react';

export default function MensajeAlCargar() {
  const [mensajeVisible, setMensajeVisible] = useState(false);

  useEffect(() => {
    // Con [] se ejecuta al montar el componente, no en cada renderizado.
    // En desarrollo, React.StrictMode puede mostrar este mensaje dos veces.
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
