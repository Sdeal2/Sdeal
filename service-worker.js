self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  e.respondWith(
    fetch(e.request).catch(function () {
      return new Response('इंटरनेट नहीं है। कृपया कनेक्शन चेक करें।', {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    })
  );
});
