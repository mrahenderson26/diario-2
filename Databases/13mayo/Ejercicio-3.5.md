5 ejercicios simples de Express + EJS + fs
Ideas fundamentales
entender tres ideas fundamentales del backend:
1. Los datos se guardan fuera del programa
2. JSON es solo texto, es un string
No pensar  que JSON es  un objeto js
JSON.parse()
JSON.stringify()


3. Un CRUD es realmente:
leer,
modificar array,
guardar otra vez.
Nos preparamos para MongoDB o MySQL después.

Lo vamos a hacer sin asincronía..


Ejercicio 1 — Leer un archivo JSON
Objetivo
Aprender a leer datos con fs.
Enunciado
Crear un archivo:
alumnos.json
Con este contenido:
[
 { "nombre": "Ana" },
 { "nombre": "Luis" }
]

Crear una ruta /alumnos que:
lea el archivo,
convierta el JSON,
muestre los alumnos en una vista EJS.

Pistas
Leer archivo:
fs.readFileSync()
Convertir JSON:
JSON.parse()

Ejercicio 2 — Guardar un alumno nuevo
Objetivo
Escribir en archivos JSON.
Enunciado
Crear:
un formulario,
un input para nombre,
un botón guardar.
Al enviar:
leer alumnos.json,
añadir el nuevo alumno,
guardar el archivo otra vez.

Pistas
Guardar archivo:
fs.writeFileSync()
Convertir a texto JSON:
JSON.stringify()
Pistas
Formulario:
<form action="/saludo" method="POST">

Necesitan:
app.use(express.urlencoded({ extended: true }))

Y usar:
const nombre = req.body.nombre


Resultado esperado
Si escriben:
Carlos

El archivo debe quedar:
[
 { "nombre": "Ana" },
 { "nombre": "Luis" },
 { "nombre": "Carlos" }
]


Ejercicio 3 — Contador de visitas
Objetivo
Persistir un número.
Enunciado
Crear un archivo:
contador.txt

Cada vez que alguien entre en /:
leer el número,
sumar 1,
guardar el nuevo valor,
mostrar:
Visitas: 5


Lo que aprenden
leer texto,
convertir a número,
guardar cambios,
persistencia sencilla.

Ejercicio 4 — Lista de tareas
Objetivo
Mini aplicación CRUD muy básica.
Enunciado
Crear una pequeña lista de tareas.
El usuario podrá:
ver tareas,
añadir tareas.
Guardar todo en:
tareas.json

Ejemplo de datos
[
 { "texto": "Estudiar Express" },
 { "texto": "Practicar EJS" }
]



Ejercicio 5 — Borrar un alumno
Objetivo
Modificar arrays y guardar cambios.
Enunciado
Mostrar alumnos con un botón:
Eliminar
Al pulsarlo:
borrar el alumno del array,
actualizar alumnos.json,
volver a mostrar la lista.

Pistas
Usar:
filter(),
splice(),
 o índices simples.

