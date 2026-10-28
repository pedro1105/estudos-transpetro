// Testes de funcionamento da v13. Uso: node tests/func.js [dist/app.html]
// A nuvem (Supabase) é simulada em memória, com a mesma regra das funções tp_get/tp_put.
const { chromium } = require('playwright');
const path = require('path');
const file = 'file://' + path.resolve(process.argv[2] || 'dist/app.html');
let fails = 0;
const ok = (t, v, extra) => { if (!v) fails++; console.log(v ? 'OK  ' : 'FAIL', t, extra !== undefined ? extra : ''); };
const cloud = {};
async function route(ctx) {
  await ctx.route('https://xpfcmehgdfruhnveslmj.supabase.co/**', async r => {
    const fn = r.request().url().split('/').pop(), a = JSON.parse(r.request().postData() || '{}');
    let out = null;
    if (fn === 'tp_get') { const x = cloud[a.p_code]; out = x ? { s: x.s, upd: x.upd } : null; }
    if (fn === 'tp_ver') { const x = cloud[a.p_code]; out = x ? x.upd : null; }
    if (fn === 'tp_save') { const x = cloud[a.p_code]; if (x && x.upd !== a.p_base) out = { ok: false, upd: x.upd }; else { cloud[a.p_code] = { s: a.p_s, upd: a.p_upd }; out = { ok: true, upd: a.p_upd }; } }
    await r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(out) });
  });
}
async function device(b, vp) {
  const ctx = await b.newContext({ viewport: vp }); await route(ctx);
  const p = await ctx.newPage(); p.errs = []; p.on('pageerror', e => p.errs.push(e.message));
  await p.goto(file); await p.waitForTimeout(400); return p;
}
const answerTrain = async (p, n) => { for (let i = 0; i < n; i++) { await p.locator('#view .opt').first().click(); if (i < n - 1) await p.evaluate(() => nav(1)); } };
(async () => {
  const b = await chromium.launch();
  const A = await device(b, { width: 390, height: 844 });

  // IDs fixos
  ok('QID único por questão', await A.evaluate(() => new Set(QID).size === Q.length && QID.length === Q.length), await A.evaluate(() => Q.length));
  ok('S.qv gravado', await A.evaluate(() => JSON.parse(localStorage.getItem('transpetro26')).qv.length === Q.length));
  // remapeamento: simula banco antigo com duas questões trocadas de posição
  ok('remap troca posições', await A.evaluate(() => {
    const st = { qv: QID.slice(), srs: { 10: { b: 1, d: '2026-11-01' } }, seen: { 10: 1, 11: '2026-10-20' }, notes: { 11: { r: 'nao' } }, wrong: [10] };
    [st.qv[10], st.qv[11]] = [st.qv[11], st.qv[10]];
    remapState(st);
    return st.srs[11] && st.seen[11] === 1 && st.seen[10] === '2026-10-20' && st.notes[10] && st.wrong[0] === 11;
  }));

  // seleção sem repetir
  ok('simulado puxa inéditas', await A.evaluate(() => {
    QI().filter(i => CATS[Q[i].c].b === 'log').slice(0, 60).forEach(i => S.seen[i] = '2026-10-20');
    const ids = pickBlock('log', 15); return ids.every(i => !S.seen[i]) && new Set(ids.map(i => Q[i].c)).size >= 5;
  }));
  ok('simulado completo 60 sem repetidas', await A.evaluate(() => { startExam('full'); const r = quiz.ids.length === 60 && new Set(quiz.ids).size === 60; quiz = null; go('pratica'); return r; }));
  await A.evaluate(() => { S.seen = {}; save(); });

  // treino: responde, reporta erro, letra
  await A.evaluate(() => startTrainCat('estoq'));
  await answerTrain(A, 3);
  ok('botão reportar no treino', await A.locator('#view .repbtn').count() === 1);
  await A.locator('#view .repbtn').click();
  ok('janela de reporte abre', await A.locator('dialog.tpdlg[open]').count() === 1);
  await A.locator('dialog.tpdlg input[value="exp"]').check();
  await A.fill('dialog.tpdlg textarea', 'explicação confusa no cálculo');
  await A.locator('dialog.tpdlg button[value="ok"]').click(); await A.waitForTimeout(200);
  ok('reporte gravado', await A.evaluate(() => { const r = Object.values(S.rep || {})[0]; return r && r.k === 'exp' && /confusa/.test(r.t); }));
  ok('botão vira "Reportada"', /Reportada/.test(await A.locator('#view .repbtn').textContent()));
  await A.locator('#view .fzq').click();
  ok('letra aumenta', await A.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--fz').trim() === '1.12'));
  await A.evaluate(() => finish());
  ok('resultado com reportar', await A.locator('#view .repbtn').count() >= 3);
  ok('qlog registrado', await A.evaluate(() => { const d = S.qlog[todayK()]; return d && d.estoq && d.estoq[1] === 3; }));

  // Progresso: resumo semanal e lista de reportadas
  await A.evaluate(() => go('stats'));
  ok('resumo semanal', await A.locator('#view .wkpanel').count() === 1, await A.locator('.wkpanel .wkstats .v').allTextContents());
  ok('3 focos', await A.locator('#view .wkpanel button:has-text("Treinar")').count() === 3);
  ok('lista de reportadas', await A.locator('#repSec .repitem').count() === 1);
  ok('Hoje abre sem erro', await A.evaluate(() => { go('guia'); return !!document.querySelector('#view h2,#view h3'); }));

  // sincronização: A ativa, B conecta pelo link, progresso chega nos dois sentidos
  await A.evaluate(() => go('config'));
  await A.locator('#clNew').click(); await A.waitForTimeout(600);
  const code = await A.evaluate(() => CL.code);
  ok('código criado e enviado', !!cloud[code] && JSON.parse(cloud[code].s).rep !== undefined, code);
  ok('status sincronizado', await A.evaluate(() => CL.st === 'ok'));
  const B = await device(b, { width: 1366, height: 850 });
  await B.evaluate(() => { startTrainCat('compras'); });
  await answerTrain(B, 2); await B.evaluate(() => finish());
  await B.goto(file + '#sync=' + code); await B.waitForTimeout(400); await B.reload(); await B.waitForTimeout(1200);
  // B tem progresso próprio e a nuvem também: junta sozinho, sem perguntar
  await B.waitForTimeout(600);
  ok('B não pergunta nada', await B.locator('dialog.tpdlg[open]').count() === 0);
  ok('B juntou os dois', await B.evaluate(() => CL.code && S.qlog && Object.values(S.qlog).some(d => d.estoq) && Object.values(S.qlog).some(d => d.compras) && Object.keys(S.rep || {}).length === 1));
  ok('hash removido da barra', await B.evaluate(() => !location.hash));
  await B.evaluate(() => { S.goal = 40; save(); }); await B.waitForTimeout(3600);
  await A.evaluate(() => clPull()); await A.waitForTimeout(400);
  ok('A recebe mudança de B', await A.evaluate(() => S.goal === 40 && Object.values(S.qlog).some(d => d.compras)));
  // edição nos dois lados ao mesmo tempo
  // B recebe mudança de A sozinho (verificação a cada 15 s)
  await A.evaluate(() => { S.goal = 60; save(); }); await A.waitForTimeout(2600); await B.waitForTimeout(16000);
  ok('B recebe sozinho em até 15 s', await B.evaluate(() => S.goal === 60));
  await A.evaluate(() => { S.days['2026-10-01'] = 5; save(); });
  await B.evaluate(() => { S.days['2026-10-02'] = 7; save(); });
  await A.waitForTimeout(3600); await B.waitForTimeout(500); await B.evaluate(() => clPull()); await B.waitForTimeout(800); await A.evaluate(() => clPull()); await A.waitForTimeout(500);
  ok('edições simultâneas juntas', await A.evaluate(() => S.days['2026-10-01'] === 5 && S.days['2026-10-02'] === 7) && await B.evaluate(() => S.days['2026-10-01'] === 5 && S.days['2026-10-02'] === 7));
  ok('contadores sem duplicar', await A.evaluate(() => S.stats.estoq.t) === 3, await A.evaluate(() => JSON.stringify(S.stats)));

  // backup antigo (sem gm/fold) importado não quebra o app
  ok('importar backup antigo', await A.evaluate(() => { const o = { hist: [], stats: {}, wrong: [], plan: {}, srs: {}, seen: {} }; S = Object.assign({ hist: [], stats: {}, wrong: [], plan: {} }, o); initState(); go('jogos'); go('stats'); go('guia'); return !!S.gm && !!S.fold; }));

  // todas as telas abrem
  for (const v of ['guia', 'cont', 'pratica', 'jogos', 'stats', 'crono', 'links', 'vesp', 'peg', 'caderno', 'config']) {
    await A.evaluate(v => go(v), v);
    ok('tela ' + v + ' sem rolagem lateral', await A.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
  }
  ok('sem erros JS (A)', A.errs.length === 0, A.errs.join(' | '));
  ok('sem erros JS (B)', B.errs.length === 0, B.errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} FALHA(S)` : '\nTudo certo');
  process.exit(fails ? 1 : 0);
})();
