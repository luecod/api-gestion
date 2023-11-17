import Instructor from '../models/instructor.model.js';

const create = async (req, res) => {
    try {
        const instructor = await Instructor.create(req.body);
        res.status(201).send(instructor);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read
const findAll = async (req, res) => {
    try {
        const instructor = await Instructor.findAll();
        res.send(instructor);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//update
const update = async (req, res) => {
    try {
        await Instructor.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Instructor was updated successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete
const deleted = async (req, res) => {
    try {
        await Instructor.destroy({
            where: { id: req.params.id }
        });
        res.send({ message: 'Instructor was deleted successfully.' });
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