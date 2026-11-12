// Decide qual caminho o grafo deve seguir
export function rotearIntencaoNode(estado) {

    const intencao = estado.intencao.intent;

    if (intencao === 'agendar') {
        return 'agendar';
    }

    if (intencao === 'cancelar') {
        return 'cancelar';
    }

    return 'desconhecida';
}