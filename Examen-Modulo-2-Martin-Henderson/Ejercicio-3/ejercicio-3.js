import express from "express";
import fs from "fs/promises";
const tareas = "./tareas.json";

const app = express();
app.use(express.json());

const PORT = 3000;

let tareasVariable = [];

////////////////////////// FUNCIONES //////////////////////////

async function cargarTareas() {
    try {
        const texto = await fs.readFile(tareas, "utf-8");
        tareasVariable = JSON.parse(texto);
    } catch (error) {
        tareasVariable = [];
    }
}

await cargarTareas();

let contador = 1;

for (let i = 0; i < tareasVariable.length; i++) {
    if (tareasVariable[i].id >= contador) {
        contador = tareasVariable[i].id + 1;
    }
}

async function guardarTareas() {
    await fs.writeFile(
        tareas,
        JSON.stringify(tareasVariable, null, 2),
        "utf-8"
    );
};

////////////////////////// RUTAS //////////////////////////

app.get("/tareas-db", async function (req, res) {
    res.json(tareasVariable);
});

app.post("/tareas-db", async function (req, res) {
    try {
        // const titulo = req.body.titulo;

        const {titulo} = req.body;

        if (!titulo) {
            return res.status(400).json({
                error: "Falta el título de la tarea"
            });
        }

        const nuevaTarea = {
            id: contador,
            titulo: titulo
        };

        contador = contador + 1;

        tareasVariable.push(nuevaTarea);

        await guardarTareas();

        res.status(201).json({
            mensaje: "Tarea creada",
            tarea: nuevaTarea
        });

    } catch (error) {
        res.status(500).json({
            error: "Error al guardar la tarea"
        });
    }
});

app.delete("/tareas/:id", async function (req, res) {
    try {
        const id = Number(req.params.id);

        let indice = -1;

        for (let i = 0; i < tareasVariable.length; i++) {
            if (tareasVariable[i].id === id) {
                indice = i;
            }
        }

        if (indice === -1) {
            return res.status(404).json({
                mensaje: "Tarea no encontrada"
            });
        }

        const tareasBorradas = tareasVariable.splice(indice, 1);
        const tareaBorrada = tareasBorradas[0];

        await guardarTareas();

        res.json({
            mensaje: "Tarea eliminada",
            tarea: tareaBorrada
        });

    } catch (error) {
        res.status(500).json({
            error: "Error al borrar la tarea"
        });
    }
});

app.listen(PORT, function () {
    console.log("Servidor activo en http://localhost:" + PORT);
});