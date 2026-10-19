'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente.hasMany(models.Veiculo, { foreignKey: 'id_cliente' });
    }
  }
  cliente.init({
    id_cliente: {type: DataTypes.INTEGER, primaryKey: true, autoIncremente: true},
    nome: {type: DataTypes.STRING, allowNull: false},
    telefone: {type: DataTypes.STRING, allowNull: false},
    cpf: {type: DataTypes.STRING(512), allowNull: false}
  }, {
    sequelize,
    modelName: 'cliente', tableName:'cliente', timestamps: false
  });
  return cliente;
};