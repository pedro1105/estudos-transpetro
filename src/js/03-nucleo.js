/* ---------- Estado ---------- */
const KEY="transpetro26";
let S={hist:[],stats:{},wrong:[],plan:{}};
try{const r=localStorage.getItem(KEY); if(r) S=Object.assign(S,JSON.parse(r));}catch(e){}
/* save() grava neste aparelho e avisa os módulos registrados em SAVE_HOOKS (sincronização, lembrete). */
const SAVE_HOOKS=[];
/* QID: identificação fixa de cada questão (montada no módulo 08); o histórico é remapeado por ela. */
let QID=null;
/* registro diário de acertos por assunto, para o painel semanal: S.qlog[dia][assunto]=[acertos,total] */
function qlogAdd(c,ok){S.qlog=S.qlog||{};const k=dkey(new Date()),d=S.qlog[k]=S.qlog[k]||{},x=d[c]=d[c]||[0,0];x[1]++;if(ok)x[0]++;}
function saveLocal(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
function save(){S.upd=Date.now();saveLocal();SAVE_HOOKS.forEach(f=>{try{f();}catch(e){}});}

const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const L="ABCDE";

/* ---------- Contagem regressiva ---------- */
(function(){
  const now=new Date(); const t=new Date(2026,11,6); const today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const d=Math.round((t-today)/864e5);
  $("#days").textContent=d>0?d:(d===0?"Hoje":"—");
  if(d===1) $("#daysTxt").textContent="dia para a prova";
  if(d===0) $("#daysTxt").textContent="é hoje. Boa prova!";
  if(d<0) $("#daysTxt").textContent="prova realizada";
})();

/* ---------- Navegação ---------- */
let current="guia", quiz=null, tick=null;
document.querySelectorAll("nav.tabs button").forEach(b=>b.onclick=()=>go(b.dataset.v));
/* Telas: cada módulo registra as suas em VIEWS (função que desenha) e TABOF (aba destacada). */
const VIEWS={home:()=>vGuia(),guia:()=>vGuia(),pratica:()=>vPratica(),crono:()=>vCrono(),stats:()=>vStats(),quiz:()=>vQuiz(),result:()=>vResult(),cont:()=>vCont(),topic:()=>vTopic(),base:()=>vBase(),jogos:()=>vJogos(),fc:()=>vFc(),vf:()=>vVf(),match:()=>vMatch(),links:()=>vLinks(),caderno:()=>vCaderno(),real:()=>vReal(),vesp:()=>vVesp(),lei:()=>vLei(),calc:()=>vCalc()};
const TABOF={home:"guia",guia:"guia",quiz:"pratica",result:"pratica",real:"pratica",caderno:"pratica",topic:"cont",base:"cont",links:"cont",vesp:"cont",fc:"jogos",vf:"jogos",match:"jogos",lei:"jogos",calc:"jogos",crono:"stats"};
function go(v){
  if(!VIEWS[v]) v="guia";
  if(v!=="topic"&&v!=="vesp") ttsStop();
  if(current==="quiz"&&v!=="quiz") qtAcc();
  if(v!=="vf"&&vf&&!vf.done) vf.done=true;
  if(gtick&&v!=="vf"&&v!=="match"){clearInterval(gtick);gtick=null;}
  current=v;
  const tab=TABOF[v]||v;
  document.querySelectorAll("nav.tabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.v===tab));
  document.body.classList.toggle("focus",v==="quiz"||v==="real");
  const cb=document.getElementById("cfgBtn"); if(cb) cb.setAttribute("aria-current",v==="config"?"page":"false");
  VIEWS[v]();
  window.scrollTo({top:0});
}


/* ---------- Praticar ---------- */
/* Grupo recolhível; o estado aberto/fechado fica em S.fold[chave]. */
function foldHTML(k,title,sub,inner,defOpen){
  S.fold=S.fold||{}; const open=S.fold[k]===undefined?!!defOpen:!!S.fold[k];
  return `<details class="panel fold" data-k="${k}"${open?" open":""}><summary><span>${esc(title)}</span>${sub?`<span class="muted">${esc(sub)}</span>`:""}</summary><div class="stack foldin">${inner}</div></details>`;
}
document.addEventListener("toggle",e=>{const d=e.target;if(d&&d.matches&&d.matches("details.fold[data-k]")){S.fold=S.fold||{};S.fold[d.dataset.k]=d.open;save();}},true);

function vPratica(){
  const opts=Object.entries(CATS).map(([k,v])=>`<option value="${k}">${esc(v.n)} (${QV().filter(q=>q.c===k).length})</option>`).join("");
  const blk=Object.entries(BLOCKS).map(([k,v])=>`<option value="b:${k}">Bloco: ${esc(v)}</option>`).join("");
  const years=Object.keys(PROVAS).sort().reverse();
  const t=paceTarget(), a=myAvgT(), lawN=QV().filter(q=>/13\.303/.test(q[1])).length;
  const grp=[["Mesmo cargo: Técnico(a) de Administração e Controle (TAC)",s=>/ TAC$/.test(s),s=>s.replace(/ TAC$/,"")],["Transpetro, outros cargos","Transpetro"],["Petrobras, outros cargos","Petrobras"],["Banco do Brasil (só Português, Matemática, Mat. Financeira e Informática)","BB"]].map(([t,p,f])=>typeof p==="string"?[t,s=>s.startsWith(p)&&!/ TAC$/.test(s),s=>s.replace(p+" ","")]:[t,p,f]);
  const nv=unseenCount();
  const especiais=`<div class="grid2 inner">
    <div class="panel mode"><span class="tag">Cesgranrio · questões reais</span><h3>Provas anteriores</h3><p class="muted">Técnico de Administração e Controle da Transpetro, só com as questões que ainda valem pelas regras atuais, conferidas com o gabarito oficial. Cronômetro de 4 min por questão, como na prova.</p>
      <div class="row" style="gap:8px;flex-wrap:wrap">${years.map(y=>`<button class="btn ghost sm" onclick="startPast('${y}')">${y} · ${QV().filter(q=>q[4]===y).length} questões</button>`).join("")}</div></div>
    <div class="panel mode"><span class="tag">Cartão-resposta</span><h3>Modo prova real</h3><p class="muted">Caderno de questões com rascunho e “voltar depois”, cartão-resposta separado e só a correção no fim. Treina passar as respostas a tempo.</p>
      <div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn" onclick="startReal('full')">Simulado de 60</button>${years.map(y=>`<button class="btn ghost sm" onclick="startReal('${y}')">Transpetro ${y}</button>`).join("")}</div></div>
    <div class="panel mode"><span class="tag">60 questões · ${fmt(t)} cada</span><h3>Simulado de ritmo</h3><p class="muted">${a?`Sua média recente é ${fmt(Math.round(a))} por questão. O tempo deste simulado é 10% menor, para você ganhar folga no dia da prova.`:"Sem média ainda: o alvo começa em 3:30 por questão."} Em qualquer questão, o app avisa quando você passa de 3 minutos.</p><button class="btn ghost" onclick="startPace()">Iniciar</button></div>
    <div class="panel mode"><span class="tag">${lawN} questões</span><h3>Lei 13.303 artigo por artigo</h3><p class="muted">Questões com o número do artigo, no estilo da letra da lei que a Cesgranrio cobra. Complete com o jogo Lei seca.</p><div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn ghost" onclick="startLaw()">Treinar</button><button class="btn ghost sm" onclick="go('jogos')">Lei seca</button></div></div>
  </div>
  <section class="stack inner"><h3>Outras provas Cesgranrio</h3>
    <p class="muted">Questões reais da mesma banca, só dos assuntos do seu edital e com a lei e os programas atuais. Cada uma mostra a prova de origem. Gabarito conferido com o oficial e explicado.</p>
    ${grp.map(([t,p,f])=>`<div class="stack" style="gap:6px"><span class="muted">${esc(t)}</span><div class="row" style="gap:8px;flex-wrap:wrap">${SRC_ORD.filter(p).map(s=>`<button class="btn ghost sm" onclick="startSrc('${s}')">${esc(f(s))} · ${srcCount(s)}</button>`).join("")}</div></div>`).join("")}
  </section>
  <p class="muted inner">A divisão das 40 específicas no simulado (9 de processos, 9 de finanças, 15 de logística e compras, 7 de informática) é uma estimativa proporcional ao edital, que não define quantas questões vêm de cada tema.</p>`;
  $("#view").innerHTML=`
  ${rq?`<div class="rule row" style="justify-content:space-between"><span>Você tem uma prova real em andamento.</span><button class="btn" onclick="go('real')">Continuar</button></div>`:""}
  ${quiz&&!quiz.finished?`<div class="rule row" style="justify-content:space-between"><span>Você tem um ${esc(quiz.label.toLowerCase())} em andamento.</span><button class="btn" onclick="go('quiz')">Continuar</button></div>`:""}
  <h2>Escolha o modo</h2>
  <div class="grid2">
    <div class="panel mode hl"><span class="tag">Recomendado</span><h3>Treino adaptativo</h3><p class="muted">20 questões: 12 dos seus 5 assuntos mais fracos (${weakCats(5).map(k=>esc(CATS[k].n)).join(", ")}), 4 de outras específicas e 4 de Português e Matemática. Prioriza as que você nunca viu.</p><button class="btn" onclick="startAdaptive()">Começar</button></div>
    <div class="panel mode"><span class="tag">Igual à prova</span><h3>Simulado completo</h3><p class="muted">60 questões no formato da prova, 4 h cronometradas, correção só no final e verificação das notas de corte. Puxa primeiro as questões que você nunca viu (${nv} inéditas no banco).</p><button class="btn" onclick="startExam('full')">Iniciar simulado</button></div>
    <div class="panel mode"><span class="tag">50 minutos</span><h3>Mini simulado</h3><p class="muted">20 questões com a mesma proporção entre os blocos, priorizando as inéditas. Bom para dias de semana.</p><button class="btn" onclick="startExam('mini')">Iniciar mini</button></div>
    <div class="panel mode"><span class="tag">Correção imediata</span><h3>Treino por assunto</h3><p class="muted">Até 15 questões de um tema, com gabarito comentado a cada resposta.</p>
      <label for="selCat" class="muted">Assunto</label><select id="selCat"><option value="src:all">Só questões de provas anteriores (${QV().filter(q=>q[4]).length})</option>${blk}${opts}</select>
      <label class="row muted chk" style="gap:8px"><input type="checkbox" id="onlyNew" style="width:18px;height:18px;accent-color:var(--petrol)"> Só questões que ainda não respondi</label>
      <button class="btn ghost" onclick="startTrain()">Treinar</button></div>
    <div class="panel mode"><span class="tag">${srsDue().length} para hoje · ${Object.keys(S.srs).length} na revisão</span><h3>Revisar erradas</h3><p class="muted">Revisão espaçada: cada questão errada volta 1, 3, 7 e 15 dias depois. Acertou nas quatro, ela sai da fila; errou, recomeça.</p><button class="btn ghost" ${S.wrong.length||Object.keys(S.srs).length?"":"disabled"} onclick="startWrong()">Revisar</button></div>
    <div class="panel mode"><span class="tag">${Object.keys(S.notes).length} notas</span><h3>Caderno de erros</h3><p class="muted">Seus erros com o motivo (não sabia, confundiu, leu rápido, errou a conta) e o que lembrar da próxima vez.</p><button class="btn ghost" onclick="go('caderno')">Abrir caderno</button></div>
  </div>
  ${foldHTML("prat","Provas reais e treinos especiais","Transpetro, Petrobras e BB; modo prova real; ritmo; lei seca",especiais,true)}`;
}
/* Seleção sem repetir: S.seen[i] guarda o dia em que a questão foi respondida (1 = antes da v13).
   As inéditas vêm primeiro; depois, as vistas há mais tempo. */
const seenKey=i=>{const x=S.seen[i];return x?(x===1?"0":String(x)):"";};
function freshSort(ids){return shuffle(ids.slice()).sort((a,b)=>{const x=seenKey(a),y=seenKey(b);return x<y?-1:x>y?1:0;});}
function unseenCount(){return QI().filter(i=>!S.seen[i]).length;}
/* n questões do bloco b, alternando entre os assuntos do bloco para cobrir todos */
function pickBlock(b,n){
  const ids=QI().filter(i=>CATS[Q[i].c].b===b);
  const pools=shuffle([...new Set(ids.map(i=>Q[i].c))]).map(c=>freshSort(ids.filter(i=>Q[i].c===c)));
  const out=[];
  for(const tier of [0,1]){
    let moved=true;
    while(out.length<n&&moved){moved=false;for(const p of pools){if(out.length>=n)break;if(p.length&&(S.seen[p[0]]?1:0)===tier){out.push(p.shift());moved=true;}}}
  }
  return shuffle(out);
}
function makeQuiz(ids,mode,label,limit){
  if(tick) clearInterval(tick);
  quiz={ids,mode,label,limit,start:Date.now(),i:0,ans:ids.map(()=>null),order:ids.map(()=>shuffle([0,1,2,3,4])),finished:false,confirm:false};
  if(limit) tick=setInterval(updTimer,1000);
  go("quiz");
}
function startExam(t){
  const n=t==="full"?{adm:9,fin:9,log:15,info:7,port:10,mat:10}:{adm:3,fin:3,log:5,info:2,port:3,mat:4};
  const ids=[].concat(...Object.entries(n).map(([b,k])=>pickBlock(b,k)));
  makeQuiz(ids,"exam",t==="full"?"Simulado completo":"Mini simulado",t==="full"?4*3600:50*60);
}
function startTrain(){
  const v=$("#selCat").value; let pool;
  if(v==="src:all") pool=QI().filter(i=>Q[i][4]);
  else if(v.startsWith("b:")) pool=QI().filter(i=>CATS[Q[i].c].b===v.slice(2));
  else pool=QI().filter(i=>Q[i].c===v);
  if($("#onlyNew").checked){const p2=pool.filter(i=>!S.seen[i]); if(p2.length) pool=p2;}
  const label=v==="src:all"?"provas anteriores":v.startsWith("b:")?BLOCKS[v.slice(2)]:CATS[v].n;
  makeQuiz(shuffle(freshSort(pool).slice(0,15)),"train","Treino: "+label,0);
}
function startPast(y){
  const ord=["port","mat"], ids=QI().filter(i=>Q[i][4]===y);
  const grp=i=>{const k=ord.indexOf(Q[i].c);return k<0?2:k;};
  ids.sort((a,b)=>grp(a)-grp(b)||Q[a][5]-Q[b][5]);
  makeQuiz(ids,"exam","Prova Transpetro "+y+" ("+PROVAS[y]+")",ids.length*240);
}
function startTrainCat(k){makeQuiz(shuffle(freshSort(QI().filter(i=>Q[i].c===k)).slice(0,15)),"train","Treino: "+CATS[k].n,0);}
function startWrong(){
  const due=shuffle(srsDue()), rest=shuffle(S.wrong.filter(q=>!due.includes(q)&&!(S.srs[q]&&S.srs[q].d>todayK())));
  const ids=due.concat(rest).slice(0,20);
  if(!ids.length){toast("Nada para revisar hoje","As questões erradas voltam no dia marcado. Que tal um V ou F?");return;}
  makeQuiz(ids,"train","Revisão de erradas",0);
}

/* ---------- Tela de questão ---------- */
function fmt(s){s=Math.max(0,s);const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (h?h+":":"")+String(m).padStart(2,"0")+":"+String(x).padStart(2,"0");}
function remaining(){return Math.round(quiz.limit-(Date.now()-quiz.start)/1000);}
function updTimer(){
  if(!quiz||quiz.finished){clearInterval(tick);return;}
  const r=remaining(); const el=$("#timer");
  if(el){el.textContent=fmt(r); el.classList.toggle("low",r<600);}
  if(r<=0) finish();
}
function vQuiz(){
  if(!quiz){go("pratica");return;}
  const k=quiz.i, qi=quiz.ids[k], q=Q[qi], ord=quiz.order[k], a=quiz.ans[k];
  const train=quiz.mode==="train", locked=train&&a!==null;
  const optsHtml=ord.map((oi,pos)=>{
    let cls="opt";
    if(locked){ if(oi===0) cls+=" right"; else if(a===pos) cls+=" wrong"; cls+=" locked"; }
    else if(a===pos) cls+=" sel";
    return `<button class="${cls}" data-p="${pos}" ${locked?'aria-disabled="true"':""}><span class="l">${L[pos]}</span><span>${esc(q[2][oi])}</span></button>`;
  }).join("");
  const answered=quiz.ans.filter(x=>x!==null).length;
  $("#view").innerHTML=`
  <div class="qhead">
    <button class="btn ghost sm qexit" onclick="go('pratica')" aria-label="Sair do simulado (ele continua salvo)">← Sair</button>
    <div class="stack" style="gap:2px"><strong>${esc(quiz.label)}</strong><span class="muted num">Questão ${k+1} de ${quiz.ids.length} · ${answered} respondidas</span></div>
    <button class="btn ghost sm fzq" onclick="fzCycle()" aria-label="Tamanho da letra">Aa</button>
    ${quiz.limit?`<span class="timer num" id="timer">${fmt(remaining())}</span>`:""}
  </div>
  <article class="panel stack">
    <span class="qcat" style="color:var(--c-${CATS[q.c].b})">${esc(CATS[q.c].n)}${q[4]?` · <span class="srcpill">Cesgranrio · ${/^\d{4}$/.test(q[4])?"Transpetro "+q[4]:q[4]}</span>`:""}</span>
    <p class="qtext">${esc(q[1])}</p>
    <div class="opts">${optsHtml}</div>
    ${locked?`<div class="expl"><strong>${a!==null&&ord[a]===0?"Correto.":"Resposta: "+L[ord.indexOf(0)]+"."}</strong> ${esc(q[3])}</div>${ord[a]!==0?noteForm(qi):""}`:""}
    ${repBtn(qi)}
  </article>
  <div class="row" style="justify-content:space-between">
    <button class="btn ghost" ${k===0?"disabled":""} onclick="nav(-1)">Anterior</button>
    ${k<quiz.ids.length-1?`<button class="btn" onclick="nav(1)">Próxima</button>`:`<button class="btn" onclick="askFinish()">${train?"Ver resultado":"Encerrar e corrigir"}</button>`}
  </div>
  ${train?"":`<div class="panel stack qmap"><span class="muted">Mapa da prova <span class="kbd">· teclas A a E marcam, setas navegam</span></span><div class="qgrid">${quiz.ids.map((_,j)=>`<button class="qnum ${quiz.ans[j]!==null?"done":""} ${j===k?"cur":""}" onclick="jump(${j})">${j+1}</button>`).join("")}</div></div>`}
  <div class="row"><button class="btn ghost" onclick="askFinish()">${train?"Encerrar treino":"Entregar a prova agora"}</button></div>
  <div class="rule confirm ${quiz.confirm?"on":""} row" style="justify-content:space-between">
    <span>${quiz.ids.length-answered>0?`Ainda há ${quiz.ids.length-answered} questões em branco. Encerrar mesmo assim?`:"Encerrar e ver a correção?"}</span>
    <span class="row"><button class="btn ghost" onclick="quiz.confirm=false;vQuiz()">Voltar</button><button class="btn warn" onclick="finish()">Encerrar</button></span>
  </div>`;
  document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
    if(locked) return;
    const p=+b.dataset.p;
    quiz.ans[k]=(!train&&quiz.ans[k]===p)?null:p;
    vQuiz();
  });
  if(quiz.confirm) $(".confirm").scrollIntoView({block:"nearest"});
}
function nav(d){quiz.i=Math.min(quiz.ids.length-1,Math.max(0,quiz.i+d));quiz.confirm=false;vQuiz();window.scrollTo({top:0});}
function jump(j){quiz.i=j;quiz.confirm=false;vQuiz();}
function askFinish(){quiz.confirm=true;vQuiz();}

