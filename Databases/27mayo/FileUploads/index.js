import express from 'express';
import path from 'path';
import multimediaRoutes from './routes/multimediaRoutes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

// Habilitar carpeta public
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.redirect("/multimedia")
});

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.use('/multimedia', multimediaRoutes);

app.use((req, res, next) => {
    const url = req.url;
    res.status(404).render("404", { url })
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});

