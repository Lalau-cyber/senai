import express from 'express';
import pool from './db.js';

const app = express();
app.use(express.json());

// ROTA DE LISTAGEM (READ)
app.get('/clientes', async (req, res) => {
  try {
    // Executamos a query SQL
    const resultado = await pool.query('SELECT * FROM clientes');
    return res.json(resultado.rows);
  } catch (err) {
    return res.status(500).json({ erro: "Erro no banco de dados" });
  }
});



// ROTA DE CRIAÇÃO (CREATE)
app.post('/clientes', async (req, res) => {
  const { nome, email} = req.body;

  try {
    const novoCliente = await pool.query(
      'INSERT INTO clientes (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    );
    
    return res.status(201).json(novoCliente.rows[0]);
  } catch (err) {
    return res.status(500).json({ erro: "Erro ao salvar" });
  }  
});

// ROTA DE ATUALIZAÇÃO (UPDATE)
app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params; // Pega o ID da URL
    const { nome, email} = req.body; // Pega os novos dados do corpo da requisição
  
    try {
      const resultado = await pool.query(
        'UPDATE clientes SET nome = $1, email = $2 WHERE id = $3 RETURNING *',
        [nome, email, id]
      );
  
      // Se o livro não existir, o rows será um array vazio
      if (resultado.rows.length === 0) {
        return res.status(404).json({ erro: "cliente não encontrado" });
      }
  
      return res.json(resultado.rows[0]);
    } catch (err) {
      return res.status(500).json({ erro: "Erro ao atualizar cliente" });
    }

    if(!nome || !email) return res.status(400).json
    ({erro: "Campos obrigatorios faltando"})

    
  });

// ROTA DE EXCLUSÃO (DELETE)
app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const resultado = await pool.query('DELETE FROM clientes WHERE id = $1 RETURNING *', [id]);
  
      if (resultado.rows.length === 0) {
        return res.status(404).json({ erro: "cliente não encontrado" });
      }
  
      return res.json({ mensagem: "cliente removido com sucesso!" });
    } catch (err) {
      return res.status(500).json({ erro: "Erro ao deletar cliente" });
    }
  });
  app.get('/cliente/busca/:nome', async (req, res) => {
    const {nome} = req.params;
  
    try {
      // Executamos a query SQL
      const resultado = await pool.query(
        'SELECT * FROM clientes WHERE nome ILIKE $1',
        [`%${nome}%`]
        );
        if (resultado.rows.length === 0) {
          return res.status(404).json({ mensagem: "Nenhum cliente encontrado com esse nome." });
        }
      return res.json(resultado.rows);
    } catch (err) {
      return res.status(500).json({ erro: "Erro na busca" });
    }
  });
  

  const PORT = 3333;
  app.listen(PORT, () => {
      console.log(`servidor rodando http://localhost:${PORT}`);
  });
