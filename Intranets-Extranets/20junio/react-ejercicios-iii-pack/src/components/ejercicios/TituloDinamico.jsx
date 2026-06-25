import { useEffect, useState } from 'react';

export default function TituloDinamico() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <section>
      <h3>Titulo dinamico</h3>
      <div>
        <button onClick={() => setContador(contador - 1)}>-</button>
        <strong>{contador}</strong>
        <button onClick={() => setContador(contador + 1)}>+</button>
      </div>
    </section>
  );
}
