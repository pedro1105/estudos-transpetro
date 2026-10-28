const C="carreira-v3";
const FILES=["./","index.html","manifest.json","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:"reload"})))));self.skipWaiting();});
/* só apaga caches deste app; os da Transpetro, no mesmo site, ficam */
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("carreira-")&&k!==C).map(k=>caches.delete(k)))));self.clients.claim();});
/* abre na hora pelo cache e atualiza em segundo plano; o resto (Supabase etc.) vai direto para a rede */
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET"||u.origin!==location.origin||!u.pathname.includes("/carreira/")) return;
  e.respondWith(caches.open(C).then(c=>c.match(e.request,{ignoreSearch:true}).then(m=>{
    const net=fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r;});
    if(m){e.waitUntil(net.catch(()=>{}));return m;}
    return net.catch(()=>c.match("index.html"));
  })));
});
