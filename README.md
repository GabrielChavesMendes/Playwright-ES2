# Teste de Aceitação com Playwright - Exercício 04

Repositório destinado à entrega do Exercício 04 da disciplina de Teste de Software, contendo a implementação de testes de aceitação utilizando o framework Playwright.

**Aluno:** Gabriel Chaves Mendes e Bruno Alejandro Montero Commisso Coelho

## Sobre o Projeto
O projeto testado é uma simulação de um sistema de cadastro de visitantes ("Far Far Away CRM") construído com HTML, Tailwind CSS e JavaScript puro (armazenamento via `localStorage`). Os testes foram desenhados para validar os três cenários exigidos na especificação:
1. **Caminho Principal:** Cadastro bem-sucedido de um novo visitante.
2. **Regra de Erro:** Bloqueio e exibição de alerta ao tentar enviar um formulário vazio.
3. **Regra de Estado:** Persistência dos dados na interface após recarregar a página (`reload`).

A relação detalhada de cada critério e o que ele prova está documentada no arquivo `ACEITACAO.md`.

## Guia de Execução e Comandos

Todos os comandos necessários para rodar a aplicação, testar e visualizar os relatórios estão consolidados nesta seção. Execute-os no terminal, na raiz do projeto:

* **Rodar a aplicação manualmente:**
  Inicia o servidor local para visualizar a interface no navegador (porta 5173).
  ```bash
  npm run dev
  npm i && npx playwright test
  npx playwright show-report
