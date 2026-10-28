/* O app de carreira mudou para pedro1105.github.io/carreira-dados/. Este service worker apaga o antigo. */
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("carreira-")).map(k=>caches.delete(k)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate(c.url))));});
