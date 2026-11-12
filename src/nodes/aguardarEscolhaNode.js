import { interrupt } from '@langchain/langgraph';

export function aguardarEscolhaNode(estado) {
    const escolha = interrupt({
        mensagem: 'Qual horário você deseja?',
        alternativas: estado.alternativas
    });

    return {
        escolha
    };
}