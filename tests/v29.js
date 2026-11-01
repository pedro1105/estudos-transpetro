// Testes da v29: tela de correção, aviso acima da barra e regras do cronograma. Uso: node tests/v29.js [dist/app.html]
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
  const T = await p.evaluate(() => todayK());
  await p.evaluate(T => { S.fin = {}; S.rd = {}; S.vis = {}; S.daily = {}; S.notes = {}; S.fin[T] = [{ l: 'Prova Transpetro 2011 (PSP RH 3/2011)', full: true, n: 47, w: [515, 516, 517] }, { l: 'Treino: Gestão de Estoques', full: true, n: 10, w: [10] }]; save(); }, T);
  // correção do simulado lista só os erros da prova
  await p.evaluate(() => { tlFrom = ''; openCorr('sim'); }); await p.waitForTimeout(150);
  let n = await p.locator('.corritem').count(); ok('correção do simulado lista os 3 erros da prova', n === 3, n);
  ok('mostra a resposta certa e a explicação', await p.locator('.corritem').first().innerText().then(t => /Resposta certa/.test(t)));
  ok('etapa ainda não concluída', await p.evaluate(T => !corrDone(T, 'sim'), T));
  // um toque no motivo salva
  for (let i = 0; i < 3; i++) { await p.locator('.corritem .chipbtn[data-r="nao"]').nth(i).click(); await p.waitForTimeout(60); }
  ok('um toque no motivo salva no caderno', await p.evaluate(() => [515, 516, 517].every(q => S.notes[q] && S.notes[q].r === 'nao')));
  ok('contador mostra 3 de 3', /3 de 3/.test(await p.locator('.corrcount').innerText()));
  ok('correção do simulado marcada', await p.evaluate(T => corrDone(T, 'sim'), T));
  ok('caderno do dia ainda falta o erro do treino', await p.evaluate(T => !corrDone(T, 'dia'), T));
  await p.evaluate(() => openCorr('dia')); await p.waitForTimeout(100);
  ok('caderno do dia lista 4 erros', await p.locator('.corritem').count() === 4);
  // dia sem erro: marca sozinho
  ok('dia sem nenhum erro conta como feito', await p.evaluate(() => { const k = '2026-10-30'; S.fin[k] = [{ l: 'Treino: Matemática', full: true, n: 5, w: [] }]; return corrDone(k, 'dia'); }));
  ok('dia sem estudo não conta', await p.evaluate(() => !corrDone('2026-10-25', 'dia')));
  // etapas do cronograma usam a tela nova
  const acts = await p.evaluate(() => ({ cor: dayItems(dayPlan('2026-11-01')).find(i => i.id === 'cor').act, cad: dayItems(dayPlan('2026-11-02')).find(i => i.id === 'cad').act }));
  ok('Correção abre a tela de correção', acts.cor === "openCorr('sim')", acts.cor);
  ok('Caderno do dia abre a correção do dia', acts.cad === "openCorr('dia')", acts.cad);
  ok('29/10 é o dia da prova 2018', await p.evaluate(() => AG['2026-10-29'][6] === 'past:2018'));
  // desafio do dia em dia anterior conta pelo registro
  ok('desafio do dia de dia anterior conta pelo registro', await p.evaluate(() => { const k = '2026-10-30'; S.fin[k].push({ l: 'Desafio do dia', full: true, n: 5, w: [] }); const i = dayItems(dayPlan(k)).find(i => i.id === 'dch'); return itemDone(k, i); }));
  // nota do dia anterior se atualiza sem recarregar
  const d1 = await p.evaluate(() => dayScore('2026-10-30'));
  await p.evaluate(() => { S.daily['2026-10-30'] = { aq: true, teo: true }; save(); });
  const d2 = await p.evaluate(() => dayScore('2026-10-30'));
  ok('nota do dia anterior se atualiza na hora', d2 > d1, d1 + ' → ' + d2);
  // aviso acima da barra mesmo depois do modo foco
  await p.evaluate(() => { startTrainCat('rh'); toast('Versão nova do app pronta', '<button class="btn sm">Atualizar</button>'); go('guia'); }); await p.waitForTimeout(800);
  const pos = await p.evaluate(() => { const t = $('#toast').getBoundingClientRect(), n = document.querySelector('nav.tabs').getBoundingClientRect(); return { t: t.bottom, n: n.top }; });
  ok('aviso fica acima da barra de abas depois do treino', pos.t <= pos.n + 1, JSON.stringify(pos));
  ok('aviso tem botão de fechar', await p.locator('#toast .tclose').count() === 1);
  await p.locator('#toast .tclose').click(); ok('fechar some com o aviso', await p.evaluate(() => !$('#toast').classList.contains('on')));
  ok('sem erros de script', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? fails + ' falha(s)' : 'Tudo certo');
  process.exit(fails ? 1 : 0);
})();
