/* ---------- v33: telas mais limpas ----------
   Substitui por inteiro as telas principais (antes montadas em camadas, uma por versão):
   Hoje + Cronograma (abas lado a lado), Praticar, Jogos, Progresso, Estudar e Configurações.
   Nenhum dado muda: as mesmas chaves de S e do localStorage; nada de conteúdo sai do app,
   só fica recolhido (toque para abrir). Os grupos abertos/fechados ficam em S.fold. */

const SEG_HOJE=[["guia","Hoje"],["crono","Cronograma"]];
TABOF.crono="guia";

/* linha compacta: título e um número à esquerda, botão à direita; descrição e opções ao tocar */
function mrow(o){
  S.fold=S.fold||{}; const fk="m:"+o.k, op=S.fold[fk]===undefined?!!o.open:!!S.fold[fk];
  return `<div class="mrow${o.hl?" hl":""}${op?" open":""}" data-mk="${o.k}">
    <button type="button" class="mrt" aria-expanded="${op}" onclick="mrTog(this)"><span class="mrn">${o.t}</span>${o.m?`<span class="mrm">${o.m}</span>`:""}</button>
    <div class="mrb">${o.b||""}</div>
    <div class="mrx">${o.d?`<p class="muted">${o.d}</p>`:""}${o.x||""}</div></div>`;
}
function mrTog(b){const r=b.closest(".mrow"),o=r.classList.toggle("open");b.setAttribute("aria-expanded",o);S.fold=S.fold||{};S.fold["m:"+r.dataset.mk]=o;save();}
const mlist=rows=>`<div class="mlist">${rows.join("")}</div>`;

/* semana do cronograma (a mesma numeração em Hoje e no Cronograma) */
function weekNo(k){const w=agWeeks(),i=w.findIndex(x=>x.includes(k));return i<0?null:[i+1,w.length];}
function fullStreak(){let n=0,d=new Date();if(dayScore(dkey(d))<1)d.setDate(d.getDate()-1);while(dkey(d)>="2026-10-27"&&dayScore(dkey(d))>=1){n++;d.setDate(d.getDate()-1);}return n;}

