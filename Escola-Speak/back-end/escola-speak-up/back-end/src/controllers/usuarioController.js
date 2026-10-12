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
      }
   }