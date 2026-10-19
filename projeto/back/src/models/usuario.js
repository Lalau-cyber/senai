'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuario.init({
    id_usuario: {type: DataTypes.INTEGER, primaryKey: true, autoIncremente: true},
    nome: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    senha: {type: DataTypes.STRING(255), allowNull: false}
  }, {
    sequelize,
    modelName: 'usuario', tableName:'usuario', timestamps: false
  });
  return usuario;
};
