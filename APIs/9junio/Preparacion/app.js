import express from "express";
import fs from "fs/promises";
import aficionesJson from "./aficiones.json" with { type: "json" };

let aficionesVariable = aficionesJson;

const port = 3000;
const app = express();

app.use(express.json());

// Set contador based on the highest existing id in aficiones.json
let contador = aficionesVariable.length > 0
    ? Math.max(...aficionesVariable.map(item => item.id ?? -1)) + 1
    : 0;

// debe devolver un mensaje de saludo en json
app.get("/saludo", (req, res) => {
    res.json("Hola!");
});

// debe devolver la ciudad y el aspecto solicitado
app.get("/mapa", (req, res) => {
    const ciudad = req.query.ciudad;
    const aspecto = req.query.aspecto;

    res.json({
        ciudad,
        aspecto
    });
});

// debe devolver una frase con el id del alumno
app.get("/alumno/:id", (req, res) => {
    const id = Number(req.params.id);

    res.json(`El id del alumno es ${id}`);
});

// debe devolver la hora actual en js
app.get("/hora", (req, res) => {
    const hora = new Date();

    res.json(hora.toLocaleTimeString());
});

/////////////////////////////////////////////////////////////////////

app.get("/aficiones", (req, res) => {
    res.json(aficionesVariable);
});

app.post("/aficiones", async (req, res) => {
    try {
        const { nombre } = req.body;

        if (!nombre) {
            return res.status(400).json({
                error: "Falta el nombre de la afición"
            });
        }

        const id = contador++;

        const nuevaAficion = {
            id,
            nombre
        };

        aficionesVariable.push(nuevaAficion);

        await fs.writeFile(
            "./aficiones.json",
            JSON.stringify(aficionesVariable, null, 2),
            "utf-8"
        );

        res.json({
            mensaje: "afición registrada",
            aficion: nuevaAficion
        });

    } catch (error) {
        res.status(500).json({
            error: "Error al guardar la afición"
        });
    }
});

app.delete("/aficiones/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const index = aficionesVariable.findIndex(item => item.id === id);

        if (index === -1) {
            return res.status(404).json({
                error: "Afición no encontrada"
            });
        }

        const aficionBorrada = aficionesVariable.splice(index, 1)[0];

        await fs.writeFile(
            "./aficiones.json",
            JSON.stringify(aficionesVariable, null, 2),
            "utf-8"
        );

        res.json({
            mensaje: "afición borrada",
            aficion: aficionBorrada
        });

    } catch (error) {
        res.status(500).json({
            error: "Error al borrar la afición"
        });
    }
});

app.get("/api/todo/:id", async (req, res) => {
    const id = req.params.id;

    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();

    data.mensaje = "Este es un servicio generado por USA";

    res.json(data);
});

app.listen(port, () => {
    console.log(`Servidor lanzado en http://localhost:${port}`);
});