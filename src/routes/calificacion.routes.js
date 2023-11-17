import express from 'express';
import calificacionesController from '../controllers/calificacion.controller.js';

const router = express.Router();

// Create a new Calificacion
router.post('/', calificacionesController.create);

// Retrieve all Calificaciones
router.get('/', calificacionesController.findAll);

// Update a Calificacion with id
router.put('/:id', calificacionesController.update);

// Delete a Calificacion with id
router.delete('/:id', calificacionesController.deleted);

export default router;