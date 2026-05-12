import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Clientes from './pages/Clientes';
import Pedidos from './pages/Pedidos';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h1>☕ Cafeteria Dev</h1>
        <div>
          <Link to="/">Clientes</Link>
          <Link to="/pedidos">Pedidos</Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Clientes />} />
          <Route path="/pedidos" element={<Pedidos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;