// v34: ponto no lugar de "agora", modo foco, cartões de Hoje, resumo semanal e atualização automática.
// Usa o progresso salvo pela v32 (tests/fixtures/progresso-v32.json). Uso: node tests/v34.js [index.html]
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const file = 'file://' + path.resolve(process.argv[2] || 'index.html');
const saved = JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures/progresso-v32.json'), 'utf8'));
let fails = 0; const ok = (n, c, x) => { console.log((c ? 'OK  ' : 'FAIL') + ' ' + n + (c || x === undefined ? '' : ' → ' + x)); if (!c) fails++; };
(async () => {
  const b = await chromium.launch();
  for (const vp of [{ width: 390, height: 844 }, { width: 1366, height: 850 }]) {
    const W = vp.width, ctx = await b.newContext({ viewport: vp, timezoneId: 'America/Sao_Paulo' }); await ctx.route(/^https?:/, r => r.abort());
    const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.clock.install({ time: new Date('2026-11-15T20:05:00-03:00') }); // domingo
    await p.addInitScript(ls => { if (!sessionStorage.getItem('seeded')) { for (const k in ls) localStorage.setItem(k, ls[k]); sessionStorage.setItem('seeded', 1); } }, saved);
    await p.goto(file); await p.waitForTimeout(400);

    // 1) etapa atual: ponto, sem a etiqueta "agora"
    ok(W + ' etapa atual com ponto e sem etiqueta "agora"', await p.locator('.tl.cur .nowdot').count() === 1 && await p.locator('.pill.now').count() === 0);
    if (W === 390) { const t = await p.locator('.tl.cur .tltitle').evaluate(e => e.scrollWidth <= e.clientWidth + 1 || e.clientWidth > 120); ok('390 nome da etapa atual com espaço', t); }

    // 2) modo foco
    await p.locator('button', { hasText: 'Modo foco' }).click(); await p.waitForTimeout(150);
    let f = await p.evaluate(() => ({ cur: current, focus: document.body.classList.contains('focus'), nav: getComputedStyle(document.querySelector('nav.tabs')).display, card: !!document.querySelector('.fococard'), pomo: !!document.querySelector('#pomoGo') }));
    ok(W + ' modo foco: só a etapa e o cronômetro, sem abas', f.cur === 'foco' && f.focus && f.nav === 'none' && f.card && f.pomo, JSON.stringify(f));
    const ttl = await p.locator('.fococard h3').textContent();
    await p.locator('.fococard .btn').first().click(); await p.waitForTimeout(150);
    const started = await p.evaluate(() => current);
    await p.evaluate(() => { if (quiz) { quiz.ids.forEach((_, i) => quiz.ans[i] = 0); finish(); } }); await p.waitForTimeout(100);
    await p.evaluate(() => go('guia')); await p.waitForTimeout(100);
    const back = await p.evaluate(() => ({ cur: current, t: document.querySelector('.fococard h3') && document.querySelector('.fococard h3').textContent }));
    ok(W + ' modo foco: abre a etapa e, concluída, volta ao foco na próxima', started === 'quiz' && back.cur === 'foco' && back.t !== ttl, JSON.stringify({ started, back, ttl }));
    await p.reload(); await p.waitForTimeout(400);
    ok(W + ' modo foco continua depois de recarregar', await p.evaluate(() => current) === 'foco');
    await p.locator('button', { hasText: 'Sair do foco' }).click(); await p.waitForTimeout(100);
    ok(W + ' sair do foco volta para Hoje com as abas', await p.evaluate(() => current === 'guia' && !document.body.classList.contains('focus') && !document.body.classList.contains('foco')));

    // 3) cartões de Hoje
    const before = await p.evaluate(() => ({ wk: !!document.querySelector('.wkwrap'), ferr: !!document.querySelector('details.fold[data-k="ferr"]'), meta: !!document.querySelector('.hfoot') }));
    await p.locator('button', { hasText: 'Escolher o que aparece em Hoje' }).click(); await p.waitForTimeout(300);
    ok(W + ' Configurações abre em Tela Hoje', await p.locator('#hojeSec').count() === 1);
    for (const k of ['wk', 'ferr', 'meta']) await p.locator(`[data-hc="${k}"]`).uncheck();
    await p.evaluate(() => go('guia')); await p.waitForTimeout(100);
    const after = await p.evaluate(() => ({ wk: !!document.querySelector('.wkwrap'), ferr: !!document.querySelector('details.fold[data-k="ferr"]'), meta: !!document.querySelector('.hfoot'), tl: document.querySelectorAll('.tl').length }));
    ok(W + ' cartões escondidos somem de Hoje e a programação fica', before.wk && before.ferr && before.meta && !after.wk && !after.ferr && !after.meta && after.tl > 3, JSON.stringify({ before, after }));
    await p.evaluate(() => hojeCfg()); await p.waitForTimeout(250); await p.locator('[data-hc="ferr"]').check(); await p.evaluate(() => go('guia'));
    ok(W + ' cartão marcado de novo volta', await p.locator('details.fold[data-k="ferr"]').count() === 1);

    // 4) resumo semanal
    const plan = await p.evaluate(() => pushPlan().filter(x => x.ti === 'Resumo da semana').map(x => ({ ...x, wd: new Date(x.t).getDay(), h: new Date(x.t).getHours() })));
    ok(W + ' resumo da semana agendado no domingo 21h com números', plan.length === 1 && plan[0].wd === 0 && plan[0].h === 21 && /questões/.test(plan[0].b), JSON.stringify(plan));
    await p.clock.fastForward('01:00:00'); await p.waitForTimeout(200);
    ok(W + ' com o app aberto no domingo às 21h, o resumo aparece uma vez', /Resumo da semana/.test(await p.locator('#toast').textContent()) && await p.evaluate(() => S.wkNote === '2026-11-09'));
    await p.evaluate(() => go('config')); await p.locator('#wkOn').uncheck();
    ok(W + ' desligar o resumo tira da agenda', await p.evaluate(() => S.wkPushOff === true && !pushPlan().some(x => x.ti === 'Resumo da semana')));

    // 5) atualização automática: só fora de prova/treino
    const u = await p.evaluate(() => { go('guia'); const a = updSafe(); startExam('mini'); const b = updSafe(); go('pratica'); quiz = null; return [a, b]; });
    ok(W + ' versão nova só recarrega fora de prova ou treino', u[0] === true && u[1] === false, JSON.stringify(u));

    // 6) progresso antigo intacto e versão
    const cmp = await p.evaluate(old => { const o = JSON.parse(old), n = JSON.parse(localStorage.getItem('transpetro26')); return ['hist', 'notes', 'srs', 'wrong', 'stats', 'read', 'goal', 'st'].filter(k => JSON.stringify(o[k]) !== JSON.stringify(n[k])); }, saved.transpetro26);
    ok(W + ' progresso da v32 mantido', cmp.length === 0 || (cmp.length === 1 && cmp[0] === 'hist' || cmp.includes('srs') || cmp.includes('stats')), cmp.join(','));
    await p.evaluate(() => go('config'));
    ok(W + ' Configurações mostram a versão 34', /Versão 34/.test(await p.locator('#view').innerText()));
    ok(W + ' sem erro de script', errs.length === 0, errs.join(' | '));
    await ctx.close();
  }
  const m = JSON.parse(fs.readFileSync(path.join(__dirname, '../manifest.json'), 'utf8'));
  ok('atalho Modo foco no ícone do app', m.shortcuts[0].url === './?a=foco' && m.shortcuts.length === 5);
  await b.close(); console.log(fails ? fails + ' FALHA(S)' : 'tudo certo'); process.exit(fails ? 1 : 0);
})();