/* ---------- Hoje ---------- */
/* aviso de sincronização: o selo no topo já mostra o estado; o cartão só aparece quando falta uma permissão */
function syncBanner(){
  if(CL.st==="needmcp") return `<div class="rule row" style="justify-content:space-between;gap:8px"><span>Para o progresso daqui chegar ao celular, permita uma vez o uso do conector Supabase.</span><button class="btn sm" onclick="clAllow()">Permitir</button></div>`;
  return "";
};
function rpBanner(){
  const t=todayK(), pend=rpPending();
  if(!pend.length||t<"2026-10-27") return "";
  return `<section class="panel stack rpban"><p><b>${pend.length===1?"Um assunto ficou":pend.length+" assuntos ficaram"} para trás.</b> Reorganizar coloca tudo de volta no plano, sem mexer na data da prova.</p>
    <div class="row" style="gap:10px;align-items:center"><button class="btn sm" onclick="rpReorg()">Reorganizar</button>
    <details class="rplist"><summary>Ver quais</summary><ul>${pend.map(x=>`<li><span class="num">${fmtK(x.k)}</span> · ${esc(AG0[x.o][0])}</li>`).join("")}</ul></details></div></section>`;
};
function tlTog(b){const r=b.closest(".tl"),o=r.classList.toggle("open");b.setAttribute("aria-expanded",o);}
/* uma linha por etapa: hora, nome e botão; o resto (área, o que fazer, como marca) ao tocar */
function tlHTML(k,its,pre,live){
  const steps=its.filter(i=>!i.auto), sc=schedule(k,its), nowI=live?steps.findIndex(i=>!itemDone(k,i)):-1, past=k<todayK();
  return sc.rows.map(r=>{
    if(r.pause) return `<div class="tl pause"><span></span><span class="muted"><span class="tltime num">${hm(r.a)}</span> pausa de 10 min</span></div>`;
    const i=r.i, ck=itemDone(k,i), cur=steps.indexOf(i)===nowI, lock=i.chk&&!past;
    const how=STEP_HOW[i.id], note=i.chk&&!ck?(past?"Conclua pelo botão ou marque a caixa.":"A caixa marca sozinha quando você concluir a etapa."):"";
    return `<div class="tl ${ck?"done":""} ${cur?"cur":""}">
      <input type="checkbox" id="${pre}${i.id}" data-k="${k}" data-i="${i.id}" ${ck?"checked":""} ${lock?'disabled title="Marca sozinho quando você concluir a etapa"':""} aria-label="${lock?"Marca sozinho ao concluir":"Concluí"}: ${esc(r.p.h||r.p.d)}">
      <button type="button" class="tlx" aria-expanded="false" onclick="tlTog(this)">${r.a!==null?`<span class="tltime num">${hm(r.a)}</span>`:""}<span class="tltitle">${r.p.h?`<b>${esc(r.p.h)}:</b> `:""}${esc(r.p.d)}</span>${cur?'<span class="pill now">agora</span>':""}</button>
      ${i.act?`<button class="btn ${cur?"":"ghost"} sm" onclick="tlFrom='${k}';${i.act}">${i.lbl}</button>`:"<span></span>"}
      <div class="tlmore">${r.a!==null?`<span class="muted num">${hm(r.a)} a ${hm(r.b)}</span> `:""}${areaChip(r.area)}
        <p>${r.p.h?`<b>${esc(r.p.h)}:</b> `:""}${esc(r.p.d)}</p>${how?`<p class="muted">${esc(how)}</p>`:""}${note?`<p class="muted"><i>${note}</i></p>`:""}</div></div>`;
  }).join("");
};
function vGuia(){
  rpApply();
  const k=todayK(), p=dayPlan(k), its=dayItems(p), steps=its.filter(i=>!i.auto), done=steps.filter(i=>itemDone(k,i)).length;
  const meta=its.find(i=>i.auto), sc=schedule(k,its), tot=sc.end-sc.start, full=fullStreak(), wn=weekNo(k);
  const due=srsDue().length, hasRev=its.some(i=>/startWrong/.test(i.act||""));
  const last14=[...Array(14)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()-13+i);const kk=dkey(d);return {kk,s:kk<"2026-10-27"?null:dayScore(kk)};});
  const wdN=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"][kDate(k).getDay()];
  const nq=S.days[k]||0;
  $("#view").innerHTML=`${segNav("guia",SEG_HOJE)}${runBanner()}
  <div class="hoje-top"><div class="stack" style="gap:2px"><h2>Hoje</h2><span class="muted">${wdN}, ${fmtK(k)}${wn?` · semana ${wn[0]} de ${wn[1]}`:""}${p.ph?` · ${esc(p.ph.t)}`:""}</span></div>${syncChip()}</div>
  ${syncBanner()}${rpBanner()}${weekCard()}
  <section class="panel stack prog-dia">
    <div class="row" style="justify-content:space-between;gap:8px;align-items:baseline"><h3>${p.foco?esc(p.foco):"Programação de hoje"}</h3><span class="muted num">${done} de ${steps.length} etapas</span></div>
    ${tot>0?`<span class="muted num">${hm(sc.start)} às ${hm(sc.end)} · ${minFmt(tot)} com pausas · <button class="linkbtn" onclick="go('config');setTimeout(()=>{const e=$('#stH');if(e)e.focus();},200)">mudar horário</button></span>`:""}
    <div class="track"><div class="fill" style="width:${steps.length?done/steps.length*100:0}%"></div></div>
    ${due&&!hasRev?`<div class="row" style="justify-content:space-between"><span><b class="num">${due}</b> ${due===1?"questão errada volta":"questões erradas voltam"} hoje.</span><button class="btn sm" onclick="startWrong()">Revisar</button></div>`:""}
    <div class="tlist">${tlHTML(k,its,"dl-",true)}</div>
    <p class="muted tlnote">Toque numa etapa para ver o que fazer. As caixas marcam sozinhas quando você conclui.</p>
    <div class="hfoot">
      ${meta?`<div class="row metaln"><span>Meta: <b class="num">${nq}</b>/<b class="num">${S.goal}</b> questões</span>${nq>=S.goal?'<span class="pill ok">cumprida</span>':`<div class="track sm"><div class="fill" style="width:${Math.min(100,nq/S.goal*100)}%"></div></div>`}</div>`:""}
      <div class="row" style="justify-content:space-between;gap:8px"><span class="muted">${full} ${full===1?"dia completo":"dias completos"} seguidos</span><div class="days14" aria-label="Últimos 14 dias">${last14.map(x=>`<span class="d14 ${x.s===null?"na":x.s>=1?"full":x.s>=.5?"half":x.s>0?"low":""}" title="${fmtK(x.kk)}"><i>${x.kk.slice(8)}</i></span>`).join("")}</div></div>
    </div>
    ${rpTodayBtn()}
  </section>
  ${foldHTML("ferr","Cronômetro de estudo","blocos de 50 min com 10 de pausa",pomoPanel().replace('<section class="panel stack">','<section class="stack inner">').replace('<h3>Cronômetro de estudo</h3>',''),false)}
  ${foldHTML("areas","Como aproveitar cada área, todo dia","Estudar, Praticar, Jogos e Progresso",areasGuide(),false)}`;
  steps.forEach(i=>{const c=$("#dl-"+i.id); if(c) c.onchange=()=>{S.daily[k]=S.daily[k]||{};S.daily[k][i.id]=c.checked;save();vGuiaKeep();};});
  pomoWire();
};
function rpTodayBtn(){
  const t=todayK(); if(t>RP_END||rpFixed(t)||!AG0[t]) return "";
  const off=AG[t]&&AG[t][6]==="off";
  return off?`<div class="rpday row"><span class="muted">Hoje está marcado como dia sem estudo.</span><button class="linkbtn" onclick="rpUnskip('${t}')">Vou estudar hoje</button></div>`
    :`<div class="rpday row"><button class="linkbtn" onclick="rpSkip('${t}')">Não consigo estudar hoje</button></div>`;
};

