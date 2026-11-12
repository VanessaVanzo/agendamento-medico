
import { intencaoSchema } from '../../schemas/intencaoSchema.js';

// Dados fictícios que simulam uma resposta da IA
const dados = {
    intent: 'agendar',
    professionalId: null,
    professionalName: 'Cardiologista',
    dateTime: '2026-11-11T14:00:00',
    reason: 'Dor de cabeça'
};

// Valida os dados utilizando o Schema
const resultado = intencaoSchema.safeParse(dados);

if (resultado.success) {
    console.log('Dados válidos!');
    console.log(resultado.data);
} else {
    console.log('Dados inválidos!');
    console.log(resultado.error.format());
}
