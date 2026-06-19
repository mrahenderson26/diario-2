# React Router + Express example — annotated version

This is a small beginner-friendly project showing how **React Router** and **Express** work together.

The files are now annotated with comments explaining what the important parts do.

## Main idea

React Router controls the frontend pages.

Express controls the backend API routes.

```text
React Router = which React page/component appears in the browser
Express      = backend routes that send/receive JSON data
```

## Project structure

```text
react-router-express-example
├── client
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src
│       ├── main.jsx
│       ├── App.jsx
│       ├── styles.css
│       └── pages
│           ├── Home.jsx
│           ├── Alumnos.jsx
│           ├── AlumnoDetalle.jsx
│           ├── Contacto.jsx
│           └── NotFound.jsx
├── server
│   ├── index.js
│   └── package.json
├── package.json
└── README.md
```

## Important frontend routes

These are handled by **React Router** in `client/src/main.jsx`:

```text
/
/alumnos
/alumnos/:id
/contacto
```

For example, this frontend route:

```text
/alumnos/2
```

loads the React component `AlumnoDetalle.jsx`.

## Important backend routes

These are handled by **Express** in `server/index.js`:

```text
GET  /api
GET  /api/alumnos
GET  /api/alumnos/:id
GET  /api/mensajes
POST /api/mensajes
```

For example, this backend route:

```text
/api/alumnos/2
```

returns JSON data for the student whose ID is `2`.

## How to run it

Open a terminal in the main project folder and run:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

The React app runs on port `5173`.

The Express server runs on port `3000`.

## Why React can fetch `/api/alumnos`

In `client/vite.config.js`, this proxy is configured:

```js
proxy: {
  "/api": "http://localhost:3000"
}
```

That means when React does this:

```js
fetch("/api/alumnos")
```

Vite forwards the request to Express:

```text
http://localhost:3000/api/alumnos
```

So the React code does not need to write the full backend URL.

## What to look at first

### 1. Express backend

Open:

```text
server/index.js
```

Look at these routes:

```js
app.get("/api/alumnos", ...)
app.get("/api/alumnos/:id", ...)
app.get("/api/mensajes", ...)
app.post("/api/mensajes", ...)
```

This is where Express sends and receives JSON.

### 2. React Router setup

Open:

```text
client/src/main.jsx
```

Look at this section:

```jsx
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="alumnos" element={<Alumnos />} />
    <Route path="alumnos/:id" element={<AlumnoDetalle />} />
    <Route path="contacto" element={<Contacto />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```

This decides which React page appears for each frontend URL.

### 3. GET example

Open:

```text
client/src/pages/Alumnos.jsx
```

This React page fetches the list of students:

```js
const respuesta = await fetch("/api/alumnos");
const datos = await respuesta.json();
setAlumnos(datos);
```

That calls this Express route:

```js
app.get("/api/alumnos", function (req, res) {
  res.json(alumnos);
});
```

### 4. Dynamic route example

Open:

```text
client/src/pages/AlumnoDetalle.jsx
```

This line captures the frontend URL parameter:

```js
const { id } = useParams();
```

Then this line asks Express for the matching data:

```js
const respuesta = await fetch(`/api/alumnos/${id}`);
```

So this frontend URL:

```text
/alumnos/2
```

causes React to fetch this backend URL:

```text
/api/alumnos/2
```

### 5. POST example

Open:

```text
client/src/pages/Contacto.jsx
```

This form sends JSON to Express:

```js
const respuesta = await fetch("/api/mensajes", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nombre: nombre,
    texto: texto
  })
});
```

That calls this Express route:

```js
app.post("/api/mensajes", function (req, res) {
  const nombre = req.body.nombre;
  const texto = req.body.texto;

  // save data here
});
```

## Important note about package.json files

The `package.json` files are not annotated with comments because JSON does not allow comments. Adding comments inside those files would break the project.

## Main lesson

React Router does **not** replace Express.

React Router replaces the **page-rendering part** that Express/EJS used to do.

Express still handles:

```text
API routes
GET and POST requests
req.params
req.body
database/file access
authentication
server-side logic
```
