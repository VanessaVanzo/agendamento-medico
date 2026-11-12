import { profissionais } from '../data/profissionais.js';

// Busca um profissional pelo ID da especialidade
export function buscarProfissional(especialidadeId) {

    const profissional = profissionais.find(
        profissional =>
            profissional.especialidadeId === especialidadeId
    );

    return profissional || null;
}