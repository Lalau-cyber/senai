'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ordemDeServico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrdemDeServico.belongsTo(models.Veiculo, { foreignKey: 'id_veiculo' });
    }
  }
  ordem_de_servico.init({
    id_ordem: {type: DataTypes.INTEGER, primaryKey: true, autoIncremente: true},
    data_expiracao: {type: DataTypes.DATEONLY, allowNull: false},
    descricao: {type: DataTypes.STRING, allowNull: false, unique: true},
    solucao: {type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'usuario', tableName:'usuario', timestamps: false
  });
  return ordemDeServico;
};