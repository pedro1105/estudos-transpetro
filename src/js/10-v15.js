/* ---------- 26. v15: edital verticalizado ---------- */
/* Tópicos do edital (PSP 2026.3, Ênfase 1) com os assuntos do app que cobrem cada um */
const EDITAL=[
 ["adm","rh","Recursos Humanos",["rh"],["Recrutamento e seleção","Plano de cargos e carreira","Treinamento, desenvolvimento e educação","Gerenciamento de desempenho e gestão de competências","Relações de trabalho e benefícios"]],
 ["adm","sgi","Sistema de Gestão Integrado",["sgi"],["Princípios de integração de sistemas de gestão","Auditorias internas e ações corretivas/preventivas","Melhoria contínua e gestão de riscos integrada"]],
 ["adm","patr","Administração Patrimonial",["patr"],["Controle e inventário patrimonial","Classificação, avaliação e depreciação de bens","Gestão de ativos"]],
 ["adm","manut","Gestão da Manutenção",["manut"],["Manutenções preventiva, corretiva e preditiva","Planejamento e controle da manutenção"]],
 ["adm","ind","Gestão de Indicadores",["ind"],["Acompanhamento de indicadores","Análise de indicadores para tomada de decisão","Indicadores de desempenho ESG"]],
 ["fin","matfin","Matemática Financeira",["matfin"],["Descontos","Juros simples","Juros compostos","Porcentagem"]],
 ["fin","contab","Registros Contábeis",["contab"],["Princípios e práticas contábeis fundamentais","Obrigações acessórias e controle fiscal"]],
 ["fin","fluxo","Fluxo de Caixa",["fluxo"],["Conceitos e tipos de fluxo de caixa","Elaboração e análise do fluxo direto e indireto","Gestão de entradas e saídas","Integração com orçamento e projeções financeiras"]],
 ["fin","bp","Balanço Patrimonial e DRE",["bp"],["Estrutura do Balanço Patrimonial","Estrutura da DRE","Relação entre balanço, DRE e demais demonstrações"]],
 ["log","log","Logística e Suprimentos",["log"],["Conceitos e aplicações","Sustentabilidade e logística verde","Tecnologias emergentes para logística"]],
 ["log","transp","Modalidades de Transporte",["transp"],["Tipos de transporte","Intermodalidade e multimodalidade","Regulação e legislação do transporte"]],
 ["log","estoq","Gestão de Estoques",["estoq"],["Classificação e métodos de gestão de estoques","Políticas de estoque e níveis de serviço","Tecnologias para automação do controle de estoque"]],
 ["log","armaz","Armazenagem",["armaz"],["Tipos de armazéns e suas funções","Layout e organização do armazém","Tecnologias"]],
 ["log","manus","Manuseio de Materiais e Embalagem",["manus"],["Equipamentos de movimentação","Princípios de movimentação eficiente","Tecnologias de automação","Tipos e funções da embalagem","Sustentabilidade nos materiais","Unitização de cargas","Segurança no transporte"]],
 ["log","compras","Gestão de Compras",["compras"],["Modalidades de compras e orçamento","Planejamento de compras","Lei 13.303/2016 (arts. 28 a 91)","Lei 14.133/2021"]],
 ["log","contr","Gestão de Contratos",["contr"],["Ciclo de vida do contrato","Fiscalização e gestão de contratos","Gestão de riscos e aditivos contratuais","Contratos digitais e integração com sistemas de gestão"]],
 ["info","info1","Fundamentos de Computação",["info"],["Hardware e software","Características de processadores","Sistemas operacionais, utilitários e aplicativos","Manipulação de arquivos no Windows 11"]],
 ["info","info2","Aplicativos Comerciais",["info"],["Edição de textos (Word 2024)","Planilhas (Excel 2024)","Material escrito e multimídia (Office 2024)"]],
 ["info","lgpd","Redes e Segurança",["lgpd","info"],["Internet e intranet","Principais navegadores","Noções de segurança da informação","LGPD (Lei 13.709/2018)"]],
 ["port","port","Língua Portuguesa",["port"],["Compreensão de textos","Ortografia oficial","Mecanismos de coesão textual","Emprego das classes de palavras","Concordância nominal e verbal","Crase","Pontuação","Significação das palavras"]],
 ["mat","mat","Matemática",["mat"],["Conjuntos numéricos","Razão, proporção, regra de três e porcentagem","Funções polinomiais, exponenciais, logarítmicas e trigonométricas","Equações de 1º e 2º grau, exponenciais, logarítmicas e sistemas","Análise combinatória","Probabilidade básica","Estatística básica","Juros simples e compostos","Geometria plana","Geometria espacial"]]
];
const ED_MIN=10;
function edStat(cats){return cats.reduce((s,c)=>{const x=S.stats[c];return x?{c:s.c+x.c,t:s.t+x.t}:s;},{c:0,t:0});}
function edState(e){
  const ed=S.ed||{}, n=e[4].length, lido=e[4].filter((_,j)=>ed[e[1]+"."+j]).length, st=edStat(e[3]);
  return {n,lido,st,trein:st.t>=ED_MIN,ok:st.t>=ED_MIN&&st.c/st.t>=.7,rev:ed[e[1]+".r"]||null};
}
function edToggle(id){S.ed=S.ed||{};if(S.ed[id])delete S.ed[id];else S.ed[id]=todayK();save();const y=window.scrollY;vEdital();window.scrollTo({top:y});}
function vEdital(){
  const all=EDITAL.map(e=>[e,edState(e)]), sub=all.reduce((s,[,x])=>s+x.n,0), lido=all.reduce((s,[,x])=>s+x.lido,0);
  const ok=all.filter(([,x])=>x.ok).length, tr=all.filter(([,x])=>x.trein).length, rv=all.filter(([,x])=>x.rev).length;
  const ico=(on,t)=>`<span class="edck ${on?"on":""}" title="${t}">${on?"✓":""}</span>`;
  const groups=Object.keys(BLOCKS).map(b=>{
    const es=all.filter(([e])=>e[0]===b); if(!es.length) return "";
    return `<h3 class="edb" style="color:var(--c-${b})">${esc(BLOCKS[b])}</h3>`+es.map(([e,x])=>{
      const p=x.st.t?Math.round(x.st.c/x.st.t*100):null, c0=e[3][0];
      return `<details class="rev edt" ${S.fold["ed."+e[1]]?"open":""} ontoggle="S.fold['ed.${e[1]}']=this.open||undefined">
      <summary><span class="edsum"><b>${esc(e[2])}</b><span class="edflags">${ico(x.lido===x.n,"Lido")}${ico(x.trein,"Treinado")}${ico(x.ok,"70% ou mais")}${ico(!!x.rev,"Revisado")}</span></span>
        <span class="muted num edmeta">${x.lido}/${x.n} lidos · ${x.st.t} questões${p!==null?` · ${p}%`:""}</span></summary>
      <div class="stack" style="gap:6px;margin-top:8px">
        ${e[4].map((t,j)=>{const id=e[1]+"."+j;return `<label class="rrow"><input type="checkbox" ${S.ed&&S.ed[id]?"checked":""} onchange="edToggle('${id}')"> <span>${esc(t)}</span></label>`;}).join("")}
        <div class="row" style="gap:6px;flex-wrap:wrap;margin-top:4px">
          <button class="btn ghost sm" onclick="openTopic('${c0}')">Resumo</button>
          <button class="btn ghost sm" onclick="startTrainCat('${c0}')">Treinar</button>
          <button class="btn ${x.rev?"ghost":""} sm" onclick="edToggle('${e[1]}.r')">${x.rev?"Revisado em "+fmtK(x.rev):"Marcar revisado"}</button></div>
      </div></details>`;}).join("");
  }).join("");
  $("#view").innerHTML=segNav("edital",SEG_EST)+`<div class="stack"><h2>Edital verticalizado</h2>
    <p class="muted">Cada tópico do edital com quatro marcas: <b>lido</b> (você marca os subtópicos), <b>treinado</b> (${ED_MIN}+ questões, automático), <b>70%</b> (acerto, automático) e <b>revisado</b> (você marca).</p></div>
    <section class="panel stack"><div class="grid2 edgrid">
      <div class="score"><span class="muted">Subtópicos lidos</span><span class="v num">${lido}/${sub}</span></div>
      <div class="score"><span class="muted">Tópicos treinados</span><span class="v num">${tr}/${all.length}</span></div>
      <div class="score"><span class="muted">Com 70% ou mais</span><span class="v num">${ok}/${all.length}</span></div>
      <div class="score"><span class="muted">Revisados</span><span class="v num">${rv}/${all.length}</span></div></div>
      ${bar("Edital coberto (média das 4 marcas)",lido/sub+tr/all.length+ok/all.length+rv/all.length,4)}</section>
    <div class="stack">${groups}</div>`;
}
VIEWS.edital=()=>vEdital(); TABOF.edital="cont";
SEG_EST.splice(1,0,["edital","Edital"]);

