import { agenda } from '../data/agenda.js';

// Busca horários disponíveis para um profissional em uma data
export function buscarHorariosDisponiveis(professionalId, data) {

    const horarios = agenda.filter(horario =>
        horario.professionalId === professionalId &&
        horario.dateTime.startsWith(data) &&
        horario.status === 'disponivel'
    );

    return horarios;
}