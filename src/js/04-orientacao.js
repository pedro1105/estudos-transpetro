/* =====================================================================
   v6: Orientação (plano do dia + checklist + lembretes), revisão espaçada,
   caderno de erros, previsão de nota, prova real, links e sincronização
   ===================================================================== */
const todayK=()=>dkey(new Date());
const addDaysK=n=>{const d=new Date();d.setDate(d.getDate()+n);return dkey(d);};
const kDate=k=>new Date(k+"T12:00:00");
const fmtK=k=>k.slice(8,10)+"/"+k.slice(5,7);
const ESP_B=["adm","fin","log","info"];
function initState(){
  S.daily=S.daily||{}; S.srs=S.srs||{}; S.notes=S.notes||{}; S.rem=S.rem||{on:false,h:"19:00"};
  S.days=S.days||{}; S.seen=S.seen||{}; S.base=S.base||{}; S.goal=S.goal||30;
  (S.wrong||[]).forEach(qi=>{if(!S.srs[qi]) S.srs[qi]={b:0,d:todayK()};});
  S.st=Object.assign({h:"19:00",w:"09:00"},S.st||{}); S.fold=S.fold||{}; S.gm=S.gm||{}; S.ct=S.ct||{}; S.fcl=S.fcl||{};
  if(QID) remapState(S);
}
initState();

/* ---------- Revisão espaçada (1, 3, 7 e 15 dias) ---------- */
const SRS_INT=[1,3,7,15];
function srsDue(){const k=todayK();return Object.keys(S.srs).filter(q=>S.srs[q].d<=k&&Q[q]).map(Number);}
function srsUpdate(qi,ok){
  const s=S.srs[qi];
  if(!ok){S.srs[qi]={b:0,d:addDaysK(1)};return;}
  if(!s||s.d>todayK()) return;
  s.b++;
  if(s.b>=SRS_INT.length) delete S.srs[qi]; else s.d=addDaysK(SRS_INT[s.b]);
}