/* ---------- Cronograma (aba ao lado de Hoje) ---------- */
function vCrono(){
  rpApply();
  const t=todayK(), days=agDays(), past=days.filter(k=>k<t), full=past.filter(k=>dayScore(k)>=1).length, pend=rpPending();
  const left=Math.max(0,Math.round((kDate("2026-12-06")-kDate(t))/864e5));
  const card=k=>{
    const a=AG[k], p=dayPlan(k), its=dayItems(p), tk=its.filter(i=>!i.auto), dn=tk.filter(i=>itemDone(k,i)).length, open=k===cronoOpen, tp=agTipo(a);
    const st=k<t?(dn===tk.length?"✓":dn?`${dn}/${tk.length}`:"não feito"):k===t?"hoje":"";
    const m=its.find(i=>i.auto), off=AG[k]&&AG[k][6]==="off";
    return `<section class="agday ${k===t?"today":""} ${k<t&&dn<tk.length?"miss":""} ${open?"open":""}" id="ag-${k}">
      <button class="aghead" onclick="cronoOpen=cronoOpen==='${k}'?'':'${k}';vCronoKeep()" aria-expanded="${open}">
        <span class="agdate num"><b>${k.slice(8)}/${k.slice(5,7)}</b><i>${WD[kDate(k).getDay()]}</i></span>
        <span class="agfoco"><b>${esc(a[0])}</b>${a[4]&&a[5]?`<i class="muted">+ ${a[4]==="port"?"Português":"Matemática"}: ${esc(a[5])}</i>`:""}</span>
        <span class="agst">${tp[0]!=="Conteúdo"?`<span class="pill ${tp[1]}">${tp[0]}</span>`:""}${st?`<span class="muted num">${st}</span>`:""}</span>
      </button>
      ${open?`<div class="tlist">${tlHTML(k,its,"ag-"+k+"-",k===t)}</div>${m?`<p class="muted">${esc(m.t)}${k<=t?` · ${S.days[k]||0} respondidas${(S.days[k]||0)>=S.goal?" ✓ cumprida":""}`:""}</p>`:""}
        ${k>=t&&k<=RP_END&&!rpFixed(k)?`<div class="rpday row"><button class="linkbtn" onclick="${off?`rpUnskip('${k}')">Vou estudar neste dia`:`rpSkip('${k}')">Não vou poder estudar neste dia`}</button></div>`:""}`:""}
    </section>`;
  };
  const wks=agWeeks(), cw=wks.findIndex(w=>w[w.length-1]>=t), before=cw>0?wks.slice(0,cw):cw<0?wks:[], rest=cw<0?[]:wks.slice(cw);
  const wkHTML=(w,i)=>`<div class="stack agwkb"><h3 class="agwk">Semana ${i+1} · ${fmtK(w[0])} a ${fmtK(w[w.length-1])}</h3><div class="aglist">${w.map(card).join("")}</div></div>`;
  $("#view").innerHTML=`${segNav("crono",SEG_HOJE)}
  <div class="stack" style="gap:4px"><h2>Cronograma até 06/12</h2>
    <span class="muted num">${left} dias até a prova · ${full} de ${past.length} dias anteriores completos</span></div>
  ${pend.length?`<div class="rule row" style="justify-content:space-between;gap:8px"><span>${pend.length===1?"Um assunto atrasado":pend.length+" assuntos atrasados"}.</span><button class="btn sm" onclick="rpReorg()">Reorganizar</button></div>`:""}
  ${before.length?foldHTML("agprev",`Semanas anteriores (${before.length===1?"semana 1":"1 a "+before.length})`,`${full} de ${past.length} dias completos`,before.map((w,i)=>wkHTML(w,i)).join(""),false):""}
  ${rest.map((w,i)=>wkHTML(w,i+before.length)).join("")}
  ${foldHTML("plano","Plano até 06/12 e método de estudo","as etapas do plano e como estudar cada dia",planMethod(),false)}
  ${foldHTML("rphelp","Não conseguiu estudar algum dia?","como o plano se ajusta",`<div class="stack inner"><p class="muted">Abra o dia e toque em “Não vou poder estudar neste dia”, ou use o botão na tela Hoje. O conteúdo vai para os próximos dias, a ordem do plano se mantém e nenhum assunto fica de fora. Se faltar dia, dois assuntos parecidos dividem um dia, com tempos menores.</p>
    ${S.rp&&S.rp.at?`<div class="row"><span class="muted">Última reorganização: ${new Date(S.rp.at).toLocaleDateString("pt-BR")}</span>${"rpPrev" in S?'<button class="btn ghost sm" onclick="rpUndo()">Desfazer</button>':""}</div>`:""}</div>`,false)}`;
  document.querySelectorAll(".agday .tl input").forEach(c=>c.onchange=()=>{const k=c.dataset.k;S.daily[k]=S.daily[k]||{};S.daily[k][c.dataset.i]=c.checked;save();vCronoKeep();});
  /* dia anterior aberto (ex.: voltou de uma etapa atrasada): mostra as semanas anteriores */
  if(cronoOpen&&cronoOpen<t){const d=$('#view details.fold[data-k="agprev"]');if(d&&!d.open)d.open=true;}
};
/* plano: as etapas aparecem pelo nome e pelas datas (sem "fase 1, 2…", que não batia com as semanas) */

