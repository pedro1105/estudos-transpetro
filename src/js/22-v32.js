/* ---------- v32: revisão geral ----------
   Feriado (20/11, Consciência Negra) começa no horário de fim de semana, como já vale para simulados e dias duplos
   na reorganização (rpWE). */
const _startMin32=startMin;
startMin=function(k){if(HOLI[k]){const [a,b]=String(S.st.w||"09:00").split(":").map(Number);return a*60+(b||0);}return _startMin32(k);};

/* Dia útil com dois assuntos não leva também o mini simulado (passaria de 3 horas): os dois assuntos ficam,
   e o mini simulado volta na quarta seguinte ou no simulado do fim de semana. */
const _dayItems32=dayItems;
dayItems=function(p){
  const it=_dayItems32(p), a=p.ag;
  if(!a||!a.dbl||rpWE(p.k)) return it;
  const out=it.filter(i=>i.id!=="mini2"&&!(i.id==="sim"&&a[6]==="mini"));
  let n=1; out.forEach(i=>{if(i.auto)return;i.t=(n++)+". "+i.t.replace(/^\d+\.\s*/,"");});
  return out;
};
