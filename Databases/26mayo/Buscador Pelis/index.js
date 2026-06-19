import express from "express";
import pool from "./db/conexion.js";
const app = express();

const port = 3000;
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    const [registros] = await pool.query(
        `SELECT * from peliculas`
    );
    res.render("lista", {
        registros
    });
});

app.get("/insertar", (req, res) => {
    res.render("insertar");
});

app.get("/pelicula/:id", async (req, res) => {
    const { id } = req.params;
    const [pelicula] = await pool.query("Select * from peliculas where id = ?",
        id
    );
    res.render("ficha-peli", pelicula[0]);
});

app.post("/insertar", async (req, res) => {
    const { titulo, anio } = req.body;

    await pool.query(
        `INSERT INTO peliculas(titulo, anio)
        VALUES (?, ?)`,
        [titulo, anio]
    );
    res.redirect("/");
});

app.get("/busquedas", (req, res) => {
    res.render("form-buscar");
});

app.get("/buscar", async (req, res) => {
    const { titulo } = req.query;
    const [registros] = await pool.query(
        "Select * from peliculas where titulo like ?",
        `%${titulo}%`
    );
    res.render("lista", { registros });
})



app.listen(port, () => {
    console.log("servidor lanzado en 3000")
});

