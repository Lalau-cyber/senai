
function CardPerfil({nome, profissao, foto, bio}){

return(
    <div className="perfil-card">
        <img src={foto}
        alt={nome}
        style={{width: '100px', height:'100px', borderRadius:'15px'}}/>
         <p> <strong>Nome:</strong>{nome} </p>
         <p> <strong>Profissão:</strong>{profissao} </p>
         <p> <strong>Bio:</strong>{bio} </p>

    </div>
)
}
export default CardPerfil