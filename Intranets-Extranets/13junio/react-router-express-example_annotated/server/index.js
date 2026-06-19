// =============================================================
// EXPRESS BACKEND SERVER
// =============================================================
// This file is the backend part of the app.
//
// React runs in the browser and shows pages/components.
// Express runs on the server and sends/receives JSON data.
//
// In this project, all backend routes start with /api so that they are
// easy to distinguish from frontend React Router routes.

import express from "express";
import cors from "cors";

// Create the Express application.
const app = express();

// The Express backend will run on http://localhost:3000
const PORT = 3000;

// cors() allows the React development server to talk to the Express server.
// In development, React runs on port 5173 and Express runs on port 3000.
app.use(cors());

// express.json() allows Express to read JSON sent in the request body.
// Without this, req.body would be undefined in POST routes.
app.use(express.json());

// =============================================================
// FAKE DATABASES IN MEMORY
// =============================================================
// These arrays act like a very simple database.
// When the server restarts, the data resets.
// Later, this could be replaced with MySQL, MongoDB, a JSON file, etc.

const alumnos = [
  {
    id: 1,
    nombre: "Ana",
    curso: "React básico",
    ciudad: "Madrid"
  },
  {
    id: 2,
    nombre: "Pedro",
    curso: "Node y Express",
    ciudad: "Sevilla"
  },
  {
    id: 3,
    nombre: "Laura",
    curso: "SQL y bases de datos",
    ciudad: "Valencia"
  }
];

// This starts empty. The React contact form will add messages here.
const mensajes = [];

// =============================================================
// GET ROUTES
// =============================================================
// GET routes are normally used when the frontend wants to read data.
// React uses fetch() to call these routes.

// Simple test route.
// Open http://localhost:3000/api directly in the browser to test Express.
app.get("/api", function (req, res) {
  res.json({
    mensaje: "Servidor Express funcionando correctamente"
  });
});

// GET /api/alumnos
// React calls this route from client/src/pages/Alumnos.jsx
// It returns the full list of students as JSON.
app.get("/api/alumnos", function (req, res) {
  res.json(alumnos);
});

// GET /api/alumnos/:id
// The :id part is dynamic.
// Example: /api/alumnos/2
// Express captures the 2 using req.params.id.
app.get("/api/alumnos/:id", function (req, res) {
  // req.params.id comes as text, so we convert it to a number.
  const id = Number(req.params.id);

  // Find the student whose id matches the URL parameter.
  const alumnoEncontrado = alumnos.find(function (alumno) {
    return alumno.id === id;
  });

  // If no student exists with that ID, send a 404 error response.
  if (!alumnoEncontrado) {
    return res.status(404).json({
      mensaje: "Alumno no encontrado"
    });
  }

  // If the student exists, return that one object as JSON.
  res.json(alumnoEncontrado);
});

// GET /api/mensajes
// React calls this route from client/src/pages/Contacto.jsx
// It returns all messages currently stored in the mensajes array.
app.get("/api/mensajes", function (req, res) {
  res.json(mensajes);
});

// =============================================================
// POST ROUTE
// =============================================================
// POST routes are normally used when the frontend wants to send/create data.
// React sends JSON in the body of the request.

// POST /api/mensajes
// React calls this route when the contact form is submitted.
app.post("/api/mensajes", function (req, res) {
  // Because we used app.use(express.json()), Express can read req.body.
  const nombre = req.body.nombre;
  const texto = req.body.texto;

  // Basic validation: both fields are required.
  if (!nombre || !texto) {
    return res.status(400).json({
      mensaje: "Faltan datos: nombre y texto son obligatorios"
    });
  }

  // Create a new message object.
  const nuevoMensaje = {
    id: mensajes.length + 1,
    nombre: nombre,
    texto: texto
  };

  // Add the new object to the fake database array.
  mensajes.push(nuevoMensaje);

  // 201 means "created".
  // We send back a confirmation message and the new object.
  res.status(201).json({
    mensaje: "Mensaje guardado correctamente",
    nuevoMensaje: nuevoMensaje
  });
});

// Start the Express server.
app.listen(PORT, function () {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
