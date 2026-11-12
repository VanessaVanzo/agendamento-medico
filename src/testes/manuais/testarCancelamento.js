import { grafo } from '../../grafo.js';

const config = {
    configurable: {
        thread_id: 'teste-cancelamento-001'
    }
};

// Primeiro, agendamos a consulta
const agendamento = await grafo.invoke(
    {
        mensagem: 'Quero agendar uma consulta com cardiologista amanhã às 14h.'
    },
    config
);

console.log('\nResultado do agendamento:');
console.log(agendamento.resposta);

// Depois, solicitamos o cancelamento
const cancelamento = await grafo.invoke(
    {
        mensagem: 'Quero cancelar minha consulta de amanhã às 14h com cardiologista.'
    },
    config
);

console.log('\nResultado do cancelamento:');
console.log(cancelamento.resposta);