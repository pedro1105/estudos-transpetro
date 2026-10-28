/* ---------- 34. v16: estudo em áudio (trem lotado, fone, mãos livres) ---------- */
/* Monta uma fila de trechos falados (resumos, questões, flashcards e pegadinhas) e toca em sequência
   pela voz do aparelho. Botões do fone (play/pausa/próxima) funcionam pela Media Session. */
const AU_MODES=[["mix","Mix do dia","resumo, pegadinhas, flashcards e questões"],["res","Resumo falado","o resumo inteiro, seção por seção"],["q","Questões em áudio","enunciado, alternativas, pausa para pensar e resposta"],["fc","Flashcards","conceito, pausa e resposta"],["peg","Pegadinhas","a frase errada da banca e o certo"]];
const AU_NOAUDIO=/tabela|gr[áa]fico|figura|quadro|imagem|texto|trecho|fragmento|linha \d|par[áa]grafo|charge|tirinha/i;
let AU=null;
function auCfg(){S.au=Object.assign({mode:"mix",src:"dia",rate:1,pause:8,timer:0},S.au||{});return S.au;}
function auDayCats(){const a=AG[todayK()];const cs=a?[a[1],a[3],a[4]].filter(c=>c&&CATS[c]):[];return cs.length?[...new Set(cs)]:weakCats(2);}
function auCats(src){
  if(src==="dia") return auDayCats();
  if(src==="fracos") return weakCats(3);
  if(src==="esp") return espCats();
  if(src.startsWith("b:")) return Object.keys(CATS).filter(c=>CATS[c].b===src.slice(2));
  return CATS[src]?[src]:auDayCats();
}
function auItemsRes(cs,maxSec){const out=[];cs.forEach(c=>(RES[c]||[]).slice(0,maxSec||99).forEach(([t,it])=>out.push({k:"Resumo",lb:CATS[c].n+" · "+t,show:[t,it.map(plain).join(" ")],segs:[{t:CATS[c].n+". "+t+". "+it.map(plain).join(" "),w:1500}]})));return out;}
function auItemsQ(cs,n){
  const due=new Set(srsDue()), pool=QI().filter(i=>cs.includes(Q[i].c)&&!AU_NOAUDIO.test(Q[i][1])&&Q[i][1].length<420);
  const ids=shuffle(pool).sort((a,b)=>(due.has(b)?1:0)-(due.has(a)?1:0)).slice(0,n), pz=auCfg().pause*1000;
  return ids.map(i=>{const q=Q[i],o=shuffle([0,1,2,3,4]),ci=o.indexOf(0);
    return {k:"Questão",lb:CATS[q.c].n,qi:i,show:[q[1],o.map((x,p)=>L[p]+") "+q[2][x]).join("  ")],ans:L[ci]+") "+q[2][0],
      segs:[{t:"Questão. "+plain(q[1]),w:500},{t:o.map((x,p)=>"Letra "+L[p]+": "+plain(q[2][x])+".").join(" "),w:pz},{t:"Resposta: letra "+L[ci]+". "+plain(q[2][0])+". "+plain(q[3]),w:2000,rev:1}]};});
}
function auItemsFc(cs,n){const pz=auCfg().pause*1000;return FC.filter(f=>cs.includes(f[0])).sort((a,b)=>(S.fcl[a[1]]||0)-(S.fcl[b[1]]||0)||Math.random()-.5).slice(0,n).map(f=>({k:"Flashcard",lb:CATS[f[0]].n,show:[f[1],f[2]],segs:[{t:plain(f[1]),w:Math.min(pz,6000)},{t:plain(f[2]),w:1500,rev:1}]}));}
function auItemsPeg(cs,n){return shuffle(PEG.filter(p=>cs.includes(p[0]))).slice(0,n).map(p=>({k:"Pegadinha",lb:CATS[p[0]].n,show:[p[2],p[1]+" "+p[3]],segs:[{t:"Pegadinha. A banca pode escrever: "+plain(p[2])+" Errado.",w:2500},{t:"O certo é: "+plain(p[1])+" "+plain(p[3]),w:1500,rev:1}]}));}
function auBuild(){
  const c=auCfg(), cs=auCats(c.src); let it=[];
  if(c.mode==="res") it=auItemsRes(cs);
  else if(c.mode==="q") it=auItemsQ(cs,15);
  else if(c.mode==="fc") it=auItemsFc(cs,25);
  else if(c.mode==="peg") it=auItemsPeg(cs,15);
  else it=[].concat(auItemsRes(cs.slice(0,1),2),auItemsPeg(cs,4),auItemsFc(cs,8),auItemsQ(cs,4));
  return it;
}
/* fala um texto em pedaços curtos (o Chrome corta falas longas) */
function auVoice(){const vs=TTS_OK?speechSynthesis.getVoices():[];return vs.find(v=>/pt[-_]BR/i.test(v.lang))||vs.find(v=>/^pt/i.test(v.lang))||null;}
function auSay(text,run){
  return new Promise(res=>{
    if(!TTS_OK||!text){res();return;}
    const parts=String(text).match(/[^.!?;:]+[.!?;:]?/g)||[text], ch=[];let cur="";
    parts.forEach(p=>{if((cur+p).length>200){if(cur)ch.push(cur);cur=p;}else cur+=p;}); if(cur) ch.push(cur);
    const v=auVoice(); sndDuck(true);
    const next=()=>{if(!AU||AU.run!==run||!ch.length){sndDuck(false);res();return;}
      const u=new SpeechSynthesisUtterance(ch.shift().trim());u.lang="pt-BR";if(v)u.voice=v;u.rate=auCfg().rate;u.onend=next;u.onerror=next;speechSynthesis.speak(u);};
    next();
  });
}
const auWait=(ms,run)=>new Promise(r=>{const t0=Date.now(),tk=()=>{if(!AU||AU.run!==run||Date.now()-t0>=ms){r();return;}AU.tw=setTimeout(tk,Math.min(250,ms));};tk();});
async function auLoop(run){
  while(AU&&AU.run===run&&AU.i<AU.items.length){
    const it=AU.items[AU.i];
    for(;AU.seg<it.segs.length;AU.seg++){
      const s=it.segs[AU.seg]; auDraw();
      await auSay(s.t,run); if(!AU||AU.run!==run) return;
      await auWait(s.w||800,run); if(!AU||AU.run!==run) return;
    }
    AU.i++; AU.seg=0; S.au.n=(S.au.n||0)+1;
  }
  if(AU&&AU.run===run){AU.play=false;auLock(false);auDraw();save();sndMedia();}
}
function auStart(){const it=auBuild();if(!it.length){toast("Nada para tocar","Escolha outros assuntos ou outro modo.");return;}AU={items:it,i:0,seg:0,play:false,run:0};auPlay();}
function auPlay(){
  if(!AU){auStart();return;}
  if(AU.play){auPause();return;}
  if(AU.i>=AU.items.length){AU.i=0;AU.seg=0;}
  AU.play=true; AU.run++; auLock(true); auTimerArm(); auMedia(); auLoop(AU.run); auDraw();
}
function auPause(){if(!AU)return;AU.play=false;AU.run++;clearTimeout(AU.tw);try{speechSynthesis.cancel();}catch(e){}sndDuck(false);auLock(false);auDraw();sndMedia();}
function auSkip(d){if(!AU)return;const was=AU.play;auPause();AU.i=Math.min(AU.items.length-1,Math.max(0,AU.i+d));AU.seg=0;if(was)auPlay();else auDraw();}
/* tela ligada e escura enquanto toca (a voz do aparelho para com a tela apagada) */
let auWL=null;
async function auLock(on){try{if(on&&!auWL&&navigator.wakeLock){auWL=await navigator.wakeLock.request("screen");auWL.addEventListener("release",()=>{auWL=null;});}else if(!on&&auWL){await auWL.release();auWL=null;}}catch(e){auWL=null;}}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&AU&&AU.play)auLock(true);});
/* desligar sozinho */
let auTT=null;
function auTimerArm(){clearTimeout(auTT);const m=auCfg().timer;if(m)auTT=setTimeout(()=>{auPause();sndStop(8000);toast("Áudio pausado","O tempo que você escolheu terminou.");},m*60000);}
function auMedia(){
  if(!("mediaSession" in navigator)||!AU) return;
  if(!AU.play&&SND.k){sndMedia();return;}
  try{const it=AU.items[AU.i]||{};navigator.mediaSession.metadata=new MediaMetadata({title:(it.k||"Estudo")+": "+(it.lb||""),artist:"Estudos Transpetro 2026",album:AU_MODES.find(m=>m[0]===auCfg().mode)[1]});
    navigator.mediaSession.setActionHandler("play",()=>{if(!AU.play)auPlay();});navigator.mediaSession.setActionHandler("pause",auPause);
    navigator.mediaSession.setActionHandler("nexttrack",()=>auSkip(1));navigator.mediaSession.setActionHandler("previoustrack",()=>auSkip(-1));}catch(e){}
}
function auDraw(){
  auMedia(); pocketDraw();
  const box=$("#auNow"); if(!box||current!=="audio") return;
  if(!AU){box.innerHTML="";return;}
  const it=AU.items[AU.i]||AU.items[AU.items.length-1], rev=it.segs[AU.seg]&&it.segs[AU.seg].rev||AU.seg>=it.segs.length;
  box.innerHTML=`<section class="panel stack aunow"><div class="row" style="justify-content:space-between;gap:8px"><span class="tag">${esc(it.k)} · ${Math.min(AU.i+1,AU.items.length)} de ${AU.items.length}</span><span class="muted">${esc(it.lb)}</span></div>
    <p class="auq">${esc(it.show[0])}</p>${it.k==="Questão"?`<p class="muted">${esc(it.show[1])}</p>`:""}
    <p class="aua ${rev?"on":""}">${rev?esc(it.ans||it.show[1]):it.k==="Resumo"?esc(it.show[1]):"…"}</p>
    <div class="track"><div class="fill" style="width:${Math.round(AU.i/AU.items.length*100)}%"></div></div>
    <div class="row auctl"><button class="btn ghost" onclick="auSkip(-1)" aria-label="Anterior">⏮</button><button class="btn aupp" onclick="auPlay()">${AU.play?"Pausar":"Tocar"}</button><button class="btn ghost" onclick="auSkip(1)" aria-label="Próximo">⏭</button></div>
    <button class="btn ghost sm" onclick="pocketOn()">Modo bolso (tela escura)</button></section>`;
}
/* modo bolso: tela preta com dois botões grandes, para não tocar em nada sem querer */
let pocket=false;
function pocketOn(){pocket=true;let el=$("#pocket");if(!el){el=document.createElement("div");el.id="pocket";document.body.appendChild(el);}pocketDraw();}
function pocketOff(){pocket=false;const el=$("#pocket");if(el)el.remove();}
function pocketDraw(){const el=$("#pocket");if(!el||!pocket)return;const it=AU&&AU.items[AU.i];
  el.innerHTML=`<button class="pk1" onclick="auPlay()">${AU&&AU.play?"❚❚  Pausar":"▶  Tocar"}</button><button class="pk2" onclick="auSkip(1)">⏭  Próximo</button>
  <p class="pkt">${it?esc(it.k+" · "+it.lb):""}</p><button class="pkx" onclick="pocketOff()">Sair do modo bolso</button>`;}