/* ---------- Fases e plano do dia ---------- */
const PHASES=[
 {id:"f1",t:"Diagnóstico",a:"2026-10-27",b:"2026-11-02",d:"Faça as 3 provas anteriores no app, uma a cada dois dias. Na aba Desempenho, anote os 5 assuntos com pior acerto: eles passam a ser a sua lista de prioridade."},
 {id:"f2",t:"Ataque aos pontos fracos",a:"2026-11-03",b:"2026-11-23",d:"Siga o cronograma com 60% do tempo nos 5 piores assuntos e 40% no resto. Mini simulado na quarta-feira e simulado completo todo domingo de manhã."},
 {id:"f3",t:"Ritmo de prova",a:"2026-11-24",b:"2026-12-03",d:"Dois simulados completos por semana (quarta e domingo), cronometrados e no horário da prova. Entre eles, caderno de erros, flashcards e os assuntos abaixo de 70%."},
 {id:"f4",t:"Descanso ativo",a:"2026-12-04",b:"2026-12-05",d:"Só resumos e caderno de erros, sem conteúdo novo nem simulado. Separe documento com foto, caneta preta de corpo transparente e o cartão de confirmação, e confira o trajeto."}
];
const PAST_DAYS={"2026-10-27":"2018","2026-10-29":"2012","2026-10-31":"2011"};
const WEEKCATS=[["2026-11-01","s1",["log","estoq"]],["2026-11-08","s2",["compras","contr"]],["2026-11-15","s3",["rh","sgi","patr","manut","ind"]],["2026-11-22","s4",["matfin","contab","fluxo","bp","transp","armaz","manus"]],["2026-11-29","s5",["info","lgpd"]],["2026-12-06","s6",null]];
function phaseOf(k){return PHASES.find(p=>k>=p.a&&k<=p.b)||(k<PHASES[0].a?PHASES[0]:null);}
function espCats(){return Object.keys(CATS).filter(isEsp);}
function weakCats(n){
  const sc=k=>{const s=S.stats[k];return s&&s.t>=3?s.c/s.t:.55;};
  return espCats().sort((a,b)=>sc(a)-sc(b)||a.localeCompare(b)).slice(0,n);
}
function weekCats(k){const w=WEEKCATS.find(x=>k<=x[0]);return (w&&w[2])||espCats();}
function dayPlan(k){
  const n=Math.round((kDate(k)-kDate("2026-10-27"))/864e5), wd=kDate(k).getDay(), ph=phaseOf(k);
  const weak=weakCats(5), m=(x,l)=>((x%l)+l)%l;
  const a=weak[m(n,weak.length)];
  const wk=weekCats(k).filter(x=>x!==a), b=wk.length?wk[m(n,wk.length)]:weak[m(n+1,weak.length)];
  const g=n%2?"mat":"port";
  let sp=null;
  if(ph&&ph.id==="f1"&&PAST_DAYS[k]) sp={t:"Prova anterior "+PAST_DAYS[k]+" completa (diagnóstico)",fn:`startPast('${PAST_DAYS[k]}')`};
  if(ph&&ph.id==="f2"&&wd===3) sp={t:"Mini simulado de quarta (20 questões)",fn:"startExam('mini')"};
  if(ph&&ph.id==="f2"&&wd===0) sp={t:"Simulado completo de domingo, no modo prova real",fn:"startReal('full')"};
  if(ph&&ph.id==="f3"&&(wd===0||wd===3)) sp={t:"Simulado completo cronometrado, no modo prova real e no horário da prova",fn:"startReal('full')"};
  return {k,n,ph,a,b,g,sp,rest:!!(ph&&ph.id==="f4"),exam:k==="2026-12-06"};
}
function dayItems(p){
  const it=[{id:"aq",t:"Aquecimento (10 min): revisão espaçada das erradas ou uma rodada de V ou F",act:"startWrong()",lbl:"Revisar"}];
  if(p.exam) return [{id:"prova",t:"Dia da prova: chegar 1 hora antes, com documento com foto e caneta preta de corpo transparente"}];
  if(p.rest){
    it.push({id:"res",t:"Reler os resumos dos assuntos mais fracos: "+weakCats(3).map(k=>CATS[k].n).join(", "),act:"go('vesp')",lbl:"Abrir"});
    it.push({id:"cad",t:"Reler o caderno de erros",act:"go('caderno')",lbl:"Abrir"});
    it.push({id:"sep",t:"Separar documento com foto, caneta preta de corpo transparente e cartão de confirmação; conferir o trajeto"});
    it.push({id:"sono",t:"Dormir de 7 a 8 horas"});
    return it;
  }
  if(p.sp) it.push({id:"sim",t:p.sp.t,act:p.sp.fn,lbl:"Começar"});
  it.push({id:"teo",t:`Teoria (25 min): resumo de ${CATS[p.a].n}. Depois feche e escreva de memória 3 a 5 pontos`,act:`openTopic('${p.a}')`,lbl:"Resumo"});
  it.push({id:"q1",t:`Questões (25 min): treino de ${CATS[p.a].n}`,act:`startTrainCat('${p.a}')`,lbl:"Treinar"});
  it.push({id:"q2",t:`Questões (25 min): treino de ${CATS[p.b].n}, para misturar temas`,act:`startTrainCat('${p.b}')`,lbl:"Treinar"});
  it.push({id:"ger",t:`Gerais: um treino de ${p.g==="port"?"Português":"Matemática"}`,act:`startTrainCat('${p.g}')`,lbl:"Treinar"});
  it.push({id:"cad",t:"Caderno de erros (10 min): anotar o motivo de cada erro e revisar as notas do dia",act:"go('caderno')",lbl:"Abrir"});
  it.push({id:"meta",t:`Meta diária: ${S.goal} questões respondidas`,auto:true});
  return it;
}
function itemDone(k,i){if(i.chk) return i.chk(k)||!!(S.daily[k]&&S.daily[k][i.id]);return i.auto?(S.days[k]||0)>=S.goal:!!(S.daily[k]&&S.daily[k][i.id]);}
function dayScore(k){const its=dayItems(dayPlan(k));return its.filter(i=>itemDone(k,i)).length/its.length;}

/* ---------- Lembretes ---------- */
function toast(t,b){
  let el=$("#toast"); if(!el){el=document.createElement("div");el.id="toast";el.setAttribute("role","status");document.body.appendChild(el);}
  el.innerHTML=`<strong>${esc(t)}</strong><span>${esc(b)}</span><button class="btn sm" onclick="this.parentNode.classList.remove('on');go('guia')">Ver checklist</button><button class="btn ghost sm" onclick="this.parentNode.classList.remove('on')">Fechar</button>`;
  el.classList.add("on");
}
function notify(t,b){
  toast(t,b);
  try{ if("Notification" in window&&Notification.permission==="granted") new Notification(t,{body:b}); }catch(e){}
}
function remCheck(){
  if(!S.rem.on) return;
  const k=todayK(); if(S.rem.last===k) return;
  const now=new Date(), [h,m]=S.rem.h.split(":").map(Number);
  if(now.getHours()*60+now.getMinutes()<h*60+m) return;
  const its=dayItems(dayPlan(k)), left=its.filter(i=>!itemDone(k,i)).length, due=srsDue().length;
  S.rem.last=k; save();
  if(left||due) notify("Hora de estudar",`${left} ${left===1?"item":"itens"} do checklist de hoje em aberto${due?` e ${due} ${due===1?"questão":"questões"} para revisar`:""}.`);
}
setInterval(remCheck,60000); setTimeout(remCheck,4000);
async function remEnable(on){
  S.rem.on=on; S.rem.last=null;
  if(on&&"Notification" in window&&Notification.permission==="default"){try{await Notification.requestPermission();}catch(e){}}
  save(); vConfigKeep();
}
function notifState(){
  if(!("Notification" in window)) return "Este navegador não mostra notificações do sistema; o aviso aparece dentro do app.";
  if(Notification.permission==="granted") return "Notificações do navegador permitidas.";
  if(Notification.permission==="denied") return "O navegador bloqueou as notificações; o aviso aparece dentro do app.";
  return "Ao ativar, o navegador pode pedir permissão para notificar.";
}

