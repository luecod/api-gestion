import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';
import Instructor from './instructor.model.js';

const Curso = sequelize.define('Curso', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        unique: true
    },
    descripcion: {
        type: DataTypes.STRING(255)
    },
    duracion: {
        type: DataTypes.INTEGER
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_finalizacion: {
        type: DataTypes.DATE
    },
    id_instructur: {
        type: DataTypes.UUID,
        references: {
            model: Instructor,
            key: 'id'
        }
    }
}, {
    timestamps: false,
});

Curso.sync({ force: false })
    .then(() => console.log('Tabla Curso creada'))
    .catch(error => console.log('Este error ocurrió', error));

export default Curso;