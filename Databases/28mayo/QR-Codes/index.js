import express from "express"
import ticketsRoutes from "./routes/tickets-routes.js"

const app = express()
const PORT = 3000

// Configuración EJS
app.set("view engine", "ejs")

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

// Rutas
app.use("/", ticketsRoutes)

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`)
})