import { useState, useEffect } from "react";
import FilmeCard from "./FilmeCard.jsx";

export default function FilmeLista() {
   const [filmes, setFilmes] = useState ([])
   const [carregando, setCarregando] = useState(true)

    useEffect(() =>{
        async function carregar() {
            const res = await fetch("http://localhost:3000/filmes")
            const dados = await res.json()
            setFiles(dados)
            console.log(filmes)
            
    }}
    )
        
    console.log(filmes)

    return (
        <section className="filme-lista">
            <h2>Catálogo ({filmes.length})</h2>
            <div className="grid">
                {filmes.map((filme) => {
                    <FilmeCard key={filme.id} filme={filme.nome} />
                }
                )}
            </div>
        </section>
    )

}