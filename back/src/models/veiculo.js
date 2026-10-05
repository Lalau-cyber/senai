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
      // define association here
    }
  }
  veiculo.init({
    placa: DataTypes.STRING,
    modelo: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'veiculo',
  });
  return veiculo;
};