/* ---------- 35. v16: sons para concentrar (gerados no próprio app, sem internet) ---------- */
const SNDS=[
 ["brown","Ruído marrom","Grave e uniforme. É o que melhor abafa o ronco do trem, do metrô e do ônibus."],
 ["pink","Ruído rosa","Equilibrado, mais suave que o branco. Bom para ler e fazer questões."],
 ["white","Ruído branco","Mais agudo, como um chiado. Abafa conversas e vozes por perto."],
 ["rain","Chuva","Chuva constante com gotas. Relaxa sem distrair."],
 ["waves","Ondas do mar","Ondas lentas, a cada 8 segundos. Bom para revisar com calma."],
 ["pad","Ambiente lo-fi","Acordes suaves e lentos, sem letra e sem batida forte."],
 ["piano","Piano calmo","Notas soltas de piano com eco, bem espaçadas."]
];
const SND_SR=22050, SND_CACHE={};
let SND={k:null,duck:false};
try{const o=JSON.parse(localStorage.getItem("transpetro26-snd")||"{}");if(o.k)SND.last=o.k;}catch(e){}
function sndSave(){try{localStorage.setItem("transpetro26-snd",JSON.stringify({k:SND.k||SND.last}));}catch(e){}}
function wavBlob(chs,sr){
  const n=chs[0].length,nc=chs.length,buf=new ArrayBuffer(44+n*nc*2),v=new DataView(buf),w=(o,s)=>{for(let i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i));};
  w(0,"RIFF");v.setUint32(4,36+n*nc*2,true);w(8,"WAVE");w(12,"fmt ");v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,nc,true);
  v.setUint32(24,sr,true);v.setUint32(28,sr*nc*2,true);v.setUint16(32,nc*2,true);v.setUint16(34,16,true);w(36,"data");v.setUint32(40,n*nc*2,true);
  let o=44;for(let i=0;i<n;i++)for(let c=0;c<nc;c++){const x=Math.max(-1,Math.min(1,chs[c][i]));v.setInt16(o,x<0?x*32768:x*32767,true);o+=2;}
  return new Blob([buf],{type:"audio/wav"});
}
/* ruídos: gera um pouco a mais e funde o fim no começo, para o loop não ter emenda */
function noiseCh(kind,n){
  const out=new Float32Array(n);let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0,last=0;
  for(let i=0;i<n;i++){const wn=Math.random()*2-1;
    if(kind==="white") out[i]=wn*.22;
    else if(kind==="pink"){b0=.99886*b0+wn*.0555179;b1=.99332*b1+wn*.0750759;b2=.969*b2+wn*.153852;b3=.8665*b3+wn*.3104856;b4=.55*b4+wn*.5329522;b5=-.7616*b5-wn*.016898;out[i]=(b0+b1+b2+b3+b4+b5+b6+wn*.5362)*.06;b6=wn*.115926;}
    else {last=(last+.02*wn)/1.02;out[i]=last*2.8;}
  }
  return out;
}
function loopFix(x,n,f){const o=new Float32Array(n);o.set(x.subarray(0,n));for(let i=0;i<f;i++){const t=i/f;o[i]=x[i]*Math.sqrt(t)+x[n+i]*Math.sqrt(1-t);}return o;}
function sndNoise(kind,sec){const n=SND_SR*sec,f=SND_SR;return [0,1].map(()=>loopFix(noiseCh(kind,n+f),n,f));}
function sndRain(sec){
  const n=SND_SR*sec,f=SND_SR,ch=[0,1].map(()=>{const p=noiseCh("pink",n+f),b=noiseCh("brown",n+f),o=new Float32Array(n+f);let lp=0;for(let i=0;i<n+f;i++){lp+=.08*(p[i]-lp);o[i]=(p[i]-lp)*1.3+b[i]*.12;}return o;});
  const drops=sec*28;
  for(let d=0;d<drops;d++){const at=Math.floor(Math.random()*(n-800)),len=40+Math.floor(Math.random()*220),amp=.05+Math.random()*.18,pan=Math.random();
    for(let i=0;i<len;i++){const s=(Math.random()*2-1)*amp*Math.exp(-i/(len/4));ch[0][at+i]+=s*(1-pan);ch[1][at+i]+=s*pan;}}
  return ch.map(x=>loopFix(x,n,f));
}
function sndWaves(sec){
  const n=SND_SR*sec;return [0,1].map(c=>{const b=noiseCh("brown",n+SND_SR),p=noiseCh("pink",n+SND_SR),x=loopFix(b,n,SND_SR),y=loopFix(p,n,SND_SR),o=new Float32Array(n);
    for(let i=0;i<n;i++){const t=i/SND_SR+c*.35,e=Math.pow(.5-.5*Math.cos(2*Math.PI*t/8),1.6);o[i]=x[i]*(.35+.9*e)+y[i]*(.15+.9*e*e);}return o;});
}
const nf=m=>440*Math.pow(2,(m-69)/12);
async function sndPad(sec){
  const oc=new OfflineAudioContext(2,SND_SR*sec,SND_SR), lp=oc.createBiquadFilter();lp.type="lowpass";lp.frequency.value=950;lp.Q.value=.3;
  const master=oc.createGain();master.gain.value=.16;lp.connect(master);master.connect(oc.destination);
  const CH=[[57,60,64,67],[53,57,60,64],[48,52,55,59],[55,59,62,64]], L8=sec/4;
  const play=(notes,t0,t1,fadeIn)=>notes.forEach((m,j)=>[-4,4].forEach(dt=>{const o=oc.createOscillator(),g=oc.createGain(),pn=oc.createStereoPanner?oc.createStereoPanner():null;
    o.type="triangle";o.frequency.value=nf(m);o.detune.value=dt;g.gain.setValueAtTime(fadeIn?0:.22,Math.max(0,t0));if(fadeIn)g.gain.linearRampToValueAtTime(.22,t0+2.5);
    g.gain.setValueAtTime(.22,t1-2.5);g.gain.linearRampToValueAtTime(0,t1);o.connect(g);if(pn){pn.pan.value=(j-1.5)/3;g.connect(pn);pn.connect(lp);}else g.connect(lp);o.start(Math.max(0,t0));o.stop(t1);}));
  CH.forEach((c,i)=>{play(c,i*L8,(i+1)*L8+2.5,true);const bo=oc.createOscillator(),bg=oc.createGain();bo.type="sine";bo.frequency.value=nf(c[0]-12);bg.gain.setValueAtTime(0,i*L8);bg.gain.linearRampToValueAtTime(.35,i*L8+1.5);bg.gain.setValueAtTime(.35,(i+1)*L8-1);bg.gain.linearRampToValueAtTime(0,(i+1)*L8+1);bo.connect(bg);bg.connect(master);bo.start(i*L8);bo.stop((i+1)*L8+1.2);});
  play(CH[3],-L8,2.5,false);
  const buf=await oc.startRendering(), hiss=[noiseCh("pink",buf.length),noiseCh("pink",buf.length)];
  return [0,1].map(c=>{const x=buf.getChannelData(c);for(let i=0;i<x.length;i++)x[i]+=hiss[c][i]*.025;return x;});
}
async function sndPiano(sec){
  const oc=new OfflineAudioContext(2,SND_SR*sec,SND_SR), master=oc.createGain();master.gain.value=.5;
  const dl=oc.createDelay(1),fb=oc.createGain(),wet=oc.createGain();dl.delayTime.value=.42;fb.gain.value=.38;wet.gain.value=.35;
  master.connect(oc.destination);master.connect(dl);dl.connect(fb);fb.connect(dl);dl.connect(wet);wet.connect(oc.destination);
  const sc=[57,60,62,64,67,69,72,74,76], seq=[];let t=.3;
  while(t<sec-4){seq.push([t,sc[Math.floor(Math.random()*sc.length)]]);if(Math.random()<.3)seq.push([t+.02,sc[Math.floor(Math.random()*4)]-12]);t+=.7+Math.random()*1.6;}
  seq.forEach(([t0,m])=>[1,2,3].forEach((h,k)=>{const o=oc.createOscillator(),g=oc.createGain();o.type="sine";o.frequency.value=nf(m)*h;const a=[.28,.08,.03][k];
    g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(a,t0+.01);g.gain.exponentialRampToValueAtTime(.0005,t0+2.8/h);o.connect(g);g.connect(master);o.start(t0);o.stop(t0+3);}));
  const buf=await oc.startRendering();return [0,1].map(c=>buf.getChannelData(c));
}
async function sndUrl(k){
  if(SND_CACHE[k]) return SND_CACHE[k];
  await new Promise(r=>setTimeout(r,20));
  const ch=k==="rain"?sndRain(20):k==="waves"?sndWaves(24):k==="pad"?await sndPad(32):k==="piano"?await sndPiano(40):sndNoise(k,20);
  /* mesmo volume percebido para todos os sons */
  let sq=0,pk=0,n=0;ch.forEach(x=>{for(let i=0;i<x.length;i+=3){sq+=x[i]*x[i];n++;const a=Math.abs(x[i]);if(a>pk)pk=a;}});
  const g=Math.min(.09/Math.sqrt(sq/n||1e-9),.92/(pk||1));ch.forEach(x=>{for(let i=0;i<x.length;i++)x[i]*=g;});
  return SND_CACHE[k]=URL.createObjectURL(wavBlob(ch,SND_SR));
}
function sndEl(){let el=$("#sndEl");if(!el){el=document.createElement("audio");el.id="sndEl";el.loop=true;el.preload="auto";el.setAttribute("playsinline","");document.body.appendChild(el);
  /* pausa pelo fone, pela central de mídia ou por uma ligação: a tela acompanha */
  el.addEventListener("pause",()=>{if(SND.k&&!SND.fading&&!SND.busy){SND.paused=SND.k;SND.k=null;sndDrawAll();}});
  el.addEventListener("play",()=>{if(!SND.k&&SND.paused){SND.k=SND.paused;SND.paused=null;sndDrawAll();}});}return el;}
