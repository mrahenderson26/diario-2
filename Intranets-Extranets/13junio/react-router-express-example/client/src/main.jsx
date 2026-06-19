import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Alumnos from "./pages/Alumnos.jsx";
import AlumnoDetalle from "./pages/AlumnoDetalle.jsx";
import Contacto from "./pages/Contacto.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="alumnos" element={<Alumnos />} />
          <Route path="alumnos/:id" element={<AlumnoDetalle />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
