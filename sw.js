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
