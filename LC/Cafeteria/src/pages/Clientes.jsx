import { useState, useEffect } from 'react';
import api from '../../src/services/api';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchClientes();
  }, []);

 const carregarClientes = async () => {
    try {
      const response = await api.get('/clientes');
      setClientes(response.data);
    } catch (error) {
      alert('Erro ao buscar clientes da API');
    }
  };

  // 2. Cadastrar Cliente (Com validações)
  const handleCadastrar = async (e) => {
    e.preventDefault();

    // Validação: Evitar campos vazios
    if (!nome.trim() || !email.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Validação básica de email
    if (!email.includes('@')) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    try {
      await api.post('/clientes', { nome, email });
      setNome('');
      setEmail('');
      carregarClientes(); // Atualiza a lista automaticamente
    } catch (error) {
      alert('Erro ao cadastrar cliente.');
    }
  };

  // 3. Remover Cliente
  const handleDeletar = async (id) => {
    if (window.confirm('Deseja realmente excluir este cliente?')) {
      try {
        await api.delete(`/clientes/${id}`);
        carregarClientes(); // Atualiza a lista automaticamente
      } catch (error) {
        alert('Erro ao deletar cliente.');
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gestão de Clientes</h2>

      {/* Formulário de Cadastro */}
      <form onSubmit={handleCadastrar} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Nome do Cliente" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          style={{ marginRight: '10px' }}
        />
        <input 
          type="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Cadastrar</button>
      </form>

      {/* Tabela de Listagem */}
      <table border="1" cellPadding="5" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>
                <button onClick={() => handleDeletar(cliente.id)} style={{ color: 'red' }}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}
