/* ---------- v31: cronograma que se reorganiza quando você não consegue estudar ----------
   O plano original (AG0) é uma fila de blocos, um por dia. S.rp.m guarda onde cada bloco está agora:
   S.rp.m[data] = "bloco" | "bloco1,bloco2" (dia duplo) | "" (dia sem estudo) | "w" (reforço livre).
   Reorganizar = juntar os blocos que ficaram para trás com os que ainda vêm e redistribuir nos dias livres
   até 01/12, sem mexer nos dias fixos (simulado de 29/11, reta final de 02 a 06/12).
   Se faltar dia: primeiro saem os dias de "pontos fracos" (não têm conteúdo novo), depois dois assuntos
   parecidos passam a dividir o mesmo dia. Nenhum assunto do edital sai do plano. */
const AG0=JSON.parse(JSON.stringify(AG));
const RP_END="2026-12-01";
const rpFixed=k=>k>="2026-12-02"||k==="2026-11-29";
const HOLI={"2026-11-20":"Consciência Negra"};
const rpWE=k=>{const d=kDate(k).getDay();return d===0||d===6||!!HOLI[k];};
const rpSp=o=>o==="w"?"weak":(AG0[o]?AG0[o][6]:"");
const rpIsWe=o=>{const sp=rpSp(o);return sp==="sim"||sp==="esp"||sp.startsWith("past:");};
const rpCont=o=>!!(AG0[o]&&AG0[o][1])&&!rpIsWe(o)&&rpSp(o)!=="weak";
function rpM(){return (S.rp&&S.rp.m)||{};}
function rpBlocks(k){const m=rpM();if(k in m)return m[k]?m[k].split(","):[];return AG0[k]?[k]:[];}
function rpWhere(o){for(const k of Object.keys(AG0).sort()) if(rpBlocks(k).includes(o)) return k; return "";}

/* monta o AG em uso a partir do mapa */
let rpSig="";
function rpApply(force){
  const sig=JSON.stringify(S.rp||{}); if(!force&&sig===rpSig) return; rpSig=sig;
  Object.keys(AG0).forEach(k=>{
    const b=rpBlocks(k);
    if(!b.length){
      const was=((S.rp&&S.rp.o)||{})[k]||"", to=was?was.split(",").map(rpWhere).filter(Boolean):[];
      const a=["Sem estudo neste dia","","","","","","off"]; a.to=[...new Set(to)]; AG[k]=a; return;
    }
    if(b[0]==="w"){AG[k]=["Reforço dos pontos fracos","","","","","","weak"];return;}
    const nm=x=>AG0[x][0].replace(/ \(feriado\)$/,"");
    const a=AG0[b[0]].slice(); a.from=b[0]; a[0]=nm(b[0]);
    if(b[1]){const c=AG0[b[1]]; a.dbl=c.slice(); a.from2=b[1]; a[0]=nm(b[0])+" + "+nm(b[1]);}
    if(HOLI[k]) a[0]+=" (feriado)";
    AG[k]=a;
  });
  if(typeof dsMemo==="object") for(const x in dsMemo) delete dsMemo[x];
}

