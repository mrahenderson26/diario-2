import { useState } from "react";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [texto, setTexto] = useState("");
  const [respuestaServidor, setRespuestaServidor] = useState("");

  async function enviarFormulario(event) {
    event.preventDefault();

    const respuesta = await fetch("/api/mensajes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre: nombre,
        texto: texto
      })
    });

    const datos = await respuesta.json();

    if (!respuesta.ok) {
      setRespuestaServidor(datos.mensaje);
      return;
    }

    setRespuestaServidor(datos.mensaje);
    setNombre("");
    setTexto("");
  }

  return (
    <section className="card">
      <h2>Contacto</h2>

      <p>
        This page sends form data from React to the Express POST route
        <code> /api/mensajes</code>.
      </p>

      <form onSubmit={enviarFormulario} className="form-box">
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
            value={texto}
            onChange={function (event) {
              setTexto(event.target.value);
            }}
            placeholder="Write a message"
          />
        </label>

        <button type="submit">Enviar mensaje</button>
      </form>

      {respuestaServidor && (
        <p className="server-message">{respuestaServidor}</p>
      )}
    </section>
  );
}
