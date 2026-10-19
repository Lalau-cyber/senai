import  { useState } from 'react';
import Nivelamento from './components/nivelamento';
import ListaCandidatos from './components/listaCandidatos';

function App() {
  const [pagina, setPagina] = useState('aluno'); // 'aluno' ou 'secretaria'

  return (
    <div>
      <nav style={{ padding: '15px', background: '#1e3a8a', textAlign: 'center' }}>
        <button 
          onClick={() => setPagina('aluno')} 
          style={{ marginRight: '10px', padding: '8px 16px', cursor: 'pointer' }}
        >
          Portal do Aluno (Teste)
        </button>
        <button 
          onClick={() => setPagina('secretaria')} 
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Painel da Secretaria
        </button>
      </nav>

      {pagina === 'aluno' ? <Nivelamento /> : <ListaCandidatos />}
    </div>
  );
}

export default App;