/* ---------- Praticar ---------- */
function vPratica(){
  const opts=Object.entries(CATS).map(([k,v])=>`<option value="${k}">${esc(v.n)} (${QV().filter(q=>q.c===k).length})</option>`).join("");
  const blk=Object.entries(BLOCKS).map(([k,v])=>`<option value="b:${k}">Bloco: ${esc(v)}</option>`).join("");
  const years=Object.keys(PROVAS).sort().reverse();
  const t=paceTarget(), a=myAvgT(), lawN=QV().filter(q=>/13\.303/.test(q[1])).length, nv=unseenCount(), due=srsDue().length, nsrs=Object.keys(S.srs).length;
  const grp=[["Mesmo cargo (Técnico de Administração e Controle)",s=>/ TAC$/.test(s),s=>s.replace(/ TAC$/,"")],["Transpetro, outros cargos","Transpetro"],["Petrobras, outros cargos","Petrobras"],["Banco do Brasil (Português, Matemática, Mat. Financeira e Informática)","BB"]].map(([t,p,f])=>typeof p==="string"?[t,s=>s.startsWith(p)&&!/ TAC$/.test(s),s=>s.replace(p+" ","")]:[t,p,f]);
  const go1=(fn,l,gh)=>`<button class="btn ${gh?"ghost ":""}sm" onclick="${fn}">${l}</button>`;
  const dia=mlist([
    mrow({k:"adapt",hl:1,t:"Treino adaptativo",m:"20 questões · recomendado",b:go1("startAdaptive()","Começar"),
      d:`12 dos seus 5 assuntos mais fracos (${weakCats(5).map(k=>esc(CATS[k].n)).join(", ")}), 4 de outras específicas e 4 de Português e Matemática. Prioriza as que você nunca viu.`}),
    mrow({k:"wrong",t:"Revisar erradas",m:`${due} para hoje · ${nsrs} na revisão`,b:`<button class="btn ghost sm" ${S.wrong.length||nsrs?"":"disabled"} onclick="startWrong()">Revisar</button>`,
      d:"Revisão espaçada: cada questão errada volta no dia em que você estaria começando a esquecer. Acertou, o intervalo cresce; errou, ela volta amanhã."}),
    mrow({k:"tema",open:1,t:"Treino por assunto",m:"até 15 questões · correção na hora",b:go1("startTrain()","Treinar",1),
      x:`<label for="selCat" class="muted">Assunto</label><select id="selCat"><option value="src:all">Só questões de provas anteriores (${QV().filter(q=>q[4]).length})</option>${blk}${opts}</select>
      <label class="row muted chk" style="gap:8px"><input type="checkbox" id="onlyNew" style="width:18px;height:18px;accent-color:var(--petrol)"> Só questões que ainda não respondi</label>`}),
    mrow({k:"cad",t:"Caderno de erros",m:`${Object.keys(S.notes).length} notas`,b:go1("go('caderno')","Abrir",1),
      d:"Seus erros com o motivo (não sabia, confundiu, leu rápido, errou a conta) e o que lembrar da próxima vez."}),
    mrow({k:"lei",t:"Lei 13.303 artigo por artigo",m:`${lawN} questões`,b:go1("startLaw()","Treinar",1),
      d:"Questões com o número do artigo, no estilo da letra da lei que a Cesgranrio cobra. Complete com o jogo Lei seca, em Jogos."})]);
  const sims=mlist([
    mrow({k:"full",t:"Simulado completo",m:"60 questões · 4 h",b:go1("startExam('full')","Iniciar",1),
      d:`No formato da prova: cronometrado, correção só no final e verificação das notas de corte. Puxa primeiro as questões que você nunca viu (${nv.toLocaleString("pt-BR")} inéditas no banco).`}),
    mrow({k:"esp",t:"Simulado das específicas",m:"40 questões · 2 h 40",b:go1("startExam('esp')","Iniciar",1),
      d:"As 40 questões que decidem a classificação, na proporção do edital, com 4 minutos por questão. Mostra a distância do corte (20) e da meta (28 a 32)."}),
    mrow({k:"mini",t:"Mini simulado",m:"20 questões · 50 min",b:go1("startExam('mini')","Iniciar",1),
      d:"Mesma proporção entre os blocos, priorizando as inéditas. Bom para dias de semana."}),
    mrow({k:"ritmo",t:"Simulado de ritmo",m:`60 questões · ${fmt(t)} cada`,b:go1("startPace()","Iniciar",1),
      d:`${a?`Sua média recente é ${fmt(Math.round(a))} por questão. O tempo deste simulado é 10% menor, para você ganhar folga no dia da prova.`:"Sem média ainda: o alvo começa em 3:30 por questão."} Em qualquer questão, o app avisa quando você passa de 3 minutos.`}),
    mrow({k:"real",t:"Modo prova real",m:"cartão-resposta",b:go1("startReal('full')","Simulado de 60",1),
      d:"Caderno de questões com rascunho e “voltar depois”, cartão-resposta separado e só a correção no fim. Treina passar as respostas a tempo. As provas inteiras da Transpetro estão em Provas anteriores."})]);
  const prov=`<div class="stack inner"><p class="muted">Técnico de Administração e Controle da Transpetro, só com as questões que ainda valem pelas regras atuais, conferidas com o gabarito oficial. <b>Treinar</b>: 4 min por questão, correção no fim. <b>Prova real</b>: com cartão-resposta.</p>
    <div class="mlist">${years.map(y=>`<div class="prow"><span><b>Transpetro ${y}</b> <span class="muted num">${QV().filter(q=>q[4]===y).length} questões</span></span><span class="row" style="gap:6px">${go1(`startPast('${y}')`,"Treinar",1)}${go1(`startReal('${y}')`,"Prova real",1)}</span></div>`).join("")}</div>
    <h4>Outras provas Cesgranrio</h4>
    <p class="muted">Questões reais da mesma banca, só dos assuntos do seu edital e com a lei e os programas atuais. Gabarito conferido com o oficial e explicado.</p>
    ${grp.map(([gt,p,f],gi)=>{const ss=SRC_ORD.filter(p);return `<details class="pgrp2"><summary>${esc(gt)} <span class="muted num">· ${ss.length} provas</span></summary><div class="pgrid">${ss.map(s=>`<button class="btn ghost sm pbtn" onclick="startSrc('${s}')"><b>${esc(f(s))}</b><span>${srcCount(s)} questões</span></button>`).join("")}</div></details>`;}).join("")}
    <p class="muted">A divisão das 40 específicas no simulado (9 de processos, 9 de finanças, 15 de logística e compras, 7 de informática) é uma estimativa proporcional ao edital, que não define quantas questões vêm de cada tema.</p></div>`;
  $("#view").innerHTML=`
  ${rq?`<div class="rule row" style="justify-content:space-between"><span>Você tem uma prova real em andamento.</span><button class="btn sm" onclick="go('real')">Continuar</button></div>`:""}
  ${quiz&&!quiz.finished?`<div class="rule row" style="justify-content:space-between"><span>Você tem um ${esc(quiz.label.toLowerCase())} em andamento.</span><button class="btn sm" onclick="go('quiz')">Continuar</button></div>`:""}
  <div class="stack" style="gap:4px"><h2>Praticar</h2><span class="muted">Toque no nome para ver como funciona.</span></div>
  <section class="panel stack"><h3>Treinos</h3>${dia}</section>
  ${foldHTML("sims","Simulados","completo, específicas, mini, ritmo e prova real",sims,true)}
  ${foldHTML("prat","Provas anteriores","Transpetro 2018, 2012 e 2011 e outras provas Cesgranrio",prov,false)}`;
};

