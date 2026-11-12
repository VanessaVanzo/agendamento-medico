import { buscarHorariosDisponiveis } from '../../services/buscarHorariosDisponiveis.js';

const professionalId = 1;
const data = '2026-11-12';

const horarios = buscarHorariosDisponiveis(professionalId, data);

console.log('Horários disponíveis:');
console.log(horarios);