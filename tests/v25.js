// Testes da v25: explicações reescritas, glossário de siglas, questões novas, normas 2026 e simulado das específicas.
// Uso: node tests/v25.js [dist/app.html]
const { chromium } = require('playwright');
const path = require('path');
const file = 'file://' + path.resolve(process.argv[2] || 'dist/app.html');
let fails = 0;
const ok = (t, v, extra) => { if (!v) fails++; console.log(v ? 'OK  ' : 'FAIL', t, extra !== undefined ? extra : ''); };
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(file); await p.waitForTimeout(300);
  const d = await p.evaluate(() => {
    const vis = Q.filter(q => !q.hid);
    const curtas = vis.filter(q => (q[3] || '').length < 85).length;
    const novas = Q.slice(1280);
    const dup = new Set(Q.map(q => q[1])).size;
    return { n: Q.length, curtas, novas: novas.length, cats: [...new Set(novas.map(q => q.c))].length, okc: novas.every(q => CATS[q.c] && q[2].length === 5 && q[3].length > 80),
      dup: Q.length - dup, v: APP_V, g1: glosTxt('O PL aumentou e o PL caiu.', 'bp'), g2: glosTxt('MTTR (tempo médio) e MTTR.', 'manut'), g3: glosTxt('O CT-e e o PC.', 'transp'),
      anpd: RES.lgpd.map(x => x[1].join(' ')).join(' ').includes('Lei 15.352/2026'), disp: RES.compras.map(x => x[1].join(' ')).join(' ').includes('130.984,20') };
  });
  ok('banco cresceu com as questões novas', d.n > 1280 && d.novas >= 60, d.n + ' / ' + d.novas);
  ok('questões novas em 10+ assuntos e completas', d.cats >= 10 && d.okc, d.cats);
  ok('nenhuma explicação com menos de 85 letras', d.curtas === 0, d.curtas);
  ok('sem enunciado repetido novo', d.dup <= 9, d.dup);
  ok('versão 25', d.v === 25);
  ok('glossário expande só a primeira vez', d.g1 === 'O PL (patrimônio líquido) aumentou e o PL caiu.', d.g1);
  ok('glossário respeita sigla já explicada', d.g2 === 'MTTR (tempo médio) e MTTR.', d.g2);
  ok('glossário não quebra CT-e', d.g3.startsWith('O CT-e'), d.g3);
  ok('LGPD: ANPD agência (Lei 15.352/2026)', d.anpd);
  ok('14.133: valores de 2026', d.disp);
  // explicação com glossário aparece no treino
  await p.evaluate(() => { const i = Q.findIndex(q => !q.hid && glosTxt(q[3], q.c).includes('PL (patrimônio líquido)')); makeQuiz([i], 'train', 'Teste', 0); });
  await p.waitForTimeout(150); await p.locator('#view .opt').first().click(); await p.waitForTimeout(150);
  ok('explicação mostra a sigla por extenso', /PL \(patrimônio líquido\)/.test(await p.locator('#view .expl').textContent()));
  await p.evaluate(() => { quiz = null; go('pratica'); }); await p.waitForTimeout(200);
  await p.locator('#view button', { hasText: 'Iniciar específicas' }).click(); await p.waitForTimeout(200);
  const s = await p.evaluate(() => ({ n: quiz.ids.length, lim: quiz.limit, port: quiz.ids.filter(i => ['port', 'mat'].includes(CATS[Q[i].c].b)).length }));
  ok('simulado das específicas: 40 questões, 2h40, sem gerais', s.n === 40 && s.lim === 9600 && s.port === 0, JSON.stringify(s));
  await p.evaluate(() => { quiz.ids.forEach((qi, k) => quiz.ans[k] = quiz.order[k].indexOf(0)); finish(); }); await p.waitForTimeout(200);
  ok('resultado mostra a meta', /40\/40/.test(await p.locator('#view').textContent()));
  ok('sem rolagem lateral', await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  ok('sem erros JS', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} falha(s)` : '\nTudo certo'); process.exit(fails ? 1 : 0);
})();
