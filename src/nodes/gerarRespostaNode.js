import { modelo } from '../config/modelo.js';
import { criarPromptGerarResposta } from '../prompts/gerarRespostaPrompt.js';

export async function gerarRespostaNode(estado) {
    const prompt = criarPromptGerarResposta(estado);

    const resposta = await modelo.invoke(prompt);

    return {
        resposta: resposta.content
    };
}