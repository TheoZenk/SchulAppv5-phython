const CACHE = "schulapp-v51";
self.addEventListener("install", e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["index.html","style.css?v=51","app.js?v=51","manifest.json"])));
});
self.addEventListener("activate",e=>e.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
    .then(()=>self.clients.claim())
));
self.addEventListener("fetch", e=>{
  e.respondWith(fetch(e.request).then(response=>{
    const copy=response.clone();
    caches.open(CACHE).then(cache=>cache.put(e.request,copy));
    return response;
  }).catch(()=>caches.match(e.request)));
});
