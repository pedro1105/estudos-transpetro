/* ---------- v27: checklist que se marca sozinho ----------
   Cada etapa do dia fica marcada quando a atividade é concluída de verdade (treino até o fim,
   leitura até o fim, motivo anotado em cada erro), e não ao abrir o botão. O registro do que foi
   concluído fica em S.fin (atividades com questões), S.rd (leituras) e S.vis (telas conferidas). */
/* a sincronização pode trocar S inteiro: sempre garantir os campos antes de usar */
function fz27(){S.fin=S.fin||{};S.rd=S.rd||{};S.vis=S.vis||{};}
fz27();
function finLog(k){fz27();return S.fin[k]||[];}

/* atividades com questões: guarda rótulo, se foi até o fim e quais questões ficaram erradas */
const _finish27=finish;
finish=function(){
  const q=quiz; if(!q||q.finished) return _finish27();
  const planned=q.ids.length, answered=q.ans.filter(x=>x!==null).length;
  _finish27();
  if(!q.finished) return;
  fz27(); const k=todayK(), w=q.ids.filter((qi,j)=>q.ans[j]!==null&&q.order[j][q.ans[j]]!==0);
  (S.fin[k]=S.fin[k]||[]).push({l:q.label,full:answered>=planned,n:answered,w});
  Object.keys(S.fin).sort().slice(0,-14).forEach(d=>delete S.fin[d]);
  save();
};
/* sem erradas para revisar, o aquecimento conta como feito ao tocar no botão */
const _startWrong27=startWrong;
startWrong=function(){
  const before=quiz; _startWrong27();
  if(quiz===before){fz27();const k=todayK();(S.fin[k]=S.fin[k]||[]).push({l:"Revisão de erradas",full:true,n:0,w:[],none:1});save();if(current==="crono")vCronoKeep();else if(current==="guia")vGuiaKeep();}
};
/* telas conferidas no dia (Fechamento = ver o Progresso) */
const _go27=go;
go=function(v){const r=_go27(v);fz27();const k=todayK();(S.vis[k]=S.vis[k]||{})[v]=1;if(["topic","peg","vesp"].includes(v))rdFooter(v);return r;};

/* leitura: conta quando você chega ao fim do texto e toca em Terminei (ou fica 2 min e chega ao fim) */
let rdStart=0;
function rdKey(v){return v==="topic"?topicCur:v;}
function rdDone(k,key){fz27();return !!(S.rd[k]&&S.rd[k][key]);}
function rdMark(v){
  fz27(); const k=todayK(), key=rdKey(v); if(!key||rdDone(k,key)) return;
  (S.rd[k]=S.rd[k]||{})[key]=1; save();
  toast("Leitura concluída","A etapa de leitura do checklist foi marcada.");
  const b=$("#rdBtn"); if(b){b.disabled=true;b.textContent="Leitura concluída ✓";}
}
function rdFooter(v){
  const key=rdKey(v), view=$("#view"); if(!view||!key) return;
  rdStart=Date.now();
  const done=rdDone(todayK(),key);
  view.insertAdjacentHTML("beforeend",`<section class="panel row rdend" style="justify-content:space-between;gap:8px;flex-wrap:wrap"><span class="muted">Chegou ao fim? Isso marca a leitura no checklist de hoje.</span><button class="btn sm" id="rdBtn" ${done?"disabled":""} onclick="rdMark('${v}')">${done?"Leitura concluída ✓":"Terminei a leitura"}</button></section>`);
  const end=view.querySelector(".rdend");
  if(end&&"IntersectionObserver" in window&&!done){
    const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)&&Date.now()-rdStart>=120000&&current===v&&rdKey(v)===key){rdMark(v);io.disconnect();}});
    io.observe(end);
    setTimeout(()=>{if(current===v&&rdKey(v)===key){const r=end.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)rdMark(v);}},121000);
  }
}

/* caderno: cada questão errada no dia precisa ter o motivo anotado */
function cadDone(k,only){
  const fs=finLog(k).filter(f=>!f.none&&(!only||only(f))); if(!fs.length) return false;
  const w=[...new Set([].concat(...fs.map(f=>f.w)))];
  return w.every(qi=>S.notes[qi]&&S.notes[qi].r);
}
const isSim=l=>/^Simulado|^Mini simulado|^Prova (real|Transpetro)/.test(l||"");
function finHas(k,lbl){return finLog(k).some(f=>f.full&&(typeof lbl==="function"?lbl(f.l):f.l===lbl));}

/* regra de conclusão de cada etapa, tirada do próprio botão dela */
function autoChk(i){
  const a=i.act||"", m=a.match(/^(\w+)\((?:'([^']*)')?\)$/); if(!m) return null;
  const [_,fn,arg]=m;
  if(fn==="startTrainCat") return k=>finHas(k,"Treino: "+CATS[arg].n);
  if(fn==="startWrong") return k=>finLog(k).some(f=>f.l==="Revisão de erradas"&&(f.full||f.none));
  if(fn==="startSrc") return k=>finHas(k,"Cesgranrio · "+arg);
  if(fn==="startLaw") return k=>finHas(k,"Treino: Lei 13.303 artigo por artigo");
  if(fn==="startPast") return k=>pastDone(arg);
  if(fn==="startExam") return k=>finHas(k,arg==="full"?"Simulado completo":arg==="esp"?"Simulado das específicas":"Mini simulado");
  if(fn==="startReal") return k=>finHas(k,l=>/^Prova real/.test(l));
  if(fn==="openTopic") return k=>rdDone(k,arg);
  if(fn==="go"&&(arg==="peg"||arg==="vesp")) return k=>rdDone(k,arg);
  if(fn==="go"&&arg==="stats") return k=>{fz27();return !!(S.vis[k]&&S.vis[k].stats)&&finLog(k).some(f=>!f.none);};
  if(fn==="go"&&arg==="caderno") return i.id==="cor"?k=>cadDone(k,f=>isSim(f.l)):k=>cadDone(k);
  return null;
}
const _dayItems27=dayItems;
dayItems=function(p){
  const it=_dayItems27(p);
  it.forEach(i=>{
    if(i.auto) return;
    const c=autoChk(i); if(!c) return;
    const old=i.chk; i.chk=old?k=>old(k)||c(k):c;
  });
  return it;
};
STEP_HOW.prog=(STEP_HOW.prog?STEP_HOW.prog+" ":"")+"Marca sozinho quando você abre o Progresso depois de estudar.";
