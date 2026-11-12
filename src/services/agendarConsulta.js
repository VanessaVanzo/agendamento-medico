import { agenda } from '../data/agenda.js';
import { verificarDisponibilidade } from './verificarDisponibilidade.js';

// Realiza o agendamento de uma consulta
export function agendarConsulta(professionalId, dateTime, reason) {

    // Verifica se o horário está disponível
    const horario = verificarDisponibilidade(
        professionalId,
        dateTime
    );

    // Se não estiver disponível, não realiza o agendamento
    if (!horario) {
        return {
            sucesso: false,
            mensagem: 'Horário indisponível.'
        };
    }

    // Atualiza o status do horário na agenda
    horario.status = 'agendada';

    // Monta os dados da consulta
    const consulta = {
        id: horario.id,
        professionalId,
        dateTime,
        reason,
        status: 'agendada'
    };

    return {
        sucesso: true,
        mensagem: 'Consulta agendada com sucesso!',
        consulta
    };
}