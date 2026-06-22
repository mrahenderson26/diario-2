import { useEffect, useState } from 'react';

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
    <section>
      <h3>Reloj digital</h3>
      <div>{hora.toLocaleTimeString()}</div>
    </section>
  );
}
