/* ---------- v28: checklist dos dias atrasados ----------
   O que você conclui a partir do botão de um dia anterior do cronograma conta também para esse dia
   (tlFrom guarda de qual cartão veio o toque). Dias anteriores aceitam marcar a caixa à mão, para o
   que foi estudado fora do app ou antes da v27. */
var tlFrom="";
function tlPast(){return tlFrom&&tlFrom<todayK()?tlFrom:"";}
const _finish28=finish;
finish=function(){
  const q=quiz, was=q&&q.finished; _finish28();
  const d=tlPast(), k=todayK();
  if(d&&q&&!was&&q.finished&&S.fin[k]&&S.fin[k].length){(S.fin[d]=S.fin[d]||[]).push(S.fin[k][S.fin[k].length-1]);save();}
};
const _startWrong28=startWrong;
startWrong=function(){
  const k=todayK(), n0=(S.fin[k]||[]).length; _startWrong28();
  const d=tlPast(), fk=S.fin[k]||[];
  if(d&&fk.length>n0){(S.fin[d]=S.fin[d]||[]).push(fk[fk.length-1]);save();}
  if(fk.length>n0){toast("Nada para revisar agora","Você já revisou todas as erradas que estavam na fila. Esta etapa ficou marcada como feita.");if(current==="crono")vCronoKeep();}
};
const _rdMark28=rdMark;
rdMark=function(v){
  const d=tlPast(), key=rdKey(v); _rdMark28(v);
  if(d&&key){fz27();(S.rd[d]=S.rd[d]||{})[key]=1;save();}
};
const _go28=go;
go=function(v){
  const r=_go28(v), d=tlPast();
  if(d&&v==="stats"){(S.vis[d]=S.vis[d]||{}).stats=1;save();}
  /* voltou para uma tela de navegação: o próximo treino não é mais do cartão atrasado */
  if(["guia","crono","pratica","jogos","cont","config","audio"].includes(v)) tlFrom="";
  return r;
};
/* uma vez: o que foi feito antes da v27 (no histórico) entra no registro do dia em que foi feito */
(function(){
  if(S.v28bf) return; fz27();
  (S.hist||[]).forEach(h=>{
    const m=(h.date||"").match(/^(\d\d)\/(\d\d)\/(\d{4})$/); if(!m) return;
    const k=`${m[3]}-${m[2]}-${m[1]}`; if(k>="2026-10-31") return;
    const fs=S.fin[k]=S.fin[k]||[];
    if(!fs.some(f=>f.l===h.label&&f.bf)) fs.push({l:h.label,full:true,n:h.total,w:[],bf:1});
  });
  S.v28bf=1; save();
})();
