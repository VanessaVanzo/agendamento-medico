# Assistente de Agendamento Médico

Projeto desenvolvido para aplicar conceitos de Engenharia de Prompts, Structured Outputs, LangChain e LangGraph na construção de um assistente inteligente para agendamento e cancelamento de consultas médicas.

## Objetivo

Permitir que o usuário solicite agendamentos e cancelamentos utilizando linguagem natural. O sistema interpreta a mensagem, identifica a intenção, consulta profissionais e horários disponíveis e executa as operações de forma controlada.

Quando o horário solicitado não está disponível, o fluxo apresenta alternativas e aguarda a escolha do usuário antes de concluir o agendamento.

## Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript.
- **LangChain** — integração com o modelo de linguagem.
- **LangGraph** — construção e orquestração do fluxo de execução.
- **OpenAI-compatible API / OpenRouter** — acesso ao modelo de linguagem.
- **Zod** — validação dos dados estruturados.
- **Dotenv** — gerenciamento de variáveis de ambiente.
- **Node.js Test Runner** — execução dos testes automatizados.

## Funcionalidades

- Identificação da intenção do usuário (agendar ou cancelar).
- Extração estruturada de informações com o modelo de linguagem.
- Identificação de profissionais por nome ou especialidade.
- Normalização de especialidades médicas.
- Consulta de horários disponíveis.
- Verificação determinística de disponibilidade.
- Agendamento e cancelamento de consultas.
- Busca de horários alternativos.
- Interrupção do fluxo para aguardar a escolha do usuário.
- Retomada da execução com a escolha informada.
- Geração de respostas em linguagem natural.

## Arquitetura do projeto

```text
src/
├── config/          # Configuração do modelo de linguagem
├── data/            # Dados de profissionais, especialidades e agenda
├── nodes/           # Nós e etapas do LangGraph
├── prompts/         # Prompts utilizados pelo modelo
├── schemas/         # Estruturas e validações com Zod
├── services/        # Regras de negócio e operações
├── testes/
│   ├── automatizados/
│   └── manuais/
├── estado.js        # Definição do estado compartilhado
└── grafo.js         # Construção e configuração do grafo
```

## Fluxo de execução

1. O usuário envia uma solicitação em linguagem natural.
2. O modelo identifica a intenção e extrai os dados necessários.
3. O sistema resolve o profissional solicitado.
4. O LangGraph direciona a execução conforme a intenção identificada.
5. Para agendamentos, o sistema consulta e verifica a disponibilidade.
6. Se o horário estiver disponível, o agendamento é realizado.
7. Se não estiver disponível, são apresentadas alternativas e o fluxo aguarda a escolha do usuário.
8. Após a escolha, o sistema valida o horário e retoma a execução.
9. Para cancelamentos, o sistema localiza e libera o horário correspondente.
10. Uma resposta final é gerada para o usuário.

## Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Acesse a pasta:

```bash
cd agendamento-medico
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto e configure sua chave de API:

```env
OPENROUTER_API_KEY=sua_chave_aqui
```

## Execução dos testes

Execute os testes automatizados:

```bash
npm test
```

Os testes estão organizados em:

- `src/testes/automatizados`: testes das operações e regras de negócio.
- `src/testes/manuais`: scripts para validar os serviços e o fluxo completo.

## Conceitos aplicados

- Engenharia de Prompts.
- Prompt Chaining.
- Structured Outputs.
- Validação de dados com Zod.
- Separação entre interpretação por IA e regras determinísticas.
- Grafos de execução com LangGraph.
- Estado compartilhado entre nós.
- Roteamento condicional.
- Interrupção e retomada de fluxos com `interrupt()` e `Command({ resume })`.
- Testes automatizados.

## Observação

Este projeto possui finalidade educacional. Os dados de profissionais e horários são simulados, não sendo integrado a uma agenda médica real.

---

Desenvolvido como projeto prático de estudos em Inteligência Artificial e desenvolvimento de aplicações com LangChain e LangGraph.