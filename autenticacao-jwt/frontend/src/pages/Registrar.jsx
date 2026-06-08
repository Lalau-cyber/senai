import {useState} from 'react'

export default function Registrar(){
    const[form, setForm]= useState({nome:"", email:"", senha:"", confirmar:""});

    async function handleSubmit(e){
        e.preventDefault();
        if(form.senha !== form.confirmar){
            alert("senhas não batem");
            return;

        }
        const re = await fetch("http://localhost:3000", {
            method: "POST",
            headers:{"Contetnt-Type": "application/json"},
            body: JSON.stringify({nome:form.nome, email: form.email, senha: form.senha})
        }); 
        if (res.ok) alert("Cadastro realizado!");
    }
  return (
    <form onSubmit={handleSubmit}>
      <input 
      
      placeholder="Nome"
       onChange={e => setForm({...form, nome: e.target.value})} />
      <input placeholder="E-mail" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Senha" onChange={e => setForm({...form, senha: e.target.value})} />
      <input type="password" placeholder="Confirmar Senha" onChange={e => setForm({...form, confirmar: e.target.value})} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}