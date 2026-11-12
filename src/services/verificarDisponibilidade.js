import { agenda } from '../data/agenda.js';

// Verifica se um horário específico está disponível
export function verificarDisponibilidade(professionalId, dateTime) {

    const horario = agenda.find(
        horario =>
            horario.professionalId === professionalId &&
            horario.dateTime === dateTime &&
            horario.status === 'disponivel'
    );

    return horario || null;
}