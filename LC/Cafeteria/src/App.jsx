import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import api from './services/api';

// --- TELA DE CLIENTES ---
function Clientes() {
  const [clientes, setClientes] = useState([
    { id: 1, nome: "Ana Silva", email: "ana@email.com", telefone: "(11) 98888-7777" },
    { id: 2, nome: "Bruno Costa", email: "bruno@email.com", telefone: "(21) 97777-6666" }
  ]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  // Buscar clientes da API ao carregar a página
  useEffect(() => {
    api.get('/clientes') // Rota de exemplo da API
      .then(response => {
        // setClientes(response.data); <-- Descomente quando usar sua API real
      })
      .catch(err => console.error("Erro ao buscar clientes", err));
  }, []);

  const handleCadastrar = (e) => {
    e.preventDefault();
    const novoCliente = { id: clientes.length + 1, nome, email, telefone };

    // Enviando para a API via POST
    api.post('/clientes', novoCliente)
      .then(() => {
        setClientes([...clientes, novoCliente]);
        setNome(''); setEmail(''); setTelefone('');
      });
  };

  return (
    <div>
      <h2>👥 Gerenciamento de Clientes</h2>
      <form onSubmit={handleCadastrar} style={formStyle}>
        <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="text" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} required />
        <button type="submit" style={btnStyle}>Cadastrar</button>
      </form>

      <table style={tabelaStyle}>
        <thead>
          <tr style={{ background: '#edf2f7' }}>
            <th style={{ padding: '10px' }}>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(c => (
            <tr key={c.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '10px' }}>#{c.id}</td>
              <td>{c.nome}</td>
              <td>{c.email}</td>
              <td>{c.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- TELA DE PEDIDOS ---
function Pedidos() {
  const [pedidos, setPedidos] = useState([
    { id: 101, clienteNome: "Ana Silva", produto: "Notebook Pro", valor: 4500.00, status: "Pendente" }
  ]);
  const [clienteNome, setClienteNome] = useState('');
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');

  useEffect(() => {
    api.get('/pedidos') // Rota de exemplo da API
      .then(response => {
        // setPedidos(response.data); <-- Descomente quando usar sua API real
      });
  }, []);

  const handleCriarPedido = (e) => {
    e.preventDefault();
    const novoPedido = { id: pedidos.length + 101, clienteNome, produto, valor: Number(valor), status: "Pendente" };

    api.post('/pedidos', novoPedido)
      .then(() => {
        setPedidos([...pedidos, novoPedido]);
        setClienteNome(''); setProduto(''); setValor('');
      });
  };

  const alterarStatus = (id, novoStatus) => {
    // Enviando atualização parcial via PATCH para a API
    api.patch(`/pedidos/${id}`, { status: novoStatus })
      .then(() => {
        setPedidos(pedidos.map(p => p.id === id ? { ...p, status: novoStatus } : p));
      });
  };

  return (
    <div>
      <h2>📦 Controle de Pedidos</h2>
      <form onSubmit={handleCriarPedido} style={formStyle}>
        <input type="text" placeholder="Nome do Cliente" value={clienteNome} onChange={e => setClienteNome(e.target.value)} required />
        <input type="text" placeholder="Produto" value={produto} onChange={e => setProduto(e.target.value)} required />
        <input type="number" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} required />
        <button type="submit" style={btnStyle}>Criar Pedido</button>
      </form>

      <table style={tabelaStyle}>
        <thead>
          <tr style={{ background: '#edf2f7' }}>
            <th style={{ padding: '10px' }}>ID</th>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(p => (
            <tr key={p.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '10px' }}>#{p.id}</td>
              <td>{p.clienteNome}</td>
              <td>{p.produto}</td>
              <td>R$ {p.valor}</td>
              <td>
                <select value={p.status} onChange={(e) => alterarStatus(p.id, e.target.value)}>
                  <option value="Pendente">⏳ Pendente</option>
                  <option value="Pago">✅ Pago</option>
                  <option value="Cancelado">❌ Cancelado</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- ESTRUTURA PRINCIPAL COM REAT ROUTER DOM ---
export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', fontFamily: 'sans-serif', height: '100vh' }}>
        
        {/* Menu Lateral usando o <Link> do Router */}
        <nav style={{ width: '200px', background: '#2d3748', color: 'white', padding: '20px' }}>
          <h3>⚡ Sistema ERP</h3>
          <Link to="/" style={linkStyle}>👥 Clientes</Link>
          <Link to="/pedidos" style={linkStyle}>📦 Pedidos</Link>
        </nav>

        {/* Renderização das Telas baseada na URL */}
        <main style={{ flex: 1, padding: '30px', background: '#f7fafc', overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Clientes />} />
            <Route path="/pedidos" element={<Pedidos />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

// --- ESTILOS BÁSICOS ---
const linkStyle = { display: 'block', color: '#cbd5e0', padding: '10px 0', textDecoration: 'none' };
const formStyle = { display: 'flex', gap: '10px', marginBottom: '20px' };
const tabelaStyle = { width: '100%', borderCollapse: 'collapse', background: 'white' };
const btnStyle = { background: '#3182ce', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer' };