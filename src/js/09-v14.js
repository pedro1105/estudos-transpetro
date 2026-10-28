/* ---------- 24. v14: tela Hoje enxuta, programação do dia e Configurações ---------- */

/* Áreas do app: cada etapa do dia diz em qual área acontece e como aproveitar */
const AREAS={
  est:{n:"Estudar",v:"cont",how:"Resumo do assunto do dia (toque em Ouvir para escutar no caminho), quadros comparativos e fórmulas no fim do resumo, Pegadinhas da banca e a Revisão da véspera. Leia, feche e escreva de memória 3 a 5 pontos."},
  pra:{n:"Praticar",v:"pratica",how:"Onde você ganha pontos: Revisar erradas todo dia primeiro; Treino por assunto com correção na hora; Treino adaptativo quando não souber o que fazer; simulados e Modo prova real nos dias marcados; Caderno de erros para anotar por que errou."},
  jog:{n:"Jogos",v:"jogos",how:"Fixação rápida para os intervalos: Desafio do dia (5 questões), Flashcards, V ou F relâmpago, Lei seca, Cálculo sem calculadora, Ache o erro e Ordene as fases. 10 minutos por dia já mantêm a memória viva."},
  prog:{n:"Progresso",v:"stats",how:"Fechamento do dia em 5 minutos: acerto por assunto, onde está perdendo pontos, previsão de nota e o resumo da semana com os 3 focos. Uma vez por semana, confira se o acerto nas específicas subiu."}
};
const STEP_AREA={aq:"pra",sim:"pra",cor:"pra",teo:"est",q1:"pra",q2:"pra",src:"pra",lei:"pra",ger:"pra",rev:"est",cad:"pra",res:"est",dch:"jog",prog:"prog"};
const STEP_HOW={
  aq:"Responda antes de ver a explicação. Se não houver nada para revisar, faça uma rodada de V ou F em Jogos.",
  sim:"Celular longe, cronômetro ligado e respostas passadas para o cartão no fim, como na prova.",
  cor:"Para cada erro, anote o motivo no caderno: não sabia, confundi, li rápido ou errei a conta.",
  teo:"No fim do resumo há quadros comparativos e pegadinhas do assunto. O botão Ouvir lê o resumo em voz alta.",
  q1:"Correção na hora: leia a explicação também das que acertou no chute.",
  q2:"Misturar temas treina reconhecer o assunto sem aviso, como na prova.",
  src:"Questões reais de outra prova da Cesgranrio: repare no jeito da banca perguntar.",
  lei:"Jogue Lei seca em Jogos e depois faça o treino artigo por artigo.",
  ger:"Contas à mão, sem calculadora. Em Português, sublinhe a palavra-chave do enunciado.",
  rev:"Pegadinhas dos assuntos da semana e uma rodada de Flashcards em Jogos.",
  cad:"Releia as notas que voltaram hoje e escreva o que lembrar da próxima vez.",
  res:"Só leitura leve, sem questões novas.",
  dch:"Mantém a sequência de dias e treina rapidez.",
  prog:"Veja em Progresso o acerto do dia e o assunto que mais tira pontos; ele entra no plano de amanhã."
};
const ICO_AREA={est:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2zM22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/></svg>',pra:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',jog:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v3M5.5 12.5h3M16 12h.01M18 14h.01"/></svg>',prog:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>'};

/* "3. Teoria (30 min): texto" → {titulo, minutos, texto} */
function stepParse(i){
  let t=i.t.replace(/^\d+\.\s*/,""), min=null;
  const m=/^([^:(]+?)\s*\((\d+)\s*min\)\s*:\s*([\s\S]*)$/.exec(t);
  if(m) return {h:m[1],min:+m[2],d:m[3]};
  if(/\(4 h\)/.test(t)) min=240; else if(i.id==="sim"&&/Mini/.test(t)) min=50; else if(i.id==="sim") min=180;
  return {h:"",min,d:t.replace(/\s*\(4 h\)/,"")};
}
const hm=m=>String(Math.floor(m/60)%24).padStart(2,"0")+":"+String(m%60).padStart(2,"0");
function startMin(k){const wd=kDate(k).getDay(),h=(wd===0||wd===6?S.st.w:S.st.h)||"19:00";const [a,b]=h.split(":").map(Number);return a*60+(b||0);}
/* monta a agenda com horários e pausas de 10 min a cada ~50 min de estudo */
function schedule(k,its){
  let t=startMin(k), run=0; const out=[];
  its.filter(i=>!i.auto).forEach((i,idx)=>{
    const p=stepParse(i), dur=p.min||0;
    if(dur>=10&&run>=45&&run+dur>60){out.push({pause:true,a:t,b:t+10});t+=10;run=0;}
    out.push({i,p,a:dur?t:null,b:dur?t+dur:null,area:STEP_AREA[i.id]||null});
    if(dur){t+=dur;run+=dur;if(dur>=90)run=0;}
  });
  return {rows:out,start:startMin(k),end:t};
}
function areaChip(a){return a?`<span class="achip a-${a}">${ICO_AREA[a]}${AREAS[a].n}</span>`:"";}

function syncChip(){
  const s=!CL.code?["off","Não sincronizado"]:CL.st==="ok"?["ok","Sincronizado"]:CL.st==="needmcp"?["bad","Permitir sincronização"]:CL.st==="noconn"?["bad","Reconectar Supabase"]:CL.st==="err"?["bad",navigator.onLine?"Sincronização pendente":"Sem internet"]:["","Sincronizando…"];
  return `<button class="clchip ${s[0]}" onclick="go('config')" title="Configurações › Sincronização"><i></i>${s[1]}</button>`;
}

function vGuia(){
  const k=todayK(), p=dayPlan(k), its=dayItems(p), steps=its.filter(i=>!i.auto), done=steps.filter(i=>itemDone(k,i)).length;
  const meta=its.find(i=>i.auto), due=srsDue().length, sc=schedule(k,its);
  const last14=[...Array(14)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()-13+i);const kk=dkey(d);return {kk,s:kk<"2026-10-27"?null:dayScore(kk)};});
  const full=(()=>{let n=0,d=new Date();if(dayScore(dkey(d))<1)d.setDate(d.getDate()-1);while(dkey(d)>="2026-10-27"&&dayScore(dkey(d))>=1){n++;d.setDate(d.getDate()-1);}return n;})();
  const wdN=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"][kDate(k).getDay()];
  const rows=tlHTML(k,its,"dl-",true);
  const tot=sc.end-sc.start;
  $("#view").innerHTML=`${runBanner()}
  <div class="hoje-top"><div class="stack" style="gap:2px"><h2>Hoje</h2><span class="muted">${wdN}, ${fmtK(k)}${p.ph?` · fase ${PHASES.indexOf(p.ph)+1}: ${esc(p.ph.t)}`:""}</span></div>${syncChip()}</div>
  ${syncBanner()}
  ${weekCard()}
  <section class="panel stack prog-dia">
    <div class="row" style="justify-content:space-between;gap:8px"><h3>Programação de hoje${p.foco?` · ${esc(p.foco)}`:""}</h3><span class="streak num">${full} ${full===1?"dia completo":"dias completos"} seguidos</span></div>
    ${tot>0?`<span class="muted num">${hm(sc.start)} às ${hm(sc.end)} · ${minFmt(tot)} de estudo com pausas · <button class="linkbtn" onclick="go('config');setTimeout(()=>{const e=$('#stH');if(e)e.focus();},200)">mudar horário</button></span>`:""}
    <div class="row" style="justify-content:space-between"><span><b class="num">${done}</b> de <b class="num">${steps.length}</b> etapas</span>${done===steps.length?'<span class="pill ok">Dia concluído</span>':""}</div>
    <div class="track"><div class="fill" style="width:${steps.length?done/steps.length*100:0}%"></div></div>
    ${due?`<div class="rule row" style="justify-content:space-between"><span><b class="num">${due}</b> ${due===1?"questão errada volta":"questões erradas voltam"} hoje na revisão espaçada.</span><button class="btn sm" onclick="startWrong()">Revisar agora</button></div>`:""}
    <div class="tlist">${rows}</div>
    ${meta?`<div class="row metaln"><span>Meta: <b class="num">${S.days[k]||0}</b> de <b class="num">${S.goal}</b> questões hoje</span>${(S.days[k]||0)>=S.goal?'<span class="pill ok">cumprida</span>':`<div class="track sm"><div class="fill" style="width:${Math.min(100,(S.days[k]||0)/S.goal*100)}%"></div></div>`}</div>`:""}
    <div class="stack" style="gap:6px"><span class="muted">Últimos 14 dias</span><div class="days14">${last14.map(x=>`<span class="d14 ${x.s===null?"na":x.s>=1?"full":x.s>=.5?"half":x.s>0?"low":""}" title="${fmtK(x.kk)}"><i>${x.kk.slice(8)}</i></span>`).join("")}</div></div>
    <div><button class="btn ghost sm" onclick="go('crono')">Ver a programação dos próximos dias</button></div>
  </section>
  ${foldHTML("ferr","Cronômetro de estudo","blocos de 50 min com 10 de pausa",pomoPanel().replace('<section class="panel stack">','<section class="stack inner">'),false)}
  ${foldHTML("areas","Como aproveitar cada área, todo dia","Estudar, Praticar, Jogos e Progresso",areasGuide(),false)}`;
  steps.forEach(i=>{const c=$("#dl-"+i.id); if(c) c.onchange=()=>{S.daily[k]=S.daily[k]||{};S.daily[k][i.id]=c.checked;save();vGuiaKeep();};});
  pomoWire();
}
/* linhas da programação de um dia (Hoje e Cronograma); pre = prefixo dos ids das caixas */
function tlHTML(k,its,pre,live){
  const steps=its.filter(i=>!i.auto), sc=schedule(k,its), nowI=live?steps.findIndex(i=>!itemDone(k,i)):-1;
  return sc.rows.map(r=>{
    if(r.pause) return `<div class="tl pause"><span class="tltime num">${hm(r.a)}</span><span class="muted">Pausa de 10 min, longe do celular</span></div>`;
    const i=r.i, ck=itemDone(k,i), cur=steps.indexOf(i)===nowI;
    return `<div class="tl ${ck?"done":""} ${cur?"cur":""}">
      <input type="checkbox" id="${pre}${i.id}" data-k="${k}" data-i="${i.id}" ${ck?"checked":""} aria-label="Concluí: ${esc(r.p.h||r.p.d)}">
      <div class="tlb"><div class="tlt">${r.a!==null?`<span class="tltime num">${hm(r.a)}–${hm(r.b)}</span>`:""}${areaChip(r.area)}${cur?'<span class="pill now">agora</span>':""}</div>
        <label for="${pre}${i.id}" class="tltitle">${r.p.h?`<b>${esc(r.p.h)}:</b> `:""}${esc(r.p.d)}</label>
        ${STEP_HOW[i.id]?`<p class="tlhow">${esc(STEP_HOW[i.id])}</p>`:""}</div>
      ${i.act?`<button class="btn ${cur?"":"ghost"} sm" onclick="${i.act}">${i.lbl}</button>`:""}</div>`;}).join("");
}
function vGuiaKeep(){const y=window.scrollY;vGuia();window.scrollTo({top:y});}
function areasGuide(){
  const order=[["est","30 a 40 min"],["pra","1 h a 1h30"],["jog","10 a 15 min"],["prog","5 min"]];
  return `<div class="stack inner" style="gap:12px">${order.map(([a,t])=>`<div class="areaitem"><div class="row" style="justify-content:space-between;gap:8px">${areaChip(a)}<span class="muted num">${t} por dia</span></div><p>${esc(AREAS[a].how)}</p><div><button class="btn ghost sm" onclick="go('${AREAS[a].v}')">Abrir ${AREAS[a].n}</button></div></div>`).join("")}
  <p class="muted">Ordem que mais rende: revisar erradas → teoria curta → questões do mesmo assunto → questões de outro assunto → caderno de erros → desafio do dia → conferir o progresso. Questões em 70% do tempo, teoria em 30%.</p></div>`;
}
function syncBanner(){
  if(CL.st==="needmcp") return `<div class="rule row" style="justify-content:space-between;gap:8px"><span>Para o progresso daqui chegar ao celular, permita uma vez o uso do conector Supabase.</span><button class="btn sm" onclick="clAllow()">Permitir</button></div>`;
  if(!CL.code&&!IN_CLAUDE) return `<div class="rule stack"><span><b>Este aparelho ainda não está sincronizado.</b> Abra o link de conexão (fica em Configurações, no app do PC ou do Claude) ou cole o código aqui.</span><div class="row" style="gap:8px;flex-wrap:wrap"><input id="clInH" placeholder="tp-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx" autocomplete="off" autocapitalize="off" spellcheck="false" style="flex:1;min-width:220px"><button class="btn sm" onclick="clLink($('#clInH').value,true).then(()=>vGuiaKeep())">Conectar</button></div></div>`;
  return "";
}
async function clAllow(){CL.via="mcp";if(CL.perm==="denied"){try{const perm=await window.claude.use("permissions");await perm.manage();}catch(e){toast("Permissão bloqueada","Abra o menu Permissões deste artifact (no topo da página) e ligue o conector Supabase.");}CL.perm=null;}
  if(await mcpReady(true)){CL.st="";clLbl();await clPull();}else toast("Sem permissão","A sincronização com o celular fica parada até você permitir o conector Supabase.");if(current==="guia")vGuiaKeep();if(current==="config")vConfigKeep();}

