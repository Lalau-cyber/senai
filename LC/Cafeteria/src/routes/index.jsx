import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Clientes from '../pages/Clientes';
import Pedidos from '../pages/Pedidos';

export default function AppRoutes(){
return(
    <BrowserRouter>
        <nav className="navbar">
                <Link to="/">Clientes</Link>
                <Link to="/pedidos">Pedidos</Link>
        </nav>
           <Routes>
                <Route path="/" element={<Clientes />} />
                <Route path="/pedidos" element={<Pedidos />} />
            </Routes>
    </BrowserRouter>
)
}