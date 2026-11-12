export function aplicarEscolhaNode(estado) {
    const horarioEscolhido = estado.alternativas.find(
        horario => horario.dateTime === estado.escolha
    );

    if (!horarioEscolhido) {
        throw new Error('Horário escolhido não está entre as alternativas.');
    }

    return {
        intencao: {
            ...estado.intencao,
            dateTime: horarioEscolhido.dateTime
        }
    };
}