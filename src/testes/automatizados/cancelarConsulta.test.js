
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { cancelarConsulta } from '../../services/cancelarConsulta.js';
import { agendarConsulta } from '../../services/agendarConsulta.js';

// Teste 1: cancelar uma consulta existente
test('deve cancelar uma consulta agendada', () => {

    // Prepara o cenário: primeiro agenda a consulta
    agendarConsulta(1, '2026-11-12T14:00:00', 'Consulta de rotina');

    const resultado = cancelarConsulta(
        1,
        '2026-11-12T14:00:00'
    );

    assert.equal(resultado.sucesso, true);
    assert.equal(resultado.consulta.status, 'disponivel');
});

// Teste 2: tentar cancelar uma consulta inexistente
test('não deve cancelar um horário sem consulta agendada', () => {

    const resultado = cancelarConsulta(
        1,
        '2026-11-12T16:00:00'
    );

    assert.equal(resultado.sucesso, false);
    assert.equal(
        resultado.mensagem,
        'Não encontramos uma consulta agendada nesse horário.'
    );
});
