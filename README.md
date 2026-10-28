# Estudos Transpetro 2026

App de estudo para a prova Transpetro PSP Nível Médio 2026.3, Ênfase 1 (Administração e Controle), Cesgranrio.

- Versão instalável: https://pedro1105.github.io/estudos-transpetro/
- O mesmo app também é publicado no claude.ai.

## Como o código está organizado

- `src/shell.html`: estilos e estrutura da página.
- `src/js/*.js`: módulos, montados em ordem numérica:
  - `01-questoes.js` banco principal; `07a-questoes-outras-provas.js` questões de outras provas Cesgranrio.
  - `02-conteudos.js` resumos, lições de base, flashcards e cronograma original.
  - `03-nucleo.js` estado, navegação (`VIEWS`/`TABOF`), simulados, correção.
  - `04` a `07b` telas e recursos acrescentados por versão; `08-v13.js` identificação fixa das questões, sincronização, reportar erro, letra e resumo semanal; `09-v14.js` tela Hoje (programação com horários), Configurações.
- `build.py` gera `dist/app.html` (claude.ai) e `index.html` (GitHub Pages, com service worker).

Regras do banco de questões: nunca remover nem reordenar itens de `Q`; para tirar uma questão de circulação, marque `q.hid=1`.

## Testes

```
python3 build.py
node tests/func.js      # sincronização (nuvem simulada), IDs, reportar erro, letra, resumo semanal
node tests/flows.js     # percorre jogos e modos de prova em 3 tamanhos de tela
node tests/snapshot.js dist/app.html antes.json   # foto do HTML das telas, para comparar refatorações
```

Ao publicar, troque a versão do cache em `sw.js`.