/* ---------- Configurações ---------- */
function clText(){
  if(!CL.code) return IN_CLAUDE?"Preparando a sincronização…":"Este aparelho ainda não está conectado. Cole o código abaixo ou abra o link de conexão.";
  if(CL.st==="ok") return "Ligada e em dia"+(CL.at?" (conferido às "+CL.at.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})+")":"")+". O que você faz aqui aparece nos outros aparelhos em poucos segundos.";
  if(CL.st==="needmcp") return CL.perm==="denied"?"O conector Supabase foi bloqueado para esta página. Toque em Permitir e ligue o Supabase no painel de permissões.":"Falta uma permissão: toque em Permitir para o link do Claude usar o conector Supabase.";
  if(CL.st==="noconn") return "O conector Supabase não está conectado (ou a conexão expirou) na sua conta do claude.ai. Reconecte em Configurações → Conectores do claude.ai e volte aqui.";
  if(CL.st==="err") return navigator.onLine?"Não deu para falar com a nuvem agora; o app tenta de novo sozinho. Nada se perde.":"Sem internet. O progresso fica salvo aqui e sobe quando a conexão voltar.";
  return "Conectando…";
}
function clLbl(){
  document.querySelectorAll(".cllbl").forEach(e=>{e.textContent=clText();e.className="cllbl "+(CL.st==="ok"?"ok":CL.st==="err"||CL.st==="needmcp"||CL.st==="noconn"?"bad":"");});
  const c=document.querySelector(".clchip"); if(c) c.outerHTML=syncChip();
  const b=$("#clMcp"); if(b) b.hidden=CL.st!=="needmcp";
}
function cfgSync(){
  const link=CL.code?GH_URL+"#sync="+CL.code:"";
  return `<section class="panel stack" id="cfgSync"><h3>Sincronização entre aparelhos</h3>
    <p class="cllbl">${esc(clText())}</p>
    <button class="btn sm" id="clMcp" ${CL.st==="needmcp"?"":"hidden"} onclick="clAllow()">Permitir</button>
    ${CL.code?`<div class="stack" style="gap:8px"><b>Conectar outro aparelho (uma vez só)</b>
      <p class="muted">Abra este link no outro aparelho (no celular, pelo Chrome; depois instale pelo menu, se quiser). Ele entra conectado e junta o que já tiver lá.</p>
      <code class="clcode">${esc(link)}</code>
      <div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn sm" onclick="copyTxt('${link}','Link copiado','Abra no outro aparelho.')">Copiar link</button>${navigator.share?`<button class="btn ghost sm" onclick="navigator.share({title:'Estudos Transpetro',url:'${link}'}).catch(()=>{})">Enviar para…</button>`:""}<button class="btn ghost sm" onclick="clPull()">Sincronizar agora</button></div></div>`:""}
    ${CL.code?"":`<div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn sm" id="clNew" onclick="clNew()">Este é o primeiro aparelho: criar a sincronização</button></div>`}
    <details class="rev" ${CL.code?"":"open"}><summary><span class="mark">⇄</span><span>${CL.code?"Usar outro código":"Já tenho um código (de outro aparelho)"}</span></summary>
      <div class="stack" style="margin-top:10px">${CL.code?`<span class="muted">Código atual: <span class="num">${esc(CL.code)}</span></span>`:""}<input id="clIn" placeholder="tp-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx" autocomplete="off" autocapitalize="off" spellcheck="false"><div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn sm" onclick="clLink($('#clIn').value,true).then(()=>vConfigKeep())">Conectar este aparelho</button>${CL.code?`<button class="btn ghost sm" onclick="clOff()">Desconectar este aparelho</button>`:""}</div></div>
    </details></section>`;
}
async function clNew(){CL.code=newCode();CL.base=0;S.cloud=CL.code;clStore();save();await clPull();vConfigKeep();}
async function clOff(){if((await modal(`<h3>Desconectar este aparelho?</h3><p class="muted">O progresso continua salvo aqui e na nuvem, mas este aparelho para de sincronizar.</p>`,[["cancel","Cancelar","btn ghost"],["ok","Desconectar","btn warn"]])).v!=="ok") return;CL.code=null;CL.base=0;CL.st="off";clStore();clSnap(null);delete S.cloud;saveLocal();vConfigKeep();}
function seg(id,cur,opts){return `<div class="segtabs" role="radiogroup" id="${id}">${opts.map(([v,t])=>`<button role="radio" aria-checked="${v===cur}" aria-selected="${v===cur}" data-v="${v}">${t}</button>`).join("")}</div>`;}
function vConfig(){
  $("#view").innerHTML=`<div class="stack"><h2>Configurações</h2><p class="muted">Ajustes deste app. O progresso é salvo sozinho a cada resposta.</p></div>
  ${cfgSync()}
  <section class="panel stack"><h3>Rotina de estudo</h3>
    <div class="cfgrow"><label for="stH">Início da programação em dias úteis</label><input type="time" id="stH" value="${S.st.h}"></div>
    <div class="cfgrow"><label for="stW">Início no sábado e no domingo</label><input type="time" id="stW" value="${S.st.w}"></div>
    <div class="cfgrow"><label for="goalSel">Meta diária</label><select id="goalSel">${[10,20,30,40,60,80].map(v=>`<option value="${v}" ${v===S.goal?"selected":""}>${v} questões</option>`).join("")}</select></div>
    <p class="muted">A programação de Hoje calcula os horários a partir daqui, com pausa de 10 min a cada bloco de cerca de 50 min.</p></section>
  <section class="panel stack"><h3>Lembrete diário</h3>
    <div class="row" style="gap:10px;flex-wrap:wrap">
      <label class="row" style="gap:8px"><input type="checkbox" id="remOn" ${S.rem.on?"checked":""} style="width:18px;height:18px;accent-color:var(--petrol)"> Avisar às</label>
      <input type="time" id="remH" value="${S.rem.h}">
      <button class="btn ghost sm" onclick="notify('Lembrete de teste','É assim que o aviso diário aparece.')">Testar</button></div>
    <p class="muted">${notifState()} Este aviso aparece com o app aberto.</p>
    <details class="rev"><summary><span class="mark">⏰</span><span>Avisos com o app fechado (agenda do celular)</span></summary>${outsidePanel().replace(/^<section class="panel stack" id="outSec"><h3>Avisos com o app fechado<\/h3>/,'<div class="stack" id="outSec" style="margin-top:10px">').replace(/<\/section>$/,"</div>")}</details></section>
  <section class="panel stack"><h3>Aparência</h3>
    <span class="muted">Tema</span>${seg("thSeg",theme,[["auto","Automático"],["light","Claro"],["dark","Escuro"]])}
    <span class="muted">Tamanho da letra</span>${seg("fzSeg",String(fz),[[".92","92%"],["1","100%"],["1.12","112%"],["1.25","125%"],["1.4","140%"]])}
    <p class="muted">Tema e letra valem só para este aparelho. Dentro do simulado, o botão Aa também muda a letra.</p></section>
  <section class="panel stack" id="syncSec"><h3>Backup manual</h3>
    <p class="synclbl">${esc(syncText())}</p>
    <div class="stack"><p class="muted">Cópia do progresso por código, para guardar ou passar para um aparelho sem internet. A importação substitui o progresso deste aparelho.</p>
      <div class="row"><button class="btn ghost sm" id="bkGen">Gerar código</button><button class="btn ghost sm" id="bkCopy">Copiar</button></div>
      <textarea id="bkTxt" rows="3" placeholder="Cole aqui o código de backup"></textarea>
      <div class="row"><button class="btn sm" id="bkImp">Importar código</button><span class="muted" id="bkMsg"></span></div></div>
    ${instEvt?`<button class="btn" id="instBtn">Instalar o app neste aparelho</button>`:IS_PWA?"":`<a class="btn ghost sm" href="${GH_URL}" target="_blank" rel="noopener">Abrir a versão instalável (GitHub)</a>`}</section>
  ${aboutExam()}
  <p class="muted">Versão 16 · ${QV().length} questões</p>`;
  $("#stH").onchange=e=>{S.st.h=e.target.value||"19:00";save();};
  $("#stW").onchange=e=>{S.st.w=e.target.value||"09:00";save();};
  $("#goalSel").onchange=e=>{S.goal=+e.target.value;save();};
  $("#remOn").onchange=e=>{remEnable(e.target.checked);};
  $("#remH").onchange=e=>{S.rem.h=e.target.value||"19:00";S.rem.last=null;save();};
  document.querySelectorAll("#thSeg button").forEach(b=>b.onclick=()=>{theme=b.dataset.v;try{localStorage.setItem("transpetro26-theme",theme);}catch(e){}applyTheme();vConfigKeep();});
  document.querySelectorAll("#fzSeg button").forEach(b=>b.onclick=()=>{fz=+b.dataset.v;try{localStorage.setItem(FZK,fz);}catch(e){}fzApply();vConfigKeep();});
  const ib=$("#instBtn"); if(ib) ib.onclick=async()=>{if(!instEvt)return;instEvt.prompt();try{await instEvt.userChoice;}catch(e){}instEvt=null;vConfigKeep();};
  syncWire(); clLbl();
}
function vConfigKeep(){if(current!=="config")return;const y=window.scrollY;vConfig();window.scrollTo({top:y});}
VIEWS.config=()=>vConfig();

/* botão de Configurações no cabeçalho (no lugar dos botões de tema e letra) */
(function(){
  const t=$("#themeBtn"); if(!t) return;
  const b=document.createElement("button"); b.className="themebtn cfgbtn"; b.id="cfgBtn"; b.type="button"; b.setAttribute("aria-label","Configurações");
  b.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg><span class="tlbl">Configurações</span>';
  b.onclick=()=>go("config"); t.after(b);
})();

/* ---------- 25. v14: o que saiu de Hoje foi para Progresso ---------- */
function prioPanel(){
  return `<section class="panel stack"><h3>Assuntos de prioridade</h3>
    <p class="muted">Os 5 assuntos específicos com pior acerto até agora (sem questões, contam como médios). Eles recebem 60% do tempo a partir da fase 2.</p>
    <div class="row" style="gap:6px;flex-wrap:wrap">${weakCats(5).map(c=>{const pc=pct(S.stats[c]);return `<button class="chipbtn" onclick="openTopic('${c}')">${esc(CATS[c].n)}${pc!==null?` · ${pc}%`:""}</button>`;}).join("")}</div></section>`;
}
function planMethod(){
  const p=dayPlan(todayK());
  return `<div class="stack inner"><div class="phases">${PHASES.map((f,i)=>`<div class="panel phase ${p.ph===f?"cur":""}"><span class="tag">Fase ${i+1} · ${fmtK(f.a)} a ${fmtK(f.b)}${p.ph===f?" · agora":""}</span><h3>${esc(f.t)}</h3><p class="muted">${esc(f.d)}</p></div>`).join("")}</div>
    <h3>Método de cada dia</h3>
    <ol class="steps">
      <li><b>Aquecimento, 10 min:</b> revisar as erradas (Praticar).</li>
      <li><b>Teoria curta, 30 min:</b> resumo do assunto (Estudar). Feche e escreva de memória 3 a 5 pontos.</li>
      <li><b>Questões, 45 min:</b> 30 min do mesmo assunto e 15 de outro ou de Português e Matemática (Praticar).</li>
      <li><b>Gerais, 25 min:</b> Português ou Matemática, contas à mão.</li>
      <li><b>Caderno de erros, 10 min:</b> motivo de cada erro; o app traz as notas de volta em 1, 3, 7 e 15 dias.</li>
      <li><b>Desafio do dia, 10 min:</b> Jogos. <b>Fechamento, 5 min:</b> Progresso.</li>
    </ol>
    <ul class="res">
      <li>Blocos de 50 minutos com 10 de pausa, longe do celular.</li>
      <li>A Cesgranrio cobra a definição do livro (Chiavenato, Ballou, Viana, Martins e Alt, Dias): na dúvida, fique com a definição clássica.</li>
      <li>Ensine em voz alta o que estudou; onde travar é o que precisa rever.</li>
      <li>Durma de 7 a 8 horas. Na prova, errar não desconta: nunca deixe em branco.</li>
      <li>Se o acerto nas específicas não subir por duas semanas, mude o método naquele assunto, não só as horas.</li>
    </ul></div>`;
}

(function(){const st=document.createElement("style");st.textContent=`
header.band .themebtn#themeBtn{display:none}
.cfgbtn[aria-current="page"]{background:var(--petrol-soft);color:var(--petrol);border-color:var(--petrol)}
@media (min-width:1100px){header.band .themebtn.cfgbtn{order:4;margin-top:auto;align-self:stretch;justify-content:flex-start;padding:0 12px}}
.hoje-top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}
.hoje-top h2{margin:0}
.clchip{all:unset;cursor:pointer;display:inline-flex;align-items:center;gap:6px;font:600 12px var(--f-body);padding:6px 10px;border-radius:99px;border:1px solid var(--line);color:var(--muted);white-space:nowrap;flex:none}
.clchip i{width:8px;height:8px;border-radius:50%;background:var(--muted)}
.clchip.ok i{background:var(--ok)}.clchip.bad{color:var(--bad)}.clchip.bad i{background:var(--bad)}.clchip.off i{background:var(--amber)}
.clchip:focus-visible{outline:2px solid var(--petrol)}
.tlist{display:flex;flex-direction:column}
.tl{display:grid;grid-template-columns:22px minmax(0,1fr) auto;gap:10px;align-items:start;padding:12px 0;border-top:1px solid var(--line)}
.tl:first-child{border-top:0}
.tl input{width:20px;height:20px;margin:2px 0 0;accent-color:var(--petrol)}
.tl.cur{background:var(--petrol-soft);margin:0 -12px;padding:12px;border-radius:12px;border-top-color:transparent}
.tl.cur+.tl{border-top-color:transparent}
.tl.done .tltitle{color:var(--muted);text-decoration:line-through;text-decoration-thickness:1px}
.tl.done .tlhow{display:none}
.tl.pause{grid-template-columns:auto 1fr;padding:8px 0 8px 32px;font-size:13px}
.tlb{display:flex;flex-direction:column;gap:4px;min-width:0}
.tlt{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.tltime{font:600 13px var(--f-body);color:var(--ink)}
.tltitle{cursor:pointer;line-height:1.4}
.tlhow{margin:0;font-size:13px;color:var(--muted);line-height:1.4}
.pill.now{background:var(--petrol);color:var(--onpetrol)}
.achip{display:inline-flex;align-items:center;gap:4px;font:600 11px var(--f-body);text-transform:uppercase;letter-spacing:.03em;padding:3px 8px;border-radius:99px;background:var(--bg);border:1px solid var(--line);color:var(--muted)}
.achip.a-est{color:var(--c-port)}.achip.a-pra{color:var(--petrol)}.achip.a-jog{color:var(--c-log)}.achip.a-prog{color:var(--c-fin)}
.metaln{justify-content:space-between;gap:10px;align-items:center}
.metaln .track.sm{flex:0 1 160px}
.areaitem{border-top:1px solid var(--line);padding-top:10px;display:flex;flex-direction:column;gap:6px}
.areaitem:first-child{border-top:0;padding-top:0}
.areaitem p{margin:0}
.cfgrow{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
.cfgrow label{flex:1 1 200px}
.cfgrow input,.cfgrow select{flex:0 0 auto;min-width:140px}
@media (max-width:420px){.tl{grid-template-columns:22px minmax(0,1fr)}.tl>.btn{grid-column:2;justify-self:start}}
`;document.head.appendChild(st);})();
