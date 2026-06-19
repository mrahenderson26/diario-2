import express from 'express';
import pool from './db_acceso.js';

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo GET (Consultar datos)
app.get('/peliculas', async (req, res) => {
  try {
    // Extrae una conexión del pool y ejecuta la consulta
    const [rows] = await pool.query('SELECT * FROM peliculas');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Ruta de ejemplo POST (Insertar datos)
app.get('/api/usuarios', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});