function vGuiaKeep(){const y=window.scrollY;vGuia();window.scrollTo({top:y});}

/* ---------- Caderno de erros ---------- */
const REASONS={nao:"Não sabia",conf:"Confundi conceitos",rap:"Li rápido / pegadinha",conta:"Errei a conta"};
function noteForm(qi){
  const n=S.notes[qi]||{};
  return `<div class="note stack" data-qi="${qi}"><span class="muted">Caderno de erros: por que você errou?</span>
  <div class="row" style="gap:6px;flex-wrap:wrap">${Object.entries(REASONS).map(([k,v])=>`<button type="button" class="chipbtn ${n.r===k?"on":""}" data-r="${k}">${v}</button>`).join("")}</div>
  <textarea rows="2" placeholder="O que lembrar da próxima vez (opcional)">${esc(n.t||"")}</textarea>
  <div class="row"><button type="button" class="btn ghost sm nsave">Salvar no caderno</button><span class="muted nst">${S.notes[qi]?"Salvo no caderno":""}</span></div></div>`;
}
document.addEventListener("click",e=>{
  const b=e.target.closest(".note .chipbtn");
  if(b){b.parentNode.querySelectorAll(".chipbtn").forEach(x=>x.classList.remove("on"));b.classList.add("on");return;}
  const s=e.target.closest(".note .nsave"); if(!s) return;
  const box=s.closest(".note"), qi=+box.dataset.qi, on=box.querySelector(".chipbtn.on");
  if(!on){box.querySelector(".nst").textContent="Escolha um motivo primeiro";return;}
  const old=S.notes[qi];
  S.notes[qi]={r:on.dataset.r,t:box.querySelector("textarea").value.trim(),d:old?old.d:todayK(),s:old?old.s:0,n:old?old.n:addDaysK(1)};
  save(); box.querySelector(".nst").textContent="Salvo no caderno";
});
let cadFilter="all";
function vCaderno(){
  const ids=Object.keys(S.notes).map(Number).filter(q=>Q[q]), k=todayK();
  const dueN=ids.filter(q=>S.notes[q].n&&S.notes[q].n<=k);
  const cnt=Object.keys(REASONS).map(r=>[r,ids.filter(q=>S.notes[q].r===r).length]);
  const list=(cadFilter==="all"?ids:ids.filter(q=>S.notes[q].r===cadFilter)).sort((a,b)=>S.notes[b].d.localeCompare(S.notes[a].d));
  const card=(qi,rev)=>{const q=Q[qi],n=S.notes[qi];return `<details class="rev" ${rev?"open":""}><summary><span class="mark bad">✗</span><span>${esc(q[1].length>100?q[1].slice(0,100)+"…":q[1])}</span></summary>
    <div class="stack" style="margin-top:10px"><span class="qcat" style="color:var(--c-${CATS[q.c].b})">${esc(CATS[q.c].n)} · ${REASONS[n.r]} · anotada em ${fmtK(n.d)}</span>
    <p class="qtext" style="font-size:16px">${esc(q[1])}</p><p>Gabarito: <b>${esc(q[2][0])}</b></p>
    ${n.t?`<div class="rule"><b>Sua nota:</b> ${esc(n.t)}</div>`:""}<div class="expl">${esc(q[3])}</div>
    <div class="row">${rev?`<button class="btn sm" onclick="noteRev(${qi})">Revisei</button>`:`<span class="muted">${n.n?"Próxima revisão em "+fmtK(n.n):"Revisões concluídas"}</span>`}<button class="btn ghost sm" onclick="noteDel(${qi})">Apagar</button></div></div></details>`;};
  $("#view").innerHTML=`
  <div><button class="btn ghost sm" onclick="go('pratica')">← Praticar</button></div>
  <div class="stack"><h2>Caderno de erros</h2><p class="muted">Cada erro anotado volta para revisão 1, 3, 7 e 15 dias depois. Para anotar, use o quadro que aparece abaixo de cada questão errada no treino e na correção.</p></div>
  ${ids.length?`<div class="panel stack"><h3>Por que você erra</h3>${cnt.map(([r,c])=>bar(REASONS[r]+` (${c})`,c,ids.length)).join("")}<p class="muted">Muitos “li rápido”: circule EXCETO e NÃO antes de ler as alternativas. Muitos “errei a conta”: refaça as contas à mão no treino de Matemática.</p></div>
  <section class="stack"><h3>Para revisar hoje (${dueN.length})</h3>${dueN.length?dueN.map(q=>card(q,true)).join(""):'<p class="muted">Nada para hoje.</p>'}</section>
  <section class="stack"><div class="row" style="justify-content:space-between"><h3>Todas as notas (${ids.length})</h3>
    <select id="cadF"><option value="all">Todos os motivos</option>${Object.entries(REASONS).map(([r,v])=>`<option value="${r}" ${cadFilter===r?"selected":""}>${v}</option>`).join("")}</select></div>
    ${list.map(q=>card(q,false)).join("")}</section>`
  :`<div class="panel stack"><h3>Caderno vazio</h3><p class="muted">Quando errar uma questão no treino ou no simulado, escolha o motivo do erro no quadro abaixo da explicação e salve. A nota aparece aqui.</p></div>`}`;
  const f=$("#cadF"); if(f) f.onchange=()=>{cadFilter=f.value;vCaderno();};
}
function noteRev(qi){const n=S.notes[qi];n.s=(n.s||0)+1;n.n=n.s>=SRS_INT.length?null:addDaysK(SRS_INT[n.s]);addDay(0);save();const y=window.scrollY;vCaderno();window.scrollTo({top:y});}
function noteDel(qi){delete S.notes[qi];save();const y=window.scrollY;vCaderno();window.scrollTo({top:y});}