/* o volume é o do aparelho (botões do celular); o app só abaixa o som enquanto a voz fala */
let sndFadeT=null;
function sndVolTo(to,ms){const el=$("#sndEl");if(!el)return Promise.resolve();clearInterval(sndFadeT);const from=el.volume,t0=Date.now();
  return new Promise(res=>{if(!ms){try{el.volume=to;}catch(e){}res();return;}sndFadeT=setInterval(()=>{const k=Math.min(1,(Date.now()-t0)/ms);try{el.volume=from+(to-from)*k;}catch(e){}if(k>=1){clearInterval(sndFadeT);res();}},50);});}
function sndVolApply(){sndVolTo(SND.duck?.4:1,300);}
function sndDuck(on){SND.duck=on;sndVolApply();}
async function sndPlay(k){
  if(SND.k===k){sndStop();return;}
  SND.k=k; SND.busy=k; sndDrawAll();
  try{const url=await sndUrl(k); if(SND.k!==k) return; const el=sndEl(); el.src=url; SND.paused=null; try{el.volume=0;}catch(e){} await el.play(); sndVolTo(SND.duck?.4:1,1500); sndMedia();
  }catch(e){SND.k=null;toast("Não deu para tocar","Toque de novo no som. Se continuar, confira se o aparelho não está no modo silencioso.");}
  SND.busy=null; SND.last=k; sndSave(); sndDrawAll(); auTimerArm();
}
function sndStop(fade){const el=$("#sndEl");SND.paused=null;
  if(el&&fade&&!el.paused){SND.fading=true;sndVolTo(0,fade).then(()=>{if(!SND.k)el.pause();SND.fading=false;});}else if(el){SND.fading=true;el.pause();SND.fading=false;}
  SND.k=null;sndSave();sndDrawAll();}
