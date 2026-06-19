Repaso Node.js + Express 
Ejercicio 1 — “Hola desde Express”
Objetivo
Crear un servidor básico.
Enunciado
Crea un servidor con Express que:
escuche en el puerto 3000,
tenga una ruta /
responda con el texto:

Pistas
usar express()
usar app.get()
usar app.listen()
Resultado esperado
Al entrar en:
http://localhost:3000

debe verse:
 Hola compañeros


Ejercicio 2 — Ruta con parámetro
Objetivo
Aprender req.params.
Enunciado
Crea una ruta:
/saludo/:nombre

Que responda:
Hola Pedro

si el usuario entra en:
/saludo/Pedro

Pistas
usar req.params.nombre

Ejercicio 3 — Devolver JSON
Objetivo
Trabajar con respuestas JSON.
Enunciado
Crea una ruta /alumno que devuelva este JSON:
{
 "nombre": "Ana",
 "curso": "IFC0210",
 "aprobado": true
}

Pistas
usar res.json()
Resultado esperado
El navegador debe mostrar el objeto JSON.

Ejercicio 4 — Suma con query strings
Objetivo
Usar req.query.
Enunciado
Crea una ruta:
/sumar?a=5&b=3

Que devuelva:
Resultado: 8

Pistas
usar:
req.query.a
req.query.b
convertir a número con Number()
Ejemplo
/sumar?a=10&b=7
Resultado:
Resultado: 17


Ejercicio 5 — POST básico
Objetivo
Introducción sencilla a POST y req.body.
Enunciado
Crea una ruta POST /usuario.
El usuario enviará:
{
 "nombre": "Luis"
}
Y el servidor responderá:
{
 "mensaje": "Usuario creado",
 "nombre": "Luis"
}

Pistas
usar:
app.use(express.json())
usar req.body
Prueba recomendada
Usar:
usar rest client
