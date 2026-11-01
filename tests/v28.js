// Testes da v28: checklist de dias atrasados. Uso: node tests/v28.js [dist/app.html]
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
  const D = '2026-10-28';
  const st = k => p.evaluate(k => Object.fromEntries(dayItems(dayPlan(k)).filter(i => !i.auto).map(i => [i.id, itemDone(k, i)])), k);
  await p.evaluate(() => { S.fin = {}; S.rd = {}; S.vis = {}; S.daily = {}; S.wrong = []; S.srs = {}; });
  // cartão atrasado: treino iniciado pelo botão dele conta para o dia
  await p.evaluate(D => { cronoOpen = D; go('crono'); }, D); await p.waitForTimeout(200);
  await p.locator(`#ag-${D} .tl button`, { hasText: 'Treinar' }).first().click(); await p.waitForTimeout(200);
  await p.evaluate(() => { quiz.ids.forEach((_, j) => quiz.ans[j] = quiz.order[j].indexOf(0)); finish(); }); await p.waitForTimeout(150);
  let s = await st(D); ok('treino feito pelo cartão de 28/10 marca 28/10', s.q1 === true, JSON.stringify(s));
  // revisar sem nada na fila marca o aquecimento do dia atrasado
  await p.evaluate(D => { cronoOpen = D; go('crono'); }, D); await p.waitForTimeout(200);
  await p.locator(`#ag-${D} .tl button`, { hasText: 'Revisar' }).first().click(); await p.waitForTimeout(200);
  s = await st(D); ok('Revisar sem erradas marca o aquecimento de 28/10', s.aq === true);
  // depois de voltar ao menu, treino feito pelo Praticar não conta para o dia atrasado
  await p.evaluate(() => { go('pratica'); startTrainCat('rh'); quiz.ids.forEach((_, j) => quiz.ans[j] = quiz.order[j].indexOf(0)); finish(); });
  const n = await p.evaluate(D => (S.fin[D] || []).filter(f => f.l === 'Treino: Recursos Humanos').length, D);
  ok('treino pelo Praticar não vai para o dia atrasado', n === 0);
  // dia atrasado aceita marcar à mão; hoje não
  await p.evaluate(D => { cronoOpen = D; go('crono'); }, D); await p.waitForTimeout(200);
  const d = await p.evaluate(D => ({ past: [...document.querySelectorAll(`#ag-${D} .tl input`)].every(x => !x.disabled), today: [...document.querySelectorAll('.agday.today .tl input')].every(x => x.disabled) }), D);
  ok('caixas de dia anterior podem ser marcadas à mão', d.past);
  ok('caixas de hoje continuam automáticas', d.today);
  await p.locator(`#ag-${D} .tl input`).last().check(); await p.waitForTimeout(150);
  s = await st(D); ok('marcar à mão funciona no dia anterior', s.prog === true, JSON.stringify(s));
  ok('sem erros JS', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} falha(s)` : '\nTudo certo'); process.exit(fails ? 1 : 0);
})();
