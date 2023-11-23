import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Instructor = sequelize.define('Instructor', {
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
    ciudad: {
        type: DataTypes.STRING(255)
    },
    telefono: {
        type: DataTypes.STRING(20)
    },
    especialidad: {
        type: DataTypes.STRING(255)
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY
    }
}, {
    timestamps: false,
});

Instructor.sync({ force: false })
    .then(() => console.log('Tabla Instructor creada'))
    .catch(error => console.log('Este error ocurrió', error));

export default Instructor;