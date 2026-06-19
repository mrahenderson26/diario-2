import express from "express";
import pool from "../db/conexion.js";

const router = express.Router();

// LIST FILMS - Index Page
router.get("/", async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM peliculas`
        );

        res.render("lista", { rows });

    } catch (error) {
        console.log(error);
        res.send("Error al obtener películas");
    }
});

// REGISTRATION FORM - Redirected from "Add Film" button on Index Page
router.get("/alta", (req, res) => {
    res.render("alta");
});

// REGISTER FILM - Sumbitted via "Register Film" button on Registration Page, redirects to List Page 
router.post("/registrar", async (req, res) => {
    try {
        const {
            titulo,
            director,
            genero,
            anio,
            duracion,
            nota,
            pais
        } = req.body;

        await pool.query(
            `INSERT INTO peliculas
            (titulo, director, genero, anio, duracion, nota, pais)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [titulo, director, genero, anio, duracion, nota, pais]
        );

        res.redirect("/");

    } catch (error) {
        console.log(error);
        res.send("Error al registrar película");
    }
});

// FORMULARIO EDITAR - Opened via "Edit Icon" on List Page, renders the Edit page
router.get("/editar/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await pool.query(
            `SELECT * FROM peliculas
            WHERE id = ?`,
            [id]
        );

        res.render("editar", {
            resultado: rows[0]
        });

    } catch (error) {
        console.log(error);
        res.send("Error al obtener película");
    }
});

// MODIFICAR - Sumbitted via "Modify Button" on Modify Page, redirects to List Page
router.post("/modificar/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const {
            titulo,
            director,
            genero,
            anio,
            duracion,
            nota,
            pais
        } = req.body;

        await pool.query(
            `UPDATE peliculas
            SET
                titulo = ?,
                director = ?,
                genero = ?,
                anio = ?,
                duracion = ?,
                nota = ?,
                pais = ?
            WHERE id = ?`,
            [titulo, director, genero, anio, duracion, nota, pais, id]
        );

        res.redirect("/");

    } catch (error) {
        console.log(error);
        res.send("Error al modificar película");
    }
});

// BORRAR - Opened via "Delete Icon" on List Page, redirects to List Page
router.get("/borrar/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(
            `DELETE FROM peliculas WHERE id = ?`,
            [id]
        );

        res.redirect("/");

    } catch (error) {
        console.log(error);
        res.send("Error al borrar película");
    }
});

export default router;