/* ---------- Previsão de nota ---------- */
function parseBr(s){const m=/^(\d{2})\/(\d{2})\/(\d{4})/.exec(s||"");return m?new Date(+m[3],+m[2]-1,+m[1]):null;}
function espOf(h){let c=0,t=0;ESP_B.forEach(k=>{const b=h.byB&&h.byB[k];if(b){c+=b.c;t+=b.t;}});return {c,t};}
function forecastPanel(){
  const ex=S.hist.filter(h=>espOf(h).t>=8);
  if(!ex.length) return `<div class="panel stack"><h3>Previsão de nota</h3><p class="muted">Faça um simulado (ou um treino com pelo menos 8 questões específicas) para ver a projeção da sua nota nas 40 específicas.</p></div>`;
  const last=ex.slice(0,3), r=last.reduce((s,h)=>{const e=espOf(h);return s+e.c/e.t;},0)/last.length, proj=Math.round(r*40);
  const wk={}; ex.forEach(h=>{const d=parseBr(h.date); if(!d) return; const m=new Date(d); m.setDate(d.getDate()-((d.getDay()+6)%7)); const key=dkey(m); const e=espOf(h); wk[key]=wk[key]||{c:0,t:0}; wk[key].c+=e.c; wk[key].t+=e.t;});
  const weeks=Object.keys(wk).sort().slice(-6), pc=weeks.map(w=>Math.round(wk[w].c/wk[w].t*100));
  const stall=pc.length>=3&&pc[pc.length-1]<=pc[pc.length-2]&&pc[pc.length-2]<=pc[pc.length-3];
  const st=proj>=32?["ok","Na meta de classificação"]:proj>=20?["mid","Acima do corte, abaixo da meta"]:["bad","Abaixo do corte de 20"];
  return `<div class="panel stack"><h3>Previsão de nota</h3>
    <div class="grid2"><div class="score"><span class="muted">Projeção nas específicas</span><span class="v num">${proj}/40</span><span class="pill ${st[0]}">${st[1]}</span></div>
    <div class="score"><span class="muted">Base</span><span class="v num">${Math.round(r*100)}%</span><span class="muted">média dos últimos ${last.length} ${last.length===1?"resultado":"resultados"} com específicas</span></div></div>
    <p class="muted">Corte: 20 acertos. Meta de classificação: 32 ou mais (80%). Mire 85% nos simulados para chegar com folga.</p>
    <h3>Tendência por semana</h3>${weeks.map((w,i)=>bar("Semana de "+fmtK(w)+(i?(pc[i]>pc[i-1]?" ↑":pc[i]<pc[i-1]?" ↓":" ="):""),wk[w].c,wk[w].t)).join("")}
    ${stall?`<div class="rule"><span class="pill bad">Atenção</span> O acerto nas específicas não sobe há duas semanas. Mude o método nos assuntos mais fracos: mais teoria ou mais questões comentadas, não só mais horas.</div>`:""}</div>`;
}

