var REVELATION_CACHE = 'OBS_2019_12_14_13_45';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(REVELATION_CACHE).then(function (cache) {
      return cache.addAll([
        /*   CUIDADO COM A QUANTIDADE DE ARQUIVOS QUE VOCÊ CACHEIA
             SE UM ARQUIVO FALHAR, VAI TER QUE CACHEAR TUDO DE NOVO
        */
            '/',
            '/index.html',
            '/index.js',
            '/style.css',            
            //'/service-worker.js',
            '/manifest.json',
            '/favicon.ico',
            '/assets/icons/icon-192x192.png', 
            '/assets/icons/icon-512x512.png', 
            
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(REVELATION_CACHE) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});