/* ---------- 27. v15: revisão espaçada FSRS ---------- */
/* Modelo FSRS-5 com pesos padrão e retenção desejada de 90% (intervalo = estabilidade).
   Errou = De novo; acertou devagar (mais de 2,5 min) = Difícil; acertou = Bom.
   Questão cujo próximo intervalo passa da véspera da prova sai da fila: já está fixada. */
const FW=[0.40255,1.18385,3.173,15.69105,7.1949,0.5345,1.4604,0.0046,1.54575,0.1192,1.01925,1.9395,0.11,0.29605,2.2698,0.2315,2.9898];
const FF=19/81, FDEC=-0.5, F_END="2026-12-05";
const fClampD=d=>Math.min(10,Math.max(1,d));
const fD0=g=>fClampD(FW[4]-Math.exp(FW[5]*(g-1))+1);
function fNextD(d,g){const dd=d-FW[6]*(g-3)*(10-d)/9;return fClampD(FW[7]*fD0(4)+(1-FW[7])*dd);}
function fRet(t,s){return Math.pow(1+FF*t/s,FDEC);}
function fSucc(d,s,r,g){return s*(1+Math.exp(FW[8])*(11-d)*Math.pow(s,-FW[9])*(Math.exp(FW[10]*(1-r))-1)*(g===2?FW[15]:1)*(g===4?FW[16]:1));}
function fFail(d,s,r){return Math.min(s,FW[11]*Math.pow(d,-FW[12])*(Math.pow(s+1,FW[13])-1)*Math.exp(FW[14]*(1-r)));}
function srsMig(e){if(e&&e.s==null){e.s=[1,3,7,15][e.b|0]||1;e.dif=5;delete e.b;}return e;}
const kDiff=(a,b)=>Math.round((kDate(a)-kDate(b))/864e5);
srsUpdate=function(qi,ok,sec){
  const t=todayK(); S.qerr=S.qerr||{};
  if(!ok) S.qerr[qi]=(S.qerr[qi]||0)+1;
  const e=srsMig(S.srs[qi]);
  if(!e){if(!ok) S.srs[qi]={s:FW[0],dif:fD0(1),d:addDaysK(1),l:t};return;}
  if(ok&&e.d>t) return;
  const g=!ok?1:(sec>150?2:3), el=e.l?Math.max(0,kDiff(t,e.l)):e.s, r=fRet(el,e.s);
  e.s=ok?fSucc(e.dif,e.s,r,g):fFail(e.dif,e.s,r); e.dif=fNextD(e.dif,g); e.l=t;
  e.s=Math.round(e.s*100)/100; e.dif=Math.round(e.dif*100)/100;
  const iv=Math.max(1,Math.round(e.s)), due=addDaysK(iv);
  if(ok&&due>F_END) delete S.srs[qi]; else e.d=due;
};
Object.values(S.srs).forEach(srsMig);
/* previsão: quantas revisões vencem em cada um dos próximos dias */
function srsForecast(n){const out=[];for(let i=0;i<n;i++){const k=addDaysK(i);out.push([k,Object.values(S.srs).filter(x=>i?x.d===k:x.d<=k).length]);}return out;}

