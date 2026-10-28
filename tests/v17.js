// Testes da v17: questões das provas do mesmo cargo (TAC). Uso: node tests/v17.js [dist/app.html]
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
    const tac = Q.map((q, i) => i).filter(i => /^(Petrobras 20(18|14|12)|BR Distribuidora 20(15|13)) TAC$/.test(Q[i][4] || ''));
    const bad = tac.filter(i => { const q = Q[i]; return !CATS[q.c] || q[2].length !== 5 || new Set(q[2]).size !== 5 || q[2].some(o => !o.trim()) || !q[3] || !q[1] || typeof q[5] !== 'number'; });
    return { n: tac.length, first: tac[0], last: tac[tac.length - 1], bad, srcs: SRC_ORD.filter(s => /^(Petrobras 20(18|14|12)|BR Distribuidora 20(15|13)) TAC$/.test(s)).map(s => s + ':' + srcCount(s)), ids: new Set(QID).size === QID.length };
  });
  ok('202 questões novas', r.n === 202, r.n);
  ok('ficam nas posições 857..1058 (progresso preservado)', r.first === 857 && r.last === 1058, r.first + '..' + r.last);
  ok('todas íntegras (5 alternativas distintas, assunto, explicação)', r.bad.length === 0, r.bad.join(','));
  ok('5 provas listadas', r.srcs.length === 5, r.srcs.join(' | '));
  ok('códigos únicos', r.ids);
  await p.evaluate(() => go('pratica')); await p.waitForTimeout(200);
  const txt = await p.locator('#view').textContent();
  ok('grupo do mesmo cargo em Praticar', /Mesmo cargo: Técnico\(a\) de Administração e Controle/.test(txt));
  ok('botões sem o sufixo TAC', /Petrobras 2018 · 43/.test(txt) && /BR Distribuidora 2015 · 31/.test(txt) && !/2018 TAC ·/.test(txt));
  ok('Petrobras outros cargos sem as TAC', /Petrobras, outros cargos/.test(txt));
  await p.locator('#view button:has-text("Petrobras 2018 · 43")').click(); await p.waitForTimeout(200);
  ok('treino da prova abre', await p.evaluate(() => current === 'quiz' && quiz.ids.length === 43), await p.evaluate(() => current + ' ' + quiz.ids.length));
  ok('sem erros de página', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} falha(s)` : '\nTudo certo'); process.exit(fails ? 1 : 0);
})();
