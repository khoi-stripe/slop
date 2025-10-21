self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Network-first; fallback to cache if needed (no precache here)
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});


