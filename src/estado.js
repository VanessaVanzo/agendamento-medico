import { Annotation } from '@langchain/langgraph';

export const EstadoAgendamento = Annotation.Root({

    mensagem: Annotation(),

    intencao: Annotation(),

    profissional: Annotation(),

    disponibilidade: Annotation(),

    resultado: Annotation(),

    alternativas: Annotation(),

    escolha: Annotation(),

    resposta: Annotation()



});