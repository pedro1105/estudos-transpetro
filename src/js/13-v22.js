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

(function(){const st=document.createElement("style");st.textContent=`
/* controles nativos (hora, caixa de seleção, rolagem) acompanham o tema escuro */
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){color-scheme:dark}}
:root[data-theme="dark"]{color-scheme:dark}
:root[data-theme="light"]{color-scheme:light}

/* campos de texto, hora e área de texto com o mesmo desenho das listas */
#view input[type=text],#view input[type=time],#view input:not([type]),#view input[type=search],#view textarea{font:15px var(--f-body);color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:10px 12px;box-sizing:border-box;min-height:46px;max-width:100%}
#view textarea{min-height:72px;width:100%;line-height:1.45}
#view input::placeholder,#view textarea::placeholder{color:var(--muted);opacity:.8}
#view input:focus-visible,#view textarea:focus-visible,#view select:focus-visible{outline:2px solid var(--petrol);outline-offset:1px}
#view input[type=text],#view input:not([type]){width:100%;font-family:var(--f-mono,ui-monospace),monospace;letter-spacing:.02em}

/* menu lateral (PC): Áudio e Configurações juntos no rodapé, os dois com nome */
@media (min-width:1100px){
 header.band .themebtn#audBtn{order:4;margin-top:auto;align-self:stretch;justify-content:flex-start;padding:0 12px}
 header.band .themebtn#cfgBtn{margin-top:0}
}

/* opção sem letra (Ordene as fases): o texto ocupa a largura toda */
.opt>span:only-child{grid-column:1/-1}

/* cabeçalho de questões e jogos: Sair, título e cronômetro sempre numa linha */
.qhead{flex-wrap:nowrap;align-items:center}
.qhead>.stack{flex:1 1 auto;min-width:0}
.qhead>.btn,.qhead>.timer{flex:none}

/* abas de Estudar e Progresso: uma linha só, com rolagem lateral no celular */
@media (max-width:759px){
 .segtabs{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}
 .segtabs::-webkit-scrollbar{display:none}
 .segtabs>*,.segtabs button{flex:none;white-space:nowrap}
}

/* cartões: 3 colunas no PC, para os textos não ficarem espremidos */
@media (min-width:1100px){.grid2{grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}}

/* tabelas dos resumos: sem quebrar palavra no meio; no celular, a tabela rola de lado */
#view table,#view table *{overflow-wrap:normal;word-break:normal;hyphens:auto}
.qcomp table{min-width:460px}

/* edital: as quatro marcas visíveis no tema escuro */
.edck{border-color:var(--muted);opacity:.85}.edck.on{opacity:1}
.edsum{width:100%}

/* revisões dos próximos 7 dias: datas sem quebrar no celular */
.fcast{gap:3px}.fcd{min-width:0}.fcd>.muted{font-size:10px;white-space:nowrap;letter-spacing:-.02em}

/* links: marcador alinhado e etiqueta na mesma linha */
ul.links li{padding:5px 0;line-height:1.45}
ul.links a{display:inline;padding:0}
details.lk summary .muted{flex:none;white-space:nowrap}
details.lk summary .bh{min-width:0}

/* sons: descrição legível */
.sndbtn .muted{font-size:13px;line-height:1.4}
`;document.body.appendChild(st);})();

/* Cada aparelho grava no progresso sincronizado a versão do app, onde abriu e quando,
   para dar para conferir pela nuvem se o celular está atualizado e sincronizando */
const APP_V=22;
function devMark(){
  let id="x";try{id=localStorage.getItem("transpetro26-dev");if(!id){id=Math.random().toString(36).slice(2,8);localStorage.setItem("transpetro26-dev",id);}}catch(e){}
  const ua=navigator.userAgent, m=(/Android [\d.]+/.exec(ua)||/iPhone|iPad|Windows|Mac OS X|CrOS|Linux/.exec(ua)||["?"])[0];
  const w=window.claude&&window.claude.use?"claude.ai":/github\.io$/.test(location.hostname)?"GitHub":"arquivo";
  S.devs=S.devs||{}; const p=S.devs[id];
  if(!p||p.v!==APP_V||p.w!==w||Date.now()-(p.at||0)>3*3600e3){S.devs[id]={v:APP_V,w,m,at:Date.now()};save();}
}
const _clAdopt22=clAdopt; clAdopt=function(st,upd){_clAdopt22(st,upd);setTimeout(devMark,0);};
setTimeout(devMark,1500);