/* ---------- Correção ---------- */
function finish(){
  if(!quiz||quiz.finished) return;
  if(tick) clearInterval(tick);
  quiz.finished=true; quiz.elapsed=Math.round((Date.now()-quiz.start)/1000);
  /* treino encerrado antes do fim: só as respondidas contam (em branco não vira erro) */
  if(quiz.mode==="train"){
    const keep=quiz.ids.map((_,k)=>k).filter(k=>quiz.ans[k]!==null);
    if(!keep.length){quiz=null;go("pratica");return;}
    if(keep.length<quiz.ids.length){["ids","ans","order","tq"].forEach(f=>{if(quiz[f]) quiz[f]=keep.map(k=>quiz[f][k]);});quiz.i=0;}
  }
  const byB={}, wrongSet=new Set(S.wrong); let score=0;
  quiz.ids.forEach((qi,k)=>{
    const q=Q[qi], a=quiz.ans[k], ok=a!==null&&quiz.order[k][a]===0, b=CATS[q.c].b;
    byB[b]=byB[b]||{c:0,t:0}; byB[b].t++; if(ok){byB[b].c++;score++;}
    S.stats[q.c]=S.stats[q.c]||{c:0,t:0}; S.stats[q.c].t++; if(ok) S.stats[q.c].c++; qlogAdd(q.c,ok);
    if(ok) wrongSet.delete(qi); else wrongSet.add(qi);
    if(a!==null||quiz.mode!=="train") srsUpdate(qi,ok,quiz.tq&&quiz.tq[k]?quiz.tq[k]/1000:0);
  });
  Object.keys(S.srs).forEach(q=>wrongSet.add(+q));
  S.wrong=[...wrongSet].filter(q=>S.srs[q]);
  quiz.ids.forEach((qi,k)=>{if(quiz.ans[k]!==null) S.seen[qi]=todayK();});
  addDay(quiz.ans.filter(x=>x!==null).length);
  quiz.byB=byB; quiz.score=score;
  const d=new Date();
  S.hist.unshift({date:d.toLocaleDateString("pt-BR"),label:quiz.label,score,total:quiz.ids.length,byB});
  S.hist=S.hist.slice(0,40); save();
  go("result");
}
function vResult(){
  if(!quiz){go("pratica");return;}
  const B=quiz.byB, g=k=>B[k]||{c:0,t:0};
  const esp=["adm","fin","log","info"].reduce((s,k)=>({c:s.c+g(k).c,t:s.t+g(k).t}),{c:0,t:0});
  const ger={c:g("port").c+g("mat").c,t:g("port").t+g("mat").t};
  const full=quiz.label==="Simulado completo"||(quiz.real&&quiz.ids.length===60);
  let cut="";
  if(full){
    const fails=[];
    if(esp.c<20) fails.push("menos de 20 nas específicas");
    if(ger.c<10) fails.push("menos de 10 nas gerais");
    if(g("port").c===0) fails.push("zero em Português");
    if(g("mat").c===0) fails.push("zero em Matemática");
    cut=fails.length?`<div class="rule"><span class="pill bad">Eliminada</span> Motivo: ${fails.join(", ")}.</div>`
      :`<div class="rule"><span class="pill ok">Passou dos cortes</span> Agora o que conta é a posição no ranking das específicas: quanto mais acima de 20, melhor.</div>`;
  }
  const cards=(full||quiz.mode==="exam")?`
    <div class="grid2">
      <div class="score"><span class="muted">Específicas</span><span class="v num">${esp.c}/${esp.t}</span>${full?`<span class="pill ${esp.c>=20?"ok":"bad"}">mínimo 20</span>`:""}</div>
      <div class="score"><span class="muted">Gerais</span><span class="v num">${ger.c}/${ger.t}</span>${full?`<span class="pill ${ger.c>=10?"ok":"bad"}">mínimo 10</span>`:""}</div>
      <div class="score"><span class="muted">Total</span><span class="v num">${quiz.score}/${quiz.ids.length}</span><span class="muted num">tempo ${fmt(quiz.elapsed)}</span></div>
    </div>`:`<div class="score"><span class="muted">Acertos</span><span class="v num">${quiz.score}/${quiz.ids.length}</span></div>`;
  const blocks=Object.keys(BLOCKS).filter(k=>B[k]).map(k=>bar(BLOCKS[k],B[k].c,B[k].t)).join("");
  const rev=quiz.ids.map((qi,k)=>{
    const q=Q[qi], a=quiz.ans[k], ord=quiz.order[k], ok=a!==null&&ord[a]===0, ci=ord.indexOf(0);
    return `<details class="rev"><summary><span class="mark ${ok?"ok":"bad"}">${ok?"✓":"✗"}</span><span><b class="num">${k+1}.</b> ${esc(q[1].length>110?q[1].slice(0,110)+"…":q[1])}</span></summary>
      <div class="stack" style="margin-top:10px">
        <p class="qtext" style="font-size:16px">${esc(q[1])}</p>
        <p>Sua resposta: <b>${a===null?"em branco":L[a]+") "+esc(q[2][ord[a]])}</b></p>
        <p>Gabarito: <b>${L[ci]}) ${esc(q[2][0])}</b></p>
        <div class="expl">${esc(q[3])}</div>
        ${repBtn(qi)}
        ${ok?"":noteForm(qi)}
      </div></details>`;}).join("");
  $("#view").innerHTML=`
    <h2>Resultado · ${esc(quiz.label)}</h2>
    ${cut}${cards}
    ${quiz.real&&quiz.cardDiff?`<div class="rule"><span class="pill bad">${quiz.cardDiff}</span> ${quiz.cardDiff===1?"questão foi marcada":"questões foram marcadas"} no caderno com uma letra diferente da do cartão. Vale o cartão: confira com calma antes de entregar.</div>`:""}
    <div class="panel stack"><h3>Por bloco</h3>${blocks}</div>
    <div class="row"><button class="btn" onclick="quiz=null;go('pratica')">Praticar de novo</button>${S.wrong.length?`<button class="btn ghost" onclick="startWrong()">Revisar erradas (${S.wrong.length})</button>`:""}</div>
    <h3>Correção comentada</h3>
    <div class="stack">${rev}</div>`;
}
function bar(name,c,t){const p=t?Math.round(c/t*100):0;return `<div class="bar"><span style="min-width:0">${esc(name)}</span><div class="track"><div class="fill ${p<50?"low":p<70?"mid":""}" style="width:${p}%"></div></div><span class="num" style="text-align:right">${p}%</span></div>`;}

