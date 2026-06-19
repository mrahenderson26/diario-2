import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// This allows the React app on port 5173 to talk to Express on port 3000.
app.use(cors({
  origin: "http://localhost:5173"
}));

// This lets Express read JSON data sent by React in req.body.
app.use(express.json());

// Example data stored in memory.
// In a real app, this would usually come from a database.
const alumnos = [
  { id: 1, nombre: "Ana", curso: "React" },
  { id: 2, nombre: "Pedro", curso: "Express" },
  { id: 3, nombre: "Laura", curso: "MySQL" }
];

const mensajes = [];
let contadorMensajes = 1;

// ------------------------------
// GET route
// ------------------------------
// React uses this route to fetch data from Express.
app.get("/api/alumnos", function (req, res) {
  res.json(alumnos);
});

// ------------------------------
// POST route
// ------------------------------
// React uses this route to send form data to Express.
app.post("/api/mensajes", function (req, res) {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  if (!nombre || !mensaje) {
    return res.status(400).json({
      error: "Faltan datos. Debes enviar nombre y mensaje."
    });
  }

  const nuevoMensaje = {
    id: contadorMensajes,
    nombre: nombre,
    mensaje: mensaje
  };

  contadorMensajes = contadorMensajes + 1;
  mensajes.push(nuevoMensaje);

  console.log("Mensaje recibido:", nuevoMensaje);

  res.status(201).json({
    texto: "Mensaje guardado correctamente en Express",
    datos: nuevoMensaje,
    todosLosMensajes: mensajes
  });
});

app.listen(PORT, function () {
  console.log(`Servidor Express funcionando en http://localhost:${PORT}`);
});
