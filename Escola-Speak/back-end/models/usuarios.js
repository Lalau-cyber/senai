const {DataTypes} = require('sequelize');
const sequelize = require("../config/database")

const Usuario = sequelize.define('Usuario', {
    id_usu :{
     type: DataTypes.INTEGER,
     autoincrement: true,
     primaryKey: true   
    },
    nome:{
     type:DataTypes.STRING(100),
     allowNull: false   
    },
    email:{
     type:DataTypes.STRING(100),
     allowNull: false   
    },
    senha:{
     type:DataTypes.STRING(255),
     allowNull: false   
    }
} ,{
    tableName: 'USUARIOS',
    timestamps: false

    });

    module.exports = Usuario;