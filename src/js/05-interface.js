/* =====================================================================
   v7: navegação em 5 áreas, foco no simulado, simulado salvo, cor por
   bloco, ouvir resumos, adaptativo, cálculo, cronômetro, tempo por
   questão, lei seca e revisão da véspera
   ===================================================================== */
const ICONS={
 guia:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/></svg>',
 cont:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z"/></svg>',
 pratica:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
 jogos:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M15 12h.01M18 13h.01"/></svg>',
 stats:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>'
};
document.querySelectorAll("nav.tabs button").forEach(b=>{const s=document.createElement("span");s.textContent=b.textContent;b.textContent="";b.insertAdjacentHTML("afterbegin",ICONS[b.dataset.v]||"");b.appendChild(s);});
const TICON={auto:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 0 0 0-18z" fill="currentColor"/></svg>',
 light:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
 dark:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'};
const _applyTheme=applyTheme;
applyTheme=function(){_applyTheme();const b=$("#themeBtn");if(b){const t=THEMES.find(x=>x[0]===theme);b.innerHTML=TICON[theme]+'<span class="tlbl">'+t[1]+'</span>';b.title=t[1];b.setAttribute("aria-label",t[1]+". Toque para trocar");}
  const m=document.querySelector('meta[name="theme-color"]'); if(m) m.content=getComputedStyle(document.documentElement).getPropertyValue("--hdr").trim()||"#FFFFFF";};
applyTheme();

/* ---------- Navegação: foco, voz, tempo por questão ---------- */
function qtAcc(){if(quiz&&!quiz.finished&&quiz._k!=null){quiz.tq=quiz.tq||quiz.ids.map(()=>0);quiz.tq[quiz._k]+=Date.now()-quiz._t;quiz._k=null;}}
function segNav(cur,items){return `<div class="segtabs" role="tablist">${items.map(([v,t])=>`<button role="tab" aria-selected="${v===cur}" onclick="go('${v}')">${t}</button>`).join("")}</div>`;}
const SEG_EST=[["cont","Resumos"],["links","Links e vídeos"],["vesp","Revisão da véspera"]];
const SEG_PROG=[["stats","Desempenho"],["crono","Cronograma"]];

/* ---------- Simulado salvo ao recarregar ---------- */
const RK="transpetro26-run";
function runSave(){try{const o={};if(quiz&&!quiz.finished)o.quiz=quiz;if(rq)o.rq=rq;localStorage.setItem(RK,JSON.stringify(o));}catch(e){}}
const _vQuiz=vQuiz;
vQuiz=function(){
  if(quiz&&!quiz.finished){const now=Date.now();quiz.tq=quiz.tq||quiz.ids.map(()=>0);
    if(quiz._k!=null&&quiz._k!==quiz.i){quiz.tq[quiz._k]+=now-quiz._t;quiz._k=null;}
    if(quiz._k==null){quiz._k=quiz.i;quiz._t=now;}}
  _vQuiz(); runSave();
};
const _vReal=vReal; vReal=function(){_vReal();runSave();};
const _finish=finish;
finish=function(){
  if(!quiz||quiz.finished) return;
  qtAcc();
  _finish();
  if(quiz&&quiz.tq){
    const ans=quiz.ids.map((_,k)=>k).filter(k=>quiz.ans[k]!==null&&quiz.tq[k]>0);
    if(ans.length){quiz.avgT=Math.round(ans.reduce((s,k)=>s+quiz.tq[k],0)/ans.length/1000);quiz.slow=ans.filter(k=>quiz.tq[k]>240000).length;
      if(S.hist[0]){S.hist[0].avgT=quiz.avgT;save();}
      if(current==="result") vResult();}
  }
  runSave();
};
window.addEventListener("beforeunload",e=>{if((quiz&&!quiz.finished&&quiz.mode==="exam")||rq){e.preventDefault();e.returnValue="";}});
(function(){
  try{
    const o=JSON.parse(localStorage.getItem(RK)||"{}");
    if(o.quiz&&!o.quiz.finished&&Array.isArray(o.quiz.ids)&&o.quiz.ids.every(i=>Q[i])){quiz=o.quiz;quiz._k=null;quiz.confirm=false;}
    if(o.rq&&Array.isArray(o.rq.ids)&&o.rq.ids.every(i=>Q[i])){rq=o.rq;rq.confirm=false;}
    if(rq) tick=setInterval(rqTick,1000); else if(quiz&&quiz.limit) tick=setInterval(updTimer,1000);
  }catch(e){}
})();
function runBanner(){
  if(rq) return `<div class="rule row" style="justify-content:space-between"><span>Prova real em andamento: ${fmt(rqLeft())} restantes.</span><button class="btn sm" onclick="go('real')">Continuar</button></div>`;
  if(quiz&&!quiz.finished) return `<div class="rule row" style="justify-content:space-between"><span>${esc(quiz.label)} em andamento: questão ${quiz.i+1} de ${quiz.ids.length}.</span><button class="btn sm" onclick="go('quiz')">Continuar</button></div>`;
  return "";
}
/* atalhos de teclado no simulado */
document.addEventListener("keydown",e=>{
  if(current!=="quiz"||!quiz||e.ctrlKey||e.metaKey||e.altKey||e.target.closest("input,textarea,select")) return;
  const i="abcde".indexOf(e.key.toLowerCase());
  if(i>=0){const b=document.querySelector(`#view .opt[data-p="${i}"]`);if(b){b.click();e.preventDefault();}}
  else if(e.key==="ArrowRight"&&quiz.i<quiz.ids.length-1){nav(1);e.preventDefault();}
  else if(e.key==="ArrowLeft"&&quiz.i>0){nav(-1);e.preventDefault();}
});

/* ---------- Resultado: tempo por questão ---------- */
const _vResult=vResult;
vResult=function(){
  _vResult();
  if(!quiz||!quiz.avgT) return;
  const g=$("#view h2");
  const by={};quiz.ids.forEach((qi,k)=>{if(quiz.ans[k]===null||!quiz.tq[k])return;const b=CATS[Q[qi].c].b;by[b]=by[b]||{s:0,n:0};by[b].s+=quiz.tq[k];by[b].n++;});
  g.insertAdjacentHTML("afterend",`<div class="panel stack"><h3>Tempo por questão</h3>
    <div class="row" style="gap:18px"><span>Média: <b class="num">${fmt(quiz.avgT)}</b></span><span>Limite para fechar a prova: <b class="num">4:00</b></span>${quiz.slow?`<span class="pill bad">${quiz.slow} acima de 4 min</span>`:'<span class="pill ok">nenhuma acima de 4 min</span>'}</div>
    <div class="stack" style="gap:6px">${Object.keys(by).map(b=>`<div class="row" style="justify-content:space-between"><span><i class="bdot" style="background:var(--c-${b})"></i>${esc(BLOCKS[b])}</span><span class="num">${fmt(Math.round(by[b].s/by[b].n/1000))}</span></div>`).join("")}</div>
    <p class="muted">Na prova são 4 horas para 60 questões. Se um bloco passa de 4 minutos por questão, treine-o com o cronômetro ligado e pule a questão que travar, voltando depois.</p></div>`);
};

/* ---------- Hoje (antigo Início + Orientação) ---------- */
let instEvt=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();instEvt=e;if(current==="config")vConfigKeep();});
function aboutExam(){
  return `<details class="panel about"><summary><h3>Como a prova funciona</h3></summary><div class="stack" style="margin-top:12px">
    <div class="grid2">
      <div class="fact"><span class="k">Questões</span><span class="v num">60</span><span class="muted">40 específicas, 10 de Português e 10 de Matemática, com 5 alternativas</span></div>
      <div class="fact"><span class="k">Duração</span><span class="v num">4 h</span><span class="muted">Saída só após 2 h. Chegar 1 h antes do início</span></div>
      <div class="fact"><span class="k">Vagas + cadastro (RJ)</span><span class="v num">48</span><span class="muted">3 vagas imediatas; 29 na ampla concorrência</span></div>
    </div>
    <div class="rule stack"><strong>O que elimina</strong><span>Menos de 20 acertos nas específicas, menos de 10 nas gerais, ou zero em Português ou em Matemática.</span>
    <strong>O que classifica</strong><span>O ranking das 40 específicas, até 2 vezes o total de vagas + cadastro. Errar não desconta.</span></div>
  </div></details>`;
}

