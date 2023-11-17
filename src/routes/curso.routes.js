import express from 'express';
import cursosController from '../controllers/curso.controller.js';

const router = express.Router();

// Create a new Curso
router.post('/', cursosController.create);

// Retrieve all Cursos
router.get('/', cursosController.findAll);

// Update a Curso with id
router.put('/:id', cursosController.update);

// Delete a Curso with id
router.delete('/:id', cursosController.deleted);

export default router;