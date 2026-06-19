////////////////////////////////////////////////////////////
///////////////////// EJERCICIOS 3.5 ///////////////////////
////////////////////////////////////////////////////////////

import express, { urlencoded } from "express";
import fs from "fs";
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/////////////////////////// UNO ///////////////////////////

app.get("/students", (req, res) => {
    const data = fs.readFileSync("students.json");
    const students = JSON.parse(data);

    res.render("students", { students });
})

/////////////////////////// TWO ///////////////////////////

app.get("/formAlumno", (req, res) => {
    res.render("formAlumno");
})

app.post("/guardar", (req, res) => {
    const { nombre } = req.body;
    const data = fs.readFileSync("students.json");
    const students = JSON.parse(data);

    const nuevoAlumno = {
        nombre: nombre
    }

    students.push(nuevoAlumno)
    const datosAgregados = JSON.stringify(students, null, 2)

    fs.writeFileSync("students.json", datosAgregados)

    res.send("Datos guardados");
})

/////////////////////////// THREE /////////////////////////

app.get("/", (req, res) => {
    const data = fs.readFileSync("contador.txt")
    let contadorVisitas = Number(data)
    console.log(contadorVisitas)
    contadorVisitas++
    let contadorString = contadorVisitas.toString()
    fs.writeFileSync("contador.txt", contadorString)

    res.render("index", { contadorString });
})

/////////////////////////// FOUR //////////////////////////

app.get("/tareas", (req, res) => {        
    const data = fs.readFileSync("tareas.json");
    const tareas = JSON.parse(data);

    const datosAgregados = JSON.stringify(students, null, 2);

    fs.writeFileSync("students.json", datosAgregados);
})

app.get("/creartarea", (req, res) => {        
    const data = fs.readFileSync("tareas.json");
    const tareas = JSON.parse(data);


    
    students.push(nuevoAlumno)
    const datosAgregados = JSON.stringify(students, null, 2)

    fs.writeFileSync("students.json", datosAgregados)
})

/////////////////////////// FIVE //////////////////////////



app.listen(port, () => {
    console.log(`Servidor lanzado en puerto: ${port}`)
})