/* ---------- Cronômetro de estudo (50 + 10) ---------- */
S.slog=S.slog||{};
function pomoLeft(){return S.pomo?Math.round(S.pomo.dur-(Date.now()-S.pomo.start)/1000):0;}
function pomoLog(min){if(!S.pomo||S.pomo.kind!=="est"||min<1) return;S.slog=S.slog||{};const k=dkey(new Date(S.pomo.start));S.slog[k]=S.slog[k]||{};S.slog[k][S.pomo.cat]=(S.slog[k][S.pomo.cat]||0)+Math.round(min);}
function pomoStart(kind){
  const c=$("#pomoCat"); const cat=c?c.value:(S.pomoCat||"geral"); S.pomoCat=cat;
  S.pomo={kind,cat,start:Date.now(),dur:kind==="est"?50*60:10*60}; save(); vGuiaKeep();
}
function pomoStop(){if(!S.pomo)return;pomoLog((Date.now()-S.pomo.start)/60000);S.pomo=null;save();vGuiaKeep();}
function pomoTick(){
  if(!S.pomo) return;
  const r=pomoLeft(), el=$("#pomoClock");
  if(el) el.textContent=fmt(Math.max(0,r));
  if(r<=0){
    const est=S.pomo.kind==="est";
    if(est) pomoLog(S.pomo.dur/60);
    S.pomo=null; save();
    notify(est?"Bloco de 50 minutos concluído":"Pausa encerrada",est?"Faça 10 minutos de pausa longe da tela. Depois, mais um bloco.":"Hora de voltar: comece o próximo bloco.");
    if(current==="guia"||current==="home") vGuiaKeep();
  }
}
setInterval(pomoTick,1000);
function minFmt(m){m=Math.round(m);return m>=60?Math.floor(m/60)+"h"+String(m%60).padStart(2,"0"):m+" min";}
function slogSum(days){let t=0;const by={},SL=S.slog||{};for(let i=0;i<days;i++){const d=new Date();d.setDate(d.getDate()-i);const o=SL[dkey(d)]||{};for(const c in o){t+=o[c];const b=c==="geral"?"geral":CATS[c]?CATS[c].b:"geral";by[b]=(by[b]||0)+o[c];}}return {t,by};}
function pomoPanel(){
  const today=slogSum(1).t, wk=slogSum(7).t, p=S.pomo;
  const opts=`<option value="geral">Geral / vários assuntos</option>`+Object.entries(BLOCKS).map(([b,bn])=>`<optgroup label="${esc(bn)}">${Object.keys(CATS).filter(k=>CATS[k].b===b).map(k=>`<option value="${k}" ${S.pomoCat===k?"selected":""}>${esc(CATS[k].n)}</option>`).join("")}</optgroup>`).join("");
  return `<section class="panel stack"><div class="row" style="justify-content:space-between"><h3>Cronômetro de estudo</h3><span class="muted">Hoje <b class="num">${minFmt(today)}</b> · 7 dias <b class="num">${minFmt(wk)}</b></span></div>
  ${p?`<div class="pomo ${p.kind}"><span class="pk">${p.kind==="est"?"Estudando: "+esc(p.cat==="geral"?"geral":CATS[p.cat].n):"Pausa"}</span><span class="pclock num" id="pomoClock">${fmt(Math.max(0,pomoLeft()))}</span><button class="btn ghost" id="pomoStop">${p.kind==="est"?"Encerrar e registrar":"Encerrar pausa"}</button></div>`
  :`<label class="muted" for="pomoCat">O que você vai estudar</label><select id="pomoCat">${opts}</select>
    <div class="row"><button class="btn" id="pomoGo">Começar bloco de 50 min</button><button class="btn ghost" id="pomoPause">Pausa de 10 min</button></div>`}
  <p class="muted">Blocos de 50 minutos com 10 de pausa, longe do celular. O tempo fica registrado por assunto em Progresso.</p></section>`;
}
function pomoWire(){const g=$("#pomoGo");if(g)g.onclick=()=>pomoStart("est");const pz=$("#pomoPause");if(pz)pz.onclick=()=>pomoStart("pau");const s=$("#pomoStop");if(s)s.onclick=pomoStop;}

