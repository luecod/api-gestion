import express from 'express';
import estudianteRoutes from './estudiante.routes.js';
import instuctorRoutes from './instructor.routes.js';
import cursoRoutes from './curso.routes.js';
import inscripcionRoutes from './inscripcion.routes.js';
import calificacionRoutes from './calificacion.routes.js';

const router = express.Router();

router.use('/estudiantes', estudianteRoutes);
router.use('/instructor', instuctorRoutes);
router.use('/curso', cursoRoutes);
router.use('/inscripcion', inscripcionRoutes);
router.use('/calificacion', calificacionRoutes);

export default router;