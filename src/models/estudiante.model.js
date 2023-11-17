import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Estudiante = sequelize.define('Estudiante', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    cedula: {
        type: DataTypes.STRING(20),
        unique: true
    },
    nombres: {
        type: DataTypes.STRING(255)
    },
    apellidos: {
        type: DataTypes.STRING(255)
    },
    correo: {
        type: DataTypes.STRING(255),
        unique: true
    },
    telefono: {
        type: DataTypes.STRING(20)
    },
    fecha_nacimiento: {
        type: DataTypes.STRING(255)
    }
}, {
    timestamps: false,
});

Estudiante.sync({ force: false })
    .then(() => console.log('Tabla Estudiante creada'))
    .catch(error => console.log('Este error ocurrió', error));

export default Estudiante;