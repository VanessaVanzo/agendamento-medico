import { verificarDisponibilidade } from '../services/verificarDisponibilidade.js';

// Nó responsável por verificar o horário solicitado
export function verificarDisponibilidadeNode(estado) {

    const resultado = verificarDisponibilidade(
        estado.profissional.professionalId,
        estado.intencao.dateTime
    );

    return {
        resultado
    };
}