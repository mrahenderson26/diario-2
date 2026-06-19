# API REST básica con Express

Estructura del proyecto:

```text
api-rest-express/
├── index.js
├── package.json
├── routes/
│   └── usuarios.js
├── controllers/
│   └── usuariosController.js
└── models/
    └── usuarios.js
```

## Instalación

```bash
npm install
```

## Ejecutar el servidor

```bash
npm start
```

O en modo desarrollo:

```bash
npm run dev
```

El servidor se ejecutará en:

```text
http://localhost:3000
```

## Endpoints

```text
GET     /usuarios       Listar usuarios
GET     /usuarios/:id   Obtener usuario por ID
POST    /usuarios       Crear usuario
PUT     /usuarios/:id   Actualizar usuario
DELETE  /usuarios/:id   Eliminar usuario
```

## Ejemplo de JSON para POST o PUT

```json
{
  "nombre": "Marta"
}
```