/* etapas: dia sem estudo, dia duplo e aviso de remarcado */
STEP_AREA.teo2="est";STEP_AREA.q12="pra";STEP_AREA.ger2="pra";STEP_AREA.src2="pra";STEP_AREA.lei2="pra";STEP_AREA.mini2="pra";
STEP_HOW.teo2=STEP_HOW.teo;STEP_HOW.q12=STEP_HOW.q1;STEP_HOW.ger2=STEP_HOW.ger;STEP_HOW.src2=STEP_HOW.src;STEP_HOW.lei2=STEP_HOW.lei;
STEP_HOW.off="O conteúdo deste dia não se perdeu: ele está no dia indicado. Se mudar de ideia, abra o Cronograma.";
const _dayItems31=dayItems;
dayItems=function(p){
  const a=p.ag;
  if(a&&a[6]==="off"){
    const to=(a.to||[]).filter(Boolean);
    return [{id:"off",t:"Dia sem estudo"+(to.length?". O conteúdo deste dia foi para "+to.map(fmtK).join(" e "):"")}];
  }
  let it=_dayItems31(p).filter(i=>i.id!=="rec"); // o "Recuperar ontem" deu lugar à reorganização
  if(a&&a.dbl&&a.dbl[1]){
    const c=a.dbl, sp=c[6]||"";
    it=it.filter(i=>i.id!=="q2");
    it.forEach(i=>{if(i.id==="teo")i.t=i.t.replace("(30 min)","(25 min)");if(i.id==="q1")i.t=i.t.replace("(30 min)","(20 min)");if(i.id==="ger")i.t=i.t.replace("(25 min)","(15 min)");});
    const add=[];
    if(sp==="mini") add.push({id:"mini2",t:"Mini simulado de 20 questões (50 min)",act:"startExam('mini')",lbl:"Começar"});
    add.push({id:"teo2",t:`Teoria (25 min): ${c[2]}. Depois feche o resumo e escreva de memória 3 a 5 pontos`,act:`openTopic('${c[1]}')`,lbl:"Resumo"});
    add.push({id:"q12",t:`Questões (20 min): treino de ${CATS[c[1]].n}`,act:`startTrainCat('${c[1]}')`,lbl:"Treinar"});
    if(sp==="law") add.push({id:"lei2",t:"Lei seca (20 min): jogo Lei seca e treino da Lei 13.303 artigo por artigo",act:"startLaw()",lbl:"Treinar"});
    if(sp.startsWith("src:")) add.push({id:"src2",t:`Prova real (20 min): questões da ${sp.slice(4)}`,act:`startSrc('${sp.slice(4)}')`,lbl:"Treinar"});
    let at=it.findIndex(i=>i.id==="ger"); if(at<0) at=it.findIndex(i=>i.id==="cad"||i.id==="rev"); if(at<0) at=it.findIndex(i=>i.auto);
    it.splice(at<0?it.length:at,0,...add);
    if(c[4]&&c[5]&&!(a[4]===c[4]&&a[5]===c[5])){
      const g={id:"ger2",t:`${c[4]==="port"?"Português":"Matemática"} (15 min): ${c[5]}`,act:`startTrainCat('${c[4]}')`,lbl:"Treinar"};
      const gi=it.findIndex(i=>i.id==="ger"); it.splice(gi<0?it.findIndex(i=>i.id==="cad"):gi+1,0,g);
    }
    add.concat(it.filter(i=>i.id==="ger2")).forEach(i=>{const ch=autoChk(i);if(ch)i.chk=ch;});
    let n=1; it.forEach(i=>{if(i.auto)return;i.t=(n++)+". "+i.t.replace(/^\d+\.\s*/,"");});
  }
  if(a&&a.from&&a.from!==p.k){const m=it.find(i=>i.id==="teo"||i.id==="sim");if(m)m.t+=` (era de ${fmtK(a.from)})`;}
  return it;
};
const _agTipo31=agTipo;
agTipo=function(a){return a[6]==="off"?["Sem estudo","ok"]:a.dbl?["Dois assuntos","warn"]:_agTipo31(a);};

/* o que ficou para trás: blocos de dias anteriores cujas etapas principais não foram feitas */
function rpBlockDone(k,second,contOnly){
  const its=dayItems(dayPlan(k)), ids=second?["teo2","q12","mini2"]:contOnly?["teo","q1"]:["teo","q1","sim"];
  const main=its.filter(i=>ids.includes(i.id));
  return !main.length||main.some(i=>itemDone(k,i));
}
function rpPending(){
  const t=todayK(), out=[], seenPast=new Set();
  Object.keys(AG0).sort().filter(k=>k<t&&k>="2026-10-27").forEach(k=>{
    rpBlocks(k).forEach((o,j)=>{
      if(o==="w"||rpSp(o)==="weak"||rpSp(o)==="rest") return;
      const sp=rpSp(o);
      if(sp.startsWith("past:")){
        const done=pastDone(sp.slice(5));
        // dia "prova + assunto" (ex.: 01/11 prova 2011 + Estoques II): a prova feita não basta, o assunto também conta
        if(seenPast.has(sp))return;
        if(done){if(AG0[o][1]&&!rpBlockDone(k,j===1,true)){seenPast.add(sp);out.push({k,o});}return;}
        seenPast.add(sp);
      }
      if(sp==="sim"||sp==="esp") return; // simulado perdido não volta: o próximo já está no plano
      if(!rpBlockDone(k,j===1)) out.push({k,o});
    });
  });
  return out;
}