/* ---------- Modo prova real (caderno + cartão-resposta) ---------- */
let rq=null;
function startReal(src){
  let ids;
  if(src==="full"){const n={port:10,mat:10,adm:9,fin:9,log:15,info:7};ids=[].concat(...Object.keys(n).map(b=>pickBlock(b,n[b])));}
  else{const ord=["port","mat"];ids=QI().filter(i=>Q[i][4]===src);const g=i=>{const x=ord.indexOf(Q[i].c);return x<0?2:x;};ids.sort((a,b)=>g(a)-g(b)||Q[a][5]-Q[b][5]);}
  if(tick) clearInterval(tick);
  rq={ids,src,order:ids.map(()=>shuffle([0,1,2,3,4])),cad:ids.map(()=>null),card:ids.map(()=>null),flag:ids.map(()=>false),start:Date.now(),limit:src==="full"?4*3600:ids.length*240,tab:"cad",confirm:false,warned:false};
  tick=setInterval(rqTick,1000); go("real");
}
function rqLeft(){return Math.round(rq.limit-(Date.now()-rq.start)/1000);}
function rqTick(){
  if(!rq){clearInterval(tick);return;}
  const r=rqLeft(), el=$("#rtimer");
  if(el){el.textContent=fmt(r);el.classList.toggle("low",r<=1800);}
  if(r<=1800&&!rq.warned){rq.warned=true;toast("Faltam 30 minutos","Pare e passe as respostas para o cartão-resposta. Só o cartão vale nota.");}
  if(r<=0) realFinish();
}
function vReal(){
  if(!rq){go("pratica");return;}
  const nCard=rq.card.filter(x=>x!==null).length, diff=rq.ids.filter((_,i)=>rq.cad[i]!==null&&rq.card[i]!==null&&rq.cad[i]!==rq.card[i]).length, nFlag=rq.flag.filter(Boolean).length;
  const head=`<div class="qhead"><button class="btn ghost sm qexit" onclick="go('pratica')">← Sair</button><div class="stack" style="gap:2px"><strong>Prova real · ${rq.src==="full"?"simulado completo":"Transpetro "+rq.src}</strong><span class="muted num">${rq.ids.length} questões · ${nCard} marcadas no cartão${nFlag?` · ${nFlag} para voltar`:""}</span></div><button class="btn ghost sm fzq" onclick="fzCycle()" aria-label="Tamanho da letra">Aa</button><span class="timer num" id="rtimer">${fmt(rqLeft())}</span></div>
  <div class="segtabs" role="tablist"><button role="tab" aria-selected="${rq.tab==="cad"}" onclick="rq.tab='cad';vRealKeep(true)">Caderno de questões</button><button role="tab" aria-selected="${rq.tab==="card"}" onclick="rq.tab='card';vRealKeep(true)">Cartão-resposta (${nCard}/${rq.ids.length})</button></div>`;
  let body;
  if(rq.tab==="cad"){
    body=`<div class="panel stack"><span class="muted">Ir para a questão (amarelo = voltar depois)</span><div class="qgrid">${rq.ids.map((_,j)=>`<button class="qnum ${rq.cad[j]!==null?"done":""} ${rq.flag[j]?"flag":""}" onclick="document.getElementById('rq${j}').scrollIntoView({behavior:'smooth'})">${j+1}</button>`).join("")}</div></div>
    <p class="muted">Marque aqui como rascunho, igual a riscar o caderno da prova. A nota vem só do cartão-resposta: transcreva antes do tempo acabar.</p>
    ${rq.ids.map((qi,j)=>{const q=Q[qi];return `<article class="panel stack" id="rq${j}"><div class="row" style="justify-content:space-between"><span class="qcat">Questão ${j+1}</span><button class="btn ghost sm rflag ${rq.flag[j]?"on":""}" data-j="${j}">${rq.flag[j]?"Marcada para voltar":"Voltar depois"}</button></div>
      <p class="qtext">${esc(q[1])}</p><div class="opts">${rq.order[j].map((oi,pos)=>`<button class="opt ${rq.cad[j]===pos?"sel":""}" data-j="${j}" data-p="${pos}"><span class="l">${L[pos]}</span><span>${esc(q[2][oi])}</span></button>`).join("")}</div>${repBtn(qi)}</article>`;}).join("")}
    <div class="row"><button class="btn" onclick="rq.tab='card';vRealKeep(true)">Ir para o cartão-resposta</button></div>`;
  }else{
    body=`<div class="panel stack"><p class="muted">Preencha uma bolha por questão. Na prova real, cartão rasurado ou com duas marcas perde a questão; aqui você pode corrigir, mas treine marcar de primeira.</p>
      ${diff?`<div class="rule"><span class="pill bad">${diff}</span> ${diff===1?"questão está":"questões estão"} diferente${diff===1?"":"s"} no cartão e no caderno. Confira.</div>`:""}
      <div class="sheet">${rq.ids.map((_,j)=>`<div class="srow ${rq.cad[j]!==null&&rq.card[j]!==null&&rq.cad[j]!==rq.card[j]?"diff":""}"><span class="num">${String(j+1).padStart(2,"0")}</span>${[0,1,2,3,4].map(p=>`<button class="bub ${rq.card[j]===p?"on":""}" data-j="${j}" data-p="${p}" aria-label="Questão ${j+1}, letra ${L[p]}">${L[p]}</button>`).join("")}</div>`).join("")}</div></div>`;
  }
  $("#view").innerHTML=head+body+`
  <div class="row"><button class="btn warn" onclick="rq.confirm=true;vRealKeep()">Entregar a prova</button></div>
  <div class="rule confirm ${rq.confirm?"on":""} row" style="justify-content:space-between"><span>${rq.ids.length-nCard?`${rq.ids.length-nCard} questões em branco no cartão. Entregar mesmo assim?`:"Entregar e ver a correção?"}</span><span class="row"><button class="btn ghost" onclick="rq.confirm=false;vRealKeep()">Voltar</button><button class="btn warn" onclick="realFinish()">Entregar</button></span></div>`;
  document.querySelectorAll("#view .opt[data-j]").forEach(b=>b.onclick=()=>{const j=+b.dataset.j,p=+b.dataset.p;rq.cad[j]=rq.cad[j]===p?null:p;vRealKeep();});
  document.querySelectorAll("#view .bub").forEach(b=>b.onclick=()=>{const j=+b.dataset.j,p=+b.dataset.p;rq.card[j]=rq.card[j]===p?null:p;vRealKeep();});
  document.querySelectorAll("#view .rflag").forEach(b=>b.onclick=()=>{const j=+b.dataset.j;rq.flag[j]=!rq.flag[j];vRealKeep();});
  if(rq.confirm) $(".confirm").scrollIntoView({block:"nearest"});
}
function vRealKeep(top){const y=window.scrollY;vReal();window.scrollTo({top:top?0:y});}
function realFinish(){
  if(!rq) return;
  if(tick) clearInterval(tick);
  const diff=rq.ids.filter((_,i)=>rq.cad[i]!==null&&rq.cad[i]!==rq.card[i]).length;
  quiz={ids:rq.ids,mode:"exam",label:rq.src==="full"?"Prova real (simulado completo)":"Prova real Transpetro "+rq.src,limit:rq.limit,start:rq.start,i:0,ans:rq.card.slice(),order:rq.order,finished:false,confirm:false,real:true,cardDiff:diff};
  rq=null; finish();
}

