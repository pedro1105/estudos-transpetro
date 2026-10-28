/* ---------- 18. v13: identificação fixa das questões ---------- */
/* Cada questão ganha um código tirado do próprio conteúdo (assunto + enunciado + resposta certa).
   O progresso continua guardado pela posição, mas S.qv registra o código de cada posição:
   se a ordem do banco mudar, remapState leva o histórico para a nova posição da mesma questão. */
function qhash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return (h>>>0).toString(36);}
QID=(()=>{const used={};return Q.map(q=>{let h=qhash(q.c+"|"+q[1]+"|"+q[2][0]);if(used[h]){let n=2;while(used[h+"~"+n])n++;h+="~"+n;}used[h]=1;return h;});})();
const QPOS={}; QID.forEach((id,i)=>QPOS[id]=i);
function remapState(st){
  const old=st.qv; st.qv=QID;
  if(!Array.isArray(old)||old.join()===QID.join()) return false;
  const mp=i=>{const id=old[i];if(id===undefined||QID[i]===id) return i;return QPOS[id]!==undefined?QPOS[id]:i;};
  ["srs","seen","notes","qerr"].forEach(f=>{if(!st[f]) return;const o={};Object.keys(st[f]).forEach(k=>{o[mp(+k)]=st[f][k];});st[f]=o;});
  st.wrong=(st.wrong||[]).map(mp);
  return true;
}
if(!Array.isArray(S.qv)||S.qv.join()!==QID.join()){remapState(S);saveLocal();}

/* ---------- 19. v13: sincronização entre aparelhos e entre os dois links ---------- */
/* O progresso fica numa tabela do Supabase, acessada só por funções que exigem o código de
   sincronização (tp_get / tp_save). tp_save só grava se a nuvem ainda estiver na versão que este
   aparelho conhecia (p_base); senão o app baixa, junta e envia de novo. No GitHub a chamada é direta; no claude.ai, se a página não
   puder acessar a internet, usa o conector Supabase da conta do Claude. */
const SB_URL="https://xpfcmehgdfruhnveslmj.supabase.co", SB_KEY="sb_publishable_Bgf_LtyuT9ABzExDTuAyQg_krQ9yy9R", SB_REF="xpfcmehgdfruhnveslmj";
const GH_URL="https://pedro1105.github.io/estudos-transpetro/";
const CK="transpetro26-cloud", CSNAP="transpetro26-cloudsnap";
const IN_CLAUDE=!!(window.claude&&window.claude.use);
const CL={code:null,base:0,st:"off",at:null,t:null,busy:false,via:"fetch",mcp:null,err:""};
try{const o=JSON.parse(localStorage.getItem(CK)||"{}");CL.code=o.code||null;CL.base=o.base||0;}catch(e){}
if(!CL.code&&S.cloud) CL.code=S.cloud;
function clStore(){try{localStorage.setItem(CK,JSON.stringify({code:CL.code,base:CL.base}));}catch(e){}}
function clSnap(st){try{if(st)localStorage.setItem(CSNAP,JSON.stringify(st));else localStorage.removeItem(CSNAP);}catch(e){}}
function clGetSnap(){try{return JSON.parse(localStorage.getItem(CSNAP)||"null");}catch(e){return null;}}
function newCode(){const a="abcdefghjkmnpqrstuvwxyz23456789",r=crypto.getRandomValues(new Uint8Array(24));let s="";r.forEach((x,i)=>{if(i&&i%4===0)s+="-";s+=a[x%a.length];});return "tp-"+s;}
const codeOk=c=>/^tp-[a-z0-9]{4}(-[a-z0-9]{4}){5}$/.test(c||"");

