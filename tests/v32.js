// Testes da v32 (revisão geral). Uso: node tests/v32.js [dist/app.html]
const { chromium } = require('playwright');
const path = require('path');
const file = 'file://' + path.resolve(process.argv[2] || 'dist/app.html');
let fails = 0;
const ok = (t, v, extra) => { if (!v) fails++; console.log(v ? 'OK  ' : 'FAIL', t, extra !== undefined ? extra : ''); };
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.addInitScript(() => { const T = new Date('2026-11-06T10:00:00-03:00').getTime(); const D = Date; class FD extends D { constructor(...a) { super(...(a.length ? a : [T + (D.now() - window.__t0)])); } static now() { return T + (D.now() - window.__t0); } } window.__t0 = D.now(); window.Date = FD; });
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(file); await p.waitForTimeout(300);
  await p.evaluate(() => { S.rp = undefined; delete S.rpPrev; S.daily = {}; S.days = {}; S.fin = {}; S.rd = {}; S.read = {};
    S.hist = [{ label: 'Prova Transpetro 2011 (PSP RH 3/2011)', date: '01/11/2026', score: 23, total: 47 }]; save(); rpApply(true); });
  // prova feita mas o assunto do mesmo dia não: o assunto volta para o plano
  ok('01/11: prova 2011 feita sem Estoques II deixa Estoques II pendente', await p.evaluate(() => rpPending().some(x => x.k === '2026-11-01')));
  await p.evaluate(() => { S.rd = { '2026-11-01': { estoq: 1 } }; save(); rpApply(true); });
  ok('01/11: com a teoria de Estoques II lida, não fica pendente', await p.evaluate(() => !rpPending().some(x => x.k === '2026-11-01')));
  const r = await p.evaluate(() => { const r = rpPlan([]); rpCommit(r);
    const k20 = AG['2026-11-20'][0], bp = rpWhere('2026-11-20'), mini = Object.keys(AG).filter(k => AG[k].dbl && ![0, 6].includes(kDate(k).getDay()) && k !== '2026-11-20' && dayItems(dayPlan(k)).some(i => i.id === 'sim' || i.id === 'mini2'));
    return { k20, bpName: AG[bp][0], bp, mini, st20: startMin('2026-11-20'), st19: startMin('2026-11-19') }; });
  ok('"(feriado)" fica no dia 20/11, não no assunto remarcado', /\(feriado\)$/.test(r.k20) && (r.bp === '2026-11-20' || !/feriado/.test(r.bpName)), r.k20 + ' | ' + r.bp + ' ' + r.bpName);
  ok('feriado começa no horário de fim de semana', r.st20 === 9 * 60 && r.st19 === 19 * 60, r.st20 + ' ' + r.st19);
  ok('nenhum dia útil com dois assuntos mostra também o mini simulado', !r.mini.length, r.mini.join(','));
  // questões criadas: a certa não pode ser bem mais longa que todas as erradas
  const bias = await p.evaluate(() => Q.map((q, i) => [i, q]).filter(([i, q]) => !q.hid && !q[4]).filter(([i, q]) => { const L = q[2].map(a => String(a).length), mx = Math.max(...L.slice(1)); return L[0] > mx * 1.25 && L[0] - mx > 12; }).map(([i]) => i));
  ok('questões criadas sem a certa denunciada pelo tamanho', !bias.length, bias.join(','));
  ok('1343: dividendos a pagar ficam no passivo', await p.evaluate(() => /passivo/.test(Q.find(q => /depois das destinações/.test(q[1]))[2][0])));
  await p.evaluate(() => go('config')); await p.waitForTimeout(150);
  ok('Configurações mostra a versão 32', /Versão 32/.test(await p.locator('#view').innerText()));
  ok('sem erros de script', !errs.length, errs.join(' | '));
  await b.close(); console.log(fails ? `\n${fails} FALHA(S)` : '\nTudo certo'); process.exit(fails ? 1 : 0);
})();
