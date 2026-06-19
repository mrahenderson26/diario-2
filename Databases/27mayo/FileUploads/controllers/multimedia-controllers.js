import pool from '../config/pool.js';

export const mostrarFormulario = (req, res) => {
    res.render('multimedia/nuevo-archivo');
};

export const subirArchivo = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No se ha subido ningún archivo');
        }
        const { originalname, filename, mimetype, size } = req.file;

        await pool.query(
            `INSERT INTO multimedia
            (nombre_original, nombre_archivo, tipo, tamano, ruta)
            VALUES (?, ?, ?, ?, ?)`,
            [originalname, filename, mimetype, size, `/images/${filename}`]
        );

        res.redirect('/multimedia');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al guardar el archivo');
    }
};

export const listarArchivos = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM multimedia ORDER BY id DESC'
        );
        res.render('multimedia/lista-archivos', {
            archivos: rows
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener archivos');
    }
};