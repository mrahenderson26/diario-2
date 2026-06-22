import { useEffect, useState } from 'react';
import './RelojDigital.css';

export default function RelojDigital() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // Cleanup: evita que el intervalo siga funcionando si el componente desaparece.
    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <article className="reloj-digital-card">
      <h3>3. Reloj digital</h3>
      <p>La hora se actualiza cada segundo usando setInterval.</p>
      <div className="reloj-digital-clock">{hora.toLocaleTimeString()}</div>
      <p className="reloj-digital-hint">Incluye cleanup con clearInterval.</p>
    </article>
  );
}