/* ---------- Links e vídeos por tópico ---------- */
const PL="https://www.planalto.gov.br/ccivil_03/";
const LINKS={
 rh:[["CLT (Decreto-Lei 5.452/1943)",PL+"decreto-lei/del5452.htm","lei"],["Lei 14.457/2022: prevenção do assédio (CIPA)",PL+"_ato2019-2022/2022/lei/l14457.htm","lei"],["Manual de Redação da Presidência da República","https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica","site"]],
 sgi:[["ISO 9001: gestão da qualidade (página oficial)","https://www.iso.org/iso-9001-quality-management.html","site"],["ISO 14001: gestão ambiental (página oficial)","https://www.iso.org/iso-14001-environmental-management.html","site"],["ISO 45001: saúde e segurança ocupacional (página oficial)","https://www.iso.org/iso-45001-occupational-health-and-safety.html","site"]],
 patr:[["Lei 6.404/1976 (Lei das S.A.), arts. 179 a 183",PL+"leis/l6404consol.htm","lei"],["Pronunciamentos do CPC (CPC 27: imobilizado; CPC 01: impairment)","https://www.cpc.org.br/CPC/Documentos-Emitidos/Pronunciamentos","site"]],
 contab:[["Pronunciamentos do CPC (CPC 00: estrutura conceitual)","https://www.cpc.org.br/CPC/Documentos-Emitidos/Pronunciamentos","site"],["Lei 6.404/1976 (Lei das S.A.)",PL+"leis/l6404consol.htm","lei"]],
 fluxo:[["Pronunciamentos do CPC (CPC 03: Demonstração dos Fluxos de Caixa)","https://www.cpc.org.br/CPC/Documentos-Emitidos/Pronunciamentos","site"]],
 bp:[["Lei 6.404/1976, arts. 176 a 188 (demonstrações)",PL+"leis/l6404consol.htm","lei"],["Pronunciamentos do CPC (CPC 26: apresentação das demonstrações)","https://www.cpc.org.br/CPC/Documentos-Emitidos/Pronunciamentos","site"]],
 transp:[["Lei 9.611/1998: transporte multimodal (OTM)",PL+"leis/l9611.htm","lei"],["ANTT (transporte terrestre)","https://www.gov.br/antt/pt-br","site"],["ANTAQ (transporte aquaviário)","https://www.gov.br/antaq/pt-br","site"]],
 compras:[["Lei 13.303/2016 (estatais: licitações e contratos)",PL+"_ato2015-2018/2016/lei/l13303.htm","lei"],["Lei 14.133/2021 (nova lei de licitações)",PL+"_ato2019-2022/2021/lei/l14133.htm","lei"]],
 contr:[["Lei 13.303/2016, arts. 68 a 91 (contratos)",PL+"_ato2015-2018/2016/lei/l13303.htm","lei"],["Lei 14.133/2021 (gestão e fiscalização de contratos)",PL+"_ato2019-2022/2021/lei/l14133.htm","lei"],["Lei 14.063/2020 (assinaturas eletrônicas)",PL+"_ato2019-2022/2020/lei/l14063.htm","lei"]],
 info:[["Atalhos de teclado no Windows (Microsoft)","https://support.microsoft.com/pt-br/accessibility/windows/keyboard-shortcuts-in-windows","site"],["Suporte do Excel em português (Microsoft)","https://support.microsoft.com/pt-br/excel","site"],["Suporte do Word em português (Microsoft)","https://support.microsoft.com/pt-br/word","site"]],
 lgpd:[["LGPD (Lei 13.709/2018)",PL+"_ato2015-2018/2018/lei/l13709.htm","lei"],["ANPD: Autoridade Nacional de Proteção de Dados","https://www.gov.br/anpd/pt-br","site"],["Cartilha de Segurança para Internet (CERT.br)","https://cartilha.cert.br/","site"]],
 port:[["Manual de Redação da Presidência da República","https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica","site"],["VOLP: Vocabulário Ortográfico (ABL)","https://www.academia.org.br/nossa-lingua/busca-no-vocabulario","site"],["Acordo Ortográfico (Decreto 6.583/2008)",PL+"_ato2007-2010/2008/decreto/d6583.htm","lei"]],
 mat:[["Khan Academy em português: Matemática","https://pt.khanacademy.org/math","site"]]
};
const SEARCH={
 rh:"gestão de pessoas recrutamento seleção treinamento avaliação de desempenho concurso",sgi:"sistema de gestão integrado ISO 9001 14001 45001 PDCA concurso",
 patr:"administração patrimonial inventário classificação de bens concurso",manut:"tipos de manutenção corretiva preventiva preditiva MTBF MTTR concurso",
 ind:"indicadores de desempenho eficiência eficácia BSC ESG concurso",matfin:"matemática financeira juros compostos desconto racional concurso Cesgranrio",
 contab:"contabilidade partidas dobradas lançamentos contábeis concurso",fluxo:"demonstração dos fluxos de caixa método direto e indireto CPC 03",
 bp:"balanço patrimonial e DRE estrutura Lei 6.404 concurso",log:"logística e cadeia de suprimentos concurso Cesgranrio",
 transp:"modais de transporte intermodal multimodal OTM concurso",estoq:"gestão de estoques curva ABC lote econômico ponto de pedido concurso",
 armaz:"armazenagem layout paletização drive-in concurso",manus:"movimentação de materiais embalagem unitização concurso",
 compras:"Lei 13.303 licitações empresas estatais aula concurso",contr:"gestão e fiscalização de contratos Lei 13.303 14.133 aula",
 info:"Windows 11 Word Excel atalhos concurso Cesgranrio",lgpd:"LGPD segurança da informação malware phishing concurso",
 port:"português Cesgranrio crase concordância regência aula",mat:"matemática nível médio Cesgranrio porcentagem probabilidade progressões aula"
};
const yt=q=>"https://www.youtube.com/results?search_query="+encodeURIComponent(q);
const gg=q=>"https://www.google.com/search?q="+encodeURIComponent(q);
function linkList(k){
  const ic={lei:"Lei",site:"Site",video:"Vídeo"};
  const own=(LINKS[k]||[]).map(([t,u,ty])=>`<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a> <span class="tchip">${ic[ty]}</span></li>`).join("");
  const q=SEARCH[k]||CATS[k].n;
  return `<ul class="links">${own}
    <li><a href="${yt(q)}" target="_blank" rel="noopener">Aulas em vídeo no YouTube: ${esc(CATS[k].n)}</a> <span class="tchip">Vídeo</span></li>
    <li><a href="${yt("questões comentadas Cesgranrio "+CATS[k].n)}" target="_blank" rel="noopener">Questões Cesgranrio comentadas em vídeo</a> <span class="tchip">Vídeo</span></li>
    <li><a href="${gg(q+" resumo")}" target="_blank" rel="noopener">Resumos e artigos na web</a> <span class="tchip">Busca</span></li></ul>`;
}
let linkCur="all";
function vLinks(){
  const keys=linkCur==="all"?Object.keys(CATS):[linkCur];
  $("#view").innerHTML=`
  <div class="stack"><h2>Links e vídeos</h2><p class="muted">Para cada tópico do edital: a fonte oficial (lei, norma ou manual) quando existe, aulas em vídeo e resumos. Os vídeos abrem uma busca no YouTube já filtrada pelo tema, para você escolher a aula com mais visualizações e mais recente. Leis: leia a versão atualizada no site do Planalto.</p>
  <select id="lkSel"><option value="all">Todos os tópicos</option>${Object.entries(BLOCKS).map(([b,bn])=>`<optgroup label="${esc(bn)}">${Object.keys(CATS).filter(k=>CATS[k].b===b).map(k=>`<option value="${k}" ${linkCur===k?"selected":""}>${esc(CATS[k].n)}</option>`).join("")}</optgroup>`).join("")}</select></div>
  <div class="panel stack"><h3>Canais e sites gerais</h3><ul class="links">
    <li><a href="${yt("Transpetro 2026 nível médio administração e controle")}" target="_blank" rel="noopener">Aulas e revisões para a Transpetro 2026 no YouTube</a> <span class="tchip">Vídeo</span></li>
    <li><a href="https://www.cesgranrio.org.br" target="_blank" rel="noopener">Fundação Cesgranrio (editais, gabaritos e provas)</a> <span class="tchip">Site</span></li>
    <li><a href="https://www.pciconcursos.com.br/provas/transpetro-medio" target="_blank" rel="noopener">Provas anteriores da Transpetro nível médio (PCI Concursos)</a> <span class="tchip">Site</span></li></ul></div>
  ${Object.entries(BLOCKS).map(([b,bn])=>{const ks=keys.filter(k=>CATS[k].b===b);return ks.length?`<section class="stack"><h3>${esc(bn)}</h3>${ks.map(k=>`<details class="panel lk" style="--bc:var(--c-${b})" ${linkCur!=="all"?"open":""}><summary class="row" style="justify-content:space-between"><strong class="bh">${esc(CATS[k].n)}</strong><span class="muted">abrir</span></summary><div class="stack" style="margin-top:8px">${linkList(k)}${RES[k]?`<div><button class="btn ghost sm" onclick="openTopic('${k}')">Resumo no app</button></div>`:""}</div></details>`).join("")}</section>`:"";}).join("")}`;
  $("#lkSel").onchange=e=>{linkCur=e.target.value;vLinks();};
}