async function mcpReady(ask){
  if(!IN_CLAUDE) return false;
  if(CL.mcp) return true;
  try{
    const perm=await window.claude.use("permissions");
    if(perm){const st=await perm.state("mcp");if(st!=="granted"){if(!ask) return false;const r=await perm.request("mcp");if(r&&r.mcp&&r.mcp!=="granted") return false;}}
    CL.mcp=await window.claude.use("mcp"); return !!CL.mcp;
  }catch(e){return false;}
}
async function rpcMcp(fn,args){
  const tag="$tp"+Math.random().toString(36).slice(2,8)+"$";
  const lit=v=>typeof v==="number"?String(Math.round(v)):tag+String(v).split(tag).join("")+tag;
  const params=fn!=="tp_save"?[lit(args.p_code)]:[lit(args.p_code),lit(args.p_s),lit(args.p_upd),lit(args.p_base)];
  const res=await CL.mcp.callTool("Supabase","execute_sql",{project_id:SB_REF,query:`select public.${fn}(${params.join(",")})::text as r`},{cache:false});
  let p=res&&res.payload; if(p&&typeof p==="object"&&p.result) p=p.result; if(typeof p!=="string") p=JSON.stringify(p);
  const m=/<untrusted-data[^>]*>\s*([\s\S]*?)\s*<\/untrusted-data/.exec(p); const arr=JSON.parse(m?m[1]:p);
  const r=Array.isArray(arr)&&arr[0]?arr[0].r:null; return r?JSON.parse(r):null;
}
/* no claude.ai, o último erro de sincronização fica no banco da página, para diagnóstico */
function clLog(e){try{if(!SYNC.db||!SYNC.uid||Date.now()-(CL.logAt||0)<60000) return;CL.logAt=Date.now();SYNC.db.doc("data/users/"+SYNC.uid+"/synclog").set({err:String(e&&e.message||e).slice(0,300),via:CL.via,st:CL.st,at:Date.now(),code:!!CL.code});}catch(x){}}
async function rpc(fn,args,ask){
  try{return await rpc0(fn,args,ask);}catch(e){clLog(e);throw e;}
}
async function rpc0(fn,args,ask){
  if(CL.via==="fetch"){
    try{
      const r=await fetch(SB_URL+"/rest/v1/rpc/"+fn,{method:"POST",headers:{apikey:SB_KEY,"Content-Type":"application/json"},body:JSON.stringify(args)});
      if(!r.ok) throw new Error("HTTP "+r.status);
      const t=await r.text(); return t&&t!=="null"?JSON.parse(t):null;
    }catch(e){
      if(!IN_CLAUDE||!navigator.onLine) throw e;
      CL.via="mcp";
    }
  }
  if(!(await mcpReady(ask))){CL.st="needmcp";throw new Error("needmcp");}
  return rpcMcp(fn,args);
}

/* Junta dois progressos. base = última versão sincronizada (quando existe): contadores somam só o que
   cada lado acrescentou; sem base, fica o maior. Listas de dias, questões vistas e notas se unem. */
