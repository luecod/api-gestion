import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';
import Estudiante from './estudiante.model.js';
import Curso from './curso.model.js';

const Inscripcion = sequelize.define('Inscripcion', {
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
    fecha_inscripcion: {
        type: DataTypes.DATEONLY
    },
    estado: {
        type: DataTypes.STRING(255)
    }
}, {
    timestamps: false,
});

Inscripcion.sync({ force: false })
    .then(() => console.log('Tabla Inscripcion creada'))
    .catch(error => console.log('Este error ocurrió', error));

export default Inscripcion;