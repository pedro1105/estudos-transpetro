// Testes da v16: estudo em áudio e sons para concentrar. Uso: node tests/v16.js [dist/app.html]
const { chromium } = require('playwright');
const path = require('path');
const file = 'file://' + path.resolve(process.argv[2] || 'dist/app.html');
let fails = 0;
const ok = (t, v, extra) => { if (!v) fails++; console.log(v ? 'OK  ' : 'FAIL', t, extra !== undefined ? extra : ''); };
(async () => {
  const b = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  // voz simulada: cada fala termina em 20 ms e fica registrada
  await p.addInitScript(() => { window.__said = []; speechSynthesis.speak = u => { window.__said.push(u.text); setTimeout(() => u.onend && u.onend(), 20); }; speechSynthesis.cancel = () => {}; });
  await p.goto(file); await p.waitForTimeout(300);
  ok('botão de fone no cabeçalho', await p.locator('#audBtn').count() === 1);
  await p.locator('#audBtn').click();
  ok('tela Áudio abre', await p.evaluate(() => current === 'audio'));
  ok('aba Áudio em Estudar', await p.locator('#view .segtabs button[aria-selected="true"]').textContent() === 'Áudio');
  // cada modo monta itens
  const counts = await p.evaluate(() => { const o = {}; for (const [m] of AU_MODES) { S.au.mode = m; S.au.src = 'esp'; o[m] = auBuild().length; } return o; });
  ok('todos os modos têm conteúdo', Object.values(counts).every(n => n > 0), JSON.stringify(counts));
  ok('questões em áudio sem tabela/texto', await p.evaluate(() => { S.au.mode = 'q'; S.au.src = 'port'; return auBuild().every(it => !AU_NOAUDIO.test(Q[it.qi][1])); }));
  ok('assuntos de hoje vêm do cronograma', await p.evaluate(() => auDayCats().length >= 1 && auDayCats().every(c => CATS[c])));
  // tocar flashcards com pausa curta
  await p.evaluate(() => { S.au.mode = 'fc'; S.au.src = 'estoq'; S.au.pause = 5; go('audio'); });
  await p.evaluate(() => { auCfg().pause = 0.05; });
  await p.locator('#view button:has-text("Tocar")').first().click(); await p.waitForTimeout(300);
  ok('toca e mostra o cartão', await p.locator('.aunow').count() === 1 && await p.evaluate(() => AU.play));
  ok('falou algo', await p.evaluate(() => window.__said.length > 0), await p.evaluate(() => window.__said.slice(0, 2).join(' | ')));
  await p.locator('.aupp').click();
  ok('pausa', await p.evaluate(() => !AU.play));
  const i0 = await p.evaluate(() => AU.i); await p.locator('.auctl button[aria-label="Próximo"]').click();
  ok('próximo', await p.evaluate(i0 => AU.i === i0 + 1, i0));
  // questões: lê enunciado, alternativas, resposta
  await p.evaluate(() => { window.__said = []; S.au.mode = 'q'; S.au.src = 'estoq'; AU = null; auStart(); });
  await p.waitForFunction(() => window.__said.some(t => /^Resposta: letra/.test(t)), null, { timeout: 15000 }).catch(() => {});
  const said = await p.evaluate(() => window.__said.slice(0, 12));
  ok('questão: enunciado, letras e resposta', said.some(t => /^Questão\./.test(t)) && said.some(t => /Letra A:/.test(t)) && said.some(t => /^Resposta: letra [A-E]/.test(t)), said.slice(0, 4).join(' | '));
  // modo bolso
  await p.evaluate(() => go('audio')); await p.locator('button:has-text("Modo bolso")').click();
  ok('modo bolso cobre a tela', await p.locator('#pocket .pk1').isVisible());
  await p.locator('#pocket .pk1').click(); ok('bolso pausa/toca', await p.evaluate(() => typeof AU.play === 'boolean'));
  await p.locator('#pocket .pkx').click(); ok('sai do bolso', await p.locator('#pocket').count() === 0);
  await p.evaluate(() => auPause());
  // sons: cada um gera um WAV válido
  for (const k of ['brown', 'pink', 'white', 'rain', 'waves', 'pad', 'piano']) {
    const r = await p.evaluate(async k => { const t = performance.now(); const u = await sndUrl(k); const bl = await (await fetch(u)).blob(); const a = new Uint8Array(await bl.slice(0, 4).arrayBuffer()); const all = new Int16Array(await bl.slice(44).arrayBuffer()); let pk = 0, sum = 0; for (let i = 0; i < all.length; i += 7) { const v = Math.abs(all[i]); if (v > pk) pk = v; sum += v; } return { riff: String.fromCharCode(...a), mb: +(bl.size / 1e6).toFixed(1), ms: Math.round(performance.now() - t), pk, avg: Math.round(sum / (all.length / 7)) }; }, k);
    ok('som ' + k + ' gerado (sem estourar)', r.riff === 'RIFF' && r.pk < 32700 && r.avg > 300 && r.mb < 8, JSON.stringify(r));
  }
  await p.evaluate(() => go('audio')); await p.locator('.sndbtn[data-k="rain"]').click(); await p.waitForTimeout(800);
  ok('som toca', await p.evaluate(() => SND.k === 'rain' && !document.querySelector('#sndEl').paused));
  ok('voz abaixa o som', await p.evaluate(() => { const v = document.querySelector('#sndEl').volume; sndDuck(true); const d = document.querySelector('#sndEl').volume; sndDuck(false); return d < v; }));
  await p.evaluate(() => go('pratica'));
  ok('barrinha do som em outra tela', await p.locator('#sndBar').isVisible());
  await p.locator('#sndBar .sbx').click(); ok('parar pela barrinha', await p.evaluate(() => !SND.k && document.querySelector('#sndEl').paused) && await p.locator('#sndBar').count() === 0);
  ok('card de áudio em Jogos', await p.evaluate(() => { go('jogos'); return !!document.querySelector('#view h3') && /Estudo em áudio/.test(document.querySelector('#view').textContent); }));
  ok('atalho antigo afc abre Áudio', await p.evaluate(() => { go('afc'); return current === 'audio'; }));
  for (const w of [390, 1366]) { await p.setViewportSize({ width: w, height: 844 }); await p.evaluate(() => go('audio')); ok('áudio sem rolagem lateral ' + w, await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)); }
  ok('sem erros JS', errs.length === 0, errs.join(' | '));
  await b.close(); console.log(fails ? `\n${fails} FALHA(S)` : '\nTudo certo'); process.exit(fails ? 1 : 0);
})();
