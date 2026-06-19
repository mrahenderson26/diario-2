// =============================================================
// VITE CONFIGURATION
// =============================================================
// Vite is the development tool that runs the React app.
// React runs on http://localhost:5173 in development.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    // Port for the React development server.
    port: 5173,

    proxy: {
      // This is very important.
      // When React does fetch("/api/alumnos"), Vite forwards the request to:
      // http://localhost:3000/api/alumnos
      //
      // That means the React code can use simple URLs like /api/alumnos
      // instead of writing the full Express URL every time.
      "/api": "http://localhost:3000"
    }
  }
});