/* ---------- Cronograma ---------- */
function vCrono(){} /* tela do cronograma: 07b-v10-v12.js */
function vCronoKeep(){const y=window.scrollY;vCrono();window.scrollTo({top:y});}

/* ---------- Desempenho ---------- */
function vStats(){
  const cats=Object.keys(CATS).filter(k=>S.stats[k]);
  const rows=cats.sort((a,b)=>S.stats[a].c/S.stats[a].t-S.stats[b].c/S.stats[b].t).map(k=>bar(CATS[k].n+` (${S.stats[k].c}/${S.stats[k].t})`,S.stats[k].c,S.stats[k].t)).join("");
  $("#view").innerHTML=`
  <h2>Desempenho</h2>
  ${forecastPanel()}
  ${cats.length?`<div class="panel stack"><h3>Acerto por assunto</h3><p class="muted">Do mais fraco para o mais forte. Os primeiros da lista são a prioridade da semana.</p>${rows}</div>
  <div class="panel stack"><h3>Histórico</h3><div class="tscroll"><table><thead><tr><th>Data</th><th>Modo</th><th>Acertos</th></tr></thead><tbody>
  ${S.hist.map(h=>`<tr><td class="num">${h.date}</td><td>${esc(h.label)}</td><td class="num">${h.score}/${h.total}</td></tr>`).join("")}</tbody></table></div></div>
  <div class="row"><button class="btn ghost" id="rst">Apagar estatísticas</button><span id="rstc" hidden class="row"><span>Apagar histórico e erros salvos?</span><button class="btn warn" id="rsty">Apagar</button></span></div>`
  :`<div class="panel stack"><h3>Nenhum resultado ainda</h3><p class="muted">Faça um treino ou um simulado e o acerto por assunto aparece aqui, ordenado do mais fraco para o mais forte.</p><div><button class="btn" onclick="go('pratica')">Ir para Praticar</button></div></div>`}`;
  const r=$("#rst"); if(r){r.onclick=()=>{$("#rstc").hidden=false;}; $("#rsty").onclick=()=>{S.hist=[];S.stats={};S.wrong=[];save();vStats();};}
}