const ADD_PATHS=/^(stats\.[^.]+\.[ct]|days\.[^.]+|ct\.[^.]+\.[sn]|qerr\.[^.]+|slog\.[^.]+\.[^.]+|qlog\.[^.]+\.[^.]+\.[01])$/;
function deq(a,b){return JSON.stringify(a)===JSON.stringify(b);}
function merge3(base,a,b,path,newer){
  if(deq(a,b)) return a;
  if(a===undefined) return b; if(b===undefined) return a;
  if(base!==undefined&&deq(a,base)) return b;
  if(base!==undefined&&deq(b,base)) return a;
  if(/^srs\.[^.]+$/.test(path)&&a&&b&&typeof a==="object"&&typeof b==="object") return (a.l||"")>(b.l||"")?a:(b.l||"")>(a.l||"")?b:(newer==="a"?a:b);
  if(typeof a==="number"&&typeof b==="number"&&ADD_PATHS.test(path)) return typeof base==="number"?a+b-base:Math.max(a,b);
  if(Array.isArray(a)&&Array.isArray(b)&&/^qlog\./.test(path)) return [0,1].map(i=>merge3(base&&base[i],a[i],b[i],path+"."+i,newer));
  if(a&&b&&typeof a==="object"&&typeof b==="object"&&!Array.isArray(a)&&!Array.isArray(b)){
    const o={}; new Set([...Object.keys(a),...Object.keys(b)]).forEach(k=>{const v=merge3(base&&typeof base==="object"?base[k]:undefined,a[k],b[k],path?path+"."+k:k,newer);if(v!==undefined)o[k]=v;}); return o;
  }
  return newer==="a"?a:b;
}
function mergeS(a,b,base){
  const newer=(a.upd||0)>=(b.upd||0)?"a":"b";
  const o=merge3(base||undefined,a,b,"",newer);
  const hk=h=>[h.date,h.label,h.score,h.total].join("|"), seen=new Set(), hd=h=>{const d=parseBr(h.date);return d?d.getTime():0;};
  o.hist=[...(a.hist||[]),...(b.hist||[])].filter(h=>{const k=hk(h);if(seen.has(k))return false;seen.add(k);return true;}).sort((x,y)=>hd(y)-hd(x)).slice(0,40);
  o.wrong=Object.keys(o.srs||{}).map(Number);
  o.pomo=(newer==="a"?a:b).pomo||null;
  return o;
}
function clAdopt(st,upd){
  S=Object.assign({hist:[],stats:{},wrong:[],plan:{}},st); S.upd=upd; S.cloud=CL.code;
  initState(); saveLocal(); applyTheme&&applyTheme(); syncPush&&syncPush();
  if(!["quiz","real","vf","match","duel","calc"].includes(current)){const y=window.scrollY;go(current);window.scrollTo({top:y});}
}
async function clPush(){
  if(!CL.code||CL.busy) return;
  CL.busy=true;
  try{
    S.cloud=CL.code; const upd=S.upd||Date.now(), body=JSON.stringify(S);
    const r=await rpc("tp_save",{p_code:CL.code,p_s:body,p_upd:upd,p_base:CL.base||0});
    if(r&&r.ok===false){CL.busy=false;return clPull();}
    CL.base=upd; clStore(); clSnap(JSON.parse(body)); CL.st="ok"; CL.at=new Date(); CL.err="";
  }catch(e){CL.st=e.message==="needmcp"?"needmcp":"err";CL.err=String(e.message||e);}
  CL.busy=false; clLbl();
}
async function clPull(){
  if(!CL.code&&S.cloud) CL.code=S.cloud;
  if(!CL.code||CL.busy) return;
  CL.busy=true; let then=null;
  try{
    const r=await rpc("tp_get",{p_code:CL.code});
    const lu=S.upd||0;
    if(!r){then="push";}
    else if(!CL.base){
      /* primeira sincronização deste aparelho: nunca sobrescreve às cegas */
      const remote=JSON.parse(r.s);
      if(hasProgress(S)&&hasProgress(remote)&&lu!==r.upd){clAdopt(mergeS(S,remote,null),Math.max(Date.now(),r.upd+1));CL.base=r.upd;then="push";}
      else{clAdopt(remote,r.upd);CL.base=r.upd;clStore();clSnap(remote);}
    }
    else if(r.upd===CL.base){if(lu>CL.base) then="push";}
    else if(r.upd>CL.base){
      const remote=JSON.parse(r.s);
      if(lu>CL.base){const m=mergeS(S,remote,clGetSnap());clAdopt(m,Math.max(Date.now(),r.upd+1));CL.base=r.upd;then="push";}
      else{clAdopt(remote,r.upd);CL.base=r.upd;clStore();clSnap(remote);}
    }else then="push";
    CL.st="ok"; CL.at=new Date(); CL.err="";
  }catch(e){CL.st=e.message==="needmcp"?"needmcp":"err";CL.err=String(e.message||e);}
  CL.busy=false; clLbl();
  if(then==="push") clPush();
}
function clKick(){if(!CL.code&&S.cloud){CL.code=S.cloud;clStore();}if(!CL.code) return;clearTimeout(CL.t);CL.t=setTimeout(CL.base?clPush:clPull,2000);}
SAVE_HOOKS.push(clKick);
/* Atualização quase ao vivo: a cada 15 s (60 s pelo conector do Claude) pergunta só a versão da nuvem
   (tp_ver, poucos bytes) e baixa o progresso inteiro apenas quando ela mudou. */
async function clCheck(){
  if(!CL.code&&S.cloud){CL.code=S.cloud;clStore();}
  if(!CL.code||CL.busy||document.visibilityState!=="visible") return;
  if(CL.via==="mcp"&&Date.now()-(CL.lastMcp||0)<55000) return;
  if(CL.via==="mcp") CL.lastMcp=Date.now();
  try{const v=await rpc("tp_ver",{p_code:CL.code});if(v!==CL.base||(S.upd||0)>CL.base) clPull();else if(CL.st!=="ok"){CL.st="ok";CL.at=new Date();clLbl();}}
  catch(e){CL.st=e.message==="needmcp"?"needmcp":"err";CL.err=String(e.message||e);clLbl();}
}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible") clPull();else if(CL.code&&CL.base&&(S.upd||0)>CL.base){clearTimeout(CL.t);clPush();}});
window.addEventListener("online",()=>clPull());
setInterval(clCheck,15000);

