import { agendarConsulta } from '../services/agendarConsulta.js';

// Nó responsável por realizar o agendamento
export function agendarConsultaNode(estado) {

    const resultado = agendarConsulta(
        estado.profissional.professionalId,
        estado.intencao.dateTime,
        estado.intencao.reason
    );

    return {
        resultado
    };
}