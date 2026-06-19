import express from "express";
// import devRouters from "./routes/devRouters.js";
import routes from "./routes/devRouters.js";
const app = express();
const port = 3000;

////////// CONFIGURACION DE APP //////////

app.set("view engine", "ejs");
app.set("views", "./veiws");

////////// MIDDLEWARE //////////

app.use(express.static("public"));
app.use("./devs", routes)

//////////// ROUTES ////////////

app.get('/', (req, res) => {
  res.send('Hello World!')
})

////////// MIDDLEWARE 404 //////////

app.use((req, res, next) => {
    res.send("404: Recurso no encontrado")
})

////////// LANZAR SERVIDOR //////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


