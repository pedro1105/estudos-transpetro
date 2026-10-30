/* v24: avisos acima da barra de abas e provas em grade. */
const APP_V24=24;
/* O aviso (toast) fica sempre logo acima da barra de abas do celular, meça ela o que medir
   (fonte do aparelho, barra de gestos). Avisos só informativos somem sozinhos em 4 s. */
const _toast24=toast;
toast=function(t,b,goHoje){
  _toast24(t,b,goHoje);
  const el=$("#toast"); if(!el) return;
  const nav=document.querySelector("nav.tabs"), r=nav&&nav.getBoundingClientRect();
  const navUp=r&&r.height&&getComputedStyle(nav).position==="fixed"&&r.top>innerHeight/2;
  el.style.bottom=navUp?Math.round(innerHeight-r.top+10)+"px":"";
  clearTimeout(toast.tm);
  toast.tm=setTimeout(()=>{if(!el.querySelector(".btn:not(.ghost)"))el.classList.remove("on");},4000);
};
(function(){
  const st=document.createElement("style");
  st.textContent=`
#toast{max-height:calc(100vh - 140px);overflow:auto}
.pgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(128px,1fr));gap:8px}
.pgrid .pbtn{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:2px;width:100%;min-height:54px;padding:8px 12px;text-align:left;white-space:normal;line-height:1.25}
.pgrid .pbtn b{font-weight:650;font-size:14px}
.pgrid .pbtn span{font-weight:500;font-size:12px;opacity:.8}
.pgrid .pfull{grid-column:1/-1}
.pgrp h4{text-transform:none;letter-spacing:0;font-size:14px;margin:6px 0 0}
`;
  document.body.appendChild(st);
})();
/* Questões reportadas pelo usuário em 29/10 e revisadas na v24: o aviso sai sozinho, uma única vez. */
(function(){
  if(S.v24rep) return;
  ["lwbb2r","t3a3os","vtvx81","119m1rk","15eg13g","1brggv1","1hyfnj3"].forEach(id=>{if(S.rep&&S.rep[id])delete S.rep[id];});
  S.v24rep=1; save();
})();
