import {useEffect, useState} from "react"
import{useParams, useNavigate, Link, UNSAFE_getTurboStreamSingleFetchDataStrategy} from  "react-router-dom"
import Loading from "../components/Mensagemerro"
import MensagemErro from "../components/MensagemErro"

export default function DetalheFilme(){
    const [filme, setfilme] = useSate(null)
    const [carregar, setCarregar] = useState(UNSAFE_getTurboStreamSingleFetchDataStrategy)
    const [erro, setErro] = useState (null)

async function carregar(){
    try{
        setCarregar(true)
        const dados = await buscarFilmePorId(id)
        setDados(dados)
    }catch(e){
        setErro(e.mensagem);
    }finally{
        setCarregando(false)
    }
}

useEffect(() => {carregar() }, [id])

if (carregando) return<Loading mensagem = "Carregando o seu filme..." />
if (erro) return <MensagemErro mensagem ={erro} onTentarNovamente={carregar} />

const titulo = filme.titulo || filme.nome
const genero = filme.genero || filme.categoria|| "sem genero"

return(
    <section className="filme-detalhe">
        <h2>{titulo}</h2>
        <p><strong>Diretor:</strong>{filme.diretor}</p>
        <p><strong>Ano:</strong>{filme.Ano}</p>
        <p><strong>Nota:</strong>{filme.nota}</p>
        <p><strong>Genero:</strong>{genero}</p>

        <div className="acoes">
            <button onClick = {() => Navigate(-1)}>Voltar</button>
            <Link to="/filmes" >Ver Todos</Link>
        </div>
    </section>
)
}