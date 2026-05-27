import { useUsuario } from "../context/UsuarioContext.jsx"

export default function Cabecalho() {
    const { usuario, login, logout } = useUsuario()

    if (!usuario) {
        return <button onClick={() => login('Larissa')}>Entrar</button>
    }

    return (
        <span>Ola, {usuario.nome} <button onClick={logout}>Sair</button> </span>
    )
}