/* ---------- Backup e sincronização ---------- */
const SYNC={st:"local",at:null,db:null,uid:null,t:null};
SAVE_HOOKS.push(syncPush);
function syncPush(){
  if(!SYNC.db||!SYNC.uid) return;
  clearTimeout(SYNC.t);
  SYNC.t=setTimeout(async()=>{
    try{await SYNC.db.doc("data/users/"+SYNC.uid+"/progress").set({s:JSON.stringify(S),upd:S.upd||Date.now()});SYNC.st="ok";SYNC.at=new Date();}
    catch(e){SYNC.st="err";}
    syncLbl();
  },2000);
}
function adoptRemote(d){
  try{S=Object.assign({hist:[],stats:{},wrong:[],plan:{}},JSON.parse(d.s));}catch(e){return;}
  initState(); saveLocal(); applyTheme&&applyTheme(); clKick();
  if(!["quiz","real","vf","match"].includes(current)){const y=window.scrollY;go(current);window.scrollTo({top:y});}
}
(async()=>{
  try{
    if(!window.claude||!window.claude.use){syncLbl();return;}
    const [db,user]=await Promise.all([window.claude.use("db"),window.claude.use("user")]);
    if(!db||!user){syncLbl();return;}
    const uid=await user.id(); if(!uid){syncLbl();return;}
    SYNC.db=db; SYNC.uid=uid;
    let first=true;
    db.doc("data/users/"+uid+"/progress").onSnapshot(snap=>{
      if(snap.metadata&&snap.metadata.hasPendingWrites) return;
      if(snap.exists){
        const d=snap.data(), ru=d.upd||0, lu=S.upd||0;
        if(ru>lu) adoptRemote(d); else if(first&&lu>ru) syncPush();
        SYNC.st="ok"; SYNC.at=new Date();
      } else if(first) syncPush();
      first=false; syncLbl();
    },()=>{SYNC.st="err";syncLbl();});
  }catch(e){SYNC.st="err";syncLbl();}
})();
function syncText(){
  if(SYNC.st==="ok") return "Sincronizado com a sua conta"+(SYNC.at?" às "+SYNC.at.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):"")+". Abra o app em outro aparelho, com a mesma conta do claude.ai, e o progresso aparece lá.";
  if(SYNC.st==="err") return "Não foi possível sincronizar agora. O progresso continua salvo neste aparelho; tente de novo mais tarde ou use o código de backup.";
  if(SYNC.db) return "Conectando à sua conta…";
  return window.claude&&window.claude.use?"Este aparelho ainda não está ligado à sua conta do claude.ai. Use a sincronização automática acima ou o código de backup abaixo.":"A conta do claude.ai só vale no link do claude.ai. Aqui, use a sincronização automática acima; o código de backup abaixo é a cópia manual.";
}
function syncLbl(){document.querySelectorAll(".synclbl").forEach(e=>{e.textContent=syncText();e.className="synclbl "+(SYNC.st==="ok"?"ok":SYNC.st==="err"?"bad":"");});}
function syncWire(){
  const g=$("#bkGen"); if(!g) return;
  g.onclick=()=>{$("#bkTxt").value="TP26:"+btoa(unescape(encodeURIComponent(JSON.stringify(S))));$("#bkMsg").textContent="Código gerado.";};
  $("#bkCopy").onclick=async()=>{const t=$("#bkTxt");if(!t.value) g.onclick();try{await navigator.clipboard.writeText(t.value);$("#bkMsg").textContent="Copiado.";}catch(e){t.select();$("#bkMsg").textContent="Selecione e copie o texto.";}};
  $("#bkImp").onclick=()=>{
    const v=$("#bkTxt").value.trim().replace(/^TP26:/,"");
    try{const o=JSON.parse(decodeURIComponent(escape(atob(v))));if(!o||!Array.isArray(o.hist)) throw 0;S=Object.assign({hist:[],stats:{},wrong:[],plan:{}},o);initState();save();$("#bkMsg").textContent="Progresso importado.";setTimeout(()=>go("guia"),600);}
    catch(e){$("#bkMsg").textContent="Código inválido. Copie o código inteiro, começando por TP26:";}
  };
}

