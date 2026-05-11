import express from 'express';
import pool from './db.js';

const app = express();
app.use(express.json());

// ROTA DE CRIAÇÃO DE PEDIDO
app.post('/pedidos', async (req, res) => {
  const { cliente_id, valor, produto } = req.body;

  try {
    // 1. Verificamos se o cliente realmente existe
    const clienteExiste = await pool.query(
      'SELECT * FROM clientes WHERE id = $1', 
      [cliente_id]
    );

    if (clienteExiste.rows.length === 0) {
      return res.status(404).json({ erro: "Cliente não encontrado. Não é possível criar o pedido." });
    }

    // 2. Se o cliente existe, cadastramos o pedido
    const novoPedido = await pool.query(
      'INSERT INTO pedidos (cliente_id, valor, produto) VALUES ($1, $2, $3) RETURNING *',
      [cliente_id, valor, produto]
    );

    return res.status(201).json(novoPedido.rows[0]);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: "Erro ao salvar pedido" });
  }
});

app.get('/pedidos', async(req, res) =>{
    try{
        const querySQL = `
        SELECT P.ID AS PEDIDO_id, P.PRODUTO, P.VALOR,
            C.NOME AS NOME_CLIENTE,
            C.EMAIL AS EMAIL_CLIENTE
        FROM PEDIDOS P
        INNER JOIN CLIENTES C ON P.CLIENTE_ID = C.ID
        `;
    
    const resultado = await pool.query(querySQL);
    return res.json(resultado.rows);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: "Erro ao buscar pedidos" });
  }
});

 const PORT = 3333;
  app.listen(PORT, () => {
      console.log(`servidor rodando http://localhost:${PORT}`);
  });

