import{useState, useEffect} from 'react';
import api from'../service/api';

export default function Clientes(){
    const[Clientes, setClientes] = useState([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetchClientes();
    }, []);

async function fetchClientes() {
    const res = await api.get('/clientes');
    setClientes(res.data);
  }

async function handleAddCliente(e){
    e.prevenDefault();
    if (nome || !email) return alert("preencha todos os campos");

    try{
        await api.post('./clientes', {nome, email});
        setNome('');
      setEmail('');
      fetchClientes(); // Atualiza a lista
    } catch (err) {
      alert("Erro ao cadastrar. Verifique o e-mail.");
    
    }

}
async function deleteCliente(id) {
    await api.delete(`/clientes/${id}`);
    fetchClientes();
  }

  return (
    <div>
      <h2>Gestão de Clientes</h2>
      
      <form onSubmit={handleAddCliente} className="card-form">
        <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <button type="submit">Cadastrar Cliente</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(c => (
            <tr key={c.id}>
              <td>{c.nome}</td>
              <td>{c.email}</td>
              <td><button onClick={() => deleteCliente(c.id)} className="btn-delete">Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
