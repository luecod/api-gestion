import Estudiante from '../models/estudiante.model.js';

// Create
const create = async (req, res) => {
    try {
        const estudiante = await Estudiante.create(req.body);
        res.status(201).send(estudiante);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read
const findAll = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        res.send(estudiantes);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//update
const update = async (req, res) => {
    try {
        await Estudiante.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Estudiante was updated successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete
const deleted = async (req, res) => {
    try {
        await Estudiante.destroy({
            where: { id: req.params.id }
        });
        res.send({ message: 'Estudiante was deleted successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


export default {
    create,
    findAll,
    update,
    deleted
};