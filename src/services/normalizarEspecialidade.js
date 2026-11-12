import { especialidades } from '../data/especialidades.js';

export function normalizarEspecialidade(valor) {

    if (!valor) {
        return null;
    }

    const texto = valor
        .toLowerCase()
        .trim();

    const encontrada = especialidades.find(
        especialidade =>
            especialidade.sinonimos.includes(texto)
    );

    return encontrada || null;
}