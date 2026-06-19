import { Router } from 'express';

import upload from '../config/multer.js';

import {
    mostrarFormulario,
    subirArchivo,
    listarArchivos
} from '../controllers/multimedia-controllers.js';

const router = Router();

router.get('/nuevo', mostrarFormulario);

router.post(
    '/',
    upload.single('archivo'),
    subirArchivo
);

router.get('/', listarArchivos);

export default router;