/* ---------- Conteúdos ---------- */
let topicCur=null;
const md=s=>esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/(^|\. )! /g,'$1<span class="tchip">Pegadinha</span> ');
function pct(st){return st&&st.t?Math.round(st.c/st.t*100):null;}
function vCont(){
  const read=S.read||{}, keys=Object.keys(CATS).filter(k=>RES[k]);
  const nRead=keys.filter(k=>read[k]).length;
  const groups=Object.entries(BLOCKS).map(([b,bn])=>{
    const items=keys.filter(k=>CATS[k].b===b).map(k=>{
      const p=pct(S.stats[k]);
      return `<button class="topic" onclick="openTopic('${k}')"><span class="tname">${esc(CATS[k].n)}</span><span class="tmeta">${read[k]?'<span class="pill ok">lido</span>':'<span class="pill">não lido</span>'}${p!==null?`<span class="pill ${p<50?"bad":p<70?"mid":"ok"}">${p}% de acerto</span>`:""}</span></button>`;
    }).join("");
    return `<section class="stack" style="--bc:var(--c-${b})"><h3 class="bh">${esc(bn)}</h3><div class="topics">${items}</div></section>`;
  }).join("");
  $("#view").innerHTML=`
  <div class="stack"><h2>Conteúdos</h2><p class="muted">Resumo de cada tópico do edital com as pegadinhas mais cobradas. Leia, marque como lido e treine o assunto em seguida.</p>
  <div class="row"><button class="btn ghost sm" onclick="document.getElementById('baseSec').scrollIntoView({behavior:'smooth'})">Ir para a Revisão da escola (${BASE.length} lições)</button></div></div>
  <div class="panel stack"><div class="row" style="justify-content:space-between"><strong>Leitura</strong><span class="num">${nRead}/${keys.length} assuntos</span></div><div class="track"><div class="fill" style="width:${nRead/keys.length*100}%"></div></div></div>
  ${groups}
  <div id="baseSec"></div>${baseList()}`;
}
function openTopic(k){topicCur=k;go("topic");}
function vTopic(){
  const k=topicCur; if(!k||!RES[k]){go("cont");return;}
  const keys=Object.keys(CATS).filter(c=>RES[c]), i=keys.indexOf(k);
  const nQ=QV().filter(q=>q.c===k).length, nF=FC.filter(f=>f[0]===k).length, read=!!(S.read||{})[k];
  $("#view").innerHTML=`
  <div><button class="btn ghost sm" onclick="go('cont')">← Todos os conteúdos</button></div>
  <div class="stack" style="gap:4px"><span class="qcat" style="color:var(--c-${CATS[k].b})">${esc(BLOCKS[CATS[k].b])}</span><h2>${esc(CATS[k].n)}</h2></div>
  ${RES[k].map(([t,items])=>`<section class="panel stack"><h3>${esc(t)}</h3><ul class="res">${items.map(x=>`<li${x.startsWith("! ")?' class="trap"':""}>${md(x)}</li>`).join("")}</ul></section>`).join("")}
  <label class="panel row readbox"><input type="checkbox" id="rd" ${read?"checked":""}><span>Li este resumo</span></label>
  <div class="row"><button class="btn" onclick="startTrainCat('${k}')" ${nQ?"":"disabled"}>Treinar questões (${nQ})</button><button class="btn ghost" onclick="startFc('${k}')" ${nF?"":"disabled"}>Flashcards (${nF})</button></div>
  <div class="row" style="justify-content:space-between">${i>0?`<button class="btn ghost sm" onclick="openTopic('${keys[i-1]}')">← ${esc(CATS[keys[i-1]].n)}</button>`:"<span></span>"}${i<keys.length-1?`<button class="btn ghost sm" onclick="openTopic('${keys[i+1]}')">${esc(CATS[keys[i+1]].n)} →</button>`:""}</div>`;
  $("#view").insertAdjacentHTML("beforeend",`<section class="panel stack"><h3>Para ler e assistir</h3>${linkList(k)}</section>`);
  $("#rd").onchange=e=>{S.read=S.read||{};S.read[k]=e.target.checked;save();};
}