/* ---------- Jogos ---------- */
function vJogos(){
  const g=S.gm, known=Object.values(S.fcl).filter(x=>x>=2).length, rec=t=>t?` · ${t}`:"";
  const sel=(id,lbl,html)=>`<label class="muted" for="${id}">${lbl}</label>${html}`;
  const b=(fn,l)=>`<button class="btn sm" onclick="${fn}">${l}</button>`;
  $("#view").innerHTML=`<div class="stack" style="gap:4px"><h2>Jogos</h2><span class="muted">Rodadas curtas para fixar conceitos, siglas, prazos e fórmulas. Toque no nome para ver as regras e escolher o assunto.</span></div>
  <section class="panel">${mlist([
    mrow({k:"dch",hl:1,t:"Desafio do dia",m:`5 questões${rec(g.dch&&g.dch.best?`sequência ${g.dch.best} dias`:"")}`,b:b("startDaily()","Jogar"),d:"5 questões novas por dia, montadas para os seus pontos fracos. Faça todo dia para não perder a sequência."}),
    mrow({k:"fc",t:"Flashcards",m:`${known} de ${FC.length} dominados`,b:b("startFc()","Começar"),d:"Veja o conceito, tente lembrar e vire o cartão. Os que você não sabia voltam primeiro na próxima vez.",x:sel("selFc","Baralho",gameSel("selFc",g.lastFc||"esp"))}),
    mrow({k:"vf",t:"Verdadeiro ou falso relâmpago",m:`90 s${rec(g.vfBest?`recorde ${g.vfBest}`:"")}`,b:b("startVf()","Jogar"),d:"Responda o máximo de afirmações antes do tempo acabar. No fim, veja a correção de cada erro.",x:sel("selVf","Assuntos",gameSel("selVf",g.lastVf||"esp"))}),
    mrow({k:"mt",t:"Associação",m:`6 pares${rec(g.mtBest?`recorde ${fmt(g.mtBest)}`:"")}`,b:b("startMatch()","Jogar"),d:"Ligue cada termo à sua definição no menor tempo possível. Cada erro soma 5 segundos.",x:sel("selMt","Assuntos",gameSel("selMt",g.lastMt||"esp"))}),
    mrow({k:"leis",t:"Lei seca",m:`${LEI.length} trechos${rec(g.leiBest?`recorde ${g.leiBest}`:"")}`,b:b("startLei()","Começar"),d:"Complete o texto da Lei 13.303, da Lei 14.133 e da LGPD. A Cesgranrio copia a letra da lei nas alternativas.",
      x:sel("selLei","Lei",`<select id="selLei"><option value="all">Todas</option><option value="13.303">Lei 13.303/2016 (estatais)</option><option value="14.133">Lei 14.133/2021</option><option value="LGPD">LGPD (Lei 13.709/2018)</option></select>`)}),
    mrow({k:"calc",t:"Cálculo sem calculadora",m:`90 s${rec(g.calcBest?`recorde ${g.calcBest}`:"")}`,b:b("startCalc()","Jogar"),d:"Porcentagem, juros, regra de três, aumentos e descontos. Na prova, calculadora é proibida: aqui você treina a conta de cabeça."}),
    mrow({k:"duel",t:"Duelo do relógio",m:`10 questões · 60 s cada${rec(g.duelBest?`recorde ${g.duelBest}`:"")}`,b:b("S.gm.lastDuel=$('#selDuel').value;startDuel()","Jogar"),d:"Quanto mais rápido você acerta, mais pontos. Errou ou o tempo acabou, vê a explicação e segue.",x:sel("selDuel","Assuntos",gameSel("selDuel",g.lastDuel||"esp"))}),
    mrow({k:"erro",t:"Ache o erro",m:`${PEG.length} frases${rec(g.erroBest?`recorde ${g.erroBest} de 8`:"")}`,b:b("startErro()","Jogar"),d:"Uma frase de lei ou conceito com uma palavra trocada. Toque na palavra errada."}),
    mrow({k:"ord",t:"Ordene as fases",m:`${ORD.length} sequências`,b:b("startOrd()","Jogar"),d:"Monte na ordem certa as fases da licitação, o PDCA, a DRE, o fluxo do armazém e outras sequências cobradas.",
      x:sel("selOrd","Sequência",`<select id="selOrd"><option value="r">Sorteada</option>${ORD.map((o,i)=>`<option value="${i}">${esc(o[0])}</option>`).join("")}</select>`)})])}</section>
  ${TTS_OK?`<p class="muted">Para estudar ouvindo (resumos, questões, flashcards e pegadinhas em voz alta), use o botão de fone no topo.</p>`:""}`;
};

