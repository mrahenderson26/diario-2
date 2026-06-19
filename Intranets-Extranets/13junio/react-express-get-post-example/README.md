# React + Express GET and POST Example

This is a small beginner-friendly example showing how React and Express work together.

- Express runs on `http://localhost:3000`
- React runs on `http://localhost:5173`
- React fetches data from Express using a `GET` route
- React sends form data to Express using a `POST` route

---

## Project structure

```text
react-express-get-post-example/
├── server/
│   ├── package.json
│   └── server.js
└── client/
    ├── package.json
    ├── index.html
    └── src/
        ├── App.jsx
        ├── App.css
        └── main.jsx
```

---

## How to run it

Open two terminals.

### Terminal 1: start Express

```bash
cd server
npm install
npm run dev
```

Express will run here:

```text
http://localhost:3000
```

You can test the GET route directly in the browser:

```text
http://localhost:3000/api/alumnos
```

---

### Terminal 2: start React

```bash
cd client
npm install
npm run dev
```

React will run here:

```text
http://localhost:5173
```

Open that address in your browser.

---

## What the example shows

### GET route

React calls this Express route:

```js
GET /api/alumnos
```

Express sends back an array of students as JSON.

React receives that JSON and displays it on the page.

---

### POST route

React sends form data to this Express route:

```js
POST /api/mensajes
```

Express receives the data using:

```js
req.body
```

Then Express sends a JSON response back to React.

---

## Main idea

With EJS, Express renders the page.

With React, Express usually sends JSON, and React renders the page in the browser.

```text
React page -> fetch() -> Express API route -> JSON response -> React updates the screen
```
