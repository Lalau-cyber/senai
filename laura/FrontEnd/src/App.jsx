import {Route, Routes} from 'react-router-dom'
import './App.css'
import Filmelista from './FilmeLista'

function App() {
  const filmeExemplo = {
    id: 1,
    nome: "Avengers",
    diretor: "juracema",
    ano: 1900,
    genero: "Ação"
  }
  
  return (
    <div className='app'>
      <head className='app-header'>
        <h1>🎬 Catalogo de Filmes</h1>
        <p>Lista utilizando .map</p>
      </head>
      <main>
        <Routes>
          <Route path = "/" element ={ home }/>
           <Route path = "/filmes" element ={filmes}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