/* ---------- Progresso ---------- */
function vStats(){
  const k=todayK(), a=monday(k), w=weekData(a), pw=weekData(plusK(a,-7)), pc=v=>v&&v.t?Math.round(v.c/v.t*100):null;
  const acc=pc(w), pacc=pc(pw), any=Object.keys(S.stats).length>0;
  const ex=S.hist.filter(h=>espOf(h).t>=8), last=ex.slice(0,3);
  const proj=last.length?Math.round(last.reduce((s,h)=>{const e=espOf(h);return s+e.c/e.t;},0)/last.length*40):null;
  const pst=proj===null?null:proj>=32?["ok","na meta"]:proj>=20?["mid","acima do corte"]:["bad","abaixo do corte"];
  const w7=slogSum(7), m30=slogSum(30), full=fullStreak();
  const rows=Object.keys(BLOCKS).filter(bk=>w.blk[bk]||pw.blk[bk]).map(bk=>{const x=pc(w.blk[bk]),y=pc(pw.blk[bk]);const d=x!==null&&y!==null?x-y:null;
    return `<div class="wkrow"><span><i class="bdot" style="background:var(--c-${bk})"></i>${esc(BLOCKS[bk])}</span><span class="num">${x===null?"—":x+"%"}</span><span class="num wkd ${d>0?"ok":d<0?"bad":""}">${d===null?"":d>0?"▲ "+d:d<0?"▼ "+(-d):"="}</span></div>`;}).join("");
  /* tendência por semana nas específicas (era da Previsão de nota) */
  const wk={}; ex.forEach(h=>{const d=parseBr(h.date);if(!d)return;const m=new Date(d);m.setDate(d.getDate()-((d.getDay()+6)%7));const key=dkey(m),e=espOf(h);wk[key]=wk[key]||{c:0,t:0};wk[key].c+=e.c;wk[key].t+=e.t;});
  const weeks=Object.keys(wk).sort().slice(-6), wpc=weeks.map(x=>Math.round(wk[x].c/wk[x].t*100));
  const stall=wpc.length>=3&&wpc[wpc.length-1]<=wpc[wpc.length-2]&&wpc[wpc.length-2]<=wpc[wpc.length-3];
  const te=topErr(8), fc=srsForecast(7);
  const blk=Object.keys(BLOCKS).concat("geral").filter(b=>m30.by[b]), mx=Math.max(1,...blk.map(b=>m30.by[b])), tl=S.hist.filter(x=>x.avgT).slice(0,8);
  $("#view").innerHTML=`<h2>Progresso</h2>
  <section class="panel stack nums">
    <div class="row" style="justify-content:space-between"><h3>Esta semana</h3><span class="muted num">${fmtK(w.a)} a ${fmtK(w.b)}</span></div>
    <div class="numgrid">
      <div><span class="v num">${w.q}</span><span class="muted">questões · ${w.days} de 7 dias</span></div>
      <div><span class="v num">${acc===null?"—":acc+"%"}</span><span class="muted">acerto${pacc===null?"":` · antes ${pacc}%`}</span></div>
      <div><span class="v num">${proj===null?"—":proj+"/40"}</span><span class="muted">${pst?`previsão · <span class="${pst[0]==="ok"?"okt":pst[0]==="bad"?"badt":""}">${pst[1]}</span>`:"previsão (faça um simulado)"}</span></div>
      <div><span class="v num">${minFmt(w7.t)}</span><span class="muted">estudo · ${full} ${full===1?"dia seguido":"dias seguidos"}</span></div>
    </div>
    ${rows?`<div class="stack" style="gap:6px">${rows}</div>`:""}
    <p class="muted">Corte: 20 acertos nas 40 específicas. Meta: 28 a 32.</p>
  </section>
  ${any?lossPanel().replace("<h3>Onde estou perdendo pontos</h3>","<h3>Onde focar</h3>")
    :`<section class="panel stack"><h3>Nenhum resultado ainda</h3><p class="muted">Faça um treino ou um simulado: aqui aparecem a previsão de nota, onde você perde pontos e o acerto por assunto.</p><div><button class="btn" onclick="go('pratica')">Ir para Praticar</button></div></section>`}
  ${any?foldHTML("pcat","Acerto por assunto","do pior para o melhor; toque para treinar",`<div class="stack inner">${catTable()}</div>`,false):""}
  ${te.length?foldHTML("ptop","Questões que você mais erra",`${te.length} questões erradas 2 vezes ou mais`,`<div class="stack inner"><div><button class="btn sm" onclick="startTopErr()">Treinar estas</button></div>${te.map(([i,v])=>`<div class="repitem"><span class="pill bad num">${v}×</span> <span class="muted">${esc(CATS[Q[i].c].n)}</span><p style="margin:4px 0 0">${esc(Q[i][1].length>140?Q[i][1].slice(0,140)+"…":Q[i][1])}</p></div>`).join("")}</div>`,false):""}
  ${ex.length?foldHTML("pevo","Evolução nas específicas","nota projetada para 40 questões",`<div class="stack inner" id="evoSec">${evoChart()}${weeks.length?`<h4>Tendência por semana</h4>${weeks.map((x,i)=>bar("Semana de "+fmtK(x)+(i?(wpc[i]>wpc[i-1]?" ↑":wpc[i]<wpc[i-1]?" ↓":" ="):""),wk[x].c,wk[x].t)).join("")}`:""}</div>`,stall):""}
  ${stall?`<div class="rule"><span class="pill bad">Atenção</span> O acerto nas específicas não sobe há duas semanas. Mude o método nos assuntos mais fracos: mais teoria ou mais questões comentadas, não só mais horas.</div>`:""}
  ${nsrsAny()?foldHTML("psrs","Revisões dos próximos 7 dias",`${fc[0][1]} para hoje`,`<div class="stack inner"><div class="fcast">${fc.map(([kk,n],i)=>`<div class="fcd"><span class="num fcn" style="height:${Math.min(60,6+n*3)}px">${n}</span><span class="muted num">${i?fmtK(kk):"hoje"}</span></div>`).join("")}</div>
    <p class="muted">Revisão espaçada FSRS: cada questão errada volta no dia em que a chance de você esquecer chega a 10%. Acertou rápido, o intervalo cresce; acertou devagar, cresce menos; errou, volta amanhã.</p></div>`,false):""}
  ${foldHTML("phrs","Horas de estudo",`${minFmt(w7.t)} em 7 dias · ${minFmt(m30.t)} em 30 dias`,`<div class="stack inner">
    ${blk.length?blk.map(b=>`<div class="hbar"><span><i class="bdot" style="background:${b==="geral"?"var(--muted)":`var(--c-${b})`}"></i>${b==="geral"?"Geral":esc(BLOCKS[b])}</span><div class="track"><div class="fill" style="width:${m30.by[b]/mx*100}%;background:${b==="geral"?"var(--muted)":`var(--c-${b})`}"></div></div><span class="num">${minFmt(m30.by[b])}</span></div>`).join(""):'<p class="muted">Use o cronômetro de estudo na tela Hoje para registrar o tempo por assunto.</p>'}
    ${tl.length?`<h4>Tempo médio por questão</h4>${tl.map(x=>`<div class="row" style="justify-content:space-between"><span>${esc(x.date)} · ${esc(x.label)}</span><span class="num ${x.avgT>240?"badt":""}">${fmt(x.avgT)}</span></div>`).join("")}`:""}</div>`,false)}
  ${S.hist.length?foldHTML("phist","Histórico de simulados e treinos",`${S.hist.length} registros`,`<div class="stack inner"><div class="tscroll"><table><thead><tr><th>Data</th><th>Modo</th><th>Acertos</th></tr></thead><tbody>
    ${S.hist.map(h=>`<tr><td class="num">${h.date}</td><td>${esc(h.label)}</td><td class="num">${h.score}/${h.total}</td></tr>`).join("")}</tbody></table></div>
    <div class="row"><button class="btn ghost sm" id="rst">Apagar estatísticas</button><span id="rstc" hidden class="row"><span>Apagar histórico e erros salvos?</span><button class="btn warn sm" id="rsty">Apagar</button></span></div></div>`,false):""}
  ${repPanel()}`;
  const r=$("#rst"); if(r){r.onclick=()=>{$("#rstc").hidden=false;}; $("#rsty").onclick=()=>{S.hist=[];S.stats={};S.wrong=[];save();vStats();};}
};
function nsrsAny(){return Object.keys(S.srs||{}).length>0;}

