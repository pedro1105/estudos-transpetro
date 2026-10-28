const C="transpetro-v20";
const FILES=["./","index.html","app.js","manifest.json","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C&&k!=="tp26-rem").map(k=>caches.delete(k)))));self.clients.claim();});
/* arquivos do próprio app: abre na hora pelo cache e atualiza em segundo plano (vale na próxima abertura);
   o resto (Supabase etc.) vai direto para a rede */
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin) return;
  e.respondWith(caches.open(C).then(c=>c.match(e.request,{ignoreSearch:true}).then(m=>{
    const net=fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r;});
    if(m){e.waitUntil(net.catch(()=>{}));return m;}
    return net.catch(()=>c.match("index.html"));
  })));
});
/* lembrete diário com o app fechado (Android, app instalado) */
const dk=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
async function remind(){
  const c=await caches.open("tp26-rem"); const r=await c.match("rem.json"); if(!r) return;
  const o=await r.json(); if(!o.on) return;
  const now=new Date(), k=dk(now); if(o.shown===k) return;
  const [h,m]=String(o.h||"19:00").split(":").map(Number); if(now.getHours()*60+now.getMinutes()<h*60+m) return;
  const left=o.day===k?o.left:null;
  await self.registration.showNotification("Hora de estudar · Transpetro 2026",{body:left===0?"Checklist de hoje concluído. Que tal o desafio do dia?":(left?left+" itens do checklist de hoje em aberto":"Abra o app para ver o checklist de hoje")+(o.due?" e "+o.due+" questões para revisar.":"."),icon:"icons/icon-192.png",badge:"icons/icon-192.png",tag:"tp26-rem"});
  o.shown=k; await c.put("rem.json",new Response(JSON.stringify(o)));
}
self.addEventListener("periodicsync",e=>{if(e.tag==="tp26-rem") e.waitUntil(remind());});
/* push: avisos agendados pelo servidor (Supabase) com o app fechado */
self.addEventListener("push",e=>{let d={};try{d=e.data.json();}catch(x){d={title:"Estudos Transpetro",body:e.data?e.data.text():""};}
  e.waitUntil(self.registration.showNotification(d.title||"Estudos Transpetro",{body:d.body||"",icon:"icons/icon-192.png",badge:"icons/icon-192.png",tag:d.tag||"tp26-push",data:{url:d.url||"./"}}));});
self.addEventListener("notificationclick",e=>{e.notification.close();const u=(e.notification.data&&e.notification.data.url)||"./";
  e.waitUntil(clients.matchAll({type:"window"}).then(ws=>{for(const w of ws){if("focus" in w){if(u!=="./"&&"navigate" in w)return w.navigate(u).then(x=>x&&x.focus());return w.focus();}}return clients.openWindow(u);}));});
