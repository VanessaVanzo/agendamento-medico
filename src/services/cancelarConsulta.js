import { agenda } from '../data/agenda.js';

export function cancelarConsulta(professionalId, dateTime) {

    const horario = agenda.find(
        horario =>
            horario.professionalId === professionalId &&
            horario.dateTime === dateTime &&
            horario.status === 'agendada'
    );

    if (!horario) {
        return {
            sucesso: false,
            mensagem: 'Não encontramos uma consulta agendada nesse horário.'
        };
    }

    horario.status = 'disponivel';

    return {
        sucesso: true,
        mensagem: 'Consulta cancelada com sucesso!',
        consulta: horario
    };
}