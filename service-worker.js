self.addEventListener('install', event => {
  // Service Worker wird installiert
  console.log('Service Worker installiert');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Service Worker ist aktiv
  console.log('Service Worker aktiviert');
});

/*
self.addEventListener('fetch', event => {
  // Hier können Requests abgefangen und gecached werden
  // Für den Anfang: Standardverhalten
});
*/