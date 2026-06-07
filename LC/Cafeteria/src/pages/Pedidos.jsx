export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [clientes, setClientes] = useState([]); // Necessário para o vínculo
  const [clienteId, setClienteId] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('Pendente'); // Status inicial padrão
  const [filtroStatus, setFiltroStatus] = useState('Todos');

  useEffect(() => {
    carregarPedidos();
    carregarClientes();
  }, []);

  const carregarPedidos = async () => {
    try {
      const response = await api.get('/pedidos');
      setPedidos(response.data);
    } catch (error) {
      alert('Erro ao buscar pedidos');
    }
  };

  const carregarClientes = async () => {
    try {
      const response = await api.get('/clientes');
      setClientes(response.data);
    } catch (error) {
      alert('Erro ao buscar clientes para o formulário');
    }
  };

  // Cadastrar Pedido
  const handleCriarPedido = async (e) => {
    e.preventDefault();

    // Regra Importante: Não permitir pedidos sem cliente ou sem descrição
    if (!clienteId) {
      alert('Erro: Não é permitido criar um pedido sem selecionar um cliente.');
      return;
    }
    if (!descricao.trim()) {
      alert('Por favor, informe a descrição do pedido.');
      return;
    }

    try {
      await api.post('/pedidos', { cliente_id: clienteId, descricao, status });
      setDescricao('');
      setClienteId('');
      setStatus('Pendente');
      carregarPedidos();
    } catch (error) {
      alert('Erro ao criar pedido.');
    }
  };

  // Atualizar Status do Pedido
  const handleAtualizarStatus = async (id, novoStatus) => {
    try {
      await api.put(`/pedidos/${id}`, { status: novoStatus });
      carregarPedidos();
    } catch (error) {
      alert('Erro ao atualizar status.');
    }
  };

  // Filtragem de pedidos no frontend
  const pedidosFiltrados = pedidos.filter(pedido => {
    if (filtroStatus === 'Todos') return true;
    return pedido.status === filtroStatus;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gestão de Pedidos</h2>

      {/* Formulário de Novo Pedido */}
      <form onSubmit={handleCriarPedido} style={{ marginBottom: '30px', padding: '15px', background: '#f9f9f9' }}>
        <h3>Novo Pedido</h3>
        
        {/* Select de Clientes obriga a escolha de um cliente existente */}
        <select value={clienteId} onChange={(e) => setClienteId(e.target.value)} style={{ marginRight: '10px' }}>
          <option value="">Selecione um Cliente *</option>
          {clientes.map(c => (
            <option key={c.id} value={c.id}>{c.nome}</option>
          ))}
        </select>

        <input 
          type="text" 
          placeholder="Descrição (ex: 1x Cappuccino, 1x Pão de Queijo)" 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)}
          style={{ marginRight: '10px', width: '300px' }}
        />

        <button type="submit">Criar Pedido</button>
      </form>

      {/* Filtro por Status */}
      <div style={{ marginBottom: '15px' }}>
        <label><strong>Filtrar por Status: </strong></label>
        <select value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)}>
          <option value="Todos">Todos</option>
          <option value="Pendente">Pendente</option>
          <option value="Em Preparo">Em Preparo</option>
          <option value="Pronto">Pronto</option>
          <option value="Entregue">Entregue</option>
        </select>
      </div>

      {/* Tabela de Pedidos */}
      <table border="1" cellPadding="5" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th>ID Pedido</th>
            <th>Cliente (ID)</th>
            <th>Descrição</th>
            <th>Status Atual</th>
            <th>Alterar Status</th>
          </tr>
        </thead>
        <tbody>
          {pedidosFiltrados.map(pedido => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.cliente_nome || pedido.cliente_id}</td>
              <td>{pedido.descricao}</td>
              <td>
                <span style={{ 
                  fontWeight: 'bold', 
                  color: pedido.status === 'Pronto' ? 'green' : pedido.status === 'Pendente' ? 'orange' : 'blue' 
                }}>
                  {pedido.status}
                </span>
              </td>
              <td>
                {/* Select controlado impede o envio de status inválidos */}
                <select 
                  value={pedido.status} 
                  onChange={(e) => handleAtualizarStatus(pedido.id, e.target.value)}
                >
                  <option value="Pendente">Pendente</option>
                  <option value="Em Preparo">Em Preparo</option>
                  <option value="Pronto">Pronto</option>
                  <option value="Entregue">Entregue</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  

}
