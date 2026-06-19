import express from "express";
import devsController from "../controllers/devController.js";
const routes = express.Router();

routes.get("/", devsController.listarDevs)

routes.get("/id/:id", (req, res) => {
    res.send("Devuelve un id particular")
})

// routes.get("/id/:id", (req, res) => {
//     res.send("Devuelve un id particular")
// })

// routes.get('/devs', (req, res) => {
//     res.send('Un listado de devs')
// })

// routes.get('/devs/id/:id', (req, res) => {
//     res.send('Un dev con un id')
// })

// routes.get('/devs/new', (req, res) => {
//     res.send('devuelve el formulario')
// })

// routes.post('/devs', (req, res) => {
//     res.send('usuario añadido')
// })

export default routes