/* ---------- 28. v15: estatísticas detalhadas (estilo TEC/QConcursos) ---------- */
function espProj(h){const B=h.byB||{};let c=0,t=0;ESP_B.forEach(b=>{if(B[b]){c+=B[b].c;t+=B[b].t;}});return t>=5?{v:c/t*40,t}:null;}
function evoChart(){
  const pts=S.hist.slice().reverse().map(h=>[h,espProj(h)]).filter(x=>x[1]).slice(-20);
  if(pts.length<2) return `<p class="muted">Faça pelo menos 2 simulados ou treinos com questões específicas para ver a evolução.</p>`;
  const W=320,H=160,L=28,R=8,T=8,Bm=22,x=i=>L+(W-L-R)*(pts.length===1?0:i/(pts.length-1)),y=v=>T+(H-T-Bm)*(1-v/40);
  const path=pts.map(([,p],i)=>(i?"L":"M")+x(i).toFixed(1)+" "+y(p.v).toFixed(1)).join(" ");
  const last=pts[pts.length-1][1].v;
  return `<svg class="evo" viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolução nas específicas, projetada para 40 questões. Último: ${Math.round(last)} de 40">
    <rect x="${L}" y="${y(32)}" width="${W-L-R}" height="${y(28)-y(32)}" class="evoband"/>
    <line x1="${L}" x2="${W-R}" y1="${y(20)}" y2="${y(20)}" class="evocut"/>
    ${[0,10,20,30,40].map(v=>`<text x="${L-6}" y="${y(v)+4}" text-anchor="end" class="evot">${v}</text>`).join("")}
    <text x="${L+4}" y="${y(20)+13}" class="evot">corte 20</text>
    <text x="${L+4}" y="${y(32)-4}" class="evot">meta 28–32</text>
    <path d="${path}" class="evol"/>
    ${pts.map(([h,p],i)=>`<circle cx="${x(i).toFixed(1)}" cy="${y(p.v).toFixed(1)}" r="3.5" class="evop"><title>${esc(h.date)} · ${esc(h.label)}: ${Math.round(p.v)}/40</title></circle>`).join("")}
  </svg><p class="muted num">Último: ${Math.round(last)}/40 projetado · ${pts.length} registros. A faixa clara é a meta; a linha tracejada, o corte.</p>`;
}
function topErr(n){return Object.entries(S.qerr||{}).filter(([i,v])=>v>=2&&Q[i]&&!Q[i].hid).sort((a,b)=>b[1]-a[1]).slice(0,n).map(([i,v])=>[+i,v]);}
function catTable(){
  const rows=Object.keys(CATS).map(c=>{const s=S.stats[c]||{c:0,t:0},ct=S.ct[c];return [c,s,ct&&ct.n?Math.round(ct.s/ct.n):null];}).filter(r=>r[1].t);
  if(!rows.length) return `<p class="muted">Ainda sem questões respondidas.</p>`;
  rows.sort((a,b)=>a[1].c/a[1].t-b[1].c/b[1].t);
  return `<div class="cattbl"><div class="ctr cth"><span>Assunto</span><span>Acerto</span><span>Questões</span><span>Tempo</span></div>${rows.map(([c,s,tm])=>{const p=Math.round(s.c/s.t*100);
    return `<div class="ctr"><button class="linkbtn" onclick="startTrainCat('${c}')">${esc(CATS[c].n)}</button><span class="num ${p<50?"bad":p<70?"mid":"ok"}">${p}%</span><span class="num">${s.c}/${s.t}</span><span class="num ${tm>180?"bad":""}">${tm===null?"–":tm>=60?Math.floor(tm/60)+"m"+String(tm%60).padStart(2,"0"):tm+"s"}</span></div>`;}).join("")}</div>
    <p class="muted">Ordenado do pior para o melhor. Tempo médio por questão; acima de 3 min fica em vermelho (na prova são cerca de 4 min por questão, contando a marcação do cartão). Toque no assunto para treinar.</p>`;
}
function startTopErr(){const ids=topErr(20).map(x=>x[0]);if(!ids.length)return;makeQuiz(shuffle(ids),"train","Treino: questões que você mais erra",0);}
function statsPanel(){
  const te=topErr(8), fc=srsForecast(7);
  return `<section class="panel stack" id="evoSec"><h3>Evolução nas específicas</h3>${evoChart()}</section>
  <section class="panel stack"><h3>Desempenho por assunto</h3>${catTable()}</section>
  <section class="panel stack"><div class="row" style="justify-content:space-between"><h3>Questões que você mais erra</h3>${te.length?`<button class="btn sm" onclick="startTopErr()">Treinar estas</button>`:""}</div>
    ${te.length?te.map(([i,v])=>`<div class="repitem"><span class="pill bad num">${v}×</span> <span class="muted">${esc(CATS[Q[i].c].n)}</span><p style="margin:4px 0 0">${esc(Q[i][1].length>140?Q[i][1].slice(0,140)+"…":Q[i][1])}</p></div>`).join(""):`<p class="muted">Aparecem aqui as questões erradas 2 vezes ou mais.</p>`}</section>
  <section class="panel stack"><h3>Revisões dos próximos 7 dias</h3><div class="fcast">${fc.map(([k,n],i)=>`<div class="fcd"><span class="num fcn" style="height:${Math.min(60,6+n*3)}px">${n}</span><span class="muted num">${i?fmtK(k):"hoje"}</span></div>`).join("")}</div>
    <p class="muted">Revisão espaçada FSRS: cada questão errada volta no dia em que a chance de você esquecer chega a 10%. Acertou rápido, o intervalo cresce; acertou devagar, cresce menos; errou, volta amanhã.</p></section>`;
}
const _vStats15=vStats;
vStats=function(){_vStats15();const w=$("#view .wkpanel");(w||$("#view h2")).insertAdjacentHTML("afterend",statsPanel());};

/* ---------- 29. v15: tutor com IA (só no link do claude.ai) ---------- */
let TUTOR=null;
if(IN_CLAUDE) window.claude.use("sample").then(s=>{TUTOR=s;if(s&&current==="quiz")vQuiz();}).catch(()=>{});
const tutorOut={};
function qBrief(qi,ord){const q=Q[qi];return `Questão (${CATS[q.c].n}, banca Cesgranrio):\n${q[1]}\n\n${ord.map((oi,p)=>L[p]+") "+q[2][oi]).join("\n")}\n\nGabarito: ${L[ord.indexOf(0)]}\nComentário do app: ${q[3]}`;}
async function tutorAsk(kind){
  if(!TUTOR||!quiz) return;
  const k=quiz.i, qi=quiz.ids[k], ord=quiz.order[k], a=quiz.ans[k], key=qi+":"+kind, box=$("#tutorOut");
  const mine=a!==null?L[a]:null, base=qBrief(qi,ord);
  tutorOut[key]={busy:true,text:"Pensando..."}; if(box) box.innerHTML=`<p class="muted">Pensando...</p>`;
  try{
    if(kind==="why"){
      const p=`Você é um professor de concursos explicando para um aluno de nível médio, sem base em contabilidade, que estuda para a Transpetro 2026 (Cesgranrio). Responda em português do Brasil, em no máximo 120 palavras, sem markdown, frases curtas.\n\n${base}\n\n${mine&&mine!==L[ord.indexOf(0)]?`O aluno marcou ${mine}. Explique por que ${mine} está errada e por que o gabarito está certo, e dê uma dica para não cair nisso de novo.`:`Explique de outro jeito por que o gabarito está certo e por que cada uma das outras está errada, em uma linha cada.`}`;
      const {text}=await TUTOR(p,{modelTier:"quick",onText:({text})=>{const b=$("#tutorOut");if(b&&quiz&&quiz.i===k)b.innerHTML=`<p class="tutxt">${esc(text)}</p>`;}});
      tutorOut[key]={text};
    }else{
      const p=`Crie UMA questão inédita de múltipla escolha no estilo Cesgranrio, nível médio, sobre o mesmo assunto e com dificuldade parecida com esta:\n\n${base}\n\nResponda só com JSON: {"enunciado": string, "alternativas": [5 strings, a primeira é a correta], "explicacao": string curta}. Português do Brasil, sem markdown, sem letras nas alternativas.`;
      const o=await TUTOR.json(p,{modelTier:"default"});
      if(!o||!o.enunciado||!Array.isArray(o.alternativas)||o.alternativas.length<4) throw {code:"bad"};
      tutorOut[key]={gen:{e:String(o.enunciado),alts:o.alternativas.slice(0,5).map(String),x:String(o.explicacao||""),ord:shuffle(o.alternativas.slice(0,5).map((_,i)=>i)),a:null}};
    }
  }catch(e){tutorOut[key]={text:e&&e.code==="not_granted"?"Sem permissão para usar o Claude nesta página.":e&&e.code==="rate_limited"?"Muitos pedidos seguidos. Tente de novo em um minuto.":"Não deu para responder agora. Tente de novo."};}
  if(current==="quiz"&&quiz&&quiz.i===k) tutorRender();
}
function tutorRender(){
  const box=$("#tutorOut"); if(!box||!quiz) return;
  const qi=quiz.ids[quiz.i], o=tutorOut[qi+":why"], g=tutorOut[qi+":sim"];
  let h=o&&o.text?`<p class="tutxt">${esc(o.text)}</p>`:"";
  if(g&&g.gen){const G=g.gen,ci=G.ord.indexOf(0);
    h+=`<div class="stack tutq"><b>Questão parecida (gerada pelo Claude)</b><p>${esc(G.e)}</p>${G.ord.map((oi,p)=>`<button class="opt ${G.a!==null?(oi===0?"right":p===G.a?"wrong":""):""}" onclick="tutorPick(${p})"><span class="l">${L[p]}</span><span>${esc(G.alts[oi])}</span></button>`).join("")}
    ${G.a!==null?`<div class="expl"><strong>${G.ord[G.a]===0?"Correto.":"Resposta: "+L[ci]+"."}</strong> ${esc(G.x)}</div>`:""}</div>`;}
  else if(g&&g.text) h+=`<p class="tutxt">${esc(g.text)}</p>`;
  box.innerHTML=h;
}
function tutorPick(p){const g=tutorOut[quiz.ids[quiz.i]+":sim"];if(!g||!g.gen||g.gen.a!==null)return;g.gen.a=p;tutorRender();}
function tutorPanel(){
  if(!TUTOR||!quiz||quiz.mode!=="train") return "";
  const k=quiz.i, a=quiz.ans[k]; if(a===null) return "";
  const wrong=quiz.order[k][a]!==0;
  return `<section class="panel stack tutor"><div class="row" style="gap:6px;flex-wrap:wrap"><span class="muted">Professor IA</span>
    <button class="btn ghost sm" onclick="tutorAsk('why')">${wrong?`Por que não a letra ${L[a]}?`:"Explicar de outro jeito"}</button>
    <button class="btn ghost sm" onclick="tutorAsk('sim')">Outra parecida</button></div><div id="tutorOut"></div></section>`;
}

/* ---------- 30. v15: deslizar entre questões e atalhos do ícone ---------- */
const _vQuiz15=vQuiz;
vQuiz=function(){_vQuiz15();const art=$("#view article.panel");if(art){const t=tutorPanel();if(t){art.insertAdjacentHTML("afterend",t);tutorRender();}}};
(function(){
  let x0=null,y0=0,t0=0;
  document.addEventListener("touchstart",e=>{if(current!=="quiz"||e.touches.length!==1||(e.target.closest&&e.target.closest("input,textarea,select,.qgrid,dialog"))){x0=null;return;}x0=e.touches[0].clientX;y0=e.touches[0].clientY;t0=Date.now();},{passive:true});
  document.addEventListener("touchend",e=>{if(x0===null||current!=="quiz"||!quiz)return;const t=e.changedTouches[0],dx=t.clientX-x0,dy=t.clientY-y0;x0=null;
    if(Math.abs(dx)>70&&Math.abs(dy)<Math.abs(dx)*.5&&Date.now()-t0<700){const n=quiz.i+(dx<0?1:-1);if(n>=0&&n<quiz.ids.length)nav(dx<0?1:-1);}},{passive:true});
})();
function runShortcut(){
  let a=null;try{a=new URLSearchParams(location.search).get("a");}catch(e){}
  if(!a) return;
  try{history.replaceState(null,"",location.pathname+location.hash);}catch(e){}
  if(a==="wrong") startWrong(); else if(a==="daily") startDaily(); else if(a==="sim") startExam("mini"); else if(a==="afc"||a==="audio") go("audio");
}
setTimeout(runShortcut,0);

/* ---------- 32. v15: notificações push com o app fechado (versão do GitHub) ---------- */
const VAPID_PUB="BKi1rhDT9AgD0pBxEUEAbBgg3QQ7BsTD1T_G3ZMsg6oBK4SjLUHcgeSrwF7Ol1g4wT8i9Cj5kPZ3o-10VSsgSew";
const PUSH_K="transpetro26-push";
const PUSH_OK=!IN_CLAUDE&&location.protocol==="https:"&&"serviceWorker" in navigator&&"PushManager" in window&&"Notification" in window;
function pushGet(){try{return JSON.parse(localStorage.getItem(PUSH_K)||"null");}catch(e){return null;}}
function pushSet(o){try{o?localStorage.setItem(PUSH_K,JSON.stringify(o)):localStorage.removeItem(PUSH_K);}catch(e){}}
function pushPlan(){
  const out=[], now=Date.now(), t0=todayK();
  for(let i=0;i<14;i++){
    const d=new Date(); d.setDate(d.getDate()+i); const k=dkey(d); if(k>"2026-12-06") break;
    if(k===t0&&(S.days[k]||0)>0) continue;
    const we=d.getDay()===0||d.getDay()===6, hm=k==="2026-12-06"?"06:30":(S.rem&&S.rem.on?S.rem.h:(we?S.st.w:S.st.h))||"19:00";
    const [h,m]=hm.split(":").map(Number); d.setHours(h,m,0,0); if(d.getTime()<=now) continue;
    const a=AG[k], due=Object.values(S.srs).filter(x=>x.d<=k).length;
    if(k==="2026-12-06") out.push({t:d.getTime(),ti:"Dia da prova",b:"Boa prova! Documento com foto, caneta preta de corpo transparente e calma: comece pelo que você domina.",u:"./"});
    else out.push({t:d.getTime(),ti:"Hora de estudar"+(a&&a[0]?" · "+a[0]:""),b:(due?due+(due===1?" questão para revisar":" questões para revisar")+" hoje. ":"")+"Toque para abrir a programação de hoje.",u:due?"./?a=wrong":"./"});
  }
  return out;
}
const b64u=s=>{const p="=".repeat((4-s.length%4)%4),b=atob((s+p).replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(b,c=>c.charCodeAt(0));};
async function pushOn(){
  const msg=$("#pushMsg");
  try{
    const perm=await Notification.requestPermission();
    if(perm!=="granted"){if(msg)msg.textContent="As notificações foram bloqueadas. Libere nas configurações do navegador para este site.";return;}
    const reg=await navigator.serviceWorker.ready;
    const sub=(await reg.pushManager.getSubscription())||await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64u(VAPID_PUB)});
    pushSet({sub:sub.toJSON(),h:""}); await pushSync(true);
    if(msg)msg.textContent="Pronto. Os avisos chegam mesmo com o app fechado.";
  }catch(e){if(msg)msg.textContent="Não deu para ativar: "+(e.message||e);}
  vConfigKeep();
}
async function pushOff(){
  const o=pushGet(); pushSet(null);
  try{if(o) await rpc("tp_push",{p_sub:o.sub,p_plan:[]});const reg=await navigator.serviceWorker.ready,s=await reg.pushManager.getSubscription();if(s)await s.unsubscribe();}catch(e){}
  vConfigKeep();
}
let pushT=null;
async function pushSync(now){
  const o=pushGet(); if(!o||!PUSH_OK) return;
  const plan=pushPlan(), h=JSON.stringify(plan);
  if(!now&&h===o.h) return;
  try{const r=await rpc("tp_push",{p_sub:o.sub,p_plan:plan});if(r){o.h=h;o.at=Date.now();pushSet(o);}}catch(e){}
}
if(PUSH_OK){SAVE_HOOKS.push(()=>{clearTimeout(pushT);pushT=setTimeout(()=>pushSync(),8000);});setTimeout(()=>pushSync(),4000);}
function pushPanel(){
  const o=pushGet();
  if(!PUSH_OK) return `<section class="panel stack"><h3>Notificações com o app fechado</h3><p class="muted">${IN_CLAUDE?"Aqui no claude.ai o navegador não permite avisos com a página fechada. Ative na versão instalável (GitHub): ela avisa no horário de estudo com o assunto do dia e as revisões pendentes.":"Este navegador não aceita notificações push. No iPhone, instale o app na tela de início (Compartilhar → Adicionar à Tela de Início) e abra por lá."}</p>${IN_CLAUDE?`<a class="btn ghost sm" href="${GH_URL}" target="_blank" rel="noopener">Abrir a versão instalável</a>`:""}</section>`;
  const nx=pushPlan()[0];
  return `<section class="panel stack"><h3>Notificações com o app fechado</h3>
    <p class="muted">Aviso no horário de estudo (ou no horário do lembrete, se ligado) com o assunto do dia e quantas revisões vencem. Os horários são atualizados sempre que você abre o app; ele agenda as próximas 2 semanas.</p>
    ${o?`<p><span class="pill ok">Ativado</span> ${nx?`Próximo aviso: ${new Date(nx.t).toLocaleString("pt-BR",{weekday:"short",day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}.`:""}</p><div class="row"><button class="btn ghost sm" onclick="pushOff()">Desativar</button></div>`
      :`<div class="row"><button class="btn sm" onclick="pushOn()">Ativar notificações</button></div>`}
    <p class="muted" id="pushMsg"></p></section>`;
}
const _vConfig15=vConfig;
vConfig=function(){_vConfig15();const s=$("#syncSec");if(s)s.insertAdjacentHTML("beforebegin",pushPanel());};

/* ---------- 33. v15: estilos ---------- */
(function(){const st=document.createElement("style");st.textContent=`
.edb{margin:14px 0 2px}
.edt summary{display:flex;flex-direction:column;align-items:stretch;gap:4px}
.edsum{display:flex;justify-content:space-between;gap:8px;align-items:center}
.edflags{display:flex;gap:4px;flex:none}
.edck{width:20px;height:20px;border-radius:6px;border:1.5px solid var(--line);display:inline-grid;place-items:center;font-size:12px;font-weight:700;color:#fff}
.edck.on{background:var(--ok);border-color:var(--ok)}
.edmeta{font-size:12px}
#view .edgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px}#view .edgrid .score .v{font-size:24px}
@media (min-width:720px){.edgrid{grid-template-columns:repeat(4,minmax(0,1fr))}}
svg.evo{width:100%;height:auto;max-width:560px;display:block}
.evoband{fill:var(--ok);opacity:.14}.evocut{stroke:var(--bad);stroke-dasharray:4 4;stroke-width:1.5}
.evot{font:11px var(--f-body);fill:var(--muted)}.evol{fill:none;stroke:var(--petrol);stroke-width:2.5;stroke-linejoin:round}.evop{fill:var(--petrol)}
.cattbl{display:flex;flex-direction:column;gap:2px}
.ctr{display:grid;grid-template-columns:minmax(0,1fr) 52px 60px 52px;gap:6px;align-items:center;padding:4px 0;border-bottom:1px solid var(--line);font-size:14px}
.ctr .linkbtn{white-space:normal;padding:2px 0;font-size:14px}
.ctr>span{text-align:right}.cth{font-size:12px;color:var(--muted)}.cth>span:first-child{text-align:left}
.ctr .bad{color:var(--bad)}.ctr .mid{color:var(--warn,#b7791f)}.ctr .ok{color:var(--ok)}
.fcast{display:flex;gap:6px;align-items:flex-end;min-height:80px}
.fcd{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;justify-content:flex-end}
.fcn{background:var(--petrol-soft);color:var(--petrol);width:100%;display:grid;place-items:center;border-radius:6px;font-size:12px;font-weight:700;min-height:20px}
.tutor .tutxt{white-space:pre-wrap;margin:0}
.tutq{border-top:1px solid var(--line);padding-top:10px}
`;document.head.appendChild(st);})();
