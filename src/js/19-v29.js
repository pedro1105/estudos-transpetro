/* ---------- v29: correção que se marca sozinha, aviso sempre visível e cronograma conferido ----------
   - Correção e Caderno de erros abrem uma tela com as questões erradas do dia (ou do simulado),
     com gabarito, explicação e os motivos: um toque no motivo já salva. A etapa marca sozinha quando
     todo erro tem motivo, ou quando não houve erro nenhum.
   - O aviso (toast) volta para cima da barra de abas sempre que a barra reaparece.
   - Dias anteriores: Desafio do dia e Reforço contam pelo que foi feito naquele dia; a nota do dia
     no histórico se atualiza na hora (antes ficava guardada até recarregar). */

/* 29/10 virou o dia em que a prova 2018 foi feita de fato; a 2012 ficou para 31/10 */
AG["2026-10-29"]=["Diagnóstico: prova 2018 (feita neste dia)","","","","","","past:2018"];

/* ---------- aviso acima da barra de abas ---------- */
function placeToast(){
  const el=$("#toast"); if(!el||!el.classList.contains("on")) return;
  const nav=document.querySelector("nav.tabs"), r=nav&&nav.getBoundingClientRect();
  const navUp=r&&r.height&&getComputedStyle(nav).display!=="none"&&getComputedStyle(nav).position==="fixed"&&r.top>innerHeight/2;
  el.style.bottom=navUp?Math.round(innerHeight-r.top+10)+"px":"";
}
const _toast29=toast;
toast=function(t,b,goHoje){
  _toast29(t,b,goHoje);
  const el=$("#toast"); if(!el) return;
  if(!el.querySelector(".tclose")) el.insertAdjacentHTML("afterbegin",`<button type="button" class="tclose" aria-label="Fechar aviso" onclick="this.parentNode.classList.remove('on')">×</button>`);
  placeToast();
};
addEventListener("resize",placeToast);
setInterval(placeToast,700);

/* a nota de dias anteriores era guardada até recarregar a página; agora se atualiza a cada gravação */
const _save29=save;
save=function(){if(typeof dsMemo==="object")for(const k in dsMemo)delete dsMemo[k];return _save29.apply(this,arguments);};

/* ---------- tela de correção ---------- */
let corrMode="dia", corrDay="";
const CORR_T={sim:"Correção do simulado ou da prova",dia:"Correção dos erros do dia",sem:"Erros da semana"};
function corrFins(k,mode){
  const days=mode==="sem"?[...Array(7)].map((_,i)=>{const d=kDate(k);d.setDate(d.getDate()-i);return dkey(d);}):[k];
  return [].concat(...days.map(d=>finLog(d))).filter(f=>!f.none&&(mode!=="sim"||isSim(f.l)));
}
function corrWrong(k,mode){
  const fs=corrFins(k,mode);
  return {fs,w:[...new Set([].concat(...fs.map(f=>f.w||[])))].filter(qi=>Q[qi])};
}
const noted=qi=>!!(S.notes[qi]&&S.notes[qi].r);
function corrDone(k,mode){
  if(mode==="rel"){fz27();return rdDone(k,"caderno")||(k<=todayK()&&!Object.keys(S.notes).some(q=>Q[q]));}
  const {fs,w}=corrWrong(k,mode);
  if(mode==="sem") return k<=todayK()&&w.every(noted);
  return fs.length>0&&w.every(noted);
}
function openCorr(mode){corrMode=mode||"dia";corrDay=tlPast()||todayK();go("corr");}
function vCorr(){
  const k=corrDay||todayK(), mode=corrMode, {fs,w}=corrWrong(k,mode), n=w.filter(noted).length;
  const dia=k===todayK()?"hoje":fmtK(k);
  let h=`<section class="panel"><h2>${CORR_T[mode]}</h2><p class="muted">${mode==="sem"?"Últimos 7 dias":"Dia: "+dia}. Leia a explicação de cada erro e toque no motivo: ele já fica salvo no caderno. A etapa do cronograma marca sozinha quando todos tiverem motivo.</p>`;
  if(!fs.length) h+=`<p><b>${mode==="sim"?"O simulado ou a prova deste dia ainda não foi feito até o fim.":"Nenhum treino concluído "+(mode==="sem"?"nos últimos 7 dias.":"neste dia ainda.")}</b> Conclua as questões do dia e volte aqui.</p>`;
  else if(!w.length) h+=`<p><b>Nenhum erro para corrigir.</b> A etapa ficou marcada como feita.</p>`;
  else h+=`<p class="corrcount"><b>${n} de ${w.length}</b> erros com motivo anotado${n===w.length?" ✓":""}</p><div class="corrbar"><i style="width:${Math.round(n/w.length*100)}%"></i></div>`;
  h+=`<div class="row" style="gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn ghost sm" onclick="go('caderno')">Ver o caderno completo</button><button class="btn ghost sm" onclick="go('crono')">Voltar ao cronograma</button></div></section>`;
  const pend=w.filter(q=>!noted(q)), done=w.filter(noted);
  [...pend,...done].forEach((qi,j)=>{
    const q=Q[qi];
    h+=`<section class="panel corritem${noted(qi)?" ok":""}" data-qi="${qi}"><p class="muted">${j+1}. ${esc(CATS[q.c]?CATS[q.c].n:"")}${q[4]?" · "+esc(q[4]):""}</p><p class="qtext">${esc(q[1])}</p>
    <p><b>Resposta certa:</b> ${esc(q[2][0])}</p><p class="muted">${xpl(q)}</p>${noteForm(qi)}</section>`;
  });
  $("#view").innerHTML=h;
}

