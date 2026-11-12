
import { modelo } from '../../config/modelo.js';

try {
    const resposta = await modelo.invoke(
        'Responda em português: o que é um agendamento médico?'
    );

    console.log('Resposta da IA:');
    console.log(resposta.content);

} catch (erro) {
    console.error('Erro ao chamar o modelo:', erro.message);
}
