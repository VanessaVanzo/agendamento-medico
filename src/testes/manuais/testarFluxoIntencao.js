import { identificarIntencao } from '../../services/identificarIntencao.js';
import { resolverProfissional } from '../../services/resolverProfissional.js';

const mensagem = 'Quero agendar uma consulta com um cardiologista amanhã às 14h porque estou com dor de cabeça.';

// 1. Identifica a intenção usando a IA
const intencao = await identificarIntencao(mensagem);

console.log('\nIntenção identificada pela IA:');
console.log(intencao);

// 2. Resolve o profissional usando nosso catálogo
const resultado = resolverProfissional(intencao);

console.log('\nResultado final:');
console.log(resultado);