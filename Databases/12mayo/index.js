// Importar
import express from "express";
import { authMiddleware } from "./auth.middleware.js";

// Variables de manejo
const app = express();
const puerto = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

const data = {
    nombre: "La proteccion de rutas con express",
    usuario: "admin",
    password: "1234"
}

// Midddleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get("/", (req, res) => {
    res.render("index", { data }) // if you pass data without {}, you don't have write data.nombre in the ejs file, you can just write nombre
}) // Ruta pública

app.get("/login", (req, res) => {
    res.render("form", { data })
})

const handlerAdmin = (res, req) => {
    res.send("<p>Esto es una URL protegida</p>")
}

app.post("/admin", authMiddleware, (req, res) => {
    res.send("<p>Esto es una URL protegida</p>")
}) // Ruta protegida


// app.get("/admin", authMiddleware, handlerAdmin) // Ruta protegida


// Lanzar servidor


app.listen(puerto, () => console.log(`Servidor en puerto ${puerto}`))

