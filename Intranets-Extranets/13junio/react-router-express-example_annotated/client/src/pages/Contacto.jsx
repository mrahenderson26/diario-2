// =============================================================
// CONTACTO PAGE
// =============================================================
// This page demonstrates both POST and GET with Express.
//
// POST example:
//   React sends form data to Express using POST /api/mensajes
//
// GET example:
//   React reads all saved messages from Express using GET /api/mensajes

import { useEffect, useState } from "react";

export default function Contacto() {
  // These two state variables control the form inputs.
  const [nombre, setNombre] = useState("");
  const [texto, setTexto] = useState("");

  // This stores a success/error message sent back by Express.
  const [respuestaServidor, setRespuestaServidor] = useState("");

  // This stores all messages fetched from Express.
  const [mensajes, setMensajes] = useState([]);

  // This function fetches existing messages from Express.
  async function cargarMensajes() {
    const respuesta = await fetch("/api/mensajes");
    const datos = await respuesta.json();

    setMensajes(datos);
  }

  // Load messages once when this page first appears.
  useEffect(function () {
    cargarMensajes();
  }, []);

  // This function runs when the user submits the form.
  async function enviarFormulario(event) {
    // Prevent the browser's default form behaviour.
    // Without this, the page would reload.
    event.preventDefault();

    // Send a POST request from React to Express.
    const respuesta = await fetch("/api/mensajes", {
      method: "POST",
      headers: {
        // Tell Express that we are sending JSON.
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

    // Show Express's success message.
    setRespuestaServidor(datos.mensaje);

    // Clear the form fields.
    setNombre("");
    setTexto("");

    // Fetch the updated list of messages after saving the new one.
    cargarMensajes();
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
              // event.target.value is the current text inside the input.
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

      <h3>Mensajes guardados en Express</h3>

      {mensajes.length === 0 ? (
        <p>No hay mensajes todavía.</p>
      ) : (
        <ul className="message-list">
          {mensajes.map(function (mensaje) {
            return (
              <li key={mensaje.id}>
                <strong>{mensaje.nombre}:</strong> {mensaje.texto}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
