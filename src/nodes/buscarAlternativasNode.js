import { buscarHorariosDisponiveis } from '../services/buscarHorariosDisponiveis.js';

export function buscarAlternativasNode(estado) {
    const alternativas = buscarHorariosDisponiveis(
        estado.profissional.professionalId,
        estado.intencao.dateTime.substring(0, 10)
    );

    return {
        alternativas
    };
}