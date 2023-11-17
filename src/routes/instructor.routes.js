import express from 'express';
import instructorsController from '../controllers/instructor.controller.js';

const router = express.Router();

// Create a new Instructor
router.post('/', instructorsController.create);

// Retrieve all Instructors
router.get('/', instructorsController.findAll);

// Update a Instructor with id
router.put('/:id', instructorsController.update);

// Delete a Instructor with id
router.delete('/:id', instructorsController.deleted);

export default router;