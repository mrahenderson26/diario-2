# React Router + Express example

This is a small beginner-friendly project showing how React Router and Express work together.

React Router controls the frontend pages.

Express controls the backend API routes.

## Project structure

```text
react-router-express-example
├── client
│   └── React app with React Router
├── server
│   └── Express API server
└── package.json
```

## Important frontend routes

These are handled by React Router:

```text
/
/alumnos
/alumnos/:id
/contacto
```

## Important backend routes

These are handled by Express:

```text
GET  /api/alumnos
GET  /api/alumnos/:id
GET  /api/mensajes
POST /api/mensajes
```

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

Vite proxies `/api` requests from React to Express, so React can use simple fetch calls like:

```js
fetch("/api/alumnos")
```

instead of:

```js
fetch("http://localhost:3000/api/alumnos")
```

## What to look at first

### Express backend

Open:

```text
server/index.js
```

Look at these routes:

```js
app.get("/api/alumnos", ...)
app.get("/api/alumnos/:id", ...)
app.post("/api/mensajes", ...)
```

### React Router setup

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

### Dynamic route example

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

## Main lesson

React Router does not replace Express.

React Router replaces Express/EJS page rendering.

Express still handles the backend, API routes, form data, files, databases, authentication, etc.
