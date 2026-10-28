// Testes da v18: Petrobras Técnico de Suprimento 2018/2014/2012. Uso: node tests/v18.js [dist/app.html]
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
  const r = await p.evaluate(() => {
    const sup = Q.map((q, i) => i).filter(i => /^Petrobras 20\d\d Suprimento$/.test(Q[i][4] || ''));
    const bad = sup.filter(i => { const q = Q[i]; return !CATS[q.c] || q[2].length !== 5 || new Set(q[2]).size !== 5 || q[2].some(o => !o.trim()) || !q[3] || !q[1] || typeof q[5] !== 'number'; });
    return { n: sup.length, first: sup[0], last: sup[sup.length - 1], total: Q.length, bad, srcs: ['2018', '2014', '2012'].map(y => srcCount('Petrobras ' + y + ' Suprimento')), ids: new Set(QID).size === QID.length };
  });
  ok('85 questões novas', r.n === 85, r.n);
  ok('entram no fim do banco (1059..1143)', r.first === 1059 && r.last === 1143 && r.total >= 1144, r.first + '..' + r.last);
  ok('todas íntegras', r.bad.length === 0, r.bad.join(','));
  ok('contagem por prova 30/35/20', r.srcs.join('/') === '30/35/20', r.srcs.join('/'));
  ok('códigos únicos', r.ids);
  await p.evaluate(() => go('pratica')); await p.waitForTimeout(200);
  const txt = await p.locator('#view').textContent();
  ok('botões em Petrobras, outros cargos', /2018 Suprimento · 30/.test(txt) && /2014 Suprimento · 35/.test(txt) && /2012 Suprimento · 20/.test(txt));
  await p.locator('#view button:has-text("2014 Suprimento · 35")').click(); await p.waitForTimeout(200);
  ok('treino da prova abre', await p.evaluate(() => current === 'quiz' && quiz.ids.length === 35));
  ok('sem erros de página', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} falha(s)` : '\nTudo certo'); process.exit(fails ? 1 : 0);
})();
