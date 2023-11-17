import express from 'express';
import inscripcionesController from '../controllers/inscripcion.controller.js';

const router = express.Router();

// Create a new Inscripcion
router.post('/', inscripcionesController.create);

// Retrieve all Inscripciones
router.get('/', inscripcionesController.findAll);

// Update a Inscripcion with id
router.put('/:id', inscripcionesController.update);

// Delete a Inscripcion with id
router.delete('/:id', inscripcionesController.deleted);

export default router;