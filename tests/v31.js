// Testes da v31: cronograma que se reorganiza. Uso: node tests/v31.js [dist/app.html]
const { chromium } = require('playwright');
const path = require('path');
const file = 'file://' + path.resolve(process.argv[2] || 'dist/app.html');
let fails = 0;
const ok = (t, v, extra) => { if (!v) fails++; console.log(v ? 'OK  ' : 'FAIL', t, extra !== undefined ? extra : ''); };
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.addInitScript(() => { const T = new Date('2026-11-06T13:00:00-03:00').getTime(); const D = Date; class FD extends D { constructor(...a) { super(...(a.length ? a : [T + (D.now() - window.__t0)])); } static now() { return T + (D.now() - window.__t0); } } window.__t0 = D.now(); window.Date = FD; });
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(file); await p.waitForTimeout(300);
  // estado parecido com o real: 28/10 só Português, 29/10 prova 2018, 01/11 prova 2011 + leitura de Estoques
  await p.evaluate(() => {
    S.rp = undefined; delete S.rpPrev; S.daily = {}; S.days = { '2026-10-28': 20, '2026-10-29': 62, '2026-11-01': 101 };
    S.fin = { '2026-10-28': [{ l: 'Treino: Língua Portuguesa', n: 15, w: [], full: true }], '2026-11-01': [{ l: 'Prova Transpetro 2011 (PSP RH 3/2011)', n: 47, w: [], full: true }] };
    S.rd = { '2026-11-01': { estoq: 1 } }; S.hist = [{ label: 'Prova Transpetro 2011 (PSP RH 3/2011)', date: '01/11/2026', score: 23, total: 47 }, { label: 'Prova Transpetro 2018 (PSP RH 2018.1)', date: '29/10/2026', score: 12, total: 52 }];
    save(); rpApply(true);
  });
  ok('hoje é 06/11 no teste', await p.evaluate(() => todayK()) === '2026-11-06');
  const pend = await p.evaluate(() => rpPending().map(x => x.o));
  ok('acha o que ficou para trás (28/10, 30/10, prova 2012, 02 a 05/11)', ['2026-10-28', '2026-10-30', '2026-10-31', '2026-11-02', '2026-11-03', '2026-11-04', '2026-11-05'].every(k => pend.includes(k)) && !pend.includes('2026-11-01') && !pend.includes('2026-10-27'), pend.join(','));
  await p.evaluate(() => go('guia')); await p.waitForTimeout(150);
  ok('Hoje mostra o aviso com botão Reorganizar', await p.locator('.rpban button:has-text("Reorganizar")').count() === 1);
  ok('Hoje tem o botão Não consigo estudar hoje', await p.locator('button:has-text("Não consigo estudar hoje")').count() === 1);
  // plano novo
  const r = await p.evaluate(() => { const r = rpPlan([]); const save0 = S.rp; S.rp = { m: r.m, o: r.o }; rpApply(true);
    const ks = Object.keys(AG0).sort(), all = []; ks.forEach(k => rpBlocks(k).forEach(o => all.push(o)));
    const cont = ks.filter(k => AG0[k][1] && !rpIsWe(k) && AG0[k][6] !== 'weak');
    const out = { r, miss: cont.filter(o => !all.includes(o)), dup: all.filter((o, i) => o !== 'w' && all.indexOf(o) !== i), fixedOk: ['2026-11-29', '2026-12-02', '2026-12-03', '2026-12-04', '2026-12-05', '2026-12-06'].every(k => rpBlocks(k)[0] === k),
      wd: ks.filter(k => k >= '2026-11-06' && rpBlocks(k).some(o => ['sim', 'esp'].includes(AG0[o] && AG0[o][6]) || (AG0[o] && AG0[o][6].startsWith('past:'))) && ![0, 6].includes(kDate(k).getDay())),
      p2012: rpWhere('2026-10-31'), seq: ks.filter(k => k >= '2026-11-06' && k <= '2026-11-16').map(k => k.slice(5) + ':' + AG[k][0]) };
    S.rp = save0; rpApply(true); return out; });
  ok('nenhum assunto do plano ficou de fora', !r.miss.length, r.miss.join(','));
  ok('nenhum bloco repetido', !r.dup.length, r.dup.join(','));
  ok('reta final não muda', r.fixedOk);
  ok('simulados e provas só no fim de semana (exceto 02/12)', !r.wd.filter(k => k !== '2026-12-02').length, r.wd.join(','));
  ok('prova 2012 remarcada para um fim de semana a partir de hoje', r.p2012 >= '2026-11-06' && [0, 6].includes(new Date(r.p2012 + 'T12:00').getDay()), r.p2012);
  console.log('   dias duplos:', r.r.doubles.join(', '), '| log:', r.r.log.join(' | ')); console.log('   ' + r.seq.join('\n   '));
  // confirmar pelo modal
  await p.evaluate(() => rpReorg()); await p.waitForTimeout(150);
  ok('modal mostra a prévia', /Reorganizar o cronograma/.test(await p.locator('dialog').innerText()));
  await p.locator('dialog button[value="ok"]').click(); await p.waitForTimeout(200);
  ok('depois de reorganizar, nada pendente', await p.evaluate(() => rpPending().length) === 0);
  ok('aviso some da tela Hoje', await p.locator('.rpban').count() === 0);
  ok('dia antigo sem estudo aponta para onde foi', await p.evaluate(() => /foi para/.test(dayItems(dayPlan('2026-11-02'))[0].t)), await p.evaluate(() => dayItems(dayPlan('2026-11-02'))[0].t));
  const dbl = await p.evaluate(() => Object.keys(AG).find(k => AG[k].dbl));
  if (dbl) { const its = await p.evaluate(k => dayItems(dayPlan(k)).map(i => i.id + ':' + i.t.slice(0, 50)), dbl); ok('dia duplo tem as duas teorias e os dois treinos', ['teo', 'q1', 'teo2', 'q12'].every(id => its.some(x => x.startsWith(id + ':'))), its.join(' | ')); }
  // não consigo estudar hoje
  const before = await p.evaluate(() => AG['2026-11-06'][0]);
  await p.evaluate(() => rpSkip(todayK())); await p.waitForTimeout(150);
  await p.locator('dialog button[value="ok"]').click(); await p.waitForTimeout(200);
  const after = await p.evaluate(() => ({ a: AG['2026-11-06'][6], w: rpWhere(rpBlocks('2026-11-06')[0] || 'x'), it: dayItems(dayPlan('2026-11-06'))[0].t }));
  ok('hoje vira dia sem estudo e o conteúdo vai para frente', after.a === 'off' && /foi para/.test(after.it), before + ' → ' + after.it);
  await p.evaluate(() => go('guia')); await p.waitForTimeout(100);
  ok('botão Vou estudar hoje aparece', await p.locator('button:has-text("Vou estudar hoje")').count() === 1);
  await p.evaluate(() => rpUndo()); await p.waitForTimeout(150);
  ok('desfazer volta o dia de hoje', await p.evaluate(() => AG['2026-11-06'][6] !== 'off'));
  await p.evaluate(() => { cronoOpen = todayK(); go('crono'); }); await p.waitForTimeout(150);
  ok('cronograma explica a ajuda', /Não conseguiu estudar algum dia/.test(await p.locator('#view').innerText()));
  ok('cronograma tem botão no dia aberto', await p.locator('.agday button:has-text("Não vou poder estudar")').count() >= 1);
  const w = await p.evaluate(() => document.documentElement.scrollWidth); ok('sem rolagem lateral', w <= 390, w);
  ok('sem erros de script', !errs.length, errs.join(' | '));
  await b.close(); process.exit(fails ? 1 : 0);
})();
