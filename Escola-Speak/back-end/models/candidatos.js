const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Candidato = sequelize.define('Candidato', {
  id_candi: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  pontuacao: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nivel_fluencia: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'CANDIDATOS',
  timestamps: false
});

module.exports = Candidato;