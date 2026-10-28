// Captura o HTML de cada tela com data e sorteio fixos, para comparar antes/depois de refatorar.
// Uso: node tests/snapshot.js dist/app.html saida.json
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const file = path.resolve(process.argv[2] || 'dist/app.html'), out = process.argv[3] || 'snap.json';
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 390, height: 844 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.clock.install({ time: new Date('2026-10-28T10:00:00-03:00') });
  await p.addInitScript(() => { let s = 42; Math.random = () => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; }; });
  await p.goto('file://' + file); await p.waitForTimeout(300);
  const views = ['guia', 'cont', 'pratica', 'jogos', 'stats', 'crono', 'links', 'vesp', 'peg', 'caderno'];
  const snap = {};
  for (const v of views) { await p.evaluate(v => go(v), v); snap[v] = await p.evaluate(() => document.querySelector('#view').innerHTML.replace(/\s+/g, ' ')); }
  await p.evaluate(() => openTopic('estoq')); snap.topic = await p.evaluate(() => document.querySelector('#view').innerHTML.replace(/\s+/g, ' '));
  snap.errs = errs;
  fs.writeFileSync(out, JSON.stringify(snap, null, 1));
  console.log('ok', Object.keys(snap).length, 'erros:', errs);
  await b.close();
})();
