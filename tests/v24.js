// Testes da v24: aviso acima da barra de abas, provas em grade, revisão do banco. Uso: node tests/v24.js [dist/app.html]
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
    const letra = vis.filter(q => /(^|\. |; )(Em|Na) [A-E][,: ]/.test(q[3] || '')).length;
    return { n: Q.length, letra, procv: /fora dessa tabela/.test(Q[467][1]), v: APP_V, rep: S.v24rep };
  });
  ok('banco com 1.280+ questões', d.n >= 1280, d.n);
  ok('explicações não citam letras', d.letra === 0, d.letra);
  ok('PROCV com a tabela descrita', d.procv);
  ok('versão 24+', d.v >= 24);
  ok('avisos reportados limpos uma vez', d.rep === 1);
  await p.evaluate(() => go('pratica')); await p.waitForTimeout(200);
  const g = await p.evaluate(() => { const gs = [...document.querySelectorAll('#view .pgrid')]; const b = document.querySelector('#view .pgrid .pbtn'); return { n: gs.length, cols: gs[0] ? getComputedStyle(gs[0]).gridTemplateColumns.split(' ').length : 0, w: b ? b.getBoundingClientRect().width : 0 }; });
  ok('provas em grade de 2 colunas no celular', g.n >= 3 && g.cols === 2, JSON.stringify(g));
  const sw = await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth);
  ok('sem rolagem lateral', sw);
  await p.evaluate(() => toast('Tamanho da letra: 92%')); await p.waitForTimeout(100);
  const t = await p.evaluate(() => { const r = $('#toast').getBoundingClientRect(), n = document.querySelector('nav.tabs').getBoundingClientRect(); return { tb: r.bottom, nt: n.top, l: r.left, r: r.right }; });
  ok('aviso acima da barra de abas', t.tb <= t.nt, JSON.stringify(t));
  ok('aviso dentro da tela', t.l >= 0 && t.r <= 390);
  await p.waitForTimeout(4300);
  ok('aviso some sozinho', !(await p.evaluate(() => $('#toast').classList.contains('on'))));
  ok('sem erros JS', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} falha(s)` : '\nTudo certo'); process.exit(fails ? 1 : 0);
})();
