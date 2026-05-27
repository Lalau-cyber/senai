import { useUsuario } from "../context/UsuarioContext.jsx"

export default function Home(){
    const usuario = useUsuario()
    
    return (
        <h1>Seja bem-vindo, {usuario.nome}!</h1>
    )
} 