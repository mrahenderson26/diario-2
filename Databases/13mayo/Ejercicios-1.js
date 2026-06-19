////////////////////////////////////////////////////////////
///////////////////// EJERCICIOS 1 /////////////////////////
////////////////////////////////////////////////////////////

import express, { urlencoded } from "express";
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/////////////////////////// UNO /////////////////////////// 

app.get("/", (req, res) => {
    const mensaje = "Hola compañeros";
    res.send(mensaje);
})

/////////////////////////// TWO /////////////////////////// 

app.get("/saludo/:nombre", (req, res) => {
    const { nombre } = req.params;
    const mensaje = `Hola ${nombre}`;
    res.send(mensaje);
})

/////////////////////////// THREE ///////////////////////////

app.get("/alumno", (req, res) => {
    const mensaje = { "nombre": "Ana", "curso": "IFC0210", "aprobado": true }
    res.json(mensaje);
})

/////////////////////////// FOUR /////////////////////////// 

app.get("/sumar", (req, res) => {
    const { a, b } = req.query
    const suma = `${Number(a) + Number(b)}`
    res.send(suma);
})

/////////////////////////// FIVE ///////////////////////////

app.post("/usuario", (req, res) => {
    const usuario = req.body.usuario;

    res.json({
        mensaje: "Usuario creado",
        usuario: usuario
    })
})

app.listen(port, () => {
    console.log(`Servidor lanzado en puerto: ${port}`)
})