import { useEffect, useState } from "react";

export default function App() {
  const [alumnos, setAlumnos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [respuestaServidor, setRespuestaServidor] = useState(null);

  // ----------------------------------
  // GET example
  // ----------------------------------
  // When the page loads, React asks Express for the alumnos.
  useEffect(function () {
    fetch("http://localhost:3000/api/alumnos")
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (datos) {
        setAlumnos(datos);
      })
      .catch(function (error) {
        console.log("Error al pedir alumnos:", error);
      });
  }, []);

  // ----------------------------------
  // POST example
  // ----------------------------------
  // When the form is submitted, React sends data to Express.
  function enviarFormulario(event) {
    event.preventDefault();

    fetch("http://localhost:3000/api/mensajes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre: nombre,
        mensaje: mensaje
      })
    })
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (datos) {
        setRespuestaServidor(datos);
        setNombre("");
        setMensaje("");
      })
      .catch(function (error) {
        console.log("Error al enviar formulario:", error);
      });
  }

  return (
    <main className="page">
      <h1>React + Express</h1>

      <section className="card">
        <h2>GET route example</h2>
        <p>
          React fetches this data from Express using <code>GET /api/alumnos</code>.
        </p>

        <ul>
          {alumnos.map(function (alumno) {
            return (
              <li key={alumno.id}>
                <strong>{alumno.nombre}</strong> - {alumno.curso}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="card">
        <h2>POST route example</h2>
        <p>
          This form sends data to Express using <code>POST /api/mensajes</code>.
        </p>

        <form onSubmit={enviarFormulario}>
          <label>
            Nombre
            <input
              value={nombre}
              onChange={function (event) {
                setNombre(event.target.value);
              }}
              placeholder="Write your name"
            />
          </label>

          <label>
            Mensaje
            <textarea
              value={mensaje}
              onChange={function (event) {
                setMensaje(event.target.value);
              }}
              placeholder="Write a message"
            />
          </label>

          <button type="submit">Send to Express</button>
        </form>

        {respuestaServidor !== null && (
          <div className="server-response">
            <h3>Response from Express</h3>
            <p>{respuestaServidor.texto}</p>
            <pre>{JSON.stringify(respuestaServidor, null, 2)}</pre>
          </div>
        )}
      </section>
    </main>
  );
}
