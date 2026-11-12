import { verificarDisponibilidade } from '../../services/verificarDisponibilidade.js';

const professionalId = 1;

const horariosParaTestar = [
    '2026-11-12T14:00:00',
    '2026-11-12T15:00:00',
    '2026-11-12T17:00:00'
];

for (const dateTime of horariosParaTestar) {

    const resultado = verificarDisponibilidade(
        professionalId,
        dateTime
    );

    console.log(dateTime, '=>', resultado);
}