/* ---------- Jogos ---------- */
S.gm=S.gm||{}; S.fcl=S.fcl||{};
const isEsp=c=>!["port","mat"].includes(CATS[c].b);
function inSel(v,c){return v==="all"||(v==="esp"&&isEsp(c))||(v.startsWith("b:")&&CATS[c].b===v.slice(2))||v===c;}
function selLabel(v){return v==="all"?"Todos os assuntos":v==="esp"?"Só específicas":v.startsWith("b:")?BLOCKS[v.slice(2)]:CATS[v].n;}
function gameSel(id,def){
  const o=(v,t)=>`<option value="${v}" ${v===def?"selected":""}>${esc(t)}</option>`;
  return `<select id="${id}">${o("esp","Só específicas")}${o("all","Todos os assuntos")}${Object.entries(BLOCKS).map(([k,v])=>o("b:"+k,"Bloco: "+v)).join("")}${Object.entries(CATS).map(([k,v])=>o(k,v.n)).join("")}</select>`;
}
function vJogos(){
  const g=S.gm, known=Object.values(S.fcl).filter(x=>x>=2).length;
  $("#view").innerHTML=`
  <div class="stack"><h2>Jogos</h2><p class="muted">Rodadas curtas para fixar conceitos, siglas, prazos e fórmulas. Bons para o celular, no ônibus ou no intervalo.</p></div>
  <div class="grid2">
    <div class="panel mode"><span class="tag">${known} de ${FC.length} dominados</span><h3>Flashcards</h3><p class="muted">Veja o conceito, tente lembrar e vire o cartão. Os que você não sabia voltam primeiro na próxima vez.</p>
      <label class="muted" for="selFc">Baralho</label>${gameSel("selFc",g.lastFc||"esp")}
      <button class="btn" onclick="startFc()">Começar</button></div>
    <div class="panel mode"><span class="tag">90 segundos</span><h3>Verdadeiro ou falso relâmpago</h3><p class="muted">Responda o máximo de afirmações antes do tempo acabar. No fim, veja a correção de cada erro.</p>
      <label class="muted" for="selVf">Assuntos</label>${gameSel("selVf",g.lastVf||"esp")}
      <button class="btn" onclick="startVf()">Jogar</button>${g.vfBest?`<span class="muted num">Recorde: ${g.vfBest} acertos</span>`:""}</div>
    <div class="panel mode"><span class="tag">6 pares</span><h3>Associação</h3><p class="muted">Ligue cada termo à sua definição no menor tempo possível. Cada erro soma 5 segundos.</p>
      <label class="muted" for="selMt">Assuntos</label>${gameSel("selMt",g.lastMt||"esp")}
      <button class="btn" onclick="startMatch()">Jogar</button>${g.mtBest?`<span class="muted num">Recorde: ${fmt(g.mtBest)}</span>`:""}</div>
  </div>`;
}

