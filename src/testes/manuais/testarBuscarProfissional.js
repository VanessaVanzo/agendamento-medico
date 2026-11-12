import { normalizarEspecialidade } from '../../services/normalizarEspecialidade.js';
import { buscarProfissional } from '../../services/buscarProfissional.js';

// Especialidade informada pelo usuário
const especialidadeInformada = 'CARDIOLOGISTA';

// 1. Normaliza a especialidade
const especialidade = normalizarEspecialidade(especialidadeInformada);

// 2. Busca o profissional pelo ID da especialidade
const profissional = especialidade
    ? buscarProfissional(especialidade.id)
    : null;

console.log('Especialidade encontrada:');
console.log(especialidade);

console.log('\nProfissional encontrado:');
console.log(profissional);