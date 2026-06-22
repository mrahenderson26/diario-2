export default function ListaTecnologias({ tecnologias }) {
  return (
    <ul>
      {tecnologias.map((tecnologia) => (
        <li key={tecnologia}>{tecnologia}</li>
      ))}
    </ul>
  );
}
