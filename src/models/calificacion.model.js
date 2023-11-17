import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';
import Estudiante from './estudiante.model.js';
import Curso from './curso.model.js';

const Calificacion = sequelize.define('Calificacion', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    id_estudiante: {
        type: DataTypes.UUID,
        references: {
            model: Estudiante,
            key: 'id'
        }
    },
    id_curso: {
        type: DataTypes.UUID,
        references: {
            model: Curso,
            key: 'id'
        }
    },
    calificacion: {
        type: DataTypes.FLOAT
    }
}, {
    timestamps: false,
});

Calificacion.sync({ force: false })
    .then(() => console.log('Tabla Calificacion creada'))
    .catch(error => console.log('Este error ocurrió', error));

export default Calificacion;