VIEWS.corr=()=>vCorr(); TABOF.corr="pratica";

/* um toque no motivo já salva (antes precisava tocar em Salvar) */
document.addEventListener("click",e=>{
  const b=e.target.closest(".note .chipbtn"); if(!b) return;
  setTimeout(()=>{
    const box=b.closest(".note"), s=box&&box.querySelector(".nsave"); if(!s) return;
    s.click();
    if(current==="corr"){
      const it=box.closest(".corritem"); if(it) it.classList.add("ok");
      const k=corrDay||todayK(), {w}=corrWrong(k,corrMode), n=w.filter(noted).length, c=$(".corrcount");
      if(c) c.innerHTML=`<b>${n} de ${w.length}</b> erros com motivo anotado${n===w.length?" ✓":""}`;
      const bar=$("#view .corrbar i"); if(bar) bar.style.width=Math.round(n/w.length*100)+"%";
      if(w.length&&n===w.length) toast("Correção concluída","Todos os erros têm motivo anotado. A etapa do cronograma foi marcada.");
    }
  },0);
});
/* o texto do motivo também salva ao sair da caixa */
document.addEventListener("change",e=>{
  const t=e.target.closest&&e.target.closest(".note textarea"); if(!t) return;
  const box=t.closest(".note"); if(box&&box.querySelector(".chipbtn.on")) box.querySelector(".nsave").click();
});

/* caderno completo: Reler o caderno (dias de descanso) marca ao chegar ao fim */
const _go29=go;
go=function(v){const r=_go29(v);if(v==="caderno")rdFooter("caderno");placeToast();return r;};

/* ---------- etapas: ações e regras ---------- */
const _dayItems29=dayItems;
dayItems=function(p){
  const it=_dayItems29(p), k=p.k;
  it.forEach(i=>{
    if(i.id==="cor"){i.act="openCorr('sim')";i.lbl="Corrigir";i.chk=kk=>corrDone(kk,"sim");}
    else if(i.id==="cad"&&/Reler o caderno/.test(i.t)){i.chk=kk=>corrDone(kk,"rel");}
    else if(i.id==="cad"&&/semana/.test(i.t)){i.t=i.t.replace("refazer as erradas da semana","anotar o motivo de cada erro da semana");i.act="openCorr('sem')";i.lbl="Corrigir";i.chk=kk=>corrDone(kk,"sem");}
    else if(i.id==="cad"){i.act="openCorr('dia')";i.lbl="Corrigir";i.chk=kk=>corrDone(kk,"dia");}
    else if(i.id==="dch"){const o=i.chk;i.chk=kk=>(o&&o(kk))||finHas(kk,"Desafio do dia");}
    else if(i.id==="prog"){
      /* dia que já passou: vale ter estudado no dia e conferido o Progresso nele ou depois */
      const o=i.chk;
      i.chk=kk=>(o&&o(kk))||(kk<todayK()&&finLog(kk).some(f=>!f.none)&&Object.keys(S.vis||{}).some(d=>d>=kk&&S.vis[d].stats));
    }
    else if(i.id==="q2"&&/Reforço/.test(i.t)){
      /* o ponto mais fraco muda com o tempo: no dia que passou, vale qualquer treino extra completo */
      const o=i.chk, main=it.filter(x=>x.id==="q1"||x.id==="ger").map(x=>{const m=(x.act||"").match(/'(\w+)'/);return m&&CATS[m[1]]?"Treino: "+CATS[m[1]].n:"";});
      i.chk=kk=>(o&&o(kk))||(kk<todayK()&&finHas(kk,l=>/^Treino: /.test(l)&&!main.includes(l)));
    }
  });
  return it;
};
if(typeof STEP_HOW==="object"){
  STEP_HOW.cad="Abre os erros do dia com gabarito e explicação. Toque no motivo de cada um: marca sozinho quando todos tiverem motivo (ou se não houve erro).";
  STEP_HOW.cor="Abre os erros do simulado ou da prova. Toque no motivo de cada um: marca sozinho quando todos tiverem motivo.";
}

/* estilos: src/css/519-v29*.css */

/* Questões reportadas em 01/11 (explicações reescritas na v29): o aviso sai sozinho, uma única vez. */
(function(){
  if(S.v29rep) return;
  ["pp3jfr","15eg13g"].forEach(id=>{if(S.rep&&S.rep[id]&&S.rep[id].d<="2026-11-01")delete S.rep[id];});
  S.v29rep=1; save();
})();
