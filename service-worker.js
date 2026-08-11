const CACHE_NAME = "friends-dictionary-v2";

const FILES_TO_CACHE = [
  "/friends-dictionary/",
  "/friends-dictionary/index.html",
  "/friends-dictionary/style.css",
  "/friends-dictionary/script.js",
  "/friends-dictionary/manifest.json",
  "/friends-dictionary/images/icon-192.png",
  "/friends-dictionary/images/icon-512.png"
];

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );

});


self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys.map(key => {

          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }

        })

      );

    }).then(() => self.clients.claim())

  );

});


self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(cachedResponse => {

        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request);

      })

  );

});
