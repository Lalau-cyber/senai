import 'contador.css';
import {useState} from 'react';

const contadorMUl = () =>{
 const [contador, setContador] = useState(0);

 let mensagem = "";

 if( contador === 0)
     mensagem = "começe a contar!";
 
else if( contador > 0 && conatdor < 10)
    mensagem = "continue assim!";

    else if ( contador >= 10) 
    mensagem = "Você está indo muito bem";

else mensagem = "Ops, valor negativo";

const CorNum = () =>{
    if(contador > 0) return "#2ecc71";
    if(contador < 0) return "#e74c3c";
    return "#7f8c8d";
};
    return (
        <div className="contador-container">
          <h1>Contador Interativo</h1>
          
          <div className="contador-display" style={{ color: getCorNumero() }}>
            {contador}
          </div>
    
          <p className="contador-mensagem">{mensagem}</p>
    
          <div className="botoes-grupo">
            <button onClick={() => setContador(contador - 1)}>Decrementar (-1)</button>
            <button onClick={() => setContador(0)} className="btn-reset">Resetar</button>
            <button onClick={() => setContador(contador + 1)}>Incrementar (+1)</button>
            <button onClick={() => setContador(contador + 5)} className="btn-especial">Incrementar +5</button>
          </div>
        </div>
      );
    };
    
    export default contadorMUl