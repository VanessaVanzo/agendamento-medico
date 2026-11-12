import { grafo } from '../../grafo.js';
import { Command } from '@langchain/langgraph';

const config = {
    configurable: {
        thread_id: 'conversa-001'
    }
};

// Primeira execução: o grafo deve pausar aguardando a escolha
const resultado = await grafo.invoke(
    {
    mensagem: 'Quero agendar uma consulta com um cardiologista no dia 12/11/2026 às 15h porque estou com dor de cabeça.'    },
    config
);

console.log('\nGrafo pausado:');
console.log(resultado);

// Segunda execução: simula a escolha do usuário
const resultadoFinal = await grafo.invoke(
    new Command({
        resume: '2026-11-12T13:00:00'
    }),
    config
);

console.log('\nResultado após a escolha:');
console.log(resultadoFinal);