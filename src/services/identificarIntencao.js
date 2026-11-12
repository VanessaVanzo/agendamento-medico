
import { modelo } from '../config/modelo.js';
import { intencaoSchema } from '../schemas/intencaoSchema.js';
import { criarPromptIdentificarIntencao } from '../prompts/identificarIntencaoPrompt.js';

// Configura o modelo para retornar os dados no formato do nosso Schema
const modeloEstruturado = modelo.withStructuredOutput(intencaoSchema,{ name: 'identificar_intencao'});

// Recebe a mensagem e identifica a intenção do usuário
export async function identificarIntencao(mensagem) {

    const hoje = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo'}); 

    const prompt = criarPromptIdentificarIntencao(mensagem, hoje);

    const resultado = await modeloEstruturado.invoke(prompt);

    return resultado;
}
