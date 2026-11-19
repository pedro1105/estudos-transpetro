/* ---------- v34: modo foco, cartões de Hoje, atualização automática e resumo semanal ----------
   Dados novos (todos opcionais, o progresso antigo continua valendo):
   S.hide = {atraso,wk,meta,ferr,areas: true para esconder em Hoje}; S.wkPushOff = true desliga o resumo semanal. */

/* ---------- Modo foco: só a etapa atual, a próxima e o cronômetro ---------- */
let focoOn=false;
/* vale só para o dia em que foi ligado (e continua se o Android fechar o app ou ele se atualizar) */
const FOCO_K="transpetro26-foco";
try{focoOn=localStorage.getItem(FOCO_K)===todayK();}catch(e){}
function focoSet(on){focoOn=on;try{on?localStorage.setItem(FOCO_K,todayK()):localStorage.removeItem(FOCO_K);}catch(e){}}
function focoStart(){focoSet(true);go("foco");}
function focoExit(){focoSet(false);go("guia");}
/* com o modo foco ligado, voltar para Hoje (ao terminar um treino, por exemplo) volta para o foco */
const _go34=go;
go=function(v){if(focoOn&&(v==="guia"||v==="home"))v="foco";_go34(v);};
function vFoco(){
  document.body.classList.add("focus","foco");
  const k=todayK(), its=dayItems(dayPlan(k)), steps=its.filter(i=>!i.auto), sc=schedule(k,its);
  const rows=sc.rows.filter(r=>!r.pause), cur=rows.find(r=>!itemDone(k,r.i)), nx=cur?rows.slice(rows.indexOf(cur)+1).find(r=>!itemDone(k,r.i)):null;
  const done=steps.filter(i=>itemDone(k,i)).length, how=cur?STEP_HOW[cur.i.id]:"";
  const lock=cur&&cur.i.chk;
  $("#view").innerHTML=`<div class="focotop"><div class="stack" style="gap:2px"><h2>Modo foco</h2><span class="muted num">${done} de ${steps.length} etapas de hoje</span></div>
    <button class="btn ghost sm" onclick="focoExit()">Sair do foco</button></div>
  <div class="track"><div class="fill" style="width:${steps.length?done/steps.length*100:0}%"></div></div>
  ${cur?`<section class="panel stack fococard">
    <span class="muted num">${cur.a!==null?`${hm(cur.a)} a ${hm(cur.b)} · `:""}agora</span>
    <h3>${cur.p.h?esc(cur.p.h)+": ":""}${esc(cur.p.d)}</h3>
    ${how?`<p class="muted">${esc(how)}</p>`:""}
    <div class="row">${cur.i.act?`<button class="btn" onclick="tlFrom='${k}';${cur.i.act}">${cur.i.lbl}</button>`:""}
      ${lock?`<span class="muted">Marca sozinho quando você concluir.</span>`:`<button class="btn ghost" onclick="focoDone('${cur.i.id}')">Concluí esta etapa</button>`}</div>
  </section>
  ${nx?`<p class="muted">Depois: ${nx.a!==null?`<span class="num">${hm(nx.a)}</span> · `:""}${nx.p.h?esc(nx.p.h)+": ":""}${esc(nx.p.d)}</p>`:`<p class="muted">Esta é a última etapa de hoje.</p>`}`
  :`<section class="panel stack fococard"><h3>Programação de hoje concluída</h3><p class="muted">Tudo feito. Se quiser continuar, um Desafio do dia ou uma revisão de erradas fixam o que você estudou.</p>
    <div class="row"><button class="btn" onclick="focoExit()">Voltar para Hoje</button></div></section>`}
  ${pomoPanel()}`;
  pomoWire();
}
function focoDone(id){const k=todayK();S.daily[k]=S.daily[k]||{};S.daily[k][id]=true;save();vFoco();}
VIEWS.foco=()=>vFoco();
TABOF.foco="guia";
/* o cronômetro, ao terminar um bloco, redesenha a tela do foco */
let focoPomo=false;
setInterval(()=>{const h=!!S.pomo;if(focoPomo&&!h&&current==="foco")vFoco();focoPomo=h;},1000);
/* go() tira a classe focus só de quiz/real; aqui tira a do foco ao sair */
const _go34b=go;
go=function(v){_go34b(v);if(current!=="foco")document.body.classList.remove("foco");};
/* atalho do ícone: ?a=foco abre direto no modo foco */
try{if(new URLSearchParams(location.search).get("a")==="foco"){focoSet(true);history.replaceState(null,"",location.pathname+location.hash);}}catch(e){}

/* ---------- Escolher os cartões de Hoje ---------- */
const HOJE_CARDS=[["atraso","Aviso de assuntos atrasados","o botão Reorganizar continua no Cronograma"],["wk","Resumo da semana","aparece no domingo e na segunda"],["meta","Meta de questões e sequência de dias","os números continuam em Progresso"],["ferr","Cronômetro de estudo","continua no modo foco"],["areas","Como aproveitar cada área",""]];
function hojeCfgHTML(){
  const H=S.hide||{};
  const n=HOJE_CARDS.filter(([k])=>!H[k]).length;
  return `<details class="panel fold" id="hojeSec"><summary>Tela Hoje<span class="muted">${n} de ${HOJE_CARDS.length} cartões aparecem · toque para escolher</span></summary><div class="foldin"><div class="stack inner">
    <p class="muted">Desmarque o que você não usa. A programação do dia sempre aparece.</p>
    ${HOJE_CARDS.map(([k,t,d])=>`<label class="rrow"><input type="checkbox" data-hc="${k}" ${H[k]?"":"checked"}><span>${esc(t)}${d?`<br><span class="muted">${esc(d)}</span>`:""}</span></label>`).join("")}</div></div></details>`;
}
function hojeCfg(){go("config");setTimeout(()=>{const e=$("#hojeSec");if(e){e.open=true;e.scrollIntoView({block:"start"});}},150);}

