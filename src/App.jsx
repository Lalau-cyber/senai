import {useState} from 'react'
import CardPerfil from './components/1PerfilCard.jsx'
import FormularioNome from './components/FormularioNome'
import Contador from './components/Contador'
import './App.css'


function App() {
   const [count, setCount] = useState(0)
   const[nome, setNome] = useState('')

   const limparFormulario = () => {
    setNomeUsuario(''); // Reseta o texto para vazio
  };
 
  return (
   <div className="app-container">
    <h1>Card de Perfils de personagens de livros</h1>

<div className="conteiner-cards">
       <CardPerfil
       nome = 'Paedyn Gray'
       profissao = 'Ladra'
       bio = 'Comun, Ladra que vive na rua.'
       foto = 'https://i.pravatar.cc/150?img=10'
       />
       <CardPerfil
       nome= 'Kai Azwer'
       profissao='Executor'
       bio= 'Futuro Executor do rei, Portador.'
       foto = 'https://i.pravatar.cc/150?img=8'
       />
       <CardPerfil
       nome= 'Adena'
       profissao='Costureira'
       bio= 'Costureira e melhor amiga de Paedyn, Comun.'
       foto = 'https://i.pravatar.cc/150?img=26'
       />

    </div>

    <div className="botoes-container">
          <button className="botao-limpar" onClick={limparFormulario}>
            Limpar Tudo 🗑️
          </button>
        </div>
      {nomeUsuario.trim() && (
        <h2 className="saudacao-texto">
          Olá, {nomeUsuario}! 👋
        </h2>
      )}

    <Contador/>
    <FormularioNome/>
   </div>
   

  )
}

export default App
