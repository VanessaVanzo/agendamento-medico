import { agendarConsulta } from '../../services/agendarConsulta.js';
import { buscarHorariosDisponiveis } from '../../services/buscarHorariosDisponiveis.js';

const professionalId = 1;
const dateTime = '2026-11-12T14:00:00';
const reason = 'dor de cabeça';

// 1. Consulta os horários antes do agendamento
console.log('\nHorários antes do agendamento:');

console.log(
    buscarHorariosDisponiveis(professionalId, '2026-11-12')
);

// 2. Realiza o agendamento
const resultado = agendarConsulta(
    professionalId,
    dateTime,
    reason
);

console.log('\nResultado do agendamento:');
console.log(resultado);

// 3. Consulta novamente os horários
console.log('\nHorários depois do agendamento:');

console.log(
    buscarHorariosDisponiveis(professionalId, '2026-11-12')
);