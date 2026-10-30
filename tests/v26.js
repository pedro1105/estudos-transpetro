// Testes da v26: revisão do cronograma. Uso: node tests/v26.js [dist/app.html]
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
    // situação real do usuário: etapas de 27/10 marcadas, sem questões no dia; prova 2018 feita em 29/10
    S.daily['2026-10-27'] = { aq: true, cor: true, sim: true }; S.days['2026-10-27'] = 0;
    S.hist = [{ date: '29/10/2026', label: 'Prova Transpetro 2018 (PSP RH 2018.1)', score: 12, total: 52, byB: {} }];
    for (const k in dsMemo) delete dsMemo[k];
    const it29 = dayItems(dayPlan('2026-10-29'));
    const days = Object.keys(AG).sort();
    const bad = days.filter(k => { const a = AG[k]; return a[1] && !CATS[a[1]] || a[3] && !CATS[a[3]] || a[4] && !CATS[a[4]]; });
    const wkSim = days.filter(k => AG[k][6] === 'sim' && ![0, 6].includes(kDate(k).getDay()));
    return { s27: dayScore('2026-10-27'), s29: dayScore('2026-10-29'), d31: AG['2026-10-31'][6], d01: AG['2026-11-01'][6], it01: dayItems(dayPlan('2026-11-01')).map(i => i.id),
      esp: dayItems(dayPlan('2026-12-02')).map(i => i.id), bad, wkSim, trig: AG['2026-11-26'][5], anpd: /15\.352/.test(AG['2026-11-27'][2]), dc: days.length,
      pd: pastDone('2018'), pd12: pastDone('2012') };
  });
  ok('27/10 com as 3 etapas marcadas conta como feito (meta à parte)', d.s27 === 1, d.s27);
  ok('prova 2018 feita em outro dia marca a etapa', d.pd && !d.pd12);
  ok('prova 2012 remarcada para 31/10 e 2011 para 01/11', d.d31 === 'past:2012' && d.d01 === 'past:2011');
  ok('01/11 tem prova e teoria de Estoques', d.it01.includes('sim') && d.it01.includes('teo'), d.it01.join(','));
  ok('02/12 simulado das específicas com correção', d.esp.includes('sim') && d.esp.includes('cor'), d.esp.join(','));
  ok('nenhum simulado de 4 h em dia útil', d.wkSim.length === 0, d.wkSim.join(','));
  ok('assuntos do cronograma existem', d.bad.length === 0, d.bad.join(','));
  ok('trigonometria e ANPD 2026 no cronograma', /trigonom/.test(d.trig) && d.anpd);
  ok('cronograma de 27/10 a 06/12 completo', d.dc === 41, d.dc);
  await p.evaluate(() => { go('crono'); }); await p.waitForTimeout(200);
  const txt = await p.locator('#view').textContent();
  ok('cartão de 27/10 mostra feito', /✓ feito/.test(txt));
  ok('sem rolagem lateral', await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  ok('sem erros JS', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} falha(s)` : '\nTudo certo'); process.exit(fails ? 1 : 0);
})();
