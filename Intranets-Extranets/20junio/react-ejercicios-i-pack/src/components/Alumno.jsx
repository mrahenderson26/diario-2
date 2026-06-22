import './Alumno.css';

// Fixed data for this exercise; later this could be replaced with props.
export default function Alumno() {
  return (
    <div className="alumno">
      <p className="alumno__linea">
        <strong>Nombre:</strong> Ana
      </p>
      <p className="alumno__linea">
        <strong>Edad:</strong> 25
      </p>
      <p className="alumno__linea">
        <strong>Ciudad:</strong> Toledo
      </p>
    </div>
  );
}
