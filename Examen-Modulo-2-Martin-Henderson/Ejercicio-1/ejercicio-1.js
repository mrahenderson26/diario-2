import express from "express";
const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/saludo", async function (req, res) {
    res.json({
        mensaje: "Hola alumno"
    });
});

app.get("/fecha", async function (req, res) {
    const fecha = new Date();

    res.json({
        fecha: fecha.toLocaleDateString()
    });
});

app.get("/sumar", async function (req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        resultado: a + b
    });
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});