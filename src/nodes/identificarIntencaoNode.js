import { identificarIntencao } from '../services/identificarIntencao.js';

// Nó responsável por identificar a intenção do usuário
export async function identificarIntencaoNode(estado) {

    const intencao = await identificarIntencao(estado.mensagem);

    return {
        intencao
    };
}