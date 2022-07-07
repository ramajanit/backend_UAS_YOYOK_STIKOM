import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('limbah_cair_rs',{
    outlet: DataTypes.STRING,
    liter: DataTypes.DOUBLE,
    warna: DataTypes.STRING,
    petugas: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();