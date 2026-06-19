import express from "express";
import pool from "./db.js";

const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

/*
GET -> Obtener todas las películas
http://localhost:3000/peliculas
*/

app.get("/peliculas", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM peliculas"
    );

    res.json(rows);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Error al obtener películas"
    });
  }
});

app.get("/peliculas/id/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const [result] = await pool.query(
      `SELECT * FROM peliculas
      WHERE id = ?`, 
      [id]
      );
      res.status(200).json(result);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Error al obtener películas"
    });
  }
});

/*
POST -> Insertar una película
http://localhost:3000/peliculas

Body JSON:
{
   "titulo":"Matrix",
   "director":"Wachowski",
   "anio":1999
}
*/

app.post("/peliculas", async (req, res) => {

  try {

    const {titulo, director, genero, anio, duracion, nota, pais} = req.body;

    const [result] = await pool.query(
      `INSERT INTO peliculas
      (titulo, director, genero, anio, duracion, nota, pais)
      VALUES (?,?,?,?,?,?,?)`,
      [titulo, director, genero, anio, duracion, nota, pais]
    );

    res.status(201).json({
      mensaje:"Película insertada",
      id: result.insertId
    });

  } catch(error){

    console.error(error);

    res.status(500).json({
      error:"Error al insertar película"
    });

  }

});

app.listen(PORT, ()=>{

  console.log(
    `Servidor en http://localhost:${PORT}`
  );

});

