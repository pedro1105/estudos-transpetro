// Testes das novidades da v15. Uso: node tests/v15.js [dist/app.html]
const { chromium } = require('playwright');
const path = require('path');
const file = 'file://' + path.resolve(process.argv[2] || 'dist/app.html');
let fails = 0;
const ok = (t, v, extra) => { if (!v) fails++; console.log(v ? 'OK  ' : 'FAIL', t, extra !== undefined ? extra : ''); };
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(file); await p.waitForTimeout(300);

  // FSRS
  ok('migra revisão antiga {b,d}', await p.evaluate(() => { S.srs = { 5: { b: 2, d: todayK() } }; Object.values(S.srs).forEach(srsMig); return S.srs[5].s === 7 && S.srs[5].dif === 5 && S.srs[5].b === undefined; }));
  ok('erro cria cartão para amanhã', await p.evaluate(() => { S.srs = {}; S.qerr = {}; srsUpdate(7, false, 30); return S.srs[7] && S.srs[7].d === addDaysK(1) && S.qerr[7] === 1; }));
  const iv = await p.evaluate(() => {
    const out = {};
    for (const [nm, sec] of [['bom', 30], ['dificil', 200]]) {
      S.srs = { 9: { s: 3, dif: 5, d: todayK(), l: addDaysK(-3) } }; srsUpdate(9, true, sec);
      out[nm] = S.srs[9] ? kDiff(S.srs[9].d, todayK()) : 'fora';
    }
    S.srs = { 9: { s: 3, dif: 5, d: todayK(), l: addDaysK(-3) } }; srsUpdate(9, false, 10); out.erro = kDiff(S.srs[9].d, todayK()); out.sErro = S.srs[9].s;
    return out;
  });
  ok('acertar devagar dá intervalo menor que acertar rápido', iv.bom > iv.dificil && iv.dificil >= 1, JSON.stringify(iv));
  ok('errar volta em 1 dia e reduz estabilidade', iv.erro === 1 && iv.sErro < 3, JSON.stringify(iv));
  ok('acerto antecipado não mexe', await p.evaluate(() => { S.srs = { 3: { s: 4, dif: 5, d: addDaysK(2), l: todayK() } }; srsUpdate(3, true, 20); return S.srs[3].d === addDaysK(2); }));
  ok('estabilidade alta sai da fila antes da prova', await p.evaluate(() => { S.srs = { 4: { s: 60, dif: 3, d: todayK(), l: addDaysK(-60) } }; srsUpdate(4, true, 20); return !S.srs[4]; }));
  ok('merge de srs usa a revisão mais recente', await p.evaluate(() => { const a = { srs: { 1: { s: 2, dif: 5, d: '2026-11-02', l: '2026-10-28' } }, upd: 1 }, b = { srs: { 1: { s: 9, dif: 4, d: '2026-11-09', l: '2026-10-30' } }, upd: 2 }; const m = mergeS(a, b, { srs: { 1: { s: 1, dif: 5, d: '2026-10-28', l: '2026-10-27' } } }); return m.srs[1].s === 9 && m.srs[1].l === '2026-10-30'; }));
  ok('qerr soma nos dois aparelhos', await p.evaluate(() => mergeS({ qerr: { 1: 3 }, upd: 1 }, { qerr: { 1: 4 }, upd: 2 }, { qerr: { 1: 2 } }).qerr[1] === 5));
  await p.evaluate(() => { S.srs = {}; S.qerr = {}; save(); });

  // Edital
  await p.evaluate(() => go('edital'));
  ok('edital: 21 tópicos', await p.locator('#view details.edt').count() === 21);
  ok('edital na aba Estudar', await p.locator('#view .segtabs button[aria-selected="true"]').textContent() === 'Edital');
  await p.locator('#view details.edt').first().locator('summary').click();
  await p.locator('#view details.edt').first().locator('input[type=checkbox]').first().check(); await p.waitForTimeout(100);
  ok('marca subtópico lido', await p.evaluate(() => !!S.ed['rh.0']));
  ok('detalhe continua aberto', await p.locator('#view details.edt').first().evaluate(d => d.open));
  ok('treinado/70% automáticos', await p.evaluate(() => { S.stats.rh = { c: 9, t: 12 }; const x = edState(EDITAL[0]); return x.trein && x.ok; }));
  ok('todas as categorias do edital existem', await p.evaluate(() => EDITAL.every(e => e[3].every(c => CATS[c]))));
  ok('todo assunto do app está no edital', await p.evaluate(() => Object.keys(CATS).every(c => EDITAL.some(e => e[3].includes(c)))));

  // Estatísticas
  await p.evaluate(() => { S.hist = [{ date: '27/10/2026', label: 'Simulado completo', score: 30, total: 60, byB: { adm: { c: 5, t: 9 }, fin: { c: 4, t: 9 }, log: { c: 9, t: 15 }, info: { c: 4, t: 7 } } }, { date: '28/10/2026', label: 'Mini simulado', score: 10, total: 20, byB: { adm: { c: 3, t: 3 }, fin: { c: 2, t: 3 }, log: { c: 4, t: 5 }, info: { c: 2, t: 2 } } }]; S.qerr = { 0: 3, 1: 2, 2: 1 }; S.ct.rh = { s: 400, n: 2 }; go('stats'); });
  ok('gráfico de evolução', await p.locator('#view svg.evo circle').count() === 2);
  ok('questões que mais erra (2+)', await p.locator('#view .repitem .pill.bad').count() === 2);
  ok('tabela por assunto com tempo', /3m20/.test(await p.locator('#view .cattbl').textContent()));
  await p.locator('button:has-text("Treinar estas")').click();
  ok('treino das que mais erra', await p.evaluate(() => current === 'quiz' && quiz.ids.length === 2));

  // deslizar
  await p.evaluate(() => startTrainCat('estoq'));
  const sw = async dx => { await p.evaluate(dx => { const t = (x) => new Touch({ identifier: 1, target: document.body, clientX: x, clientY: 400 }); document.dispatchEvent(new TouchEvent('touchstart', { touches: [t(200)], changedTouches: [t(200)] })); document.dispatchEvent(new TouchEvent('touchend', { touches: [], changedTouches: [t(200 + dx)] })); }, dx); };
  await sw(-150); ok('deslizar para a esquerda avança', await p.evaluate(() => quiz.i === 1));
  await sw(150); ok('deslizar para a direita volta', await p.evaluate(() => quiz.i === 0));
  await sw(-30); ok('toque curto não muda', await p.evaluate(() => quiz.i === 0));
  ok('sem tutor fora do claude.ai', await p.locator('.tutor').count() === 0);

  // flashcards em áudio
  await p.evaluate(() => go('jogos'));
  ok('card de áudio em Jogos', await p.locator('#view h3:has-text("Flashcards em áudio")').count() === 1);
  await p.evaluate(() => go('afc'));
  await p.evaluate(() => { window.speechSynthesis.speak = u => setTimeout(() => u.onend && u.onend(), 30); });
  await p.selectOption('#afcPause', '3'); await p.locator('#view button:has-text("Começar")').click(); await p.waitForTimeout(200);
  ok('áudio mostra cartão', await p.locator('.afccard').count() === 1);
  await p.locator('#view button:has-text("Pausar")').click();
  ok('pausa', await p.evaluate(() => !afc.play));
  await p.locator('#view button[aria-label="Próximo"]').click();
  ok('próximo cartão', await p.evaluate(() => afc.i === 1));

  // configurações: push explica a versão do GitHub
  await p.evaluate(() => go('config'));
  ok('painel de notificações', await p.locator('#view h3:has-text("Notificações com o app fechado")').count() === 1);
  ok('plano de push com datas futuras', await p.evaluate(() => { const pl = pushPlan(); return pl.length >= 10 && pl.every(x => x.t > Date.now() && x.ti && x.b); }));
  ok('versão 15', /Versão 15/.test(await p.locator('#view').textContent()));

  // atalhos do ícone
  const p2 = await ctx.newPage(); await p2.goto(file + '?a=wrong'); await p2.waitForTimeout(300);
  ok('atalho ?a=daily/wrong tratado', await p2.evaluate(() => !location.search && (current === 'quiz' || current === 'guia')));
  await p2.goto(file + '?a=daily'); await p2.waitForTimeout(300);
  ok('atalho desafio do dia', await p2.evaluate(() => current === 'quiz' && quiz.daily));

  // tutor no claude.ai (sample simulado)
  const p3 = await ctx.newPage(); p3.on('pageerror', e => errs.push('p3 ' + e.message));
  await p3.addInitScript(() => { const fake = async (inp, o) => { o && o.onText && o.onText({ text: 'Porque sim.' }); return { text: 'Porque a letra certa é a do gabarito.' }; }; fake.json = async () => ({ enunciado: 'Pergunta nova?', alternativas: ['certa', 'b', 'c', 'd', 'e'], explicacao: 'Expl.' }); window.claude = { use: async n => n === 'sample' ? fake : null }; });
  await p3.goto(file); await p3.waitForTimeout(500);
  await p3.evaluate(() => startTrainCat('rh')); await p3.locator('#view .opt').first().click();
  ok('tutor aparece após responder', await p3.locator('.tutor').count() === 1);
  await p3.locator('.tutor button').first().click(); await p3.waitForTimeout(200);
  ok('tutor explica', /gabarito/.test(await p3.locator('#tutorOut').textContent()));
  await p3.locator('.tutor button:has-text("Outra parecida")').click(); await p3.waitForTimeout(200);
  ok('questão parecida gerada', await p3.locator('.tutq .opt').count() === 5);
  await p3.locator('.tutq .opt').first().click();
  ok('questão parecida corrigida', await p3.locator('.tutq .expl').count() === 1);

  for (const v of ['edital', 'stats', 'afc', 'config']) { await p.evaluate(v => go(v), v); ok('tela ' + v + ' sem rolagem lateral', await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)); }
  ok('sem erros JS', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} FALHA(S)` : '\nTudo certo');
  process.exit(fails ? 1 : 0);
})();
