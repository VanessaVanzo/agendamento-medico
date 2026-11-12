
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { buscarHorariosDisponiveis } from '../../services/buscarHorariosDisponiveis.js';

// Teste 1: existem horários disponíveis
test('deve retornar os horários disponíveis do profissional na data', () => {

    const resultado = buscarHorariosDisponiveis(
        1,
        '2026-11-12'
    );

    assert.equal(resultado.length, 3);
    assert.ok(resultado.every(horario => horario.status === 'disponivel'));
});

// Teste 2: profissional sem horários disponíveis
test('deve retornar array vazio quando não houver horários disponíveis', () => {

    const resultado = buscarHorariosDisponiveis(
        99,
        '2026-11-12'
    );

    assert.deepEqual(resultado, []);
});

// Teste 3: data sem horários cadastrados
test('deve retornar array vazio quando não houver horários na data', () => {

    const resultado = buscarHorariosDisponiveis(
        1,
        '2026-11-13'
    );

    assert.deepEqual(resultado, []);
});