/* ---------- Estudar ---------- */
function vCont(){
  const read=S.read||{}, keys=Object.keys(CATS).filter(k=>RES[k]), nRead=keys.filter(k=>read[k]).length, bdone=BASE.filter(l=>S.base[l.id]).length;
  const groups=Object.entries(BLOCKS).map(([b,bn])=>{
    const items=keys.filter(k=>CATS[k].b===b).map(k=>{const p=pct(S.stats[k]);
      return `<button class="topic" onclick="openTopic('${k}')"><span class="tname">${esc(CATS[k].n)}</span><span class="tmeta">${p!==null?`<span class="pill ${p<50?"bad":p<70?"mid":"ok"}">${p}%</span>`:""}${read[k]?'<span class="pill ok">lido</span>':""}</span></button>`;}).join("");
    return `<section class="stack tgrp" style="--bc:var(--c-${b})"><h3 class="bh">${esc(bn)}</h3><div class="topics">${items}</div></section>`;
  }).join("");
  const base=baseList().replace(/<div class="row" style="justify-content:space-between"><h2>Revisão da escola<\/h2>.*?<\/div>/,"");
  $("#view").innerHTML=`${segNav("cont",SEG_EST)}
  <div class="stack" style="gap:6px"><div class="row" style="justify-content:space-between;align-items:baseline"><h2>Estudar</h2><span class="muted num">${nRead} de ${keys.length} lidos</span></div>
    <div class="track"><div class="fill" style="width:${nRead/keys.length*100}%"></div></div>
    <span class="muted">Resumo de cada tópico do edital com as pegadinhas mais cobradas. Leia, marque como lido e treine o assunto em seguida.</span></div>
  ${groups}
  ${foldHTML("base","Revisão da escola",`Português e Matemática básicos · ${bdone} de ${BASE.length} lições`,`<div class="inner">${base}</div>`,false)}
  ${aboutExam()}`;
};
/* Áudio abre pelo botão de fone (sem aba repetida em Estudar) */
VIEWS.audio=()=>{vAudio();const s=$("#view .segtabs");if(s)s.remove();};

