const C="transpetro-v14";
const FILES=["./","index.html","manifest.json","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C&&k!=="tp26-rem").map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));}return r;}).catch(()=>caches.match(e.request).then(m=>m||caches.match("index.html"))));
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
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(clients.matchAll({type:"window"}).then(ws=>{for(const w of ws){if("focus" in w)return w.focus();}return clients.openWindow("./");}));});
