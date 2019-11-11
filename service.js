const version = '1.0.0';

self.addEventListener('install', event => {
  console.log('Log from event "INSTALL" in service worker version ' + version);
  return self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Log from event "ACTIVATE" in service worker version ' + version);
return self.clients.claim();
});