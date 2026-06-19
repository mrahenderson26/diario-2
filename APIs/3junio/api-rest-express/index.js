import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import usuariosRoutes from "./routes/usuarios.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Middleware para permitir peticiones desde otros orígenes
app.use(cors());

// Ruta principal sencilla
app.get("/", (req, res) => {
    res.json({
        mensaje: "API REST básica con Express"
    });
});

// Rutas de usuarios
app.use("/usuarios", usuariosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
