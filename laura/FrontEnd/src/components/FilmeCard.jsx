export default function FilmeCard({filme }) {
    return (
        <article>
            <h3 className="filme-card">{filme.nome}</h3>
            <p className="diretor">Diretor: {filme.diretor}</p>
            <div className="meta">
                <span className="ano">{filme.ano}</span>
                <span className="nota">{filme.nota}</span>
                <span className="genero">{filme.genero}</span>
            </div>
        </article>
    )
}