/* redistribui. off = datas (hoje ou futuras) em que você avisou que não vai estudar */
function rpPlan(off,unoff){
  unoff=unoff||[];
  const t=todayK(), keys=Object.keys(AG0).sort(), m={}, o={...((S.rp&&S.rp.o)||{})}, log=[];
  keys.forEach(k=>m[k]=rpBlocks(k));
  const pend=rpPending(); const pendSet=new Set(pend.map(x=>x.k+"|"+x.o));
  // dias anteriores: tira o que não foi feito
  keys.filter(k=>k<t).forEach(k=>{
    const keep=m[k].filter(x=>!pendSet.has(k+"|"+x));
    if(keep.length!==m[k].length){if(!keep.length)o[k]=m[k].join(",");m[k]=keep;}
  });
  const offSet=new Set(keys.filter(k=>k>=t&&k<=RP_END&&!rpFixed(k)&&!unoff.includes(k)&&(off.includes(k)||(k in rpM()&&rpM()[k]===""))));
  // hoje já começou: o bloco de hoje fica onde está
  const started=!offSet.has(t)&&(dayItems(dayPlan(t)).some(i=>!i.auto&&itemDone(t,i))||(S.days[t]||0)>0);
  const queue=pend.map(x=>x.o);
  offSet.forEach(k=>{if(m[k].length){o[k]=m[k].join(",");queue.push(...m[k].filter(x=>x!=="w"));}m[k]=[];});
  const free=keys.filter(k=>k>=t&&k<=RP_END&&!rpFixed(k)&&!offSet.has(k)&&!(started&&k===t));
  free.forEach(k=>{queue.push(...m[k].filter(x=>x!=="w"));m[k]=[];});
  // um bloco nunca aparece duas vezes (ex.: prova 2012 marcada em dois dias)
  const seen=new Set(), q=[]; queue.forEach(x=>{const key=rpSp(x).startsWith("past:")?rpSp(x):x;if(seen.has(key))return;seen.add(key);q.push(x);});
  // simulados e provas anteriores: no dia original se for livre; senão, no próximo fim de semana livre
  const weQ=q.filter(rpIsWe).sort(), ctQ=q.filter(x=>!rpIsWe(x)).sort(), weAt={};
  weQ.filter(x=>free.includes(x)).forEach(x=>weAt[x]=x); // os que já estão num dia livre ficam onde estão
  weQ.filter(x=>!free.includes(x)).forEach(x=>{
    let d=free.find(k=>rpWE(k)&&!weAt[k]&&k>=t);
    if(d){weAt[d]=x;if(d!==x)log.push(`${AG0[x][0]}: ${fmtK(x)} → ${fmtK(d)}`);}
    else log.push(`${AG0[x][0]}: sem fim de semana livre, ficou fora`);
  });
  const slots=free.filter(k=>!weAt[k]);
  // falta dia? 1) saem os dias de pontos fracos  2) dois assuntos parecidos dividem um dia
  let units=ctQ.map(x=>[x]);
  let over=units.length-slots.length;
  for(let i=units.length-1;i>=0&&over>0;i--) if(rpSp(units[i][0])==="weak"){units.splice(i,1);over--;log.push("Um dia de reforço dos pontos fracos saiu para abrir espaço");}
  const area=x=>CATS[AG0[x][1]]?CATS[AG0[x][1]].b:"";
  // entre os pares possíveis, prefere o que cai num fim de semana (mais tempo) e evita hoje
  const pick=test=>{let best=-1,bs=-1;for(let i=0;i<units.length-1;i++){const A=units[i],B=units[i+1];if(A.length===1&&B.length===1&&rpCont(A[0])&&rpCont(B[0])&&test(A[0],B[0])){const d=slots[Math.min(i,slots.length-1)]||"",mini=[A[0],B[0]].some(x=>rpSp(x)==="mini"),sc=(d&&rpWE(d)?2:0)+(d!==t?1:0)-(mini&&!(d&&rpWE(d))?4:0);if(sc>bs){bs=sc;best=i;}}}return best;};
  const tests=[(x,y)=>AG0[x][1]===AG0[y][1],(x,y)=>area(x)===area(y),()=>true];
  while(over>0){
    let i=-1; for(const f of tests){i=pick(f);if(i>=0)break;}
    if(i<0) break;
    units.splice(i,2,[units[i][0],units[i+1][0]]); over--;
  }
  if(over>0) log.push(`${over} ${over===1?"dia":"dias"} de conteúdo não couberam`);
  slots.forEach((k,i)=>{m[k]=units[i]||["w"];});
  Object.entries(weAt).forEach(([k,x])=>m[k]=[x]);
  const doubles=slots.filter(k=>m[k].length===2);
  // grava só o que difere do plano original
  const mm={}; keys.forEach(k=>{const v=m[k].join(",");if(v!==k)mm[k]=v;});
  return {m:mm,o,at:Date.now(),log,doubles,moved:pend.length+[...offSet].length};
}
function rpCommit(r){
  S.rpPrev=S.rp?JSON.parse(JSON.stringify(S.rp)):{};
  S.rp={m:r.m,o:r.o,at:r.at}; rpApply(true); save();
}
function rpUndo(){if(!("rpPrev" in S))return;S.rp=S.rpPrev;delete S.rpPrev;rpApply(true);save();toast("Cronograma restaurado","Voltou para como estava antes da última reorganização.");go(current==="crono"?"crono":"guia");}

