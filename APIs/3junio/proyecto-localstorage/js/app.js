// ================================================================
// PROYECTO EJEMPLO: localStorage
// ================================================================

// ------------------------------------------------
// 1. Variable JS normal
// ------------------------------------------------
// Esta variable desaparece cuando recargas la página.
let contadorTemporal = 0;

const contadorVariable = document.getElementById("contador-variable");
const botonSumarVariable = document.getElementById("sumar-variable");

botonSumarVariable.addEventListener("click", () => {
  contadorTemporal++;
  contadorVariable.textContent = contadorTemporal;
});

// ------------------------------------------------
// 2. sessionStorage
// ------------------------------------------------
// sessionStorage sobrevive a una recarga, pero normalmente desaparece
// al cerrar la pestaña del navegador.
const inputSession = document.getElementById("nota-session");
const valorSession = document.getElementById("valor-session");
const botonGuardarSession = document.getElementById("guardar-session");
const botonBorrarSession = document.getElementById("borrar-session");

function mostrarNotaSession() {
  const nota = sessionStorage.getItem("nota");
  valorSession.textContent = nota || "Nada todavía";
  inputSession.value = nota || "";
}

botonGuardarSession.addEventListener("click", () => {
  const nota = inputSession.value.trim();

  if (nota === "") {
    alert("Escribe una nota antes de guardarla.");
    return;
  }

  sessionStorage.setItem("nota", nota);
  mostrarNotaSession();
});

botonBorrarSession.addEventListener("click", () => {
  sessionStorage.removeItem("nota");
  mostrarNotaSession();
});

// ------------------------------------------------
// 3. localStorage: lista de tareas persistente
// ------------------------------------------------
// Recuperamos las tareas guardadas.
// Si no existe nada todavía, usamos un array vacío.
const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const inputTarea = document.getElementById("tarea");
const botonGuardarTarea = document.getElementById("guardar-tarea");
const botonBorrarTareas = document.getElementById("borrar-tareas");
const lista = document.getElementById("lista");

function guardarTareasEnLocalStorage() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function mostrarTareas() {
  lista.innerHTML = "";

  if (tareas.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No hay tareas guardadas.";
    lista.appendChild(li);
    return;
  }

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = tarea;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("mini-button");

    botonEliminar.addEventListener("click", () => {
      tareas.splice(index, 1);
      guardarTareasEnLocalStorage();
      mostrarTareas();
    });

    li.appendChild(texto);
    li.appendChild(botonEliminar);
    lista.appendChild(li);
  });
}

botonGuardarTarea.addEventListener("click", () => {
  const texto = inputTarea.value.trim();

  if (texto === "") {
    alert("Escribe una tarea antes de guardarla.");
    return;
  }

  tareas.push(texto);
  guardarTareasEnLocalStorage();

  inputTarea.value = "";
  mostrarTareas();
});

botonBorrarTareas.addEventListener("click", () => {
  localStorage.removeItem("tareas");
  tareas.length = 0;
  mostrarTareas();
});

// ------------------------------------------------
// 4. fetch + localStorage
// ------------------------------------------------
// Pedimos datos a una API, los convertimos a objeto JS con .json(),
// y luego los guardamos como cadena JSON con JSON.stringify().
const botonFetchUsuario = document.getElementById("fetch-usuario");
const botonUsarCache = document.getElementById("usar-cache");
const botonBorrarUsuario = document.getElementById("borrar-usuario");
const usuarioOutput = document.getElementById("usuario-output");

function mostrarUsuario(usuario, origen) {
  usuarioOutput.textContent =
    `Origen: ${origen}\n\n` +
    JSON.stringify(usuario, null, 2);
}

botonFetchUsuario.addEventListener("click", async () => {
  try {
    usuarioOutput.textContent = "Pidiendo usuario a la API...";

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const usuario = await respuesta.json();

    localStorage.setItem("usuario", JSON.stringify(usuario));

    mostrarUsuario(usuario, "API con fetch");
  } catch (error) {
    usuarioOutput.textContent = "No se pudo pedir el usuario.";
    console.error(error);
  }
});

botonUsarCache.addEventListener("click", () => {
  const usuarioGuardado = localStorage.getItem("usuario");

  if (usuarioGuardado === null) {
    usuarioOutput.textContent = "No hay ningún usuario guardado en localStorage.";
    return;
  }

  const usuario = JSON.parse(usuarioGuardado);
  mostrarUsuario(usuario, "localStorage");
});

botonBorrarUsuario.addEventListener("click", () => {
  localStorage.removeItem("usuario");
  usuarioOutput.textContent = "Usuario borrado de localStorage.";
});

// ------------------------------------------------
// Estado inicial al cargar la página
// ------------------------------------------------
mostrarNotaSession();
mostrarTareas();
