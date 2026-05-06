/* --- VARIAVEIS --- */
const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

let filmes = [
    { id: 1, nome: "Vingadores", diretor: "Marcio", ano: "2012", nota: "8", genero: "Ação" },
    { id: 2, nome: "KungFu Panda", diretor: "Jubileu", ano: "2002", nota: "10", genero: "Ação" },
    { id: 3, nome: "A culpa é das estrelas", diretor: "Josh Boone", ano: "2010", nota: "7", genero: "Romance" },
    { id: 4, nome: "O diario de uma paixão", diretor: "Jubileu", ano: "2020", nota: "10", genero: "Romance" },
]

/* --- ROTAS --- */
// GET /filmes/
app.get("/filmes", (req, res) => {
    setTimeout(() => {
        res.json(filmes)
    }, 800)
})

// GET /filmes/:id - Retorna um filme específico
app.get("/filmes/:id", (req, res) => {
    const id = Number(req.params.id)
    const filme = filmes.find((f) => f.id === id)
    if (!filme) {
        return res.status(404).json({ erro: "Filme não encontrado" })
    }
    res.json(filme)
})

// POST /filmes -> cadastra um novo filme
app.post("/filmes", (req, res) => {
    const { titulo, diretor, ano, nota, genero } = req.body;
    if (!titulo || !diretor) {
        return res.status(400).json({ erro: "titulo e diretor são obrigatório" })
    }
    const novo = {
        id: filmes.length + 1,
        titulo,
        diretor,
        ano: Number(ano) || null,
        nota: Number(nota) || null,
        genero: genero || "Sem gênero"
    }
    filmes.push(novo)
    res.status(201).json(novo)
})

// PUT /filmes/:id -> atualiza filme existente
app.put("/filmes/:id", (req, res) => {
    const id = Number(req.params.id)
    const index = filmes.findIndex((f) => f.id === id)
    if (index === -1) {
        return res.status(404).json({ erro: "Filme não encontrado" })
    }
    const { titulo, diretor, ano, nota, genero } = req.body;
    if (titulo) filmes[index].titulo = titulo
    if (diretor) filmes[index].diretor = diretor
    if (ano) filmes[index].ano = Number(ano)
    if (nota) filmes[index].nota = Number(nota)
    if (genero) filmes[index].genero = genero

    res.json(filmes[index])
})

// DELETE / filmes/:id  - remover um filme
app.delete("/filmes/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = filmes.findIndex((f) => f.id === id)
    if (index === -1) {
        return res.status(404).json({ erro: "Filme não encontrado" })
    }
    const removido = filmes.splice(index, 1)[0]
    res.json({ mensagem: "Filme removido", filme: removido })
})

app.listen(PORT, () => {
    console.log(`\n ✅ Servidor rodando em http://localhost:${PORT}`)
    console.log(`   Endpoints disponíveis:  `)
    console.log(`   GET     /filmes  `)
    console.log(`   GET     /filmes/:id  `)
    console.log(`   POST    /filmes/  `)
    console.log(`   PUT     /filmes/:id  `)
    console.log(`   DELETE  /filmes/:id \n  `)
})