// Sincronização dentro do claude.ai: fetch bloqueado, conector Supabase (mcp) simulado.
// Uso: node tests/claude.js [dist/app.html]
const { chromium } = require('playwright');
const path = require('path');
const file = 'file://' + path.resolve(process.argv[2] || 'dist/app.html');
let fails = 0;
const ok = (t, v, extra) => { if (!v) fails++; console.log(v ? 'OK  ' : 'FAIL', t, extra !== undefined ? extra : ''); };
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.route('https://xpfcmehgdfruhnveslmj.supabase.co/**', r => r.abort());
  const cloud = {}; const calls = [];
  await ctx.exposeFunction('__sql', q => {
    calls.push(q.slice(0, 40));
    const m = /select public\.(\w+)\((.*)\)::text as r$/s.exec(q); const fn = m[1];
    const args = []; const re = /(\$tp\w+\$)([\s\S]*?)\1|(-?\d+)/g; let x;
    while ((x = re.exec(m[2]))) args.push(x[3] !== undefined ? +x[3] : x[2]);
    let out = null; const c = cloud[args[0]];
    if (fn === 'tp_get') out = c ? { s: c.s, upd: c.upd } : null;
    if (fn === 'tp_ver') out = c ? c.upd : null;
    if (fn === 'tp_save') { if (c && c.upd !== args[3]) out = { ok: false, upd: c.upd }; else { cloud[args[0]] = { s: args[1], upd: args[2] }; out = { ok: true, upd: args[2] }; } }
    return { result: 'Below is the result...\n\n<untrusted-data-abc>\n' + JSON.stringify([{ r: out === null ? null : JSON.stringify(out) }]) + '\n</untrusted-data-abc>\n\nUse this data...' };
  });
  const setup = (permState) => ctx.addInitScript(st => {
    window.__perm = st;
    const perm = { state: async () => window.__perm, request: async n => { window.__asked = (window.__asked || 0) + 1; window.__perm = 'granted'; return { [n[0]]: 'granted' }; }, manage: async () => { window.__managed = 1; window.__perm = 'granted'; } };
    const mcp = { callTool: async (s, t, a) => { if (window.__perm === 'denied') { const e = new Error('x'); e.code = 'consent_required'; throw e; } return { payload: await window.__sql(a.query), content: [] }; } };
    window.claude = { use: async n => n === 'permissions' ? perm : n === 'mcp' ? mcp : null };
  }, permState);
  await setup('prompt');
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(file); await p.waitForTimeout(500);
  await p.evaluate(() => go('config')); await p.locator('#clNew').click(); await p.waitForTimeout(1500);
  const code = await p.evaluate(() => CL.code);
  ok('claude.ai: cria código e envia pelo conector (sem pedir clique)', !!cloud[code], JSON.stringify({ st: await p.evaluate(() => CL.st), calls: calls.slice(0, 3) }));
  ok('claude.ai: status sincronizado', await p.evaluate(() => CL.st === 'ok' && CL.via === 'mcp'));
  await p.evaluate(() => { S.goal = 80; save(); }); await p.waitForTimeout(3000);
  ok('claude.ai: mudança sobe sozinha', JSON.parse(cloud[code].s).goal === 80);
  // permissão negada: botão Permitir abre o painel
  await p.evaluate(() => { window.__perm = 'denied'; CL.mcp = null; CL.perm = null; S.goal = 20; save(); }); await p.waitForTimeout(3000);
  ok('negado: mostra Permitir', await p.evaluate(() => CL.st === 'needmcp'));
  await p.evaluate(() => go('config'));
  await p.locator('#clMcp').click(); await p.waitForTimeout(1500);
  ok('Permitir abre painel e volta a sincronizar', await p.evaluate(() => window.__managed === 1 && CL.st === 'ok'), await p.evaluate(() => CL.st));
  ok('sem erros JS', errs.length === 0, errs.join(' | '));
  await b.close(); console.log(fails ? `\n${fails} FALHA(S)` : '\nTudo certo'); process.exit(fails ? 1 : 0);
})();
