import React, { useState } from 'react';

export default function Contador() {
  const [contagem, setContagem] = useState(0);

  // Lógica para definir a mensagem baseada no valor
  let mensagem = "";
  let corNumero = "gray";

  if (contagem === 0) {
    mensagem = "Comece a contar!";
    corNumero = "gray";
  } else if (contagem > 0 && contagem < 10) {
    mensagem = "Continue assim!";
    corNumero = "green";
  } else if (contagem >= 10) {
    mensagem = "Você está indo muito bem! 🎉";
    corNumero = "green";
  } else {
    mensagem = "Ops, valor negativo!";
    corNumero = "red";
  }

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '10px',
      backgroundColor: '#fdfcfc',
      margin: '20px auto',
      maxWidth: '300px'
    }}>
      <h2>Contador</h2>
      
      {/* O número muda de cor dinamicamente */}
      <h1 style={{ color: corNumero, fontSize: '3rem', margin: '10px 0' }}>
        {contagem}
      </h1>

      <p style={{ fontWeight: 'bold', height: '24px' }}>{mensagem}</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1/2 1/2', gap: '10px', marginTop: '20px' }}>
        <button onClick={() => setContagem(valor + 1)} style={{background:'#5d82f1'}}>Incrementar (+1)</button>
        <button onClick={() => setContagem(valor - 1)} style={{background:'#5df162'}}>Decrementar (-1)</button>
        <button onClick={() => setContagem(valor + 5)} style={{background:'#f1d85d'}} >Incrementar +5</button>
        <button 
          onClick={() => setContagem(0)} 
          style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px' }}
        >
          Resetar
        </button>
      </div>
    </div>
  );
}