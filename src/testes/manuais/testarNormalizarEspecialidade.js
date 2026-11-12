import { normalizarEspecialidade } from '../../services/normalizarEspecialidade.js';

const variacoes = [
    'cardiologista',
    'CARDIOLOGIA',
    'médico cardiologista',
    'dermatologista',
    'ortopedista',
    'neurologista'
];

for (const variacao of variacoes) {
    const resultado = normalizarEspecialidade(variacao);

    console.log(variacao, '=>', resultado);
}