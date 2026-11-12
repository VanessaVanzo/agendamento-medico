import { normalizarEspecialidade } from './normalizarEspecialidade.js';
import { buscarProfissional } from './buscarProfissional.js';

// Resolve o profissional a partir da especialidade identificada
export function resolverProfissional(intencao) {

    // Normaliza a especialidade retornada pela IA
    const especialidade = normalizarEspecialidade(intencao.specialty);

    // Se não houver especialidade reconhecida, não continua
    if (!especialidade) {
        return {
            ...intencao,
            professionalId: null
        };
    }

    // Busca o profissional pelo ID da especialidade
    const profissional = buscarProfissional(especialidade.id);

    // Retorna a intenção com os dados do profissional
    return {
        ...intencao,
        professionalId: profissional?.id ?? null,
        professionalName: profissional?.nome ?? null
    };
}