/* ---------- Estudar: resumos com cor por bloco, ouvir ---------- */
const _vCont=vCont; vCont=function(){_vCont();const h=$("#view h2");if(h)h.textContent="Estudar";$("#view").insertAdjacentHTML("afterbegin",segNav("cont",SEG_EST));};
const _vLinks=vLinks; vLinks=function(){_vLinks();$("#view").insertAdjacentHTML("afterbegin",segNav("links",SEG_EST));};
let ttsQ=[];
const TTS_OK="speechSynthesis" in window;
function ttsStop(){ttsQ=[];if(TTS_OK)try{speechSynthesis.cancel();}catch(e){} document.querySelectorAll(".ttsbtn").forEach(b=>b.textContent="Ouvir");}
function plain(s){return String(s).replace(/\*\*(.+?)\*\*/g,"$1").replace(/([\d)²³]|\b[A-Za-z]{1,3}\b)\s*[×·]\s*(?=[\d(√]|\b[A-Za-z]{1,3}\b)/g,"$1 vezes ").replace(/√/g," raiz de ").replace(/²/g," ao quadrado").replace(/³/g," ao cubo").replace(/(\d)\s*%/g,"$1 por cento").replace(/\s=\s/g," igual a ").replace(/^! /,"Atenção, pegadinha: ").replace(/×/g," versus ").replace(/≥/g," maior ou igual a ").replace(/≤/g," menor ou igual a ").replace(/→/g,", ").replace(/÷/g," dividido por ").replace(/\//g," por ");}
function ttsSpeak(text,btn){
  if(!TTS_OK) return;
  if(speechSynthesis.speaking&&btn&&btn.textContent==="Parar"){ttsStop();return;}
  ttsStop();
  const parts=text.match(/[^.!?;:]+[.!?;:]?/g)||[text];
  const chunks=[];let cur="";parts.forEach(p=>{if((cur+p).length>220){if(cur)chunks.push(cur);cur=p;}else cur+=p;});if(cur)chunks.push(cur);
  const vs=speechSynthesis.getVoices(), voice=vs.find(v=>/pt[-_]BR/i.test(v.lang))||vs.find(v=>/^pt/i.test(v.lang));
  ttsQ=chunks.slice();
  if(btn) btn.textContent="Parar";
  const next=()=>{if(!ttsQ.length){if(btn)btn.textContent="Ouvir";return;}const u=new SpeechSynthesisUtterance(ttsQ.shift().trim());u.lang="pt-BR";if(voice)u.voice=voice;u.rate=S.ttsRate||1;u.onend=next;u.onerror=()=>{if(btn)btn.textContent="Ouvir";};speechSynthesis.speak(u);};
  next();
}
if(TTS_OK) try{speechSynthesis.getVoices();speechSynthesis.onvoiceschanged=()=>{};}catch(e){}
function ttsBar(id){
  if(!TTS_OK) return "";
  return `<div class="ttsbar row"><button class="btn ttsbtn" id="${id}">Ouvir</button><label class="row muted" style="gap:6px">Velocidade <select id="ttsRate">${[0.9,1,1.15,1.3,1.5].map(r=>`<option value="${r}" ${(S.ttsRate||1)==r?"selected":""}>${String(r).replace(".",",")}x</option>`).join("")}</select></label><span class="muted">Leitura em voz alta pelo próprio aparelho, funciona sem internet.</span></div>`;
}
function ttsWire(id,getText){const b=$("#"+id);if(!b)return;b.onclick=()=>ttsSpeak(getText(),b);const r=$("#ttsRate");if(r)r.onchange=()=>{S.ttsRate=+r.value;save();};}
const _vTopic=vTopic;
vTopic=function(){
  _vTopic(); const k=topicCur; if(!k||!RES[k]) return;
  const h=$("#view h2"); if(h) h.closest(".stack").insertAdjacentHTML("afterend",ttsBar("ttsTopic"));
  ttsWire("ttsTopic",()=>CATS[k].n+". "+RES[k].map(([t,it])=>t+". "+it.map(plain).join(". ")).join(". "));
};

/* ---------- Revisão da véspera ---------- */
function vVesp(){
  const blocks=Object.keys(BLOCKS);
  const key=it=>it.filter(x=>x.startsWith("! ")||/\*\*/.test(x));
  const html=blocks.map(b=>{
    const cats=Object.keys(CATS).filter(k=>CATS[k].b===b&&RES[k]);
    if(!cats.length) return "";
    const traps=[],pts=[];
    cats.forEach(k=>RES[k].forEach(([t,it])=>{it.forEach(x=>{if(x.startsWith("! "))traps.push([k,x]);});const ks=key(it).filter(x=>!x.startsWith("! "));if(ks.length)pts.push([k,ks[0]]);}));
    const notes=Object.keys(S.notes||{}).map(Number).filter(q=>Q[q]&&CATS[Q[q].c].b===b&&S.notes[q].t);
    const weak=cats.filter(k=>S.stats[k]&&S.stats[k].t>=3).sort((a,c)=>S.stats[a].c/S.stats[a].t-S.stats[c].c/S.stats[c].t).slice(0,3);
    return `<details class="panel vesp" style="--bc:var(--c-${b})"><summary><h3 class="bh">${esc(BLOCKS[b])}</h3></summary><div class="stack" style="margin-top:12px">
      ${weak.length?`<div class="row" style="gap:6px">${weak.map(k=>`<button class="chipbtn" onclick="openTopic('${k}')">${esc(CATS[k].n)} · ${pct(S.stats[k])}%</button>`).join("")}</div>`:""}
      ${traps.length?`<h4>Pegadinhas</h4><ul class="res">${traps.map(([k,x])=>`<li class="trap">${md(x)}</li>`).join("")}</ul>`:""}
      <h4>Pontos-chave</h4><ul class="res">${pts.map(([k,x])=>`<li>${md(x)} <span class="muted">(${esc(CATS[k].n)})</span></li>`).join("")}</ul>
      ${notes.length?`<h4>Do seu caderno de erros</h4><ul class="res">${notes.map(q=>`<li>${esc(S.notes[q].t)} <span class="muted">(${esc(CATS[Q[q].c].n)})</span></li>`).join("")}</ul>`:""}
      <div class="row"><button class="btn ghost sm" onclick="ttsSpeak(plain([...this.closest('details').querySelectorAll('h4,li')].map(x=>x.textContent).join('. ')),this)">Ouvir</button></div>
    </div></details>`;}).join("");
  $("#view").innerHTML=segNav("vesp",SEG_EST)+`
  <div class="stack"><h2>Revisão da véspera</h2><p class="muted">O essencial de cada bloco numa página: os assuntos em que você mais erra, as pegadinhas, um ponto-chave por seção e as notas do seu caderno de erros. Para os dias 04 e 05/12, sem conteúdo novo.</p></div>
  ${html}`;
}

/* ---------- Progresso (Desempenho + Cronograma) ---------- */
const _vStats=vStats;
vStats=function(){
  _vStats(); const v=$("#view"); const h=v.querySelector("h2"); if(h) h.textContent="Progresso";
  v.insertAdjacentHTML("afterbegin",segNav("stats",SEG_PROG));
  const w=slogSum(7), m=slogSum(30);
  const blk=Object.keys(BLOCKS).concat("geral").filter(b=>m.by[b]);
  const mx=Math.max(1,...blk.map(b=>m.by[b]));
  const tl=S.hist.filter(x=>x.avgT).slice(0,8);
  const fc=v.querySelector(".panel");
  const html=`<div class="panel stack"><h3>Horas de estudo</h3>
    <div class="row" style="gap:18px"><span>Últimos 7 dias: <b class="num">${minFmt(w.t)}</b></span><span>Últimos 30 dias: <b class="num">${minFmt(m.t)}</b></span></div>
    ${blk.length?blk.map(b=>`<div class="hbar"><span><i class="bdot" style="background:${b==="geral"?"var(--muted)":`var(--c-${b})`}"></i>${b==="geral"?"Geral":esc(BLOCKS[b])}</span><div class="track"><div class="fill" style="width:${m.by[b]/mx*100}%;background:${b==="geral"?"var(--muted)":`var(--c-${b})`}"></div></div><span class="num">${minFmt(m.by[b])}</span></div>`).join(""):'<p class="muted">Use o cronômetro de estudo na aba Hoje para registrar o tempo por assunto.</p>'}
    ${tl.length?`<h3>Tempo médio por questão</h3>${tl.map(x=>`<div class="row" style="justify-content:space-between"><span>${esc(x.date)} · ${esc(x.label)}</span><span class="num ${x.avgT>240?"badt":""}">${fmt(x.avgT)}</span></div>`).join("")}`:""}</div>`;
  if(fc) fc.insertAdjacentHTML("afterend",html); else v.insertAdjacentHTML("beforeend",html);
};

/* ---------- Praticar: simulado adaptativo ---------- */
function startAdaptive(){
  const weak=weakCats(5), esp=espCats().filter(c=>!weak.includes(c));
  const pick=(cats,n)=>{const pools=cats.map(c=>freshSort(QI().filter(i=>Q[i].c===c)));const out=[];let r=0;while(out.length<n&&pools.some(p=>p.length)){const p=pools[r%pools.length];if(p.length)out.push(p.shift());r++;}return out;};
  const ids=shuffle(pick(weak,12).concat(pick(shuffle(esp),4),pick(["port"],2),pick(["mat"],2)));
  makeQuiz(ids,"train","Treino adaptativo",0);
}

/* ---------- Jogos: lei seca e cálculo ---------- */
const _vJogos=vJogos;
vJogos=function(){
  _vJogos();
  const g=$("#view .grid2");
  if(g) g.insertAdjacentHTML("beforeend",`
    <div class="panel mode"><span class="tag">${LEI.length} trechos</span><h3>Lei seca</h3><p class="muted">Complete o texto da Lei 13.303, da Lei 14.133 e da LGPD. A Cesgranrio copia a letra da lei nas alternativas.</p>
      <label class="muted" for="selLei">Lei</label><select id="selLei"><option value="all">Todas</option><option value="13.303">Lei 13.303/2016 (estatais)</option><option value="14.133">Lei 14.133/2021</option><option value="LGPD">LGPD (Lei 13.709/2018)</option></select>
      <button class="btn" onclick="startLei()">Começar</button>${S.gm.leiBest?`<span class="muted num">Recorde: ${S.gm.leiBest} acertos</span>`:""}</div>
    <div class="panel mode"><span class="tag">90 segundos</span><h3>Cálculo sem calculadora</h3><p class="muted">Porcentagem, juros, regra de três, aumentos e descontos. Na prova, calculadora é proibida: aqui você treina a conta de cabeça.</p>
      <button class="btn" onclick="startCalc()">Jogar</button>${S.gm.calcBest?`<span class="muted num">Recorde: ${S.gm.calcBest} acertos</span>`:""}</div>`);
};
const LEI=[
 ["13.303","Art. 1º","Esta Lei dispõe sobre o estatuto jurídico da empresa pública, da ___ e de suas subsidiárias.","sociedade de economia mista",["autarquia","fundação pública","agência reguladora"]],
 ["13.303","Art. 29, I","É dispensável a realização de licitação por empresas públicas e sociedades de economia mista para obras e serviços de engenharia de valor até ___.","R$ 100.000,00",["R$ 50.000,00","R$ 150.000,00","R$ 33.000,00"]],
 ["13.303","Art. 29, II","É dispensável a licitação para outros serviços e compras de valor até ___ e para alienações, nos casos previstos nesta Lei.","R$ 50.000,00",["R$ 100.000,00","R$ 17.600,00","R$ 80.000,00"]],
 ["13.303","Art. 30","A contratação direta será feita quando houver ___ de competição (inexigibilidade).","inviabilidade",["dispensa","urgência","ausência de orçamento"]],
 ["13.303","Art. 30, II","É inexigível a contratação de serviços técnicos especializados com profissionais ou empresas de notória especialização, vedada a inexigibilidade para serviços de ___.","publicidade e divulgação",["engenharia","consultoria","auditoria"]],
 ["13.303","Art. 32, IV","Diretriz das licitações: adoção preferencial da modalidade ___, instituída pela Lei nº 10.520/2002, para a aquisição de bens e serviços comuns.","pregão",["concorrência","tomada de preços","convite"]],
 ["13.303","Art. 42, I","Empreitada por preço ___: contratação por preço certo de unidades determinadas.","unitário",["global","integral","por tarefa"]],
 ["13.303","Art. 51","Sequência de fases: preparação; divulgação; apresentação de lances ou propostas; julgamento; verificação de efetividade dos lances ou propostas; negociação; ___; interposição de recursos; adjudicação do objeto; homologação do resultado ou revogação do procedimento.","habilitação",["credenciamento","pré-qualificação","cadastramento"]],
 ["13.303","Art. 54","Critérios de julgamento: menor preço; maior desconto; melhor combinação de técnica e preço; melhor técnica; melhor conteúdo artístico; maior oferta de preço; ___; melhor destinação de bens alienados.","maior retorno econômico",["maior lance","menor custo total","técnica e preço ponderados"]],
 ["13.303","Art. 70, § 1º","Modalidades de garantia que o contratado pode escolher: caução em dinheiro, seguro-garantia e ___.","fiança bancária",["aval","nota promissória","penhor de bens"]],
 ["13.303","Art. 70, § 2º","A garantia não excederá a ___ do valor do contrato.","5%",["10%","2%","3%"]],
 ["13.303","Art. 70, § 3º","Para obras, serviços e fornecimentos de grande vulto envolvendo complexidade técnica e riscos financeiros elevados, o limite de garantia poderá ser elevado para até ___ do valor do contrato.","10%",["5%","15%","20%"]],
 ["13.303","Art. 71","A duração dos contratos regidos por esta Lei não excederá a ___, contados a partir de sua celebração, salvo as exceções previstas.","5 anos",["2 anos","4 anos","10 anos"]],
 ["13.303","Art. 81, § 1º","O contratado poderá aceitar, nas mesmas condições contratuais, os acréscimos ou supressões que se fizerem nas obras, serviços ou compras, até ___ do valor inicial atualizado do contrato.","25%",["50%","10%","30%"]],
 ["13.303","Art. 81, § 1º","No caso particular de reforma de edifício ou de equipamento, os acréscimos podem chegar ao limite de ___.","50%",["25%","30%","100%"]],
 ["14.133","Art. 28","São modalidades de licitação: pregão; concorrência; concurso; leilão; ___.","diálogo competitivo",["tomada de preços","convite","RDC"]],
 ["LGPD","Art. 5º, I","Dado pessoal: informação relacionada a pessoa natural ___ ou identificável.","identificada",["jurídica","registrada","maior de idade"]],
 ["LGPD","Art. 5º, II","Dado pessoal sensível: sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado ___ ou biométrico, quando vinculado a uma pessoa natural.","genético",["bancário","cadastral","financeiro"]],
 ["LGPD","Art. 5º, III","Dado ___: dado relativo a titular que não possa ser identificado, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião de seu tratamento.","anonimizado",["pseudonimizado","sensível","criptografado"]],
 ["LGPD","Art. 5º, VI","Controlador: pessoa natural ou jurídica, de direito público ou privado, a quem competem as ___ referentes ao tratamento de dados pessoais.","decisões",["execuções","fiscalizações","auditorias"]],
 ["LGPD","Art. 5º, VII","Operador: pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do ___.","controlador",["titular","encarregado","Poder Público"]],
 ["LGPD","Art. 5º, VIII","Encarregado: pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ___.","Autoridade Nacional de Proteção de Dados (ANPD)",["Polícia Federal","Receita Federal","Defensoria Pública"]],
 ["LGPD","Art. 5º, XII","Consentimento: manifestação livre, informada e ___ pela qual o titular concorda com o tratamento de seus dados pessoais para uma finalidade determinada.","inequívoca",["escrita","verbal","presumida"]],
 ["LGPD","Art. 6º, I","Princípio da finalidade: realização do tratamento para propósitos legítimos, específicos, explícitos e ___ ao titular.","informados",["autorizados judicialmente","registrados","pagos"]],
 ["LGPD","Art. 6º, III","Princípio da necessidade: limitação do tratamento ao ___ necessário para a realização de suas finalidades.","mínimo",["máximo","tempo","custo"]],
 ["LGPD","Art. 7º, I","O tratamento de dados pessoais somente poderá ser realizado, entre outras hipóteses, mediante o fornecimento de ___ pelo titular.","consentimento",["autorização judicial","procuração","senha pessoal"]],
 ["LGPD","Art. 52, II","Multa simples de até 2% do faturamento da pessoa jurídica no Brasil no seu último exercício, excluídos os tributos, limitada, no total, a ___ por infração.","R$ 50.000.000,00",["R$ 5.000.000,00","R$ 10.000.000,00","R$ 100.000.000,00"]]
];
let lei=null;
function startLei(){
  const f=$("#selLei")?$("#selLei").value:"all";
  const ids=shuffle(LEI.map((_,i)=>i).filter(i=>f==="all"||LEI[i][0]===f)).slice(0,10);
  lei={ids,i:0,ans:ids.map(()=>null),order:ids.map(i=>shuffle([LEI[i][3],...LEI[i][4]])),f};
  go("lei");
}
function vLei(){
  if(!lei){go("jogos");return;}
  if(lei.i>=lei.ids.length){
    const ok=lei.ids.filter((id,k)=>lei.ans[k]===LEI[id][3]).length;
    if(ok>(S.gm.leiBest||0)){S.gm.leiBest=ok;save();}
    $("#view").innerHTML=`<div><button class="btn ghost sm" onclick="go('jogos')">← Jogos</button></div><h2>Lei seca · ${ok}/${lei.ids.length}</h2>
      <div class="stack">${lei.ids.map((id,k)=>{const L2=LEI[id],good=lei.ans[k]===L2[3];return `<div class="panel stack"><span class="qcat">${esc(L2[0]==="LGPD"?"LGPD":"Lei "+L2[0])} · ${esc(L2[1])} <span class="mark ${good?"ok":"bad"}">${good?"✓":"✗"}</span></span><p>${esc(L2[2]).replace("___",`<b class="hl2">${esc(L2[3])}</b>`)}</p>${good?"":`<p class="muted">Você marcou: ${esc(lei.ans[k])}</p>`}</div>`;}).join("")}</div>
      <div class="row"><button class="btn" onclick="startLei()">Jogar de novo</button></div>`;
    return;
  }
  const id=lei.ids[lei.i], L2=LEI[id], a=lei.ans[lei.i];
  $("#view").innerHTML=`<div class="qhead"><strong>Lei seca · ${lei.i+1} de ${lei.ids.length}</strong><button class="btn ghost sm" onclick="go('jogos')">Sair</button></div>
  <article class="panel stack"><span class="qcat">${esc(L2[0]==="LGPD"?"LGPD (Lei 13.709/2018)":L2[0]==="14.133"?"Lei 14.133/2021":"Lei 13.303/2016")} · ${esc(L2[1])}</span>
  <p class="qtext">${esc(L2[2]).replace("___",a===null?'<span class="gap">______</span>':`<b class="hl2">${esc(L2[3])}</b>`)}</p>
  <div class="opts">${lei.order[lei.i].map((o,p)=>{let c="opt";if(a!==null){c+=" locked";if(o===L2[3])c+=" right";else if(o===a)c+=" wrong";}return `<button class="${c}" data-p="${p}"><span class="l">${L[p]}</span><span>${esc(o)}</span></button>`;}).join("")}</div></article>
  ${a!==null?`<div class="row"><button class="btn" onclick="lei.i++;vLei();window.scrollTo({top:0})">${lei.i<lei.ids.length-1?"Próximo":"Ver resultado"}</button></div>`:""}`;
  if(a===null) document.querySelectorAll("#view .opt").forEach(b=>b.onclick=()=>{lei.ans[lei.i]=lei.order[lei.i][+b.dataset.p];addDay(1);vLei();});
}

/* Cálculo sem calculadora */
const pick1=a=>a[Math.floor(Math.random()*a.length)];
const brn=n=>{const s=(Math.round(n*100)/100).toString().replace(".",",");return s;};
const money=n=>"R$ "+Math.round(n).toLocaleString("pt-BR");
const CALC=[
 ()=>{let a,b;do{a=pick1([5,10,12,15,20,25,30,40,45,60,75]);b=pick1([40,60,80,120,160,200,240,300,360,400,500,640,800,1200]);}while(a*b%100);const r=a*b/100;return {q:`Quanto é ${a}% de ${b}?`,a:r,f:x=>brn(x),h:`${a}% de ${b} = ${a} × ${b} ÷ 100. Dica: 10% de ${b} = ${brn(b/10)}.`};},
 ()=>{const C=pick1([1000,2000,5000,800,1500,4000]),i=pick1([2,3,5,10]),t=pick1([3,4,6,10,12]);const r=C*i*t/100;return {q:`Juros simples: capital de ${money(C)} a ${i}% ao mês por ${t} meses. Quanto rende de juros?`,a:r,f:money,h:`J = C × i × t = ${C} × ${i}/100 × ${t}.`};},
 ()=>{const [C,i]=pick1([[1000,10],[2000,10],[10000,5],[1000,20],[5000,10],[4000,5]]);const r=C*Math.pow(1+i/100,2);return {q:`Juros compostos: ${money(C)} a ${i}% ao mês por 2 meses. Qual o montante?`,a:Math.round(r),f:money,h:`M = C × (1 + i)² = ${C} × ${brn(1+i/100)}² = ${C} × ${brn(Math.pow(1+i/100,2))}.`,simple:C*(1+2*i/100)};},
 ()=>{const [a,b]=pick1([[10,10],[20,20],[25,20],[50,20],[20,10],[10,20],[30,10],[50,50]]);const r=Math.round(((1+a/100)*(1-b/100)-1)*10000)/100;return {q:`Um preço sobe ${a}% e depois cai ${b}%. Qual a variação final?`,a:r,f:x=>(x>0?"+":"")+brn(x)+"%",h:`Multiplique os fatores: ${brn(1+a/100)} × ${brn(1-b/100)} = ${brn((1+a/100)*(1-b/100))}. Não basta somar ${a} − ${b}.`,pct:true};},
 ()=>{let a,b,c;do{a=pick1([2,3,4,5,6,8]);b=a*pick1([10,12,15,20,25,30]);c=pick1([3,5,6,7,9,10,12]);}while(c===a);const r=b*c/a;return {q:`${a} máquinas iguais produzem ${b} peças por dia. Quantas peças ${c} máquinas produzem por dia?`,a:r,f:x=>brn(x),h:`Regra de três direta: ${b} ÷ ${a} = ${b/a} por máquina; × ${c} = ${r}.`};},
 ()=>{let a,b,c;do{a=pick1([2,3,4,5,6]);b=pick1([6,8,10,12,15,20,24]);c=pick1([2,3,4,5,6,8,10,12]);}while(a*b%c||c===a);const r=a*b/c;return {q:`${a} pessoas fazem um serviço em ${b} dias. Em quantos dias ${c} pessoas fazem o mesmo serviço?`,a:r,f:x=>brn(x),h:`Regra de três inversa: ${a} × ${b} = ${a*b} pessoas-dia; ÷ ${c} = ${brn(r)}.`};},
 ()=>{let n,d,b;do{d=pick1([3,4,5,8]);n=pick1([1,2,3,5,7]);b=pick1([120,160,240,360,400,480,600]);}while(n>=d||b%d);const r=b/d*n;return {q:`Quanto é ${n}/${d} de ${b}?`,a:r,f:x=>brn(x),h:`${b} ÷ ${d} = ${b/d}; × ${n} = ${r}.`};},
 ()=>{const P=pick1([200,400,500,800,1000,1200]),d=pick1([10,15,20,25,30]);const r=P*(1-d/100);return {q:`Um produto de ${money(P)} tem desconto de ${d}%. Quanto se paga?`,a:r,f:money,h:`${money(P)} × ${brn(1-d/100)} = ${money(r)}.`};},
 ()=>{let v;do{v=[pick1([5,6,7,8,9]),pick1([4,6,7,8]),pick1([6,7,8,9,10])];}while(v.reduce((a,b)=>a+b,0)%3);const t=v.reduce((a,b)=>a+b,0),r=t/3;return {q:`Qual a média aritmética de ${v.join(", ")}?`,a:r,f:x=>brn(x),h:`(${v.join(" + ")}) ÷ 3 = ${t} ÷ 3 = ${r}.`};}
];
function calcItem(){
  const g=pick1(CALC)(), r2=x=>Math.round(x*100)/100, A=r2(g.a);
  let cand=g.pct?[A+1,A-1,A+2,A-2,A===0?5:-A,0]:[A*1.1,A*0.9,A*1.2,A*0.8,A*2,A/2,g.simple];
  cand=shuffle(cand.filter(x=>x!==undefined).map(r2)).filter(x=>g.pct||x>0);
  const opts=[A], seen=new Set([g.f(A)]);
  for(const x of cand){if(opts.length>=4)break;if(!seen.has(g.f(x))){seen.add(g.f(x));opts.push(x);}}
  let k=1;while(opts.length<4){const x=r2(A+k*7);if(!seen.has(g.f(x))){seen.add(g.f(x));opts.push(x);}k++;}
  return {...g,a:A,opts:shuffle(opts)};
}
let calc=null, ctick=null;
function startCalc(){calc={start:Date.now(),items:[],cur:calcItem(),ok:0,done:false};if(ctick)clearInterval(ctick);ctick=setInterval(calcTick,250);go("calc");}
function calcLeft(){return 90-(Date.now()-calc.start)/1000;}
function calcTick(){if(!calc||calc.done||current!=="calc"){clearInterval(ctick);ctick=null;if(calc&&!calc.done&&current!=="calc")calc.done=true;return;}const r=calcLeft(),t=$("#calcT");if(t)t.textContent=Math.ceil(Math.max(0,r))+" s";if(r<=0)calcEnd();}
function calcEnd(){calc.done=true;if(ctick){clearInterval(ctick);ctick=null;}if(calc.ok>(S.gm.calcBest||0))S.gm.calcBest=calc.ok;addDay(calc.items.length);save();vCalc();}
function vCalc(){
  if(!calc){go("jogos");return;}
  if(calc.done){
    const wrong=calc.items.filter(x=>!x.ok);
    $("#view").innerHTML=`<div><button class="btn ghost sm" onclick="go('jogos')">← Jogos</button></div><h2>Cálculo · ${calc.ok} acertos</h2>
    <p class="muted">${calc.items.length} contas em 90 segundos. Recorde: ${S.gm.calcBest||0}.</p>
    ${wrong.length?`<h3>Como fazer as que errou</h3><div class="stack">${wrong.map(x=>`<div class="panel stack"><p>${esc(x.q)}</p><p>Resposta: <b>${esc(x.f(x.a))}</b> · você marcou ${esc(x.f(x.sel))}</p><div class="expl">${esc(x.h)}</div></div>`).join("")}</div>`:""}
    <div class="row"><button class="btn" onclick="startCalc()">Jogar de novo</button></div>`;
    return;
  }
  const c=calc.cur;
  $("#view").innerHTML=`<div class="qhead"><div class="stack" style="gap:2px"><strong>Cálculo sem calculadora</strong><span class="muted num">${calc.ok} acertos · ${calc.items.length-calc.ok} erros</span></div><span class="timer num" id="calcT">${Math.ceil(calcLeft())} s</span></div>
  <article class="panel stack"><p class="qtext">${esc(c.q)}</p><div class="opts calcopts">${c.opts.map((o,p)=>`<button class="opt" data-p="${p}"><span class="l">${L[p]}</span><span class="num">${esc(c.f(o))}</span></button>`).join("")}</div></article>
  <p class="muted">Faça a conta de cabeça ou no papel. Errou, a próxima vem do mesmo jeito; a explicação aparece no fim.</p>`;
  document.querySelectorAll("#view .opt").forEach(b=>b.onclick=()=>{const v=c.opts[+b.dataset.p], ok=Math.abs(v-c.a)<0.005;calc.items.push({...c,sel:v,ok});if(ok)calc.ok++;b.classList.add(ok?"right":"wrong");setTimeout(()=>{if(!calc||calc.done)return;calc.cur=calcItem();vCalc();},ok?250:700);});
}

/* ---------- desempenho da Orientação: memoriza dias passados ---------- */
const _dayScore=dayScore, dsMemo={};
dayScore=function(k){if(k<todayK()) return dsMemo[k]!==undefined?dsMemo[k]:(dsMemo[k]=_dayScore(k)); return _dayScore(k);};

