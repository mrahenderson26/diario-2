import express from "express";
import fs from "fs/promises";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/api/todo/:id", async function (req, res) {
    try {
        const { id } = req.params;

        const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
        const data = await response.json();

        data.mensaje = "Datos obtenidos desde un servicio externo";

        res.json(data);

    } catch (error) {
        res.status(500).json({
            error: "Error al consumir el servicio externo"
        });
    }
});

app.listen(PORT, function () {
    console.log("Servidor activo en http://localhost:" + PORT);
});