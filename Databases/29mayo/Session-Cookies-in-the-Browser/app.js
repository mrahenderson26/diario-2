import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.set("view engine", "ejs");

app.use(cookieParser());

app.get("/crear", (req, res) => {
    res.cookie("usuario", "Juan")
    const usuario = req.cookies.usuario
    res.send(`Cookie creado para ${usuario}`)
});

app.get("/perfil", (req, res) => {
    const usuario = req.cookies.usuario
    res.send(usuario)
});

app.get("/tema", (req, res) => {
    res.cookie("tema", "claro");
    let tema = req.cookies.tema;
    res.send(`Tema creado con: ${tema}`);
});

app.get("/check-tema", (req, res) => {
    let tema = req.cookies.tema
    res.send(`Tema actual: ${tema}`)
});

app.get("/contador", (req, res) => {

    let contador = 0;

    if (!req.cookies.contador) {
        contador = 1
    } else {
        contador = Number(req.cookies.contador) + 1;
    }

    res.cookie("contador", contador);

    res.send(`Visitas acumuladas: ${contador}`);

});

app.get("/promo", (req, res) => {
    res.cookie("promo", "activo", {
        maxAge: 1000 * 15
    });
    res.send("Promo activado");
});

app.get("/check-promo", (req, res) => {
    let promo = req.cookies.promo
    if (promo === undefined) {
        res.send(`El promo está desactivado`)
    } else {
        res.send(`Estado del promo: ${promo}`)
    }
});

app.get("/logout", (req, res) => {
    res.clearCookie("password")
    res.send("Has hecho logout con éxito")
});

app.listen(3000);