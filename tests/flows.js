// Percorre jogos, modos de prova e telas secundárias procurando erros de JavaScript.
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch(); let bad = 0;
  for (const vp of [{ width: 390, height: 844 }, { width: 800, height: 1100 }, { width: 1366, height: 850 }]) {
    const p = await b.newPage({ viewport: vp }); const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto('file://' + path.resolve(process.argv[2] || 'dist/app.html')); await p.waitForTimeout(300);
    const steps = [
      "startFc('all')", "fcAns(true)", "fcAns(false)", "go('jogos')", "startVf()", "vfAns(true)", "vfAns(false)", "go('jogos')", "startMatch()",
      "startLei()", "startCalc()", "startDuel()", "duelAnswer(0)", "startErro()", "startOrd()", "startDaily()",
      "startReal('2018')", "rq.card[0]=1;realFinish()", "startReal('full')", "rq.card[3]=2;realFinish()",
      "startPast('2012')", "finish()", "startSrc('Petrobras 2014')", "quiz.ans[0]=0;finish()", "startAdaptive()", "quiz.ans[1]=2;finish()",
      "startPace()", "finish()", "startLaw()", "finish()", "startWrong()", "startExam('mini')", "finish()",
      "go('caderno')", "go('vesp')", "go('crono')", "openTopic('matfin')", "openBase(BASE[0].id||0)", "go('links')", "go('peg')",
      "go('stats')", "go('guia')", "pomoStart('est')", "pomoStop()", "go('pratica')", "icsBuild()", "cadernoDoc()"];
    for (const s of steps) { try { await p.evaluate(s); await p.waitForTimeout(60); } catch (e) { errs.push(s + ' → ' + e.message.split('\n')[0]); } }
    const hs = await p.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
    console.log(vp.width, errs.length ? 'ERROS: ' + errs.join(' | ') : 'sem erros', hs ? '· ROLAGEM LATERAL' : '');
    if (errs.length || hs) bad++;
  }
  await b.close(); process.exit(bad ? 1 : 0);
})();
