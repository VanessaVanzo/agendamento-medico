import { StateGraph, START, END, MemorySaver} from '@langchain/langgraph';
import { resolverProfissionalNode } from './nodes/resolverProfissionalNode.js';
import { buscarHorariosNode } from './nodes/buscarHorariosNode.js';
import { verificarDisponibilidadeNode } from './nodes/verificarDisponibilidadeNode.js';
import { agendarConsultaNode } from './nodes/agendarConsultaNode.js';
import { rotearDisponibilidadeNode } from './nodes/rotearDisponibilidadeNode.js';
import { gerarRespostaNode } from './nodes/gerarRespostaNode.js';
import { buscarAlternativasNode } from './nodes/buscarAlternativasNode.js';
import { aguardarEscolhaNode } from './nodes/aguardarEscolhaNode.js';
import { aplicarEscolhaNode } from './nodes/aplicarEscolhaNode.js';
import { cancelarConsultaNode } from './nodes/cancelarConsultaNode.js';

import { EstadoAgendamento } from './estado.js';
import { identificarIntencaoNode } from './nodes/identificarIntencaoNode.js';
import { rotearIntencaoNode } from './nodes/rotearIntencaoNode.js';

const fluxo = new StateGraph(EstadoAgendamento);
const memoria = new MemorySaver();

// Registra os nós
fluxo.addNode('identificarIntencao', identificarIntencaoNode);
fluxo.addNode('resolverProfissional', resolverProfissionalNode);
fluxo.addNode('buscarHorarios', buscarHorariosNode);
fluxo.addNode('verificarDisponibilidade', verificarDisponibilidadeNode);
fluxo.addNode('agendarConsulta', agendarConsultaNode);
fluxo.addNode('gerarResposta', gerarRespostaNode);
fluxo.addNode('buscarAlternativas', buscarAlternativasNode);
fluxo.addNode('aguardarEscolha', aguardarEscolhaNode);
fluxo.addNode('aplicarEscolha', aplicarEscolhaNode);
fluxo.addNode('cancelarConsulta', cancelarConsultaNode);


// Define o início
fluxo.addEdge(START, 'identificarIntencao');

// Define os caminhos condicionais
fluxo.addConditionalEdges(
    'identificarIntencao',
    rotearIntencaoNode,
    {
        agendar: 'resolverProfissional',
        cancelar: 'resolverProfissional',
        desconhecida: END
    }
);

// Define a sequência do agendamento
fluxo.addConditionalEdges(
    'resolverProfissional',
    rotearIntencaoNode,
    {
        agendar: 'buscarHorarios',
        cancelar: 'cancelarConsulta',
        desconhecida: END
    }
);

fluxo.addEdge('buscarHorarios', 'verificarDisponibilidade');

fluxo.addConditionalEdges(
    'verificarDisponibilidade',
    rotearDisponibilidadeNode,
    {
        disponivel: 'agendarConsulta',
        indisponivel: 'buscarAlternativas'
    }
);

fluxo.addEdge('agendarConsulta', 'gerarResposta');
fluxo.addEdge('cancelarConsulta', 'gerarResposta');
fluxo.addEdge('buscarAlternativas', 'aguardarEscolha');
fluxo.addEdge('aguardarEscolha', 'aplicarEscolha');
fluxo.addEdge('aplicarEscolha', 'verificarDisponibilidade');

fluxo.addEdge('gerarResposta', END);
export const grafo = fluxo.compile({
    checkpointer: memoria
});