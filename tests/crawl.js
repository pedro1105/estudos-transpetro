// Clica em todos os botões de todas as telas, em 3 tamanhos de tela, procurando erros e rolagem lateral.
// Uso: node tests/crawl.js [dist/app.html]
const { chromium } = require('playwright');
const path = require('path');
const file = 'file://' + path.resolve(process.argv[2] || 'dist/app.html');
(async () => {
  const b = await chromium.launch(); let bad = 0; const report = [];
  for (const vp of [{ width: 390, height: 844 }, { width: 820, height: 1180 }, { width: 1366, height: 850 }]) {
    const ctx = await b.newContext({ viewport: vp });
    await ctx.route(/^https?:/, r => r.abort());
    const p = await ctx.newPage(); const errs = []; let cur = '';
    p.on('pageerror', e => errs.push(cur + ' → ' + e.message.split('\n')[0]));
    p.on('dialog', d => d.dismiss().catch(() => {}));
    p.on('popup', pp => pp.close().catch(() => {}));
    await p.goto(file); await p.waitForTimeout(400);
    await p.evaluate(() => { window.open = () => null; window.print = () => {}; });
    const views = await p.evaluate(() => Object.keys(VIEWS));
    let clicks = 0; const overflow = new Set();
    for (const v of views) {
      cur = v;
      await p.evaluate(v => { try { go(v); } catch (e) {} }, v); await p.waitForTimeout(80);
      const n = await p.evaluate(() => [...document.querySelectorAll('#view button, #view [onclick], header button, nav button')].filter(e => e.offsetParent).length);
      for (let i = 0; i < n; i++) {
        await p.evaluate(v => { try { if (typeof closeModal === 'function') closeModal(); document.querySelectorAll('.modal,.ovl,.sheet').forEach(m => m.remove()); go(v); } catch (e) {} }, v);
        await p.waitForTimeout(30);
        const lbl = await p.evaluate(i => { const els = [...document.querySelectorAll('#view button, #view [onclick], header button, nav button')].filter(e => e.offsetParent); const e = els[i]; if (!e) return null; const t = (e.textContent || e.title || e.getAttribute('aria-label') || '').trim().slice(0, 40); e.click(); return t; }, i);
        if (lbl === null) continue;
        clicks++; cur = v + ' › ' + lbl;
        await p.waitForTimeout(70);
        const o = await p.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1 ? (window.current || '?') : '');
        if (o) overflow.add(v + ' › ' + lbl + ' (' + o + ')');
      }
    }
    await p.evaluate(() => { try { if (window.AU && AU.stop) AU.stop(); } catch (e) {} });
    report.push(`${vp.width}px: ${views.length} telas, ${clicks} cliques, ${errs.length} erros, ${overflow.size} com rolagem lateral`);
    [...new Set(errs)].slice(0, 40).forEach(e => report.push('  ERRO ' + e));
    [...overflow].slice(0, 20).forEach(e => report.push('  LARGURA ' + e));
    if (errs.length || overflow.size) bad++;
    await ctx.close();
  }
  console.log(report.join('\n')); await b.close(); process.exit(bad ? 1 : 0);
})();
