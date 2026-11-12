import { buscarHorariosDisponiveis } from '../services/buscarHorariosDisponiveis.js';

// Nó responsável por buscar horários disponíveis
export function buscarHorariosNode(estado) {

    const disponibilidade = buscarHorariosDisponiveis(
        estado.profissional.professionalId,
        estado.intencao.dateTime.substring(0, 10)
    );

    return {
        disponibilidade
    };
}