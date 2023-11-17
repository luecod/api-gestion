import express from 'express'
import cors from 'cors';
import db from "../database/db.js";
import routes from '../routes/index.routes.js';

import Estudiante from '../models/estudiante.model.js';
import Instructor from '../models/instructor.model.js';
import Curso from '../models/curso.model.js';
import Inscripcion from '../models/calificacion.model.js';
import Calificacion from '../models/calificacion.model.js';

const app = express();

Instructor.sync({ force: false });
Estudiante.sync({ force: false });

// Sync models with relations
Curso.sync({ force: false });
Calificacion.sync({ force: false });
Inscripcion.sync({ force: false });

app.use(cors());
app.use(express.json())
app.use('/api', routes);


try {
    await db.authenticate();
    console.log("conexion exitosa");
} catch (error) {
    console.log(error);
}


app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.listen(3000, () => {
    console.log('Server running http://localhost:3000/')
})