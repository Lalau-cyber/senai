import express from 'express';
import pool from './db.js';

const app = express();
app.use(express.json());

// ROTA DE LISTAGEM (READ)
app.get('/livros', async (req, res) => {
  try {
    // Executamos a query SQL
    const resultado = await pool.query('SELECT * FROM livros');
    return res.json(resultado.rows);
  } catch (err) {
    return res.status(500).json({ erro: "Erro no banco de dados" });
  }
});

// ROTA DE CRIAÇÃO (CREATE)
app.post('/livros', async (req, res) => {
  const { titulo, autor, ano_publicacao, disponivel } = req.body;
  try {
    const novoLivro = await pool.query(
      'INSERT INTO livros (titulo, autor, ano_publicacao, disponivel) VALUES ($1, $2, $3, $4) RETURNING *',
      [titulo, autor, ano_publicacao, disponivel]
    );
    return res.status(201).json(novoLivro.rows[0]);
  } catch (err) {
    return res.status(500).json({ erro: "Erro ao salvar" , err});
  }  
});

// ROTA DE ATUALIZAÇÃO (UPDATE)
app.put('/livros/:id', async (req, res) => {
    const { id } = req.params; // Pega o ID da URL
    const { titulo, autor, ano_publicacao } = req.body; // Pega os novos dados do corpo da requisição
  
    try {
      const resultado = await pool.query(
        'UPDATE livros SET titulo = $1, autor = $2, ano_publicacao = $3 WHERE id = $4 RETURNING *',
        [titulo, autor, ano_publicacao, id]
      );
  
      // Se o livro não existir, o rows será um array vazio
      if (resultado.rows.length === 0) {
        return res.status(404).json({ erro: "Livro não encontrado" });
      }
  
      return res.json(resultado.rows[0]);
    } catch (err) {
      return res.status(500).json({ erro: "Erro ao atualizar livro" });
    }
  });

// ROTA DE EXCLUSÃO (DELETE)
app.delete('/livros/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const resultado = await pool.query('DELETE FROM livros WHERE id = $1 RETURNING *', [id]);
  
      if (resultado.rows.length === 0) {
        return res.status(404).json({ erro: "Livro não encontrado" });
      }
  
      return res.json({ mensagem: "Livro removido com sucesso!" });
    } catch (err) {
      return res.status(500).json({ erro: "Erro ao deletar livro" });
    }
  });
  const PORT = 3333;

  app.listen(PORT, () => {
      console.log(`servidor rodando http://localhost:${PORT}`);
  });