/* pré-visualização e confirmação */
function rpPreviewHTML(r,intro){
  const t=todayK(), keys=Object.keys(AG0).sort().filter(k=>k>=t&&k<="2026-12-06");
  const save0=S.rp; S.rp={m:r.m,o:r.o}; rpApply(true);
  const rows=keys.slice(0,14).map(k=>`<li><b class="num">${fmtK(k)} ${WD[kDate(k).getDay()]}</b> · ${esc(AG[k][0])}</li>`).join("");
  S.rp=save0; rpApply(true);
  return `<h3>Reorganizar o cronograma</h3><p>${intro}</p>
    <ul class="rpsum"><li>A prova continua em 06/12, e a reta final (simulado de 29/11 e 02 a 05/12) não muda.</li>
    ${r.doubles.length?`<li>${r.doubles.length===1?"Um dia passa":r.doubles.length+" dias passam"} a ter dois assuntos parecidos, com tempos menores: ${r.doubles.map(fmtK).join(", ")}.</li>`:"<li>Nenhum dia fica com dois assuntos.</li>"}
    ${r.log.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
    <details><summary>Ver os próximos 14 dias</summary><ul class="rpdays">${rows}</ul></details>`;
}
async function rpAsk(off,intro,unoff){
  const r=rpPlan(off||[],unoff);
  const res=await modal(rpPreviewHTML(r,intro),[["cancel","Cancelar","btn ghost"],["ok","Reorganizar","btn"]]);
  if(res.v!=="ok") return;
  rpCommit(r);
  toast("Cronograma reorganizado","Nenhum assunto ficou de fora. Se preferir, toque em Desfazer no Cronograma.");
  go(current==="crono"?"crono":"guia");
}
function rpReorg(){const n=rpPending().length;rpAsk([],n?`${n===1?"Um assunto ficou":n+" assuntos ficaram"} para trás. Eles entram de volta a partir de hoje, na ordem do plano, e o resto se ajusta.`:"Os próximos dias serão redistribuídos.");}
function rpSkip(k){
  const today=k===todayK();
  rpAsk([k],today?"Tudo bem. O que estava previsto para hoje vai para os próximos dias e o resto do plano se ajusta. O que você já fez hoje continua contando.":`O que estava previsto para ${fmtK(k)} vai para os outros dias e o resto do plano se ajusta.`);
}
function rpUnskip(k){rpAsk([],`O dia ${fmtK(k)} volta a ter estudo e os próximos dias são redistribuídos.`,[k]);}

const _go31=go;
go=function(v){rpApply();return _go31(v);};
rpApply(true);

/* estilos: src/css/521-v31*.css */

/* fases: nome da fase 2 de acordo com o que ela é hoje (um assunto do edital por dia) e o aviso da reorganização */
PHASES[1].t="Conteúdo do edital";
PHASES[0].d="Provas Transpetro anteriores completas e os primeiros assuntos de Logística e Estoques. Prova que não foi feita volta ao plano no próximo fim de semana livre quando você reorganiza o cronograma. Na aba Progresso, veja os 5 assuntos com pior acerto.";
PHASES[1].d+=" Perdeu um dia? Na tela Hoje, toque em Reorganizar ou em Não consigo estudar hoje: o conteúdo vai para os próximos dias, sem ficar nada para trás.";
