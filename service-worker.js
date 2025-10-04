const CACHE_NAME = 'cedeclara-v1.0.0';

const CACHE_FILES = [
  '/pwa/cedeclara/develop/',
  //'/pwa/cedeclara/develop/index.html',
  '/pwa/cedeclara/develop/style.css',
  '/pwa/cedeclara/develop/js/codebehind.js',
  '/pwa/cedeclara/develop/webcomponents/navigators/sitenavigator.js',
  '/pwa/cedeclara/develop/js/pkg/sn_viewmodel_cedeclara.js',
  '/pwa/cedeclara/develop/js/pkg/sn_viewmodel_cedeclara_bg.wasm',
  // ...weitere wichtige Dateien
];

self.addEventListener('install', event => {
  // Service Worker wird installiert
  console.log('Service Worker installiert');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_FILES))
  );
  self.skipWaiting();
});

/**
 * @summary
 * We check if a new version is availiable.
 * If yes, we must actualize the cache.
 */
self.addEventListener('activate', event => {
  // Service Worker ist aktiv
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  console.log('Service Worker aktiviert');
});


///ToDo: Vor dem ausliefern wieder aktivieren und testen.
/*
self.addEventListener('fetch', event => {
  //Here we decide if cached data is uses or need to connect to the internet.
  event.respondWith(
    caches.match(event.request).then(response => {
      //If something is in the cache, then load from there.
      if(response){
        return response;
      }
      return fetch(event.request);
    })
  );
});
*/