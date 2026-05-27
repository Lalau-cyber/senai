import { useUsuario } from "../context/UsuarioContext.jsx"

export default function Carrinho() {
    const usuario = useUsuario()
    return <h1> Carrinho de {usuario.nome}! </h1>
} 