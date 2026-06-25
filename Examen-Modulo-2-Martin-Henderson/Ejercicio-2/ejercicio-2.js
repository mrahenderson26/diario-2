import express from "express";
const app = express();
app.use(express.json());
const PORT = 3000;

let tareas = [];
let contador = 1;

app.get("/tareas", async function (req, res) {
    res.json(tareas);
});

app.post("/tareas", async function (req, res) {

    const { titulo } = req.body;

    const nuevaTarea = {
        id: contador,
        titulo: titulo
    };

    contador = contador + 1;

    tareas.push(nuevaTarea);
});

app.delete("/tareas/:id", async function (req, res) {

    const id = Number(req.params.id);

    let indice = -1;

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === id) {
            indice = i;
        }
    }

    if (indice === -1) {
        return res.status(404).json({
            mensaje: "Tarea no encontrada"
        });
    };

    const tareasBorradas = tareas.splice(indice, 1);
    const tareaBorrada = tareasBorradas[0];

    res.json({
        mensaje: "Tarea eliminada",
        tarea: tareaBorrada
    });
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});