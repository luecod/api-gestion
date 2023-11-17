import Calificacion from '../models/calificacion.model.js';


// Create
const create = async (req, res) => {
    try {
        const calificacion = await Calificacion.create(req.body);
        res.status(201).send(calificacion);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read
const findAll = async (req, res) => {
    try {
        const calificacion = await Calificacion.findAll();
        res.send(calificacion);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//update
const update = async (req, res) => {
    try {
        await Calificacion.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Calificacion was updated successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete
const deleted = async (req, res) => {
    try {
        await Calificacion.destroy({
            where: { id: req.params.id }
        });
        res.send({ message: 'Calificacion was deleted successfully.' });
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