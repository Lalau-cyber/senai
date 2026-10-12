  import {useState} from 'react';
  import axios from 'axios';
  import './nivelamento.css'

  export default function Nivelamento(){
    const [formData, setFormdata] = useState({
        nome:'',
        telefone:'',
        email:'',
        pontuacao:'',
        nivelresultado:'Básico'
    });
    const [mensagem, setMensagem] = useState('');
    const [erro, setErro] = useState('');

    const handleChange = (e) => {
        setFromdata({...formData, [e.target.name]:e.target,value});
    };

    const handleSubmit = async (e) => {
        e.preventdefault();
            setMensagem('');
            setErro('');

            try{
                const response = await axios.post('http:/localhost:3000/api/candidatos', formData);
                setMensagem(response.data.mensagem || 'Candidato cadastrado com sucesso!');
                setFormData({
                    nome:'', telefone:'', email:'', pontuacao:'', nivelResultado:'Básico'
                });
            } catch (err) {
                console.error(err);
                setErro('Erro ao enviar dados. Verifique a conexão com o servidor');        
    }
  };

  return(

    <div className='Speakup-container'>
        <div className='form-card'>
            <h2>Escola de Idiomas Speak Up</h2>
            <h3>Cadastre-se para começar seu Teste</h3>

            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label> Nome Completo:</label>
                    <input 
                    type="text"
                    name='nome'
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder='Digite o seu nome'
                    required
                     />
                </div>

                 <div className='input-group'>
                    <label> Telefone / WhatsApp:</label>
                    <input 
                    type="text"
                    name='telefone'
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder='(00) 00000-0000'
                    required
                     />
                </div>
                
                 <div className='input-group'>
                    <label> E-mail:</label>
                    <input 
                    type="text"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='exemplo@email.com'
                    required
                     />
                </div>
                
                 <div className='input-group'>
                    <label> Pontuação:</label>
                    <input 
                    type="text"
                    name='pontuacao'
                    value={formData.pontuacao}
                    onChange={handleChange}
                    placeholder='Ex: 85'
                    required
                     />
                </div>
                
                 <div className='input-group'>
                    <label> Nivel Alcançado:</label>
                    <select name="nivelResultado" value={formData.nivelResultado} onchange={handleChange}>
                        <option value="Básico">Básico</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                </div>
                
                <button type="submit" className="btn-submit">Cadastrar Candidato</button>
            </form>

        {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
        {erro && <p className="mensagem-erro">{erro}</p>}

        </div>
    </div>
  );
}