/* Flashcards */
let fc=null;
function startFc(v){
  const sel=v||$("#selFc").value; if(!v){S.gm.lastFc=sel;save();}
  const ids=shuffle(FC.map((f,i)=>i).filter(i=>inSel(sel,FC[i][0])));
  ids.sort((a,b)=>(S.fcl[FC[a][1]]||0)-(S.fcl[FC[b][1]]||0));
  fc={ids:ids.slice(0,20),i:0,flip:false,ok:0,miss:[],label:selLabel(sel)};
  go("fc");
}
function vFc(){
  if(!fc){go("jogos");return;}
  if(fc.i>=fc.ids.length){
    $("#view").innerHTML=`
    <h2>Flashcards · ${esc(fc.label)}</h2>
    <div class="score"><span class="muted">Você sabia</span><span class="v num">${fc.ok}/${fc.ids.length}</span></div>
    ${fc.miss.length?`<div class="panel stack"><h3>Para rever</h3>${fc.miss.map(i=>`<div class="task"><span><b>${esc(FC[i][1])}</b>: ${esc(FC[i][2])}</span></div>`).join("")}</div>`:`<div class="rule">Acertou todos. Tente outro baralho ou um treino de questões deste assunto.</div>`}
    <div class="row">${fc.miss.length?`<button class="btn" onclick="fc={ids:shuffle([...fc.miss]),i:0,flip:false,ok:0,miss:[],label:fc.label};vFc()">Repetir os ${fc.miss.length} que errei</button>`:""}<button class="btn ghost" onclick="fc=null;go('jogos')">Voltar aos jogos</button></div>`;
    return;
  }
  const f=FC[fc.ids[fc.i]];
  $("#view").innerHTML=`
  <div class="qhead"><div class="stack" style="gap:2px"><strong>Flashcards · ${esc(fc.label)}</strong><span class="muted num">Cartão ${fc.i+1} de ${fc.ids.length} · ${fc.ok} certos</span></div><button class="btn ghost sm" onclick="fc.i=fc.ids.length;vFc()">Encerrar</button></div>
  <div class="tbar"><i style="width:${fc.i/fc.ids.length*100}%"></i></div>
  <span class="qcat">${esc(CATS[f[0]].n)}</span>
  <button class="flash ${fc.flip?"back":""}" id="card" aria-live="polite">${esc(fc.flip?f[2]:f[1])}</button>
  ${fc.flip?`<div class="vfbtns"><button class="btn badb" onclick="fcAns(false)">Não sabia</button><button class="btn okb" onclick="fcAns(true)">Sabia</button></div>`:`<p class="muted" style="text-align:center">Toque no cartão para ver a resposta</p>`}`;
  $("#card").onclick=()=>{fc.flip=!fc.flip;vFc();};
}
function fcAns(ok){
  const id=fc.ids[fc.i], key=FC[id][1];
  S.fcl[key]=ok?Math.min((S.fcl[key]||0)+1,5):0;
  if(ok) fc.ok++; else fc.miss.push(id);
  fc.i++; fc.flip=false; save(); vFc();
}

