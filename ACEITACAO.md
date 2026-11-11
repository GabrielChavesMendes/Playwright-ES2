| Critério | Arquivo e Linha | O que ele prova |
| :--- | :--- | :--- |
| **Caminho Principal** | `tests/aceitacao.spec.js:7` | Prova que o usuário preenche o nome do visitante, clica em cadastrar, o item aparece na lista e o contador é atualizado. |
| **Regra de Erro** | `tests/aceitacao.spec.js:15` | Prova que o formulário bloqueia envios apenas com espaços em branco e exibe o alerta visual correto. |
| **Regra de Estado** | `tests/aceitacao.spec.js:23` | Prova que o novo registro é salvo no localStorage, sobrevivendo ao encerramento ou `reload` da aplicação. |