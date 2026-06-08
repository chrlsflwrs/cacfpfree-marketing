// Bumped from v1 -> v2. The version bump changes this file's bytes, so browsers
// running the old worker pick this one up; `activate` then deletes the stale v1
// cache that was serving outdated HTML.
const CACHE_NAME = 'cacfpfree-v2';

// Only the home page is precached, purely as an offline navigation fallback.
// HTML pages are intentionally NOT served cache-first: every deploy emits new
// content-hashed CSS/JS filenames, so a stale cached page would request an old
// asset hash that no longer exists and render completely unstyled. Navigations
// always go to the network first (see the fetch handler below).
const OFFLINE_FALLBACK = '/';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.add(OFFLINE_FALLBACK))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  // Navigations (HTML documents): network-first. This guarantees the page always
  // references the current deploy's hashed assets. We runtime-cache the latest
  // good response so a previously visited page is still available offline, and
  // fall back to the cached home page when nothing else is available.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match(OFFLINE_FALLBACK))
        )
    );
    return;
  }

  // Content-hashed static assets (/_next/static/...) are immutable: the URL
  // changes whenever the content changes, so cache-first is safe and fast.
  // Runtime-cache them on first fetch.
  if (request.url.includes('/_next/static/')) {
    event.respondWith(
      caches.match(request).then((cached) => {
        return (
          cached ||
          fetch(request).then((response) => {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            return response;
          })
        );
      })
    );
    return;
  }

  // Everything else: network-first, falling back to any cached copy when offline.
  event.respondWith(fetch(request).catch(() => caches.match(request)));
});
