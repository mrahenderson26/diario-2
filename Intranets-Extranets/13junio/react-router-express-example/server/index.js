import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Fake database in memory
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

const mensajes = [];

// ======================================================
// GET ROUTES
// ======================================================

app.get("/api", function (req, res) {
  res.json({
    mensaje: "Servidor Express funcionando correctamente"
  });
});

app.get("/api/alumnos", function (req, res) {
  res.json(alumnos);
});

app.get("/api/alumnos/:id", function (req, res) {
  const id = Number(req.params.id);

  const alumnoEncontrado = alumnos.find(function (alumno) {
    return alumno.id === id;
  });

  if (!alumnoEncontrado) {
    return res.status(404).json({
      mensaje: "Alumno no encontrado"
    });
  }

  res.json(alumnoEncontrado);
});

app.get("/api/mensajes", function (req, res) {
  res.json(mensajes);
});

// ======================================================
// POST ROUTE
// ======================================================

app.post("/api/mensajes", function (req, res) {
  const nombre = req.body.nombre;
  const texto = req.body.texto;

  if (!nombre || !texto) {
    return res.status(400).json({
      mensaje: "Faltan datos: nombre y texto son obligatorios"
    });
  }

  const nuevoMensaje = {
    id: mensajes.length + 1,
    nombre: nombre,
    texto: texto
  };

  mensajes.push(nuevoMensaje);

  res.status(201).json({
    mensaje: "Mensaje guardado correctamente",
    nuevoMensaje: nuevoMensaje
  });
});

app.listen(PORT, function () {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
