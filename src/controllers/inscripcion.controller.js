import Inscripcion from '../models/inscripcion.model.js';

const create = async (req, res) => {
    try {
        const inscripcion = await Inscripcion.create(req.body);
        res.status(201).send(inscripcion);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read
const findAll = async (req, res) => {
    try {
        const inscripcion = await Inscripcion.findAll();
        res.send(inscripcion);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//update
const update = async (req, res) => {
    try {
        await Inscripcion.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Inscripcion was updated successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete
const deleted = async (req, res) => {
    try {
        await Inscripcion.destroy({
            where: { id: req.params.id }
        });
        res.send({ message: 'Inscripcion was deleted successfully.' });
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