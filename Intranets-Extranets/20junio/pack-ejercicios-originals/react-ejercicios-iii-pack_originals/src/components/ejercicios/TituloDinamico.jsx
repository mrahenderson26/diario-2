import { useEffect, useState } from 'react';
import './TituloDinamico.css';

export default function TituloDinamico() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // [contador] hace que el efecto se repita solo cuando cambia ese estado.
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <article className="titulo-dinamico-card">
      <h3>1. Título dinámico</h3>
      <p>
        Cada vez que cambia el contador, también cambia el título de la pestaña
        del navegador.
      </p>

      <div className="counter-row">
        <button className="titulo-dinamico-button" onClick={() => setContador(contador - 1)}>-</button>
        <strong>{contador}</strong>
        <button className="titulo-dinamico-button" onClick={() => setContador(contador + 1)}>+</button>
      </div>

      <p className="titulo-dinamico-hint">Mira la pestaña del navegador: Contador: {contador}</p>
    </article>
  );
}
