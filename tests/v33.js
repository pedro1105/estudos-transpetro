// v33: telas mais limpas. Confere, no celular (390 px) e no computador (1366 px):
// 1) o progresso salvo pela v32 (tests/fixtures/progresso-v32.json) abre igual, sem perder nada;
// 2) cada aba cabe no limite de telas de rolagem, sem erro de script e sem rolagem lateral;
// 3) as linhas recolhidas abrem ao tocar e o que saiu de vista continua no app.
// Uso: node tests/v33.js [index.html]
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const file = 'file://' + path.resolve(process.argv[2] || 'index.html');
const saved = JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures/progresso-v32.json'), 'utf8'));
let fails = 0; const ok = (n, c, x) => { console.log((c ? 'OK  ' : 'FAIL') + ' ' + n + (c || x === undefined ? '' : ' → ' + x)); if (!c) fails++; };
// limite de telas de rolagem por aba com este progresso (antes da v33: Hoje 4,3 · Cronograma 10 · Estudar 5,9 · Praticar 6,6 · Jogos 4,1 · Progresso 8,9)
const MAX = { 390: { guia: 2.5, crono: 4.5, cont: 2.5, pratica: 2, jogos: 1.5, stats: 3, config: 3 }, 1366: { guia: 2, crono: 4, cont: 2.5, pratica: 2, jogos: 1.5, stats: 2.5, config: 2.5 } };
(async () => {
  const b = await chromium.launch();
  for (const vp of [{ width: 390, height: 844 }, { width: 1366, height: 850 }]) {
    const W = vp.width, ctx = await b.newContext({ viewport: vp }); await ctx.route(/^https?:/, r => r.abort());
    const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.clock.install({ time: new Date('2026-11-12T19:00:00-03:00') });
    await p.addInitScript(ls => { if (!sessionStorage.getItem('seeded')) { for (const k in ls) localStorage.setItem(k, ls[k]); sessionStorage.setItem('seeded', 1); } }, saved);
    await p.goto(file); await p.waitForTimeout(400);

    // 1) progresso
    // upd = hora da última gravação; devs/fin/vis/rd e as marcas v24rep/v29rep/v28bf são atualizadas a cada abertura também na v32
    const cmp = await p.evaluate(old => {
      const o = JSON.parse(old), n = JSON.parse(localStorage.getItem('transpetro26')), lost = [];
      for (const k in o) if (JSON.stringify(o[k]) !== JSON.stringify(n[k]) && !['upd', 'devs', 'fin', 'vis', 'rd', 'v24rep', 'v29rep', 'v28bf'].includes(k)) lost.push(k);
      return { lost, hist: S.hist.length, ohist: o.hist.length, read: Object.keys(S.read || {}).length, notes: Object.keys(S.notes).length, goal: S.goal, st: S.st };
    }, saved.transpetro26);
    ok(W + ' progresso da v32 mantido (mesma chave e mesmos dados)', cmp.lost.length === 0, cmp.lost.join(','));
    ok(W + ' histórico, leituras, notas e rotina aparecem', cmp.hist === cmp.ohist && cmp.read === 2 && cmp.notes === 1 && cmp.goal === 40 && cmp.st.h === '20:00', JSON.stringify(cmp));
    await p.evaluate(() => go('stats'));
    ok(W + ' Progresso mostra o histórico salvo', /registros/.test(await p.locator('#view').innerText()));
    await p.evaluate(() => go('cont'));
    ok(W + ' Estudar mostra 2 lidos', /2 de 20 lidos/.test(await p.locator('#view').innerText()));

    // 2) telas de rolagem por aba
    for (const v of Object.keys(MAX[W])) {
      await p.evaluate(v => go(v), v); await p.waitForTimeout(60);
      const r = await p.evaluate(() => ({ s: +(document.documentElement.scrollHeight / innerHeight).toFixed(1), hx: document.documentElement.scrollWidth > innerWidth + 1 }));
      ok(`${W} ${v}: ${r.s} telas (máx. ${MAX[W][v]})`, r.s <= MAX[W][v] && !r.hx, r.hx ? 'rolagem lateral' : r.s);
    }
    // 3) recolhidos abrem e o conteúdo continua lá
    await p.evaluate(() => go('guia'));
    const tl = p.locator('#view .tl .tlx').first(); await tl.click();
    ok(W + ' etapa de Hoje abre ao tocar', await p.locator('#view .tl.open .tlmore').isVisible());
    ok(W + ' Hoje tem aba Cronograma', await p.locator('#view .segtabs button:has-text("Cronograma")').count() === 1);
    ok(W + ' aviso de atraso com lista recolhida', await p.locator('#view .rpban details.rplist li').count() > 0);
    await p.evaluate(() => go('pratica'));
    await p.locator('#view .mrow[data-mk="full"] .mrt').click();
    ok(W + ' Praticar: descrição abre ao tocar', await p.locator('#view .mrow[data-mk="full"] .mrx').isVisible());
    ok(W + ' Praticar: provas anteriores e outras provas continuam', await p.locator('#view button[onclick^="startPast"]').count() === 3 && await p.locator('#view button[onclick^="startReal(\'20"]').count() === 3 && await p.locator('#view button[onclick^="startSrc"]').count() > 20);
    await p.evaluate(() => go('jogos'));
    ok(W + ' Jogos: os 9 jogos continuam', await p.locator('#view .mrow').count() === 9);
    await p.evaluate(() => go('cont'));
    ok(W + ' Estudar: Revisão da escola e Como a prova funciona continuam', await p.locator('#view .topic[onclick^="openBase"]').count() === 23 && /Como a prova funciona/.test(await p.locator('#view').textContent()));
    await p.evaluate(() => go('config'));
    ok(W + ' Configurações só com ajustes', !/Como a prova funciona/.test(await p.locator('#view').textContent()));
    ok(W + ' sem erros de script', errs.length === 0, errs.join(' | '));
    await ctx.close();
  }
  await b.close();
  console.log(fails ? fails + ' FALHA(S)' : 'Tudo certo'); process.exit(fails ? 1 : 0);
})();
