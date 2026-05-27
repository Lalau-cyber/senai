import { Outlet } from 'react-router-dom'
import Cabecalho from './components/Cabecalho.jsx'
import './App.css'

function App() {
  return (
    <div>
      <Cabecalho /> 
      <Outlet/>
    </div>
  )
}

export default App
