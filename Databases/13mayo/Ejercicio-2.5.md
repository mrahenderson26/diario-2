5 ejercicios simples de Node.js + Express + EJS 
Ejercicio 1 — Página con mensaje dinámico
Objetivo
Usar EJS y pasar variables.
Enunciado
Crea una ruta / que renderice una vista EJS llamada inicio.ejs.
Debe mostrar:
Bienvenido al curso 

Requisitos
configurar EJS,
usar res.render(),
enviar una variable llamada mensaje.
Pista
Servidor:
res.render("inicio", { mensaje: "Bienvenido al curso" })

Vista EJS: en incio.ejs
<h1><%= mensaje %></h1>


Ejercicio 2 — Mostrar nombre desde la URL
Objetivo
Usar parámetros y mostrarlos en EJS.
Enunciado
Crear una ruta:
/usuario/:nombre

Si el usuario entra en:
/usuario/Laura

La página debe mostrar:
Hola Laura

Pistas
usar req.params.nombre,
enviar el dato a la vista.
EJS
<h2>Hola <%= nombre %></h2>


Ejercicio 3 — Lista de alumnos
Objetivo
Usar arrays y bucles en EJS.
Enunciado
Mostrar una lista de alumnos:
["Ana", "Luis", "Carlos", "Marta"]

La página debe generar un <ul> automáticamente.
Pistas
Enviar el array desde Express:
res.render("alumnos", { alumnos })
En EJS usar:
<% alumnos.forEach(alumno => { %>

Resultado esperado
<ul>
 <li>Ana</li>
 <li>Luis</li>
</ul>


Ejercicio 4 — Mostrar una nota aprobada o suspensa
Objetivo
Usar if en EJS.

Enunciado
Enviar una nota desde Express.
Si la nota es mayor o igual a 5:
mostrar “Aprobado”.
Si es menor:
mostrar “Suspenso”.
Pistas
Servidor:
res.render("nota", { nota: 7 })
EJS:
<% if(nota >= 5){ %>

Resultado esperado
Aprobado


Ejercicio 5 — Formulario simple
Objetivo
Recoger datos desde un formulario.
Enunciado
Crear:
una página con un formulario,
un input para escribir el nombre,
un botón enviar.
Al enviar:
mostrar:
Hola Pedro


Pistas
Formulario:
<form action="/saludo" method="POST">

Necesitan:
app.use(express.urlencoded({ extended: true }))

Y usar:
req.body.nombre