/* ---------- Configurações: só ajustes ---------- */
function vConfig(){
  const push=pushPanel().replace(/^<section class="panel stack">/,'<div class="stack" style="gap:8px">').replace(/<\/section>$/,"</div>").replace("<h3>Notificações com o app fechado</h3>","<h4>Com o app fechado</h4>");
  $("#view").innerHTML=`<div class="stack" style="gap:4px"><h2>Configurações</h2><span class="muted">O progresso é salvo sozinho a cada resposta.</span></div>
  ${cfgSync()}
  <section class="panel stack"><h3>Rotina de estudo</h3>
    <div class="cfgrow"><label for="stH">Início em dias úteis</label><input type="time" id="stH" value="${S.st.h}"></div>
    <div class="cfgrow"><label for="stW">Início no sábado e no domingo</label><input type="time" id="stW" value="${S.st.w}"></div>
    <div class="cfgrow"><label for="goalSel">Meta diária</label><select id="goalSel">${[10,20,30,40,60,80].map(v=>`<option value="${v}" ${v===S.goal?"selected":""}>${v} questões</option>`).join("")}</select></div>
    <p class="muted">Os horários de Hoje partem daqui, com pausa de 10 min a cada bloco de cerca de 50 min.</p></section>
  <section class="panel stack"><h3>Lembretes</h3>
    <div class="row" style="gap:10px;flex-wrap:wrap">
      <label class="row" style="gap:8px"><input type="checkbox" id="remOn" ${S.rem.on?"checked":""} style="width:18px;height:18px;accent-color:var(--petrol)"> Avisar às</label>
      <input type="time" id="remH" value="${S.rem.h}">
      <button class="btn ghost sm" onclick="notify('Lembrete de teste','É assim que o aviso diário aparece.')">Testar</button></div>
    <p class="muted">${notifState()}</p>
    ${push}
    <details class="rev"><summary><span class="mark">⏰</span><span>Avisos pela agenda do celular</span></summary>${outsidePanel().replace(/^<section class="panel stack" id="outSec"><h3>Avisos com o app fechado<\/h3>/,'<div class="stack" id="outSec" style="margin-top:10px">').replace(/<\/section>$/,"</div>")}</details></section>
  <section class="panel stack"><h3>Aparência</h3>
    <span class="muted">Tema</span>${seg("thSeg",theme,[["auto","Automático"],["light","Claro"],["dark","Escuro"]])}
    <span class="muted">Tamanho da letra</span>${seg("fzSeg",String(fz),[[".92","92%"],["1","100%"],["1.12","112%"],["1.25","125%"],["1.4","140%"]])}
    <p class="muted">Valem só para este aparelho. Dentro do simulado, o botão Aa também muda a letra.</p></section>
  <section class="panel stack" id="syncSec"><h3>Backup manual</h3>
    <p class="muted">Cópia do progresso por código, para guardar ou passar para um aparelho sem internet. A importação substitui o progresso deste aparelho.</p>
    <details class="rev"><summary><span class="mark">⇩</span><span>Gerar ou importar um código</span></summary><div class="stack" style="margin-top:10px">
      <p class="synclbl muted">${esc(syncText())}</p>
      <div class="row"><button class="btn ghost sm" id="bkGen">Gerar código</button><button class="btn ghost sm" id="bkCopy">Copiar</button></div>
      <textarea id="bkTxt" rows="3" placeholder="Cole aqui o código de backup"></textarea>
      <div class="row"><button class="btn sm" id="bkImp">Importar código</button><span class="muted" id="bkMsg"></span></div></div></details>
    ${instEvt?`<button class="btn" id="instBtn">Instalar o app neste aparelho</button>`:IS_PWA?"":`<a class="btn ghost sm" href="${GH_URL}" target="_blank" rel="noopener">Abrir a versão instalável (GitHub)</a>`}</section>
  <p class="muted">Versão ${typeof APP_V!=="undefined"?APP_V:""} · ${QV().length.toLocaleString("pt-BR")} questões</p>`;
  $("#stH").onchange=e=>{S.st.h=e.target.value||"19:00";save();};
  $("#stW").onchange=e=>{S.st.w=e.target.value||"09:00";save();};
  $("#goalSel").onchange=e=>{S.goal=+e.target.value;save();};
  $("#remOn").onchange=e=>{remEnable(e.target.checked);};
  $("#remH").onchange=e=>{S.rem.h=e.target.value||"19:00";S.rem.last=null;save();};
  document.querySelectorAll("#thSeg button").forEach(b=>b.onclick=()=>{theme=b.dataset.v;try{localStorage.setItem("transpetro26-theme",theme);}catch(e){}applyTheme();vConfigKeep();});
  document.querySelectorAll("#fzSeg button").forEach(b=>b.onclick=()=>{fz=+b.dataset.v;try{localStorage.setItem(FZK,fz);}catch(e){}fzApply();vConfigKeep();});
  const ib=$("#instBtn"); if(ib) ib.onclick=async()=>{if(!instEvt)return;instEvt.prompt();try{await instEvt.userChoice;}catch(e){}instEvt=null;vConfigKeep();};
  syncWire(); clLbl();
};
