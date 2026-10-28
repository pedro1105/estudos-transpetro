/* ---------- 37. v21: revisão geral ---------- */

/* Cronograma: o resumo de ontem que ficou pendente entra hoje como etapa de recuperação,
   para nenhum assunto do edital ficar para trás */
STEP_AREA.rec="est"; STEP_HOW.rec="Leia o resumo, feche e escreva de memória 3 a 5 pontos. Se sobrar tempo, faça um treino curto do assunto.";
const _dayItems21=dayItems;
dayItems=function(p){
  const it=_dayItems21(p);
  if(!p.ag||p.rest||p.exam||p.k!==todayK()) return it;
  const d=kDate(p.k); d.setDate(d.getDate()-1);
  const y=dkey(d), ay=AG[y];
  if(!ay||!ay[1]||ay[1]===p.a||(S.daily[y]||{}).teo) return it;
  const c=ay[1], at=it.findIndex(i=>i.auto);
  it.splice(at<0?it.length:at,0,{id:"rec",t:`Recuperar ontem (20 min): resumo de “${ay[0]}”, que ficou pendente. Leia antes de seguir`,act:`openTopic('${c}')`,lbl:"Resumo",chk:()=>!!(S.daily[y]||{}).teo});
  return it;
};
/* provas do mesmo cargo (TAC) também entram nos dias de prova real */
AG["2026-11-07"][6]="src:Petrobras 2018 TAC";

/* Atualização do app (versão instalada do GitHub): quando a versão nova termina de baixar, avisa e
   atualiza com um toque. O progresso já está salvo no aparelho e segue para a nuvem depois. */
function swUpdated(){
  if(swUpdated.on) return; swUpdated.on=1;
  toast("Versão nova do app pronta","Toque em Atualizar. Seu progresso fica salvo.");
  const el=$("#toast"); if(!el) return;
  const b=document.createElement("button"); b.className="btn sm"; b.textContent="Atualizar";
  b.onclick=()=>{try{saveLocal();}catch(e){}location.reload();};
  el.insertBefore(b,el.querySelector(".btn.ghost"));
}
