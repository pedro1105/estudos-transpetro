// Testes da v27: checklist marca sozinho só quando a etapa é concluída. Uso: node tests/v27.js [dist/app.html]
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
  // dia de conteúdo fixo: 30/10 (Estoques I)
  const st = () => p.evaluate(() => { const k = todayK(); return Object.fromEntries(dayItems(dayPlan(k)).filter(i => !i.auto).map(i => [i.id, itemDone(k, i)])); });
  await p.evaluate(() => { S.daily = {}; S.fin = {}; S.rd = {}; S.vis = {}; });
  let s = await st();
  ok('nada marcado no começo', Object.values(s).every(x => !x), JSON.stringify(s));
  // abrir o botão do treino e sair no meio não marca
  const cat = await p.evaluate(() => dayPlan(todayK()).a);
  await p.evaluate(c => { startTrainCat(c); }, cat); await p.waitForTimeout(150);
  await p.evaluate(() => { quiz.ans[0] = quiz.order[0].indexOf(1); finish(); }); await p.waitForTimeout(150);
  s = await st(); ok('treino interrompido não marca a etapa', s.q1 === false);
  // treino até o fim marca
  await p.evaluate(c => { startTrainCat(c); quiz.ids.forEach((_, j) => quiz.ans[j] = quiz.order[j].indexOf(j === 0 ? 1 : 0)); finish(); }, cat); await p.waitForTimeout(150);
  s = await st(); ok('treino concluído marca a etapa', s.q1 === true);
  ok('caderno ainda pendente (erro sem motivo)', s.cad === false);
  await p.evaluate(() => { const k = todayK(); [].concat(...S.fin[k].map(f => f.w)).forEach(qi => S.notes[qi] = { r: 'conceito', t: '', d: k, s: 0, n: k }); });
  s = await st(); ok('caderno marca com todos os erros anotados', s.cad === true);
  // leitura: abrir não marca, tocar em Terminei marca
  await p.evaluate(c => openTopic(c), cat); await p.waitForTimeout(200);
  s = await st(); ok('abrir o resumo não marca a teoria', s.teo === false);
  await p.locator('#rdBtn').click(); await p.waitForTimeout(150);
  s = await st(); ok('Terminei a leitura marca a teoria', s.teo === true);
  // fechamento: abrir o Progresso depois de estudar
  await p.evaluate(() => go('stats')); await p.waitForTimeout(200);
  s = await st(); ok('abrir o Progresso marca o fechamento', s.prog === true);
  // no cronograma, etapas automáticas não podem ser marcadas à mão nem tocando no texto
  await p.evaluate(() => go('crono')); await p.waitForTimeout(200);
  const d = await p.evaluate(() => { const r = [...document.querySelectorAll('.agday.today .tl input')]; return { n: r.length, dis: r.filter(x => x.disabled).length, lbl: document.querySelectorAll('.agday.today label.tltitle').length }; });
  ok('caixas automáticas travadas e texto sem marcar', d.dis === d.n && d.lbl === 0, JSON.stringify(d));
  ok('versão 27', await p.evaluate(() => APP_V === 27));
  ok('sem rolagem lateral', await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  ok('sem erros JS', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} falha(s)` : '\nTudo certo'); process.exit(fails ? 1 : 0);
})();
