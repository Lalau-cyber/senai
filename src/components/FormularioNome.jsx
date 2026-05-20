
function FormularioNome() {
 
    return (
    <div className="form-container">
      <label htmlFor="nome-input" className="form-label">
        Digite o nome do personagem:
      </label>

      <input
        id="nome-input"
        type="text"
        className="form-input"
        value={nome}
        onChange={(e) => onChangeNome(e.target.value)} // Avisa o App.jsx que o texto mudou
        placeholder="Ex: Paedyn Gray"
      />
    </div>
  );
}

export default FormularioNome;