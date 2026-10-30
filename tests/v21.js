// Testes da v21: recuperar etapa pendente de ontem, aviso de versão nova, dados das correções embutidos. Uso: node tests/v21.js [dist/app.html]
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
  const at = async (day, fn, arg) => { const q = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage(); q.on('pageerror', e => errs.push(e.message));
    await q.clock.setFixedTime(new Date(day + 'T12:00:00')); await q.goto(file); await q.waitForTimeout(300); const v = await q.evaluate(fn, arg); await q.close(); return v; };
  const rec = (k, prevDone) => { if (prevDone) S.daily[prevDone] = { teo: 1 }; const i = dayItems(dayPlan(k)).find(x => x.id === 'rec'); return i ? i.t : null; };
  const r = {
    a: await at('2026-11-04', ([k]) => { const f = eval('(' + k + ')'); return f('2026-11-04'); }, [rec.toString()]),
    b2: await at('2026-11-04', ([k]) => { const f = eval('(' + k + ')'); return f('2026-11-04', '2026-11-03'); }, [rec.toString()]),
    past: await at('2026-11-03', ([k]) => { const f = eval('(' + k + ')'); return f('2026-11-02'); }, [rec.toString()]),
    afterSim: await at('2026-11-09', ([k]) => { const f = eval('(' + k + ')'); return f('2026-11-09'); }, [rec.toString()]),
    ...(await p.evaluate(() => { swUpdated(); const t = document.querySelector('#toast');
      return { toast: t && t.classList.contains('on') && [...t.querySelectorAll('button')].some(x => x.textContent === 'Atualizar'),
        src: AG['2026-11-07'][6], srcN: srcCount('Petrobras 2018 TAC'), fix: typeof FIX === 'undefined' && typeof EXPL === 'undefined', total: Q.length }; }))
  };
  ok('etapa "Recuperar ontem" aparece quando o resumo de ontem ficou pendente', /Recuperar ontem.*Lei 13.303/.test(r.a || ''), r.a);
  ok('some quando o resumo de ontem foi feito', !r.b2);
  ok('não aparece em dias que não são hoje', !r.past);
  ok('não aparece depois de dia de simulado', !r.afterSim);
  ok('aviso de versão nova com botão Atualizar', r.toast);
  ok('07/11 usa prova do mesmo cargo', r.src === 'src:Petrobras 2018 TAC' && r.srcN > 30, r.srcN);
  ok('correções embutidas nos dados (sem dicionários em tempo de execução)', r.fix);
  ok('banco com 1.280+ questões', r.total >= 1280, r.total);
  await p.evaluate(() => go('audio')); await p.waitForTimeout(200);
  ok('tela Áudio sem controle de volume', await p.evaluate(() => !document.querySelector('#view input[type=range]')));
  ok('sem erros de página', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} FALHA(S)` : '\nTudo certo'); process.exit(fails ? 1 : 0);
})();
