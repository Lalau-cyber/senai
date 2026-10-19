const {Usuario} = require('../models');

module.exports = {

    async Criar(req,res){
        try{
            const{nome, email, senha, perfil} = req.body;
            const usuarioExiste = await Usuario.findOne({where : {email}});
            if(usuarioExiste){
                return res.status(400).json({erro: 'Este email já está registrado.'});
            }

            const novoUsuario = await Usuario.create({
                nome,
                email,
                senha,
                perfil
            });
            return res.status(201).json({
                mensagem: 'Usuário criado com sucesso!',
                usuario: {
                    id: novoUsuario.id,
                    nome: novoUsuario.nome,
                    email: novoUsuario.email,
                    perfil: novoUsuario.perfil
                }
            });
        }catch (error) {
            console.error ('Erro ao criar usuário', error);
            return res.status(500).json({erro: 'Erro interno ao buscar usuários.'});
        }
          },
        async Listar(req, res) {
            try {
                const usuarios = await Usuario.findAll({
                    attributes: ['id', 'nome', 'email', 'perfil']
                });
                return res.status(200).json(usuarios);
            } catch (error) {
                console.error('Erro ao listar usuários:', error);
                return res.status(500).json({erro: 'Erro interno ao buscar usuários.'});
            }
      },
      // Adicionar dentro de usuarioController.js
async login(req, res) {
  try {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ erro: 'Utilizador não encontrado.' });
    }

    // Validação simples de senha (em produção, use bcrypt.compare)
    if (usuario.senha !== senha) {
      return res.status(401).json({ erro: 'Senha incorreta.' });
    }

    return res.status(200).json({
      mensagem: 'Login efetuado com sucesso!',
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        perfil: usuario.perfil
      }
    });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}
   }