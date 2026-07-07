import pool from './db.js';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(express.json());

app.use(cors());

    const usuarioSimulado = {
    nome: "Cleitin Malvadeza de Oliveira",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EAvcidIniLspHIbV-U1mBZx4yz_fT9eZqBs7BF9vBDLYV3IkCz_xOnA&s=10",
    email: "cleitin.malvadeza@email.com",
    telefone: "(11) 99999-9999",
    cupons: ["PÃOQUENTINHO5", "FRETEGRATIS"],
    cartoes: ["Visa (4321)", "Mastercard (8877)"],
    enderecos: ["Rua do Cleitin, 123"]
    }

// --- 1 TELA DE LOGIN GET --- //
app.get('/logins', async (req, res) => {
    try {
        // Busca o id, nome e email de todos os usuários cadastrados
        const resultado = await pool.query('SELECT id, nome, email FROM CONTA_USUARIO');
        
        // Retorna a lista em formato JSON com status 200 (OK)
        res.status(200).json(resultado.rows);
    } catch (error) {
        console.error('Erro ao listar logins:', error);
        res.status(500).json({ erro: 'Erro interno do servidor ao buscar logins' });
    }
});

// --- 1 TELA DE LOGIN POST --- //
app.post('/login', (req, res ) => {
    const{ email, senha} = req.body;

    if(!email || !senha) {
        return res.status(400).json({erro: "Email e senha são obrigatórios"});
    }

    res.json({ mensagem: "Login realizado com sucesso" });
});

// ---2 TELA DE CADASTRO GET ---//
app.get('/cadastro', async (req, res) => {
    
    try{
        const cadastro = await pool.query('SELECT * FROM CONTA_USUARIO');
        res.json(cadastro.rows);
    } catch (error) {
        console.error('Erro ao buscar cadastros:', error);
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
})


// ---2 TELA DE CADASTRO POST ---//
app.post('/cadastro', (req, res) => {
    const {email, senha, cpf, telefone, nome} = req.body;

    if(!email || !senha || !cpf || !telefone || !nome) {
        return res.status(400).json({erro: "Todos os campos são obrigatórios"});
    }

    try {
        await pool.query(
            "INSERT INTO CONTA_USUARIO (email, senha, cpf, telefone, nome) VALUES ($1, $2, $3, $4, $5)",
            [email, senha, cpf, telefone, nome]
        );
        console.log(`Criada conta para ${nome} com email ${email}`);
        res.status(201).json({ mensagem: "Conta criada com sucesso" });
    } catch (error) {
        console.error('Erro ao salvar cadastro:', error);
        res.status(500).json({ erro: 'Erro interno do servidor ao criar conta' });
    }
    

    console.log(`Criado conta para ${nome} com email ${email}`);

    res.status(201).json({mensagem: "Conta criada com sucesso"})
});

// --- 3 TELA DE ESQUECI MINHA SENHA --- //
app.post('/esqueci-senha', (req, res) => {
    const {novaSenha, confirmarSenha} = req.body;

    if(!novaSenha || !confirmarSenha) {
        return res.status(400).json({erro: "Nova senha e confirmação de senha são obrigatórias"});
    }

    if(novaSenha !== confirmarSenha) {
        return res.status(400).json({erro: "As senhas não coincidem"});
    }

    res.json({mensagem: "senha redefinida com sucesso"});
});

//--- 4 TELA DE PESQUISA DE PADARIAS ---//
app.get('/pesquisa', (req, res) => {
    const { nome_padaria  } = req.query;

    if(!nome_padaria) {
        return res.status(400).json({erro:" Digite o nome da padaria para Pesquisar"})
    }

    const padariasSimuladas = [
        {id: 1, nome:` ${nome_padaria} Padaria Pão Nosso`},
        {id: 2, nome: `${nome_padaria} Padaria Pão de Mel`},
        {id: 3, nome: `${nome_padaria} Padaria Pão Quentinho`},
        {id: 4, nome: `${nome_padaria} Padaria Pão Caseiro`},
        {id: 5, nome: `${nome_padaria} Padaria Pão da Vovó`},
    ];

    res.status(200).json(padariasSimuladas);
})
// --- 5 TELA DE PEDIDO --- //
app.post('/pedido', (req, res) => {
    const { nome_cliente, preco_total, itens, endereço } = req.body;

    if(!nome_cliente || !preco_total || !itens || !endereço) {
        return res.status(400).json({erro: "Todos os campos são obrigatórios"});
    }

    res.status(201).json({mensagem: "Pedido realizado com sucesso"});
});

app.get('/perfil', (req, res) => {
    res.json({
        nome: usuarioSimulado.nome,
        foto: usuarioSimulado.foto
    });
});

// Retorna apenas os cartões/métodos de pagamento
app.get('/perfil/pagamento', (req, res) => {
    res.json({
        cartoes: usuarioSimulado.cartoes
    });
});

// Retorna apenas os cupons ativos
app.get('/perfil/cupons', (req, res) => {
    res.json({
        cupons: usuarioSimulado.cupons
    });
});

// Retorna os endereços cadastrados
app.get('/perfil/enderecos', (req, res) => {
    res.json({
        enderecos: usuarioSimulado.enderecos
    });
});

// Retorna os dados privados da conta (Email, Telefone, etc)
app.get('/perfil/dados', (req, res) => {
    res.json({
        email: usuarioSimulado.email,
        telefone: usuarioSimulado.telefone
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});