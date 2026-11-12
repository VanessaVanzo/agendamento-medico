import { cancelarConsulta } from '../services/cancelarConsulta.js';

export function cancelarConsultaNode(estado) {
    const resultado = cancelarConsulta(
        estado.profissional.professionalId,
        estado.intencao.dateTime
    );

    return {
        resultado
    };
}