const express = require('express');
const cors = require('cors');
const { sequelize } = require('./src/models'); // Importa a instância configurada pelo Sequelize CLI
const routes = require('./src/routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

// Rota de teste
app.get('/', (req, res) => {
  res.json({ mensagem: 'API da Escola de Idiomas Speak Up rodando com sucesso!' });
});

// Inicia o servidor após conectar ao banco
sequelize.authenticate()
  .then(() => {
    console.log('📦 Conectado ao PostgreSQL com sucesso via Sequelize CLI!');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Erro ao conectar ao banco de dados:', err);
  });