// =============================================================
// REACT ENTRY POINT
// =============================================================
// This is the first React file that runs in the browser.
// It connects React to the <div id="root"></div> in index.html.
//
// It also defines the React Router routes for the frontend pages.

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// App is the main layout: header, nav menu and <Outlet />.
import App from "./App.jsx";

// These are the page components.
import Home from "./pages/Home.jsx";
import Alumnos from "./pages/Alumnos.jsx";
import AlumnoDetalle from "./pages/AlumnoDetalle.jsx";
import Contacto from "./pages/Contacto.jsx";
import NotFound from "./pages/NotFound.jsx";

// General CSS for the whole React app.
import "./styles.css";

// document.getElementById("root") finds this element in index.html:
// <div id="root"></div>
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter activates React Router in the browser. */}
    <BrowserRouter>
      {/* Routes contains all the possible frontend routes. */}
      <Routes>
        {/*
          This parent route means: use App as the main layout for all
          the child pages below it.
        */}
        <Route path="/" element={<App />}>
          {/* index means the default child page for /. */}
          <Route index element={<Home />} />

          {/* /alumnos shows the list of students. */}
          <Route path="alumnos" element={<Alumnos />} />

          {/*
            /alumnos/:id is a dynamic frontend route.
            Example: /alumnos/2
            React captures the 2 using useParams() in AlumnoDetalle.jsx.
          */}
          <Route path="alumnos/:id" element={<AlumnoDetalle />} />

          {/* /contacto shows the form that sends POST data to Express. */}
          <Route path="contacto" element={<Contacto />} />

          {/* * catches any frontend route that does not exist. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
