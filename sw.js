const CACHE='sdh-offline-v9';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./sw.js'];
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    for(const url of ASSETS){try{await cache.add(url)}catch(e){}}
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  event.respondWith((async()=>{
    const cached=await caches.match(event.request);
    if(cached) return cached;
    try{
      const response=await fetch(event.request);
      if(response && response.ok){
        const copy=response.clone();
        caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});
      }
      return response;
    }catch(e){
      if(event.request.mode==='navigate') return caches.match('./index.html');
      return caches.match('./index.html');
    }
  })());
});
