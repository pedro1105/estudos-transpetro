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

## v15
- `src/js/10-v15.js`: edital verticalizado (`EDITAL`, tela `edital`), revisão espaçada FSRS (`srsUpdate` com `{s,dif,d,l}`), estatísticas detalhadas, tutor com IA (capability `sample`, só no claude.ai), deslizar entre questões, atalhos `?a=wrong|daily|sim|afc`, flashcards em áudio (tela `afc`) e notificações push.
- Push: o app grava a inscrição e o plano dos próximos 14 dias pela função `tp_push`; a Edge Function `supabase/functions/tp-push` roda a cada 15 min (pg_cron) e envia o que venceu. Chaves VAPID e chave do cron ficam na tabela `push_cfg` (sem acesso público).
- GitHub: o script vai em `app.js` (cache de código compilado) e o service worker abre pelo cache e atualiza em segundo plano.
- Testes: `node tests/v15.js` e `node tests/claude.js` (sincronização dentro do claude.ai, com o conector simulado).

## v16
- `src/js/11-v16.js`: tela Áudio (estudo falado em sequência: mix do dia, resumo, questões, flashcards e pegadinhas; botões do fone via Media Session; tela acesa com Wake Lock e modo bolso; desligar sozinho) e sons para concentrar gerados no próprio app (ruídos marrom, rosa e branco, chuva, ondas, ambiente lo-fi e piano), tocados por um `<audio>` em loop que abaixa enquanto a voz fala.
- Limpeza: plano antigo de semanas (PLAN), SRS de intervalos fixos, vCrono antigo e funções duplicadas saíram. A cópia na conta do claude.ai agora junta em vez de substituir.
- Testes: `node tests/v16.js`.

## v19

- +95 questões do mesmo cargo (TAC): BR Distribuidora 2011 (29), Innova 2012 (34) e Termobahia 2012 (32), em `src/js/07e-questoes-tac2.js` (`Q19`, posições 1144–1238), no grupo "Mesmo cargo". Total 1.239.
- Cache do service worker `transpetro-v19`. Teste: `tests/v19.js`.

## v18

- +85 questões da Petrobras, Técnico de Suprimento de Bens e Serviços (Administração): 2018 (30), 2014 (35) e 2012 (20), em `src/js/07d-questoes-suprimento.js` (`Q18`, posições 1059–1143). Total 1.144.
- Português e Matemática de 2018 e 2012 ficaram de fora por serem iguais às provas TAC. Também saíram Decreto 2.745, menus do Office 2003, planejamento estratégico, atendimento e PG.
- Cache do service worker `transpetro-v18`. Teste: `tests/v18.js`.

## v17
- `src/js/07c-questoes-tac.js`: 202 questões das provas do mesmo cargo (Técnico de Administração e Controle) — Petrobras 2018, 2014 e 2012 e BR Distribuidora 2015 e 2013 —, conferidas com o gabarito oficial e explicadas. Ficaram de fora questões que dependem do texto ou de figura, anuladas, Lei 8.666, Decreto 2.745, redação oficial, arquivologia e assuntos fora do edital. Entram no fim do banco (o progresso usa a posição).
- Praticar > Outras provas: novo grupo "Mesmo cargo".
- Testes: `node tests/v17.js`.
