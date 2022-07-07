import {Sequelize} from "sequelize";

const db = new Sequelize('limbah_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
