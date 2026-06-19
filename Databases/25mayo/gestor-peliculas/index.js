import express from 'express';
import peliculasRoutes from './routes/peliculasRoutes.js';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', peliculasRoutes);

app.listen(3000, () => {
    console.log("App iniciado en puerto 3000");
});
