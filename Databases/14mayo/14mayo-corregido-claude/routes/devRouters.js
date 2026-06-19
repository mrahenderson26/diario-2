import express from "express";
import devsController from "../controllers/devsController.js";
const routes = express.Router();

routes.get("/", devsController.listarDevs)

routes.get("/id/:id", (req, res) => {
    res.send("Devuelve un id particular")
})

export default routes
