const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Disponibiliza a pasta de uploads publicamente através do navegador para servir as mídias
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuração de conexão profissional com o Banco de Dados PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'uploads',
    password: 'senai',
    port: 5433
});

// Configuração granular e robusta do motor de armazenamento (Storage Engine) do Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Define a pasta local de destino para os arquivos
    },
    filename: (req, file, cb) => {
        // Geração de um sufixo numérico aleatório único para evitar sobreposição de ficheiros homônimos
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Rota POST para criação de perfil com recebimento de múltiplos ficheiros e campos distintos
app.post('/perfil', upload.fields([
    { name: 'foto', maxCount: 1 },
    { name: 'curriculo', maxCount: 1 }
]), async (req, res) => {
    try {
        const { nome } = req.body;

        // Captura cirúrgica dos caminhos gerados pelo Multer se os arquivos existirem na requisição
        const fotoPath = req.files['foto'] ? `/uploads/${req.files['foto'][0].filename}` : null;
        const curriculoPath = req.files['curriculo'] ? `/uploads/${req.files['curriculo'][0].filename}` : null;

        const result = await pool.query(
            'INSERT INTO perfis (nome, foto_url, curriculo_url) VALUES ($1, $2, $3) RETURNING *',
            [nome, fotoPath, curriculoPath]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro crítico interno ao salvar o perfil.');
    }
});

app.delete('/perfil/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Tentando deletar perfil com ID: ${id}`);
 
        // Passo 1: Busca os caminhos dos arquivos gravados para esse ID antes de deletar
        const resultado = await pool.query(
            'SELECT foto_url, curriculo_url FROM perfis WHERE id = $1',
            [id]
        );
 
        if (resultado.rows.length === 0) {
            console.warn(`Perfil com ID ${id} não encontrado`);
            return res.status(404).json({ erro: 'Perfil não encontrado.' });
        }
 
        const { foto_url, curriculo_url } = resultado.rows[0];
 
        // Função utilitária para deletar um arquivo físico com segurança
        const deletarArquivo = (urlRelativa) => {
            if (!urlRelativa) return; // Arquivo não existe no registro, nada a fazer
 
            // Constrói o caminho absoluto real no disco a partir da URL relativa salva no banco
            // Ex: '/uploads/foto.jpg' → 'C:/projeto/uploads/foto.jpg'
            const caminhoAbsoluto = path.join(__dirname, urlRelativa);
 
            // Valida se o arquivo realmente existe no disco antes de tentar excluí-lo
            if (fs.existsSync(caminhoAbsoluto)) {
                fs.unlinkSync(caminhoAbsoluto);
                console.log(`Arquivo removido com sucesso: ${caminhoAbsoluto}`);
            } else {
                console.warn(`Arquivo não encontrado no disco (já removido?): ${caminhoAbsoluto}`);
            }
        };
 
        // Passo 2: Deleta os arquivos físicos da pasta uploads/
        deletarArquivo(foto_url);
        deletarArquivo(curriculo_url);
 
        // Passo 3: Remove o registro definitivamente da tabela do PostgreSQL
        await pool.query('DELETE FROM perfis WHERE id = $1', [id]);
 
        console.log(`Perfil com ID ${id} deletado com sucesso`);
        res.status(200).json({ mensagem: 'Perfil e arquivos excluídos com sucesso.' });
    } catch (error) {
        console.error('Erro ao deletar perfil:', error);
        res.status(500).json({ erro: 'Erro crítico interno ao excluir o perfil.', detalhes: error.message });
    }
});

// Rota GET de consulta estruturada para listagem de todos os perfis registrados
app.get('/perfis', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM perfis ORDER BY id DESC'
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar a lista de perfis do banco.');
    }
});

app.listen(3001, () => console.log('Servidor Backend rodando perfeitamente na porta 3001'));