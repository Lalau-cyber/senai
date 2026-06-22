import {useState} from 'react'

function Tudo() {

    const [equipamento, setEquipamento] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [loading, setLoading] = useState(false);  
    const [diagnostico, setDiagnostico] = useState('');  
    const [erro, setErro] = useState('');  


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErro('');
        setDiagnostico('');

    try {
        const response = await fetch('http://localhost:3001/api/triagem', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ equipamento, sintomas }),
    });

        if(!response.ok){
            throw new Error('Falha na resposta do servidor');
        }

        const data = await response.json();
        setDiagnostico(data.diagnostico);
    }catch (err){

            setErro('ERRO: Não foi possível conectar ao sistema. Acione a Manutenção Manual')
    } finally{
            setLoading(false)
     }
 };

 const handleReset = () => {
    setDiagnostico('');
    setEquipamento('');
    setSintomas('');
    setErro('');
    
 };

 return(
    <div className='container'>
        <header className='header-1'>
            <h1>ASSISTENTE TÉCNICO INTELIGENTE</h1>
        </header>

        <main>
            <form onSubmit={handleSubmit}>
                <div className='div-do-form'>
                    <label htmlFor="equipamento" >Selecione um Equipamento:</label>
                    <select 
                        id="equipamento"
                        value={equipamento}
                        onChange={(e) => setEquipamento(e.target.value)}
                        required
                        disabled={loading}>
                        <option value="">-- Selecione --</option>
                        <option value="Esteira Transportadora">Esteira Transportadora</option>
                        <option value="Prensa Hidráulica">Prensa Hidráulica</option>
                        <option value="Braço Robótico KUKA">Braço Robótico KUKA</option>
                        <option value="Inversor de Frequência WEG">Inversor de Frequência WEG</option>
                        <option value="Compressores de Ar">Compressores de Ar</option>
                    </select>
                    </div>
                
                <div className="form-group">
                     <label htmlFor="sintomas">Descrição Breve do Sintoma:</label>
                     <textarea
                     id="sintomas"
                     rows="4"
                     value={sintomas}
                     onChange={(e) => setSintomas(e.target.value)}
                    placeholder="Ex: Apresentando ruído excessivo e vibração na carcaça metálica..."
                    required
                    disabled={loading}
            />
          </div>

          <div className="form-actions">
            {/* Sinalização de Processamento (UX) */}
            <button type="submit" className="btn-submit" disabled={loading || !equipamento || !sintomas}>
              {loading ? 'Gerando Protocolo de Triagem...' : 'Solicitar Triagem Técnica'}
            </button>
            
            {/* Botão de Emergência / Reset */}
            <button type="button" className="btn-reset" onClick={handleReset} disabled={loading}>
              Limpar Painel (Reset)
            </button>
          </div>
        </form>

        <section className="ihm-output">
          <h2>Protocolo de Segurança e Diagnóstico</h2>
          
          {erro && <div className="alert-error">{erro}</div>}
          
          {loading && <div className="loading-spinner">⚙️ Processando dados do sensor e IA... Aguarde.</div>}

          {diagnostico && (
            <div className="diagnostico-resultado" style={{ whiteSpace: 'pre-wrap' }}>
              {diagnostico}
            </div>
          )}
            </section>
        </main>
    </div>
    
 
);
}

export default Tudo