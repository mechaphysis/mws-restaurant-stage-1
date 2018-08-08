// This is the functionality for the service worker

self.addEventListener('install', function(evt) {
  evt.waitUntil(
    caches.open('restaurantsApp').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/data/restaurants.json',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/dbhelper.js'
      ])
    })
  )
});

/* For proper functionality we need to add a fetch event
 * this will retrieve our saved sources in the cache and match them
 * with their corresponding request. This way the user will have the
 * same experience either pffline or online
 * This fetch basic function comes from:
 * https://developers.google.com/web/fundamentals/primers/service-workers/
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
