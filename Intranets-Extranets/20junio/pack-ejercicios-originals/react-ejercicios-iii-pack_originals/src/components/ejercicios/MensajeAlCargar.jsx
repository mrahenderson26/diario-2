import { useEffect, useState } from 'react';
import './MensajeAlCargar.css';

export default function MensajeAlCargar() {
  const [mensajeVisible, setMensajeVisible] = useState(false);

  useEffect(() => {
    // Con [] se ejecuta al montar el componente, no en cada renderizado.
    // En desarrollo, React.StrictMode puede mostrar este mensaje dos veces.
    console.log('Componente cargado');
    setMensajeVisible(true);
  }, []);

  return (
    <article className="mensaje-cargar-card">
      <h3>2. Mensaje al cargar</h3>
      <p>
        Al montarse el componente, se ejecuta el efecto con array de dependencias
        vacío.
      </p>

      {/* No aparece al principio; aparece después de que useEffect cambia el estado. */}
      {mensajeVisible && (
        <p className="mensaje-cargar-success">
          El componente ya se ha cargado. Abre la consola para ver el mensaje.
        </p>
      )}

      <pre className="mensaje-cargar-pre">
        <code className="mensaje-cargar-code">{`useEffect(() => {
  console.log("Componente cargado");
}, []);`}</code>
      </pre>
    </article>
  );
}
