import express from 'express';
import pkg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração da conexão com o PostgreSQL
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

// Testar conexão
pool.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao PostgreSQL:', err.stack);
    } else {
        console.log('Conectado ao banco de dados PostgreSQL com sucesso.');
    }
});

// Middlewares
app.use(cors());
app.use(express.json());

// Rota POST: Envio do Formulário de Nivelamento
app.post('/api/nivelamento', async (req, res) => {
    const { nome, email, telefone, q1, q2, q3 } = req.body;

    if (!nome || !email || !telefone) {
        return res.status(400).json({ error: 'Campos obrigatórios não preenchidos.' });
    }

    // Lógica do Teste de Nivelamento
    let pontuacao = 0;
    if (q1 === 'is') pontuacao += 1;
    if (q2 === 'went') pontuacao += 1;
    if (q3 === 'have') pontuacao += 1;

    let nivel_resultado = 'Iniciante (A1)';
    if (pontuacao === 2) nivel_resultado = 'Intermediário (B1)';
    if (pontuacao === 3) nivel_resultado = 'Avançado (C1)';

    try {
        const queryText = `
            INSERT INTO candidatos (nome, email, telefone, pontuacao, nivel_resultado)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, criado_em;
        `;
        const values = [nome, email, telefone, pontuacao, nivel_resultado];
        const result = await pool.query(queryText, values);

        return res.status(201).json({
            message: 'Inscrição registrada com sucesso!',
            candidatoId: result.rows[0].id,
            resultado: { pontuacao, nivel_resultado }
        });
    } catch (error) {
        console.error('Erro na inserção no Postgres:', error);
        return res.status(500).json({ error: 'Erro ao salvar candidato no banco de dados.' });
    }
});

// Rota GET: Consulta para a Secretaria
app.get('/api/secretaria/candidatos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM candidatos ORDER BY criado_em DESC');
        return res.json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar candidatos:', error);
        return res.status(500).json({ error: 'Erro ao buscar candidatos.' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend rodando na porta ${PORT}`);
});