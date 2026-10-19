'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class veiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Veiculo.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });
  Veiculo.hasMany(models.OrdemDeServico, { foreignKey: 'id_veiculo' });
    }
  }
  veiculo.init({
    id_veiculo: {type: DataTypes.INTEGER, primaryKey: true, autoIncremente: true},
    ano: {type: DataTypes.INTEGER, allowNull: false},
    placa: {type: DataTypes.STRING, allowNull: false},
    marca: {type: DataTypes.STRING(255), allowNull: false},
    valor: {type: DataTypes.STRING(255), allowNull: false},
    id_cliente: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'veiculo', tableName:'veiculo', timestamps: false
  });
  
  return veiculo;
};