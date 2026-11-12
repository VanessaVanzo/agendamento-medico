// Decide o caminho conforme a disponibilidade do horário
export function rotearDisponibilidadeNode(estado) {

    if (estado.resultado) {
        return 'disponivel';
    }

    return 'indisponivel';
}