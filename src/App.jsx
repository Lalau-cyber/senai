import { useState } from 'react';
import axios from 'axios';
import './App.css'

{/*Em vez de escrever a palavra function e usar
 chaves para tudo, você resume a escrita. */}
const AppUsuarios = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  {/* ASYNC faz o site nao travar enquanto
   espera busvcar os dados, declara funções*/}
  const buscarDados = async () => {
    setCarregando(true)
    setErro(null);

  {/*o try tenta fazer funcionar o que eu pedi, a const resposta armazena
   a espera do axios pegar as coisas desse link 
   e guarda em setUsuarios*/}
    try{
       const resposta = await axios.get('https://jsonplaceholder.typicode.com/users');

        setUsuarios(resposta.data);
    } 
    catch(err){

      {/*se der erro vai aparecer essa
       mensagem que esta em setErro */}

      setErro("doOcorreu um erro ao buscar os dados.")
      console.log(err);
    }
    finally{
      setCarregando(false)
    }
    {/* Finally=finalmente o carregamento 
    acaba, mesmo se der eerado ou certo, se terminar de
   buscar os dados o carregamento acaba e se der errado o carregamento acaba*/}
    };
   return(
    <div className= "todo">
      <h1>lista de Usuarios</h1>
    
    {/* disable é para o botao ficar cinza 
    e travado temporariamente a pessoa não ficar
     clicando varias e vaias vezes*/}

      <button onClick= {buscarDados} disabled={carregando}>
        {carregando ? 'carregando...' : 'Buscar Usuarios'}
      </button>
      {/* se tiver erro  a mensagem escrita em erro vai aparecer 
      se não o codigo ignora esa linha */}
       
      {erro && <p className="erro">{erro}</p>}

{/*   MAP le os usuarios um por um.
 KEY.. id para cada item se algo mudar ele, precisa*/}

      <div className="usuarios">
        {usuarios.map(usuario => (
          <div key={usuario.id} className="card-usuario">
            <h3>{usuario.name}</h3>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Cidade:</strong> {usuario.address.city}</p>
          </div>
          ))
          }
          {/*se deu certo o MAP coloca vaios cards na tela com os usuarios.
          se der errado o && mostra mensagem de erro */}
      </div>
    </div>


   )   
 
  }
export default AppUsuarios
