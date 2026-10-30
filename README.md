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

## v25 (30/10/2026)

- 193 explicações curtas reescritas (conceito, conta passo a passo e pegadinha). Nenhum gabarito mudou.
- Glossário (`src/js/15-v25.js`): na primeira vez que uma sigla aparece numa explicação, ela vem por extenso. Mapa por categoria para siglas ambíguas (PC, EF, OS...).
- 71 questões novas (`src/js/07g-questoes-v25.js`, posições 1280+) em manuseio, patrimônio, ESG, armazenagem, manutenção, fluxo de caixa, contratos, SGI, transportes, balanço/DRE, compras e LGPD.
- Normas 2026: ANPD virou Agência Nacional de Proteção de Dados (Lei 15.352/2026); valores da 14.133 em 2026 (Decreto 12.807/2025); art. 29, § 3º da 13.303.
- Simulado das específicas: 40 questões, 2h40, mostra corte (20) e meta (28).
- Teste: `tests/v25.js`. Cache do SW: transpetro-v26.

## v24
- Revisão geral do banco: 68 questões corrigidas (enunciados com palavra "destacada" sem destaque, PROCV sem a tabela, explicações que citavam letras, que mudam porque as alternativas são embaralhadas, e as 7 explicações reportadas pelo usuário). Nenhum gabarito mudou. Os avisos dessas 7 saem uma vez (`S.v24rep`).
- Conteúdos conferidos com o edital: Razão/Diário, documentos fiscais, CLT básica, processadores, direitos do titular (LGPD), regimes e desempate da Lei 13.303, leis e nomenclatura de rodovias, automação do manuseio, PNRS. Lei seca: vedação de prazo indeterminado é o art. 71, parágrafo único.
- `src/js/14-v24.js`: aviso (toast) sempre acima da barra de abas e some em 4 s; botões das provas em grade (`.pgrid`).

## v15
- `src/js/10-v15.js`: edital verticalizado (`EDITAL`, tela `edital`), revisão espaçada FSRS (`srsUpdate` com `{s,dif,d,l}`), estatísticas detalhadas, tutor com IA (capability `sample`, só no claude.ai), deslizar entre questões, atalhos `?a=wrong|daily|sim|afc`, flashcards em áudio (tela `afc`) e notificações push.
- Push: o app grava a inscrição e o plano dos próximos 14 dias pela função `tp_push`; a Edge Function `supabase/functions/tp-push` roda a cada 15 min (pg_cron) e envia o que venceu. Chaves VAPID e chave do cron ficam na tabela `push_cfg` (sem acesso público).
- GitHub: o script vai em `app.js` (cache de código compilado) e o service worker abre pelo cache e atualiza em segundo plano.
- Testes: `node tests/v15.js` e `node tests/claude.js` (sincronização dentro do claude.ai, com o conector simulado).

## v16
- `src/js/11-v16.js`: tela Áudio (estudo falado em sequência: mix do dia, resumo, questões, flashcards e pegadinhas; botões do fone via Media Session; tela acesa com Wake Lock e modo bolso; desligar sozinho) e sons para concentrar gerados no próprio app (ruídos marrom, rosa e branco, chuva, ondas, ambiente lo-fi e piano), tocados por um `<audio>` em loop que abaixa enquanto a voz fala.
- Limpeza: plano antigo de semanas (PLAN), SRS de intervalos fixos, vCrono antigo e funções duplicadas saíram. A cópia na conta do claude.ai agora junta em vez de substituir.
- Testes: `node tests/v16.js`.

## v22 (layout, design e textos)

- `src/js/13-v22.js`: campos de texto e hora no tema do app (e controles nativos no escuro), botão Áudio com nome no menu lateral do PC, abas de Estudar/Progresso numa linha com rolagem no celular, cabeçalho de questões e jogos numa linha com "← Sair" em todos, cartões em 3 colunas no PC, tabelas dos resumos sem quebrar palavra, marcas do edital visíveis, links alinhados, destaque único nas pegadinhas, gráfico de revisões sem estourar no celular. Estilos injetados no fim do `body` (o `<style>` da página fica no body e venceria no empate).
- Corrigido: "Ordene as fases" mostrava as etapas letra por letra (opção sem letra ocupava só a coluna de 32 px).
- Textos: revisão espaçada descrita como FSRS em todo o app, plural de "dia anterior completo", milhar em "1.260", dica de Português/Matemática separada, aviso de notificação sem repetição, vírgulas em pegadinhas, "Lei nº" nas questões da Petrobras Suprimento, alternativas de associação padronizadas ("I – R, II – S").
- Sincronização: cada aparelho grava em `S.devs[id]` a versão do app, onde abriu (GitHub, claude.ai) e quando, para conferir pela nuvem.
- Cache do service worker `transpetro-v22`.

## v21 (revisão geral)

- Questões: as 459 autorais e as de provas foram conferidas (integridade, gabarito, lei vigente). As correções que eram aplicadas em tempo de execução (`FIX` de alternativas, `EXPL` e `fx` de explicações) foram embutidas nos próprios dados; o banco resultante é idêntico, byte a byte, e o app ficou 42 KB menor.
- Áudio (`src/js/11-v16.js`): sem controle de volume dentro do app, vale o volume do aparelho. A voz abaixa o som com fade, o timer desliga com fade de 8 s, e os botões do fone/tela bloqueada pausam o som e trocam para o próximo quando a voz não está tocando. Removida `auSrcName` (sem uso).
- `src/js/12-v21.js`: etapa "Recuperar ontem" quando o resumo do dia anterior ficou pendente; 07/11 usa a prova Petrobras 2018 TAC; aviso "Versão nova do app pronta" com botão Atualizar (GitHub).
- Service worker `transpetro-v21`: instala buscando os arquivos sem o cache HTTP (`cache:"reload"`) e procura versão nova sempre que o app volta à tela.
- Testes: `node tests/v21.js` e `node tests/crawl.js` (clica em todos os botões de todas as telas em 390, 820 e 1366 px).

## v20

- +41 questões da Petrobras 2010, Técnico de Administração e Controle (conhecimentos específicos), em `src/js/07f-questoes-tac2010.js` (`Q20`, posições 1239–1279), no grupo "Mesmo cargo". Total 1.280.
- Cache do service worker `transpetro-v20`. Teste: `tests/v20.js`.

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

## Carreira em Dados 2027 (mudou)

O app de carreira ficou em `carreira/` por pouco tempo e mudou para o repositório próprio `pedro1105/carreira-dados` (https://pedro1105.github.io/carreira-dados/), porque o app instalado da Transpetro (escopo `/estudos-transpetro/`) abria a página de carreira dentro dele. `carreira/index.html` só aponta o endereço novo e `carreira/sw.js` apaga o service worker antigo. O `sw.js` da raiz continua ignorando `/carreira/`.

## v26 (30/10/2026)

- Cronograma: a meta de questões aparece à parte e não entra mais na conta de etapas (o 3/4 de 27/10 vinha daí).
- Etapa de prova anterior se marca sozinha quando a prova daquele ano foi feita, em qualquer dia.
- Remarcações: prova 2012 em 31/10; prova 2011 + Estoques II em 01/11; 25/11 vira Excel + mini simulado; simulado completo no horário da prova em 29/11; simulado das específicas em 02/12. Nenhum simulado de 4 h em dia útil.
- Conteúdos do dia atualizados (trigonometria, conjuntos numéricos, ANPD 2026, valores 2026 da 14.133, depreciação, intensidade ESG).
- Teste: `tests/v26.js`. Cache do SW: transpetro-v27.