/* ---------- Resumo semanal: domingo às 21h, pela notificação com o app fechado ---------- */
const WK_HM="21:00";
function wkSummary(a){
  const w=weekData(a), p=weekData(plusK(a,-7));
  const acc=v=>{let c=0,t=0;Object.values(v.cat).forEach(x=>{c+=x.c;t+=x.t;});if(!t){c=v.c;t=v.t;}return t?Math.round(c/t*100):null;};
  const x=acc(w), y=acc(p), foc=weekFocus(w).slice(0,2).map(c=>CATS[c].n);
  if(!w.q) return "Nenhuma questão registrada nesta semana. Amanhã é um bom dia para recomeçar: abra a programação de Hoje.";
  return `${w.q} questões em ${w.days} de 7 dias${x===null?"":`, ${x}% de acerto`}${y===null||x===null?"":` (semana anterior ${y}%)`}. ${foc.length?"Foque em: "+foc.join(" e ")+".":""}`;
}
const _pushPlan34=pushPlan;
pushPlan=function(){
  const out=_pushPlan34();
  if(S.wkPushOff) return out;
  const d=new Date(), now=Date.now(); d.setDate(d.getDate()+((7-d.getDay())%7));
  const [h,m]=WK_HM.split(":").map(Number); d.setHours(h,m,0,0);
  if(d.getTime()<=now) d.setDate(d.getDate()+7);
  const k=dkey(d);
  if(k<"2026-12-06") out.push({t:d.getTime(),ti:"Resumo da semana",b:wkSummary(monday(k)),u:"./"});
  return out.sort((a,b)=>a.t-b.t);
};
/* com o app aberto no domingo à noite, o mesmo resumo aparece como aviso (uma vez por semana) */
function wkCheck(){
  if(S.wkPushOff) return;
  const now=new Date(), k=todayK(); if(now.getDay()!==0||k>="2026-12-06") return;
  const [h,m]=WK_HM.split(":").map(Number); if(now.getHours()*60+now.getMinutes()<h*60+m) return;
  const a=monday(k); if(S.wkNote===a) return;
  S.wkNote=a; save(); toast("Resumo da semana",wkSummary(a));
}
setInterval(wkCheck,60000); setTimeout(wkCheck,5000);

/* ---------- Configurações: cartões de Hoje e resumo semanal ---------- */
const _vConfig34=vConfig;
vConfig=function(){
  _vConfig34();
  const rot=$("#stH")&&$("#stH").closest("section");
  if(rot) rot.insertAdjacentHTML("afterend",hojeCfgHTML());
  const lem=$("#remOn")&&$("#remOn").closest("section");
  if(lem) lem.querySelector(".row").insertAdjacentHTML("afterend",`<label class="rrow"><input type="checkbox" id="wkOn" ${S.wkPushOff?"":"checked"}><span>Resumo da semana no domingo às 21h<br><span class="muted">questões, acerto e onde focar; com o app fechado, chega como notificação</span></span></label>`);
  document.querySelectorAll("[data-hc]").forEach(c=>c.onchange=()=>{S.hide=S.hide||{};if(c.checked)delete S.hide[c.dataset.hc];else S.hide[c.dataset.hc]=true;save();});
  const w=$("#wkOn"); if(w) w.onchange=()=>{if(w.checked)delete S.wkPushOff;else S.wkPushOff=true;save();};
};

/* ---------- Atualização: aplica a versão nova sozinha ----------
   No Android o app instalado fica dias aberto em segundo plano, e a versão nova só entrava ao tocar em
   "Atualizar" (o celular ficou na v32 uma semana depois da v33). Agora, quando a versão nova está pronta,
   o app recarrega ao sair da tela ou ao voltar para ela, desde que não haja prova, treino, jogo ou áudio em andamento. */
let updPending=false;
function updSafe(){
  if(quiz&&!quiz.finished) return false;
  if(typeof rq!=="undefined"&&rq) return false;
  if(typeof AU!=="undefined"&&AU&&AU.play) return false;
  if(typeof SND!=="undefined"&&SND.k) return false;
  return ["guia","home","foco","crono","pratica","jogos","stats","cont","config","result","caderno","links"].includes(current);
}
function updApply(){if(!updPending||!updSafe())return;updPending=false;try{saveLocal();}catch(e){}location.reload();}
const _swUpdated34=swUpdated;
swUpdated=function(){updPending=true;if(document.visibilityState==="hidden")updApply();else _swUpdated34();};
document.addEventListener("visibilitychange",()=>{if(updPending)updApply();});

/* cada aparelho grava também a versão guardada pelo service worker (para conferir pela nuvem) */
const _devMark34=devMark;
devMark=function(){
  _devMark34();
  if(!("caches" in window)) return;
  caches.keys().then(ks=>{const c=ks.map(x=>/^transpetro-v(\d+)$/.exec(x)).filter(Boolean).map(x=>+x[1]).sort((a,b)=>b-a)[0];
    let id="x";try{id=localStorage.getItem("transpetro26-dev");}catch(e){}
    if(c&&S.devs&&S.devs[id]&&S.devs[id].c!==c){S.devs[id].c=c;save();}}).catch(()=>{});
};
setTimeout(devMark,2500);
