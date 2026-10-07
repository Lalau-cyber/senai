const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

// Importa os models
require('./models/candidatos');
require('./models/usuarios');

const app = express();

app.use(cors());
app.use(express.json());

// Sincroniza os modelos com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('✅ Conectado ao MySQL e tabelas sincronizadas!');
  })
  .catch((error) => {
    console.error('❌ Erro de conexão com o banco:', error);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});