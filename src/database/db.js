import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();


const db = new Sequelize(
    process.env.DB_NAME || 'db_gestion',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || 'qwerty21', {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
        // ssl: false
    }
});

export default db;