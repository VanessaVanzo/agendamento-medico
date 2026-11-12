
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { agendarConsulta } from '../../services/agendarConsulta.js';

// Teste 1: agendamento com horário disponível
test('deve agendar uma consulta quando o horário estiver disponível', () => {

    const resultado = agendarConsulta(
        1,
        '2026-11-12T13:00:00',
        'Consulta de rotina'
    );

    assert.equal(resultado.sucesso, true);
    assert.equal(resultado.consulta.status, 'agendada');
    assert.equal(resultado.consulta.reason, 'Consulta de rotina');
});

// Teste 2: tentativa de agendamento em horário ocupado
test('não deve agendar uma consulta em horário ocupado', () => {

    const resultado = agendarConsulta(
        1,
        '2026-11-12T15:00:00',
        'Consulta de rotina'
    );

    assert.equal(resultado.sucesso, false);
    assert.equal(resultado.mensagem, 'Horário indisponível.');
});
