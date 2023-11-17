import Curso from '../models/curso.model.js';

const create = async (req, res) => {
    try {
        const curso = await Curso.create(req.body);
        res.status(201).send(curso);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read
const findAll = async (req, res) => {
    try {
        const curso = await Curso.findAll();
        res.send(curso);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//update
const update = async (req, res) => {
    try {
        await Curso.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Curso was updated successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete
const deleted = async (req, res) => {
    try {
        await Curso.destroy({
            where: { id: req.params.id }
        });
        res.send({ message: 'Curso was deleted successfully.' });
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