/* Verdadeiro ou falso: afirmações montadas a partir do banco (enunciado + alternativa certa ou errada) */
function vfp(){return QI().filter(i=>{if(Q[i][4]) return false;const s=Q[i][1].trim();return !/NÃO|Assinale|Leia|Está corret|Está de acordo|respectivamente/.test(s)&&!/[.?:]$/.test(s);});}
let vf=null, gtick=null;
const VF_T=90;
function startVf(){
  const sel=$("#selVf").value; S.gm.lastVf=sel; save();
  const pool=vfp().filter(i=>inSel(sel,Q[i].c));
  if(pool.length<4){$("#selVf").insertAdjacentHTML("afterend",`<span class="pill bad">Poucas afirmações neste assunto. Escolha um bloco.</span>`);return;}
  vf={pool:shuffle([...pool]),k:0,label:selLabel(sel),end:Date.now()+VF_T*1000,ok:0,bad:0,streak:0,maxStreak:0,log:[],cur:null,fb:null,done:false};
  vfNext(); go("vf");
  gtick=setInterval(vfTick,250);
}
function vfNext(){
  if(vf.k>=vf.pool.length){shuffle(vf.pool);vf.k=0;}
  const qi=vf.pool[vf.k++], q=Q[qi], truth=Math.random()<.5;
  const opt=truth?q[2][0]:q[2][1+Math.floor(Math.random()*4)];
  vf.cur={qi,truth,text:q[1].trim()+" "+opt+"."};
}
function vfLeft(){return Math.max(0,(vf.end-Date.now())/1000);}
function vfTick(){
  if(!vf||vf.done){clearInterval(gtick);gtick=null;return;}
  const r=vfLeft(), b=$("#vfbar"), t=$("#vft");
  if(b) b.style.width=(r/VF_T*100)+"%";
  if(t) t.textContent=Math.ceil(r)+" s";
  if(r<=0&&!vf.fb) vfEnd();
}
function vfAns(a){
  if(!vf||vf.done||vf.fb) return;
  const ok=a===vf.cur.truth;
  if(ok){vf.ok++;vf.streak++;vf.maxStreak=Math.max(vf.maxStreak,vf.streak);}else{vf.bad++;vf.streak=0;}
  vf.log.push({...vf.cur,a,ok}); addDay(1); vf.fb=ok?"ok":"bad"; vVf();
  setTimeout(()=>{if(!vf||vf.done) return; vf.fb=null; if(vfLeft()<=0){vfEnd();return;} vfNext(); vVf();},ok?450:1100);
}
function vVf(){
  if(!vf){go("jogos");return;}
  if(vf.done){vVfEnd();return;}
  const r=vfLeft(), c=vf.cur;
  $("#view").innerHTML=`
  <div class="qhead"><div class="stack" style="gap:2px"><strong>V ou F · ${esc(vf.label)}</strong><span class="muted num">${vf.ok} acertos · ${vf.bad} erros${vf.streak>=3?` · sequência de ${vf.streak}`:""}</span></div><span class="timer num" id="vft">${Math.ceil(r)} s</span></div>
  <div class="tbar"><i id="vfbar" style="width:${r/VF_T*100}%"></i></div>
  <span class="qcat">${esc(CATS[Q[c.qi].c].n)}</span>
  <div class="panel vfcard ${vf.fb||""}"><p>${esc(c.text)}</p></div>
  ${vf.fb==="bad"?`<p class="muted">Era <b>${c.truth?"verdadeira":"falsa"}</b>. A correção completa aparece no fim.</p>`:""}
  <div class="vfbtns"><button class="btn badb" onclick="vfAns(false)">Falso</button><button class="btn okb" onclick="vfAns(true)">Verdadeiro</button></div>
  <p class="muted" style="text-align:center">No teclado: F ou ← para falso, V ou → para verdadeiro</p>`;
}
function vfEnd(){
  if(!vf||vf.done) return;
  vf.done=true; if(gtick){clearInterval(gtick);gtick=null;}
  vf.record=vf.ok>(S.gm.vfBest||0); if(vf.record) S.gm.vfBest=vf.ok;
  save(); vVf();
}
function vVfEnd(){
  const n=vf.ok+vf.bad, wrong=vf.log.filter(x=>!x.ok);
  $("#view").innerHTML=`
  <h2>Fim de jogo · V ou F</h2>
  ${vf.record?`<div class="rule"><span class="pill ok">Novo recorde</span> ${vf.ok} acertos em ${VF_T} segundos.</div>`:""}
  <div class="grid2">
    <div class="score"><span class="muted">Acertos</span><span class="v num">${vf.ok}</span></div>
    <div class="score"><span class="muted">Aproveitamento</span><span class="v num">${n?Math.round(vf.ok/n*100):0}%</span><span class="muted num">${n} respondidas</span></div>
    <div class="score"><span class="muted">Maior sequência</span><span class="v num">${vf.maxStreak}</span><span class="muted num">recorde geral: ${S.gm.vfBest||0}</span></div>
  </div>
  <div class="row"><button class="btn" onclick="go('jogos')">Jogar de novo</button></div>
  ${wrong.length?`<h3>Correção dos erros</h3><div class="stack">${wrong.map(x=>{const q=Q[x.qi];return `<div class="panel stack"><p>${esc(x.text)}</p><p><span class="pill ${x.truth?"ok":"bad"}">${x.truth?"Verdadeira":"Falsa"}</span> você marcou ${x.a?"verdadeira":"falsa"}.</p>${x.truth?"":`<p>Correto: <b>${esc(q[1].trim()+" "+q[2][0]+".")}</b></p>`}<div class="expl">${esc(q[3])}</div></div>`;}).join("")}</div>`:""}`;
}
document.addEventListener("keydown",e=>{
  if(current!=="vf"||!vf||vf.done||e.ctrlKey||e.metaKey||e.altKey) return;
  const k=e.key.toLowerCase();
  if(k==="v"||k==="arrowright"){e.preventDefault();vfAns(true);}
  else if(k==="f"||k==="arrowleft"){e.preventDefault();vfAns(false);}
});

/* Associação */
let mt=null;
function startMatch(){
  const sel=$("#selMt").value; S.gm.lastMt=sel; save();
  const pool=shuffle(FC.map((f,i)=>i).filter(i=>inSel(sel,FC[i][0]))).slice(0,6);
  if(pool.length<4){$("#selMt").insertAdjacentHTML("afterend",`<span class="pill bad">Poucos pares neste assunto. Escolha um bloco.</span>`);return;}
  mt={pairs:pool,left:shuffle([...pool]),right:shuffle([...pool]),pl:null,pr:null,done:[],err:0,errIds:null,start:Date.now(),label:selLabel(sel),fin:null};
  go("match");
}
function vMatch(){
  if(!mt){go("jogos");return;}
  if(mt.fin){
    $("#view").innerHTML=`
    <h2>Fim de jogo · Associação</h2>
    ${mt.record?`<div class="rule"><span class="pill ok">Novo recorde</span> ${fmt(mt.fin)}</div>`:""}
    <div class="grid2">
      <div class="score"><span class="muted">Tempo final</span><span class="v num">${fmt(mt.fin)}</span><span class="muted num">inclui ${mt.err*5} s de penalidade</span></div>
      <div class="score"><span class="muted">Erros</span><span class="v num">${mt.err}</span><span class="muted num">recorde: ${fmt(S.gm.mtBest)}</span></div>
    </div>
    <div class="panel stack"><h3>Os pares desta rodada</h3>${mt.pairs.map(i=>`<div class="task"><span><b>${esc(FC[i][1])}</b>: ${esc(FC[i][2])}</span></div>`).join("")}</div>
    <div class="row"><button class="btn" onclick="go('jogos')">Jogar de novo</button></div>`;
    return;
  }
  const cls=(id,side)=>{
    let c="mitem"+(side==="l"?" term":"");
    if(mt.done.includes(id)) c+=" done";
    else if(mt.errIds&&mt.errIds[side]===id) c+=" err";
    else if((side==="l"?mt.pl:mt.pr)===id) c+=" sel";
    return c;
  };
  $("#view").innerHTML=`
  <div class="qhead"><div class="stack" style="gap:2px"><strong>Associação · ${esc(mt.label)}</strong><span class="muted num">${mt.done.length}/${mt.pairs.length} pares · ${mt.err} erros</span></div><span class="timer num" id="mtt">${fmt(Math.round((Date.now()-mt.start)/1000))}</span></div>
  <p class="muted">Toque em um termo e depois na definição correspondente.</p>
  <div class="mgrid">
    <div class="mcol">${mt.left.map(id=>`<button class="${cls(id,"l")}" data-s="l" data-id="${id}" ${mt.done.includes(id)?"disabled":""}>${esc(FC[id][1])}</button>`).join("")}</div>
    <div class="mcol">${mt.right.map(id=>`<button class="${cls(id,"r")}" data-s="r" data-id="${id}" ${mt.done.includes(id)?"disabled":""}>${esc(FC[id][2])}</button>`).join("")}</div>
  </div>`;
  document.querySelectorAll(".mitem").forEach(b=>b.onclick=()=>mtPick(b.dataset.s,+b.dataset.id));
  if(!gtick) gtick=setInterval(()=>{const t=$("#mtt"); if(!mt||mt.fin||!t){clearInterval(gtick);gtick=null;return;} t.textContent=fmt(Math.round((Date.now()-mt.start)/1000));},1000);
}
function mtPick(side,id){
  if(mt.errIds||mt.done.includes(id)) return;
  if(side==="l") mt.pl=mt.pl===id?null:id; else mt.pr=mt.pr===id?null:id;
  if(mt.pl!==null&&mt.pr!==null){
    if(mt.pl===mt.pr){mt.done.push(mt.pl);mt.pl=mt.pr=null;}
    else{mt.err++;mt.errIds={l:mt.pl,r:mt.pr};mt.pl=mt.pr=null;setTimeout(()=>{if(mt){mt.errIds=null;if(current==="match")vMatch();}},650);}
  }
  if(mt.done.length===mt.pairs.length){
    mt.fin=Math.round((Date.now()-mt.start)/1000)+mt.err*5;
    mt.record=!S.gm.mtBest||mt.fin<S.gm.mtBest; if(mt.record) S.gm.mtBest=mt.fin;
    if(gtick){clearInterval(gtick);gtick=null;} save();
  }
  vMatch();
}

