import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {GoogleGenAI} from '@google/genai'

dotenv.config();

const app = express()
const port = process.env.PORT || 3001

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY });

app.use(cors())

app.use(express.json())

app.post('/api/triagem', async (req, res) =>{
    const {equipamento, sintomas} = req.body;

    if(!equipamento || !sintomas){
        return res.status(400).json({erro: "Equipamento e Sintomas são Obrigatórios"})
    }

   try {
    // Engenharia de Prompt ....isso para dizer a ia o que fazer
    const prompt = `
Você é um Engenheiro de Manutenção Sênior com 20 anos de experiência em chão de fábrica.
Um operador acabou de relatar uma falha no seguinte cenário:
- Equipamento: ${equipamento}
- Sintoma Relatado: ${sintomas}

Gere um guia rápido de triagem e segurança estritamente focado neste maquinário e sintoma. 
O guia DEVE conter exatamente 3 passos claros, diretos e acionáveis pelo operador antes de chamar a engenharia.

Diretrizes obrigatórias:
1. O Passo 1 DEVE ser sempre focado em SEGURANÇA OPERACIONAL (ex: Lockout/Tagout, desenergização, isolamento de área, checagem de pressão, se aplicável ao equipamento).
2. Os Passos 2 e 3 devem focar em DIAGNÓSTICO VISUAL ou sensorial simples (verificar vazamentos, ruídos, painel de LEDs, disjuntores armados).
3. Seja conciso. Use linguagem técnica de fábrica, mas acessível ao operador.
4. Não dê respostas genéricas. Se o equipamento for uma "Prensa Hidráulica", fale de óleo/pressão; se for um "Inversor de Frequência", fale de painel elétrico/aquecimento.

Formato da resposta: Retorne apenas os 3 passos em formato de lista textual limpa.
`;

const response = await ai.models.generateContent({
    model:'gemini-1-5-flash',
    contents: prompt
});
 res.json({diagnostico: response.text});

} catch (error) {
  console.error('Erro na comunicação com o Gemini:', error);
  return res.status(500).json({error: "Erro interno ao processar o protocolo de triagem."});
}
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});