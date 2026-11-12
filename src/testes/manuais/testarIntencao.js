
import { identificarIntencao } from '../../services/identificarIntencao.js';

const mensagem = `
    Quero agendar uma consulta com cardiologista
    amanhã às 14h.
    O motivo é dor de cabeça.
`;

try {
    const resultado = await identificarIntencao(mensagem);

    console.log('Intenção identificada pela IA:');
    console.log(JSON.stringify(resultado, null, 2));

} catch (erro) {
    console.error('Erro ao identificar intenção:');
    console.error(erro.message);
}