/* Conectar este aparelho a um código: se os dois lados já têm progresso, junta os dois sozinho. */
const hasProgress=st=>!!st&&((st.hist||[]).length>0||Object.keys(st.seen||{}).length>0);
async function clLink(code,ask){
  code=String(code||"").trim().toLowerCase();
  if(!codeOk(code)){toast("Código inválido","Copie o código inteiro, no formato tp-xxxx-xxxx-…");return;}
  CL.code=code; CL.base=0; clStore(); clLbl();
  let r=null;
  try{r=await rpc("tp_get",{p_code:code},ask);}catch(e){CL.st=e.message==="needmcp"?"needmcp":"err";clLbl();toast("Sem conexão agora","O código foi guardado; a sincronização tenta de novo sozinha.");return;}
  if(!r){S.cloud=code;save();toast("Sincronização ativada","Este aparelho passa a enviar o progresso para a nuvem.");return;}
  const remote=JSON.parse(r.s);
  if(!(hasProgress(S)&&hasProgress(remote))){clAdopt(remote,r.upd);CL.base=r.upd;clStore();clSnap(remote);}
  else{const m=mergeS(S,remote,null);clAdopt(m,Math.max(Date.now(),r.upd+1));CL.base=r.upd;clStore();await clPush();}
  toast("Aparelho conectado","O progresso agora é o mesmo nos aparelhos conectados.");
}
async function copyTxt(t,ok,sub){try{await navigator.clipboard.writeText(t);toast(ok,sub||"");}catch(e){prompt("Copie o texto:",t);}}
/* o painel entra no lugar do texto de status da sincronização antiga, dentro de "Backup e sincronização" */
/* link #sync=código (abre o app já conectado) */
(function(){const m=/[#&]sync=(tp-[a-z0-9-]+)/.exec(location.hash||"");if(!m) return;try{history.replaceState(null,"",location.pathname+location.search);}catch(e){}if(m[1]!==CL.code) setTimeout(()=>clLink(m[1],true),400);})();
setTimeout(clPull,1200);
/* no claude.ai a sincronização liga sozinha: se depois de carregar a conta ainda não houver código,
   cria um; ele vai junto no progresso da conta e chega aos outros aparelhos com o mesmo login */
if(IN_CLAUDE) setTimeout(()=>{if(SYNC.st==="ok"&&!CL.code&&!S.cloud){CL.code=newCode();CL.base=0;S.cloud=CL.code;clStore();save();}},8000);

/* ---------- 20. v13: janela de diálogo simples ---------- */
function modal(html,buttons){
  return new Promise(res=>{
    const d=document.createElement("dialog"); d.className="tpdlg";
    d.innerHTML=`<form method="dialog" class="stack">${html}<div class="row" style="gap:8px;flex-wrap:wrap;justify-content:flex-end">${buttons.map(([v,t,c])=>`<button class="${c}" value="${v}">${esc(t)}</button>`).join("")}</div></form>`;
    document.body.appendChild(d);
    d.addEventListener("close",()=>{const v=d.returnValue||"cancel";const data={};d.querySelectorAll("[name]").forEach(x=>{if(x.type==="radio"){if(x.checked)data[x.name]=x.value;}else data[x.name]=x.value;});d.remove();res({v,data});});
    d.showModal();
  });
}

/* ---------- 21. v13: reportar erro numa questão ---------- */
const REP_K={gab:"Gabarito errado",exp:"Explicação errada ou confusa",enun:"Enunciado ou alternativa com erro",lei:"Desatualizada ou fora do edital",out:"Outro"};
function repBtn(qi){const r=S.rep&&S.rep[QID[qi]];return `<button type="button" class="linkbtn repbtn" data-q="${qi}">${r?"⚑ Reportada · editar":"⚑ Reportar erro"}</button>`;}
async function repOpen(qi){
  S.rep=S.rep||{}; const id=QID[qi], cur=S.rep[id]||{};
  const r=await modal(`<h3>Reportar erro nesta questão</h3>
    <p class="muted">${esc(Q[qi][1].length>140?Q[qi][1].slice(0,140)+"…":Q[qi][1])}</p>
    <div class="stack" style="gap:6px">${Object.entries(REP_K).map(([k,t])=>`<label class="rrow"><input type="radio" name="k" value="${k}" ${(cur.k||"gab")===k?"checked":""}><span>${esc(t)}</span></label>`).join("")}</div>
    <label class="muted" for="repT">O que está errado (opcional)</label><textarea id="repT" name="t" rows="3" placeholder="Ex.: a resposta certa é a C, pelo art. 75">${esc(cur.t||"")}</textarea>
    <p class="muted">Fica na lista “Questões reportadas”, em Progresso, e chega para correção pela sincronização.</p>`,
    [...(S.rep[id]?[["del","Retirar o aviso","btn ghost"]]:[]),["cancel","Cancelar","btn ghost"],["ok","Enviar","btn"]]);
  if(r.v==="ok"){S.rep[id]={i:qi,k:r.data.k||"out",t:(r.data.t||"").trim().slice(0,600),d:todayK()};save();toast("Obrigado! Questão reportada","Ela será revisada na próxima atualização.");}
  else if(r.v==="del"){delete S.rep[id];save();}
  else return;
  document.querySelectorAll(`.repbtn[data-q="${qi}"]`).forEach(b=>b.outerHTML=repBtn(qi));
  if(current==="stats") vStatsKeep();
}
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest(".repbtn");if(b){e.preventDefault();e.stopPropagation();repOpen(+b.dataset.q);}},true);
function repList(){return Object.entries(S.rep||{}).map(([id,r])=>({id,r,qi:QPOS[id]!==undefined?QPOS[id]:r.i})).filter(x=>Q[x.qi]);}
function repPanel(){
  const L2=repList(); if(!L2.length) return "";
  const txt=L2.map(x=>`[${x.id}] ${REP_K[x.r.k]||x.r.k}${x.r.t?": "+x.r.t:""}\n   ${Q[x.qi][1].slice(0,160)}`).join("\n");
  return `<section class="panel stack" id="repSec"><div class="row" style="justify-content:space-between"><h3>Questões reportadas</h3><span class="pill">${L2.length}</span></div>
    <p class="muted">${CL.code?"Elas chegam para correção junto com a sincronização.":"Ative a sincronização (em Hoje › Backup e sincronização) ou copie a lista e mande na conversa."}</p>
    <div class="stack" style="gap:8px">${L2.map(x=>`<div class="row repitem" style="justify-content:space-between;gap:8px;align-items:flex-start"><span><b>${esc(REP_K[x.r.k]||"Outro")}</b>${x.r.t?` · ${esc(x.r.t)}`:""}<br><span class="muted">${esc(Q[x.qi][1].slice(0,120))}${Q[x.qi][1].length>120?"…":""}</span></span>${repBtn(x.qi)}</div>`).join("")}</div>
    <div class="row"><button class="btn ghost sm" onclick='copyTxt(${JSON.stringify(txt).replace(/'/g,"&#39;")},"Lista copiada","Cole na conversa com o Claude.")'>Copiar lista</button></div></section>`;
}
function vStatsKeep(){const y=window.scrollY;vStats();window.scrollTo({top:y});}

/* ---------- 22. v13: tamanho da letra (por aparelho) ---------- */
const FZK="transpetro26-fz", FZS=[1,1.12,1.25,1.4,.92];
let fz=1; try{fz=+localStorage.getItem(FZK)||1;}catch(e){}
function fzApply(){document.documentElement.style.setProperty("--fz",fz);const b=$("#fzBtn");if(b)b.innerHTML=`<span aria-hidden="true">Aa</span><span class="tlbl">Letra ${Math.round(fz*100)}%</span>`;document.querySelectorAll(".fzq").forEach(x=>x.title="Letra "+Math.round(fz*100)+"%");}
function fzCycle(){const i=FZS.indexOf(fz);fz=FZS[(i+1)%FZS.length];try{localStorage.setItem(FZK,fz);}catch(e){}fzApply();toast("Tamanho da letra: "+Math.round(fz*100)+"%","Toque de novo para mudar.");}
fzApply();

/* ---------- 23. v13: resumo semanal ---------- */
/* semana de segunda a domingo; os blocos usam o histórico de simulados/treinos (S.hist) e
   os assuntos usam S.qlog, registrado a partir da v13. */
function monday(k){const d=kDate(k);const w=(d.getDay()+6)%7;d.setDate(d.getDate()-w);return dkey(d);}
function plusK(k,n){const d=kDate(k);d.setDate(d.getDate()+n);return dkey(d);}
function weekData(a){
  const b=plusK(a,6), inW=k=>k>=a&&k<=b, out={a,b,blk:{},cat:{},q:0,c:0,days:0,min:0,sims:0};
  (S.hist||[]).forEach(h=>{const d=parseBr(h.date);if(!d) return;const k=dkey(d);if(!inW(k)) return;out.sims++;Object.entries(h.byB||{}).forEach(([bk,v])=>{const x=out.blk[bk]=out.blk[bk]||{c:0,t:0};x.c+=v.c;x.t+=v.t;});});
  Object.entries(S.qlog||{}).forEach(([k,o])=>{if(!inW(k)) return;Object.entries(o).forEach(([c,[ok,t]])=>{const x=out.cat[c]=out.cat[c]||{c:0,t:0};x.c+=ok;x.t+=t;});});
  for(let k=a;k<=b;k=plusK(k,1)){const n=(S.days||{})[k]||0;out.q+=n;if(n)out.days++;const sl=(S.slog||{})[k];if(sl)for(const c in sl)out.min+=sl[c];}
  Object.values(out.blk).forEach(v=>out.c+=v.c);
  out.t=Object.values(out.blk).reduce((s,v)=>s+v.t,0);
  return out;
}
function weekFocus(w){
  const sc=Object.entries(w.cat).filter(([c,v])=>v.t>=4&&isEsp(c)).map(([c,v])=>[c,v.c/v.t]).filter(x=>x[1]<.7).sort((x,y)=>x[1]-y[1]).map(x=>x[0]);
  const out=sc.slice(0,3); weakCats(6).forEach(c=>{if(out.length<3&&!out.includes(c)) out.push(c);}); return out;
}
function weekPanel(a,title){
  const w=weekData(a), p=weekData(plusK(a,-7)), pc=v=>v&&v.t?Math.round(v.c/v.t*100):null;
  const acc=pc(w), pacc=pc(p);
  const rows=Object.keys(BLOCKS).filter(bk=>w.blk[bk]||p.blk[bk]).map(bk=>{const x=pc(w.blk[bk]),y=pc(p.blk[bk]);const d=x!==null&&y!==null?x-y:null;
    return `<div class="wkrow"><span><i class="bdot" style="background:var(--c-${bk})"></i>${esc(BLOCKS[bk])}</span><span class="num">${x===null?"—":x+"%"}</span><span class="num wkd ${d>0?"ok":d<0?"bad":""}">${d===null?"":d>0?"▲ "+d:d<0?"▼ "+(-d):"="}</span></div>`;}).join("");
  const cats=Object.entries(w.cat).filter(([,v])=>v.t>=3).map(([c,v])=>[c,v.c/v.t,v.t]);
  const best=cats.filter(x=>x[1]>=.7).sort((x,y)=>y[1]-x[1]).slice(0,2), worst=cats.filter(x=>x[1]<.7).sort((x,y)=>x[1]-y[1]).slice(0,2);
  const foc=weekFocus(w);
  return `<section class="panel stack wkpanel"><div class="row" style="justify-content:space-between"><h3>${esc(title)}</h3><span class="muted num">${fmtK(w.a)} a ${fmtK(w.b)}</span></div>
    <div class="grid3 wkstats"><div class="score"><span class="muted">Questões</span><span class="v num">${w.q}</span><span class="muted num">${w.days} de 7 dias</span></div>
    <div class="score"><span class="muted">Acerto</span><span class="v num">${acc===null?"—":acc+"%"}</span><span class="muted num">${pacc===null?"semana anterior sem dados":"semana anterior "+pacc+"%"}</span></div>
    <div class="score"><span class="muted">Estudo com cronômetro</span><span class="v num">${minFmt(w.min)}</span><span class="muted num">${w.sims} ${w.sims===1?"simulado ou treino":"simulados e treinos"}</span></div></div>
    ${rows?`<div class="stack" style="gap:6px">${rows}</div>`:`<p class="muted">Sem simulados ou treinos registrados nesta semana ainda.</p>`}
    ${cats.length?`<p>${best.length?`<b>Melhor:</b> ${best.map(x=>esc(CATS[x[0]].n)+" ("+Math.round(x[1]*100)+"%)").join(", ")}. `:""}${worst.length?`<b>Precisa de atenção:</b> ${worst.map(x=>esc(CATS[x[0]].n)+" ("+Math.round(x[1]*100)+"%)").join(", ")}.`:""}</p>`:""}
    <div class="stack" style="gap:6px"><b>3 focos para a próxima semana</b>${foc.map((c,i)=>`<div class="row" style="justify-content:space-between;gap:8px"><span>${i+1}. ${esc(CATS[c].n)}</span><span class="row" style="gap:6px"><button class="btn ghost sm" onclick="openTopic('${c}')">Resumo</button><button class="btn ghost sm" onclick="startTrainCat('${c}')">Treinar</button></span></div>`).join("")}</div>
  </section>`;
}
/* Progresso: semana atual; Hoje: no domingo, a semana que termina; na segunda, a que terminou */
const _vStats13=vStats;
vStats=function(){
  _vStats13();
  const seg=$("#view .segtabs"), h=$("#view h2"), at=(h||seg);
  const k=todayK(), a=monday(k);
  at.insertAdjacentHTML("afterend",weekPanel(a,"Resumo da semana")+prioPanel()+repPanel());
};
function weekCard(){
  const k=todayK(), wd=kDate(k).getDay();
  if(wd!==0&&wd!==1) return "";
  const a=wd===0?monday(k):monday(plusK(k,-1));
  if(S.wkSeen===a) return "";
  return `<div class="wkwrap">${weekPanel(a,wd===0?"Resumo da semana":"Resumo da semana passada").replace('<div class="row" style="justify-content:space-between"><h3>',`<div class="row" style="justify-content:space-between"><button class="linkbtn wkx" onclick="S.wkSeen='${a}';save();vGuiaKeep()" aria-label="Fechar o resumo">Fechar</button><h3>`)}</div>`;
}

(function(){const st=document.createElement("style");st.textContent=`
#view{zoom:var(--fz,1)}
.fzbtn{font:700 15px var(--f-body)}
@media (min-width:1100px){header.band .themebtn.fzbtn{order:5;margin-top:0}}
.linkbtn{all:unset;cursor:pointer;color:var(--petrol);font:600 13px var(--f-body);padding:6px 0;text-decoration:underline;text-underline-offset:3px}
.linkbtn:focus-visible{outline:2px solid var(--petrol);border-radius:4px}
.repbtn{color:var(--muted);align-self:flex-start;white-space:nowrap}
.repitem{border-top:1px solid var(--line);padding-top:8px}
dialog.tpdlg{border:1px solid var(--line);border-radius:14px;background:var(--surface);color:var(--ink);padding:18px;max-width:min(520px,calc(100vw - 32px));width:100%;box-sizing:border-box;zoom:var(--fz,1)}
dialog.tpdlg::backdrop{background:rgba(0,0,0,.45)}
dialog.tpdlg h3{margin:0}
dialog.tpdlg textarea,.clbox input{width:100%;box-sizing:border-box;font:inherit}
.rrow{display:flex;gap:10px;align-items:flex-start;cursor:pointer;line-height:1.35}.rrow input{margin:2px 0 0;flex:none;width:18px;height:18px;accent-color:var(--petrol)}
.vh{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.clcode{font:600 14px var(--f-mono,monospace);background:var(--petrol-soft);color:var(--petrol);padding:8px 10px;border-radius:8px;overflow-wrap:anywhere}
.cllbl.ok{color:var(--ok)}.cllbl.bad{color:var(--bad)}
.clbox{border-bottom:1px solid var(--line);padding-bottom:14px}
.grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
@media (max-width:520px){.grid3{grid-template-columns:1fr 1fr}.grid3>:last-child{grid-column:1/-1}}
.wkrow{display:grid;min-width:0;grid-template-columns:1fr auto 52px;gap:8px;align-items:center}
.wkd{text-align:right;font-size:13px}.wkd.ok{color:var(--ok)}.wkd.bad{color:var(--bad)}
.wkx{order:2;font-size:12px;color:var(--muted)}
.qhead .fzq{min-width:40px}
`;document.head.appendChild(st);})();
