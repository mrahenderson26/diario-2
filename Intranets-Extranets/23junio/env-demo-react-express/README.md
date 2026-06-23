# React + Express env demo

This tiny project shows the normal split:

- Backend Node/Express code reads environment variables with `process.env`.
- Frontend Vite/React code reads environment variables with `import.meta.env`.

The backend calls a free public API: `https://jsonplaceholder.typicode.com`.
No account or API key is needed.

## Folder structure

```txt
backend/
  .env.example
  src/server.js
frontend/
  .env.example
  src/App.jsx
```

## 1. Start the backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend should run on:

```txt
http://localhost:5000
```

Backend env variables are read here:

```js
const PORT = process.env.PORT || 5000;
const EXTERNAL_API_URL = process.env.EXTERNAL_API_URL;
```

## 2. Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The frontend should run on:

```txt
http://localhost:5173
```

Frontend env variables are read here:

```js
const VITE_API_URL = import.meta.env.VITE_API_URL;
```

## Important notes

Anything exposed through `VITE_` is visible in the browser bundle. Use it for public configuration like a backend URL.

Do not put secrets in frontend env variables:

```env
# Bad
VITE_OPENAI_API_KEY=sk-...
```

Secrets belong in the backend `.env` file and should be read with `process.env`.

## Do you need deployed sites?

No, not for local testing. This project runs entirely on your computer:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
- External public API: `https://jsonplaceholder.typicode.com`

For production, yes: the frontend needs a real backend URL, such as a Render/Railway/Fly/Hetzner URL, unless you deploy both frontend and backend together under one domain.
