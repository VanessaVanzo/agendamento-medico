
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { verificarDisponibilidade } from '../../services/verificarDisponibilidade.js';

// Teste 1: horário disponível
test('deve retornar o horário quando estiver disponível', () => {

    const resultado = verificarDisponibilidade(
        1,
        '2026-11-12T13:00:00'
    );

    assert.notEqual(resultado, null);
    assert.equal(resultado.status, 'disponivel');
});

// Teste 2: horário ocupado
test('deve retornar null quando o horário estiver ocupado', () => {

    const resultado = verificarDisponibilidade(
        1,
        '2026-11-12T15:00:00'
    );

    assert.equal(resultado, null);
});

// Teste 3: horário inexistente
test('deve retornar null quando o horário não existir', () => {

    const resultado = verificarDisponibilidade(
        1,
        '2026-11-12T18:00:00'
    );

    assert.equal(resultado, null);
});
