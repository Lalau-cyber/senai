const {Candidato} = require('../models');

module.exports = {

    async Criar(req,res) {
        try{
            const{nome, telefone, email, pontuacao, nivelResulatado} = req.body;
            const novoCandidato = await Candidato.create({
                nome, 
                telefone,
                email,
                pontuacao,
                nivelResulatado
            });

            return res.status(201).json({
                mensagem:'Candidato registrado com sucesso!',
                candidato: novoCandidato
            });
        }catch (error){
            console.error('Erro ao criar candidato:', error);
            return res.status(500).json({erro: 'Erro interno ao salvar dados.'});
        }
        },
   async Listar(req,res){
    try{
        const candidatos = await Candidato.findAll();
        return res.status(201).json(candidatos);
        }catch (error) {
        console.error('Erro ao listar candidatos:', error);
        return res.status(500).json({erro: 'Erro interno ao buscar dados.'});
    }
   }
};
