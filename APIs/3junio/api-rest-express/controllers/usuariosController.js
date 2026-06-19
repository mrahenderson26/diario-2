import usuarios from "../models/usuarios.js";

// GET /usuarios
export const obtenerUsuarios = (req, res) => {
    res.status(200).json(usuarios);
};

// GET /usuarios/:id
export const obtenerUsuarioPorId = (req, res) => {
    const id = req.params.id;
    const usuario = usuarios.find(item => item.id == id);

    if (!usuario) {
        return res.status(404).json({
            mensaje: "Usuario no encontrado"
        });
    }

    res.status(200).json(usuario);
};

// POST /usuarios
export const crearUsuario = (req, res) => {
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre
    };

    usuarios.push(nuevoUsuario);

    res.status(201).json(nuevoUsuario);
};

// PUT /usuarios/:id
export const actualizarUsuario = (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);

    if (!usuario) {
        return res.status(404).json({
            mensaje: "Usuario no encontrado"
        });
    }

    usuario.nombre = req.body.nombre;

    res.status(200).json(usuario);
};

// DELETE /usuarios/:id
export const eliminarUsuario = (req, res) => {
    const id = req.params.id;
    const indiceUsuario = usuarios.findIndex(u => u.id == id);

    if (indiceUsuario === -1) {
        return res.status(404).json({
            mensaje: "Usuario no encontrado"
        });
    }

    usuarios.splice(indiceUsuario, 1);

    res.status(200).json({
        mensaje: "Usuario eliminado"
    });
};
