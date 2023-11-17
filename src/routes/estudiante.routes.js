import express from 'express';
import estudiantesController from '../controllers/estudiante.controller.js';

const router = express.Router();

// Create a new Estudiante
router.post('/', estudiantesController.create);

// Retrieve all Estudiantes
router.get('/', estudiantesController.findAll);

// Update a Estudiante with id
router.put('/:id', estudiantesController.update);

// Delete a Estudiante with id
router.delete('/:id', estudiantesController.deleted);

export default router;