/* botões do fone e da tela bloqueada também controlam o som quando a voz não está tocando */
function sndMedia(){
  if(!("mediaSession" in navigator)||(AU&&AU.play)||!SND.k) return;
  try{navigator.mediaSession.metadata=new MediaMetadata({title:SNDS.find(s=>s[0]===SND.k)[1],artist:"Sons para estudar · Transpetro 2026"});
    navigator.mediaSession.setActionHandler("play",()=>{const el=sndEl();el.play().catch(()=>{});});
    navigator.mediaSession.setActionHandler("pause",()=>{const el=$("#sndEl");if(el)el.pause();});
    navigator.mediaSession.setActionHandler("nexttrack",()=>{const i=SNDS.findIndex(s=>s[0]===(SND.k||SND.last));sndPlay(SNDS[(i+1)%SNDS.length][0]);});
    navigator.mediaSession.setActionHandler("previoustrack",null);}catch(e){}
}
function sndDrawAll(){
  document.querySelectorAll(".sndbtn").forEach(b=>{const on=b.dataset.k===SND.k;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on);const st=b.querySelector(".sst");if(st)st.textContent=SND.busy===b.dataset.k?"preparando…":on?"tocando · toque para parar":"";});
  sndBar();
}
/* barrinha do som nas outras telas */
function sndBar(){
  let el=$("#sndBar"); const show=SND.k&&current!=="audio";
  if(!show){if(el)el.remove();return;}
  if(!el){el=document.createElement("div");el.id="sndBar";document.body.appendChild(el);}
  el.innerHTML=`<button class="sbname" onclick="go('audio')">♪ ${esc(SNDS.find(s=>s[0]===SND.k)[1])}</button><button class="sbx" onclick="sndStop()" aria-label="Parar o som">Parar</button>`;
}
const _goSnd=go; go=function(v){const r=_goSnd(v);sndBar();return r;};

/* ---------- 36. v16: tela Áudio ---------- */
function auSrcSel(id,v){const bl=Object.keys(BLOCKS);return `<select id="${id}"><option value="dia" ${v==="dia"?"selected":""}>Assuntos de hoje (${esc(auDayCats().map(c=>CATS[c].n).join(", "))})</option><option value="fracos" ${v==="fracos"?"selected":""}>Meus 3 assuntos mais fracos</option><option value="esp" ${v==="esp"?"selected":""}>Todas as específicas</option>${bl.map(b=>`<option value="b:${b}" ${v==="b:"+b?"selected":""}>${esc(BLOCKS[b])}</option>`).join("")}${Object.keys(CATS).map(c=>`<option value="${c}" ${v===c?"selected":""}>${esc(CATS[c].n)}</option>`).join("")}</select>`;}
function vAudio(){
  const c=auCfg();
  $("#view").innerHTML=segNav("audio",SEG_EST)+`<div class="stack"><h2>Áudio</h2><p class="muted">Para estudar no trem, no ônibus ou andando, de fone e sem mexer no celular. Escolha o que ouvir, toque em Tocar e guarde o celular. Os botões do fone pausam e pulam.</p></div>
  <section class="panel stack"><h3>Estudo em áudio</h3>
    ${TTS_OK?`<div class="aumodes" role="radiogroup">${AU_MODES.map(([k,t,d])=>`<label class="aumode ${c.mode===k?"on":""}"><input type="radio" name="auMode" value="${k}" ${c.mode===k?"checked":""}><b>${t}</b><span class="muted">${d}</span></label>`).join("")}</div>
    <div class="cfgrow"><label for="auSrc">Assuntos</label>${auSrcSel("auSrc",c.src)}</div>
    <div class="cfgrow"><label for="auRate">Velocidade da voz</label><select id="auRate">${[[.85,"Devagar"],[1,"Normal"],[1.15,"Um pouco rápida"],[1.3,"Rápida"],[1.5,"Muito rápida"]].map(([v,t])=>`<option value="${v}" ${v===c.rate?"selected":""}>${t}</option>`).join("")}</select></div>
    <div class="cfgrow"><label for="auPause">Tempo para pensar</label><select id="auPause">${[5,8,12,20].map(v=>`<option value="${v}" ${v===c.pause?"selected":""}>${v} segundos</option>`).join("")}</select></div>
    <div class="cfgrow"><label for="auTimer">Parar sozinho depois de</label><select id="auTimer">${[[0,"Não parar"],[15,"15 min"],[30,"30 min"],[45,"45 min"],[60,"1 hora"],[90,"1h30"]].map(([v,t])=>`<option value="${v}" ${v===c.timer?"selected":""}>${t}</option>`).join("")}</select></div>
    <button class="btn" onclick="auPause();AU=null;auStart()">${AU?"Montar de novo e tocar":"Tocar"}</button>
    <p class="muted">A voz é a do próprio aparelho e funciona sem internet. Com a tela apagada, o celular costuma calar a voz: enquanto toca, o app mantém a tela acesa, e o <b>Modo bolso</b> deixa tudo escuro com dois botões grandes. As questões em áudio não contam no seu desempenho; as que você errar, refaça depois em Praticar.</p>`
    :`<p>Este navegador não tem leitura em voz alta. Tente pelo Chrome (Android) ou pelo Safari (iPhone).</p>`}</section>
  <div id="auNow"></div>
  <section class="panel stack"><h3>Sons para concentrar</h3>
    <p class="muted">Gerados aqui mesmo, sem internet e sem gastar dados. Tocam junto com a voz (que abaixa o som enquanto fala) e continuam nas outras telas, por exemplo enquanto você faz questões.</p>
    <div class="sndgrid">${SNDS.map(([k,t,d])=>`<button class="sndbtn ${SND.k===k?"on":""}" data-k="${k}" aria-pressed="${SND.k===k}" onclick="sndPlay('${k}')"><b>${t}</b><span class="muted">${d}</span><span class="sst"></span></button>`).join("")}</div>
    <p class="muted">O volume é o do celular: use os botões de volume do aparelho. Enquanto a voz do estudo fala, o som abaixa sozinho. Pelo fone ou pela tela bloqueada dá para pausar e, no botão de próxima, trocar de som.</p>
    <details class="rev"><summary><span class="mark">♪</span><span>Qual escolher e outras opções de música</span></summary><div class="stack" style="margin-top:8px">
      <p><b>No trem ou metrô:</b> ruído marrom, porque ele cobre o ronco grave do vagão. Volume baixo a médio: o som serve para abafar o ambiente, não para competir com ele.</p>
      <p><b>Para ler resumo ou fazer questões:</b> ruído rosa, chuva ou ambiente lo-fi. <b>Evite música com letra</b>: palavras cantadas disputam atenção com a leitura e atrapalham a memorização.</p>
      <p><b>Para ouvir o estudo em áudio:</b> deixe o volume do celular num nível em que a voz fique clara; o som de fundo já toca mais baixo que ela.</p>
      <p><b>Se preferir música de verdade</b> (precisa de internet): lo-fi sem letra, piano calmo, trilhas instrumentais ou barroco lento.</p>
      <div class="row" style="gap:6px;flex-wrap:wrap">
        <a class="btn ghost sm" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=lofi+hip+hop+radio+beats+to+study">Lo-fi para estudar (YouTube)</a>
        <a class="btn ghost sm" target="_blank" rel="noopener" href="https://open.spotify.com/search/foco%20profundo">Foco profundo (Spotify)</a>
        <a class="btn ghost sm" target="_blank" rel="noopener" href="https://open.spotify.com/search/peaceful%20piano">Peaceful Piano (Spotify)</a>
        <a class="btn ghost sm" target="_blank" rel="noopener" href="https://mynoise.net/noiseMachines.php">myNoise (sons ajustáveis)</a>
        <a class="btn ghost sm" target="_blank" rel="noopener" href="https://www.noisli.com/">Noisli</a></div>
      <p class="muted">Para música de outro app tocar junto com a voz do estudo, abra a música primeiro e depois volte aqui. Alguns celulares pausam um áudio quando o outro começa.</p></div></details></section>`;
  document.querySelectorAll("input[name=auMode]").forEach(r=>r.onchange=()=>{c.mode=r.value;save();document.querySelectorAll(".aumode").forEach(l=>l.classList.toggle("on",l.querySelector("input").checked));});
  const sv=(id,f,num)=>{const e=$("#"+id);if(e)e.onchange=()=>{c[f]=num?+e.value:e.value;save();if(f==="timer")auTimerArm();};};
  sv("auSrc","src"); sv("auRate","rate",1); sv("auPause","pause",1); sv("auTimer","timer",1);
  auDraw(); sndDrawAll();
}
VIEWS.audio=()=>vAudio(); TABOF.audio="cont";
SEG_EST.push(["audio","Áudio"]);
/* atalhos: card em Jogos e botão de fone no cabeçalho */
const _vJogos16=vJogos;
vJogos=function(){_vJogos16();const g=$("#view .grid2");if(!g||!TTS_OK)return;
  g.insertAdjacentHTML("beforeend",`<div class="panel mode"><span class="tag">Mãos livres</span><h3>Estudo em áudio</h3><p class="muted">Resumos, questões, flashcards e pegadinhas lidos em voz alta, com pausa para pensar. Para o trem e o ônibus, de fone.</p><button class="btn" onclick="go('audio')">Ouvir</button>${S.au&&S.au.n?`<span class="muted num">${S.au.n} trechos ouvidos</span>`:""}</div>`);};
(function(){
  const g=$("#cfgBtn"); if(!g) return;
  const b=document.createElement("button"); b.className="themebtn cfgbtn"; b.id="audBtn"; b.type="button"; b.setAttribute("aria-label","Áudio: estudo falado e sons para concentrar");
  b.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>';
  b.onclick=()=>go("audio"); g.before(b);
})();
VIEWS.afc=()=>go("audio");

(function(){const st=document.createElement("style");st.textContent=`
.aumodes{display:grid;grid-template-columns:1fr;gap:6px}
@media (min-width:720px){.aumodes{grid-template-columns:1fr 1fr}}
.aumode{display:flex;flex-direction:column;gap:2px;border:1.5px solid var(--line);border-radius:12px;padding:10px 12px;cursor:pointer}
.aumode input{position:absolute;opacity:0;pointer-events:none}
.aumode.on{border-color:var(--petrol);background:var(--petrol-soft)}
.aumode:focus-within{outline:2px solid var(--petrol)}
.aunow{gap:10px}
.auq{font:600 18px/1.4 var(--f-body);margin:0}
.aua{margin:0;color:var(--muted)}.aua.on{color:var(--ink);font-weight:600}
.auctl{justify-content:center;gap:10px}.auctl .btn{min-width:56px}.aupp{min-width:120px!important}
.sndgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
@media (min-width:720px){.sndgrid{grid-template-columns:repeat(3,1fr)}}
.sndbtn{all:unset;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;gap:3px;border:1.5px solid var(--line);border-radius:12px;padding:10px 12px;background:var(--surface);min-width:0}
.sndbtn span{font-size:13px;line-height:1.35}
.sndbtn.on{border-color:var(--petrol);background:var(--petrol-soft)}
.sndbtn:focus-visible{outline:2px solid var(--petrol)}
.sst{color:var(--petrol);font-weight:600}
#sndBar{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(72px + env(safe-area-inset-bottom));z-index:40;display:flex;gap:2px;background:var(--petrol);color:#fff;border-radius:999px;padding:4px;box-shadow:0 4px 14px rgba(0,0,0,.2);max-width:calc(100vw - 32px)}
#sndBar button{all:unset;cursor:pointer;padding:6px 12px;border-radius:999px;font:600 13px var(--f-body);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#sndBar .sbx{background:rgba(255,255,255,.18)}
@media (min-width:1100px){#sndBar{bottom:20px}}
#pocket{position:fixed;inset:0;z-index:100;background:#000;display:flex;flex-direction:column;gap:12px;padding:24px 16px calc(24px + env(safe-area-inset-bottom));box-sizing:border-box}
#pocket button{all:unset;box-sizing:border-box;cursor:pointer;text-align:center;border-radius:20px;color:#bbb;font:600 22px var(--f-body)}
#pocket .pk1{flex:2;background:#111;border:1px solid #222}#pocket .pk2{flex:1;background:#0b0b0b;border:1px solid #1d1d1d}
#pocket .pkt{color:#555;text-align:center;margin:0;font-size:13px}#pocket .pkx{flex:none;font-size:14px;color:#666;padding:12px}
`;document.head.appendChild(st);})();
