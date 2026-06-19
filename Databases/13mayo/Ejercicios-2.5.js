////////////////////////////////////////////////////////////
///////////////////// EJERCICIOS 2.5 ///////////////////////
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
    const mensaje = "Bienvenido al curso";
    res.render("inicio", { mensaje });
});

/////////////////////////// TWO ///////////////////////////

app.get("/usuario/:nombre", (req, res) => {
    const { nombre } = req.params
    const mensaje = `Hola ${nombre}`;
    res.render("inicio", { mensaje });
});

/////////////////////////// THREE /////////////////////////

app.get("/alumnos", (req, res) => {
    const alumnos = ["Ana", "Luis", "Carlos", "Marta"]

    res.render("alumnos", { alumnos });
});

/////////////////////////// FOUR /////////////////////////// 

app.get("/nota", (req, res) => {

    res.render("nota", { nota: 7 });
});

/////////////////////////// FIVE ///////////////////////////

app.get("/form", (req, res) => {    
    res.render("form", { nombre: null });
});

app.post("/submit", (req, res) => {
    const { nombre } = req.body
    res.render("form", { nombre });
});