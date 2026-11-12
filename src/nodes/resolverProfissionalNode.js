import { resolverProfissional } from '../services/resolverProfissional.js';

// Nó responsável por resolver o profissional
export function resolverProfissionalNode(estado) {

    const profissional = resolverProfissional(estado.intencao);

    return {
        profissional
    };
}