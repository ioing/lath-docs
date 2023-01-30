self.importScripts('cache.js');

// Files to cache
const cacheName = 'Lath-1-v75';
const contentToCache = [
  ...cacheFiles
];

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (name) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
          return name === cacheName ? false : true
        }).map(function (cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Installing Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    self.skipWaiting()
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    if (!cache) return;
    await cache.addAll(contentToCache);
  })());
  setTimeout(() => {
    self.clients.matchAll({ includeUncontrolled: true, type: 'window' }).then(clients => {
      let hasFocused = false;
      clients.forEach(client => {
        if (client.focused) {
          hasFocused = true;
        }
      });
      if (!hasFocused) {
        self.registration.unregister();
      }
    });
  }, 30 * 24 * 60 * 60 * 1000); // 30 days
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});