/* ---------- Tema claro / escuro (preferência deste aparelho) ---------- */
const THEMES=[["auto","Tema: automático"],["light","Tema: claro"],["dark","Tema: escuro"]];
let theme="auto";
try{theme=localStorage.getItem("transpetro26-theme")||"auto";}catch(e){}
function applyTheme(){
  if(theme==="auto") delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme=theme;
  const b=$("#themeBtn"); if(b){const t=THEMES.find(x=>x[0]===theme); b.textContent=t[1]; b.setAttribute("aria-label",t[1]+". Toque para trocar");}
}
$("#themeBtn").onclick=()=>{const i=THEMES.findIndex(x=>x[0]===theme); theme=THEMES[(i+1)%3][0]; try{localStorage.setItem("transpetro26-theme",theme);}catch(e){} applyTheme();};
applyTheme();

/* ---------- Meta diária e sequência de dias ---------- */
S.days=S.days||{}; S.seen=S.seen||{}; S.base=S.base||{}; S.goal=S.goal||30;
const dkey=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
function addDay(n){if(!n) return; const k=dkey(new Date()); S.days[k]=(S.days[k]||0)+n; save();}
function streak(){
  let d=new Date(), n=0;
  if(!S.days[dkey(d)]) d.setDate(d.getDate()-1);
  while(S.days[dkey(d)]){n++; d.setDate(d.getDate()-1);}
  return n;
}

/* ---------- Revisão da escola ---------- */
let baseCur=null, baseAns={};
function baseList(){
  const done=BASE.filter(l=>S.base[l.id]).length;
  const grp=a=>BASE.filter(l=>l.a===a).map(l=>`<button class="topic" onclick="openBase('${l.id}')"><span class="tname">${esc(l.t)}</span><span class="tmeta">${S.base[l.id]?'<span class="pill ok">concluída</span>':'<span class="pill">não concluída</span>'}</span></button>`).join("");
  return `<section class="stack">
    <div class="row" style="justify-content:space-between"><h2>Revisão da escola</h2><span class="muted num">${done}/${BASE.length} lições</span></div>
    <p class="muted">A base de Português e Matemática que cai nas 20 questões gerais (e ajuda nas contas das específicas). Cada lição tem explicação, exemplos resolvidos e um teste rápido.</p>
    <h3>Matemática</h3><div class="topics">${grp("Matemática")}</div>
    <h3>Português</h3><div class="topics">${grp("Português")}</div>
  </section>`;
}
function openBase(id){baseCur=id; baseAns={}; go("base");}
function vBase(){
  const i=BASE.findIndex(l=>l.id===baseCur); if(i<0){go("cont");return;}
  const l=BASE[i];
  $("#view").innerHTML=`
  <div><button class="btn ghost sm" onclick="go('cont')">← Conteúdos</button></div>
  <div class="stack" style="gap:4px"><span class="qcat">Revisão da escola · ${esc(l.a)}</span><h2>${esc(l.t)}</h2></div>
  <section class="panel stack"><h3>Explicação</h3><ul class="res">${l.e.map(x=>`<li>${md(x)}</li>`).join("")}</ul></section>
  <section class="panel stack"><h3>Exemplos resolvidos</h3>${l.x.map(([p,r])=>`<details class="rev"><summary><span class="mark">?</span><span>${md(p)}</span></summary><div class="expl" style="margin-top:10px">${md(r)}</div></details>`).join("")}</section>
  <section class="panel stack"><h3>Teste rápido</h3>${l.q.map((q,k)=>{
    const ord=baseAns["o"+k]||(baseAns["o"+k]=shuffle([0,1,2,3,4])), a=baseAns[k];
    return `<div class="stack"><p><b class="num">${k+1}.</b> ${esc(q[0])}</p><div class="opts">${ord.map((oi,pos)=>{let c="opt"; if(a!==undefined){c+=" locked"; if(oi===0)c+=" right"; else if(a===pos)c+=" wrong";} return `<button class="${c}" data-k="${k}" data-p="${pos}"><span class="l">${L[pos]}</span><span>${esc(q[1][oi])}</span></button>`;}).join("")}</div>${a!==undefined?`<div class="expl"><b>${ord[a]===0?"Correto.":"Resposta: "+L[ord.indexOf(0)]+"."}</b> ${esc(q[2])}</div>`:""}</div>`;}).join("")}</section>
  <label class="panel row readbox"><input type="checkbox" id="bd" ${S.base[l.id]?"checked":""}><span>Concluí esta lição</span></label>
  <div class="row" style="justify-content:space-between">${i>0?`<button class="btn ghost sm" onclick="openBase('${BASE[i-1].id}')">← ${esc(BASE[i-1].t)}</button>`:"<span></span>"}${i<BASE.length-1?`<button class="btn ghost sm" onclick="openBase('${BASE[i+1].id}')">${esc(BASE[i+1].t)} →</button>`:""}</div>`;
  document.querySelectorAll(".opt[data-k]").forEach(b=>b.onclick=()=>{
    const k=+b.dataset.k; if(baseAns[k]!==undefined) return;
    baseAns[k]=+b.dataset.p; addDay(1);
    if(l.q.every((_,j)=>baseAns[j]!==undefined)&&!S.base[l.id]){S.base[l.id]=true;save();}
    const y=window.scrollY; vBase(); window.scrollTo({top:y});
  });
  $("#bd").onchange=e=>{S.base[l.id]=e.target.checked;save();};
}

