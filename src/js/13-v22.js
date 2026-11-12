/* ---------- 38. v22: revisão de layout, design e textos (PC, tablet e celular) ---------- */
document.documentElement.lang="pt-BR";

/* botão de Áudio com nome no menu lateral do PC, logo acima de Configurações */
(function(){const b=$("#audBtn");if(b&&!b.querySelector(".tlbl"))b.insertAdjacentHTML("beforeend",'<span class="tlbl">Áudio</span>');})();

/* Pegadinhas: o trecho trocado vira um destaque só, em vez de uma caixinha por palavra */
hlTok=function(s,idx){
  const out=[];let run=[];
  const flush=()=>{if(run.length){out.push(`<b class="hl2">${run.join(" ")}</b>`);run=[];}};
  toks(s).forEach((w,k)=>{if(idx.includes(k))run.push(esc(w));else{flush();out.push(esc(w));}});
  flush();return out.join(" ");
};

/* jogos com cronômetro: botão de sair no mesmo lugar de todos os outros */
const GAME_EXIT={calc:"jogos",vf:"jogos",match:"jogos"};
new MutationObserver(()=>{
  const to=GAME_EXIT[current]; if(!to) return;
  const h=$("#view .qhead"); if(!h||h.querySelector(".qexit")) return;
  h.insertAdjacentHTML("afterbegin",`<button class="btn ghost sm qexit" onclick="go('${to}')">← Sair</button>`);
}).observe($("#view"),{childList:true});

/* estilos: src/css/513-v22*.css */

/* Cada aparelho grava no progresso sincronizado a versão do app, onde abriu e quando,
   para dar para conferir pela nuvem se o celular está atualizado e sincronizando */
const APP_V=33;
function devMark(){
  let id="x";try{id=localStorage.getItem("transpetro26-dev");if(!id){id=Math.random().toString(36).slice(2,8);localStorage.setItem("transpetro26-dev",id);}}catch(e){}
  const ua=navigator.userAgent, m=(/Android [\d.]+/.exec(ua)||/iPhone|iPad|Windows|Mac OS X|CrOS|Linux/.exec(ua)||["?"])[0];
  const w=window.claude&&window.claude.use?"claude.ai":/github\.io$/.test(location.hostname)?"GitHub":"arquivo";
  S.devs=S.devs||{}; const p=S.devs[id];
  if(!p||p.v!==APP_V||p.w!==w||Date.now()-(p.at||0)>3*3600e3){S.devs[id]={v:APP_V,w,m,at:Date.now()};save();}
}
const _clAdopt22=clAdopt; clAdopt=function(st,upd){_clAdopt22(st,upd);setTimeout(devMark,0);};
setTimeout(devMark,1500);
/* Áudio tem botão próprio no cabeçalho/menu: destaca ele, não a aba Estudar. */
TABOF.audio="audio";
const _go23=go; go=function(v){_go23(v);const b=$("#audBtn");if(b)b.setAttribute("aria-current",current==="audio"?"page":"false");};
