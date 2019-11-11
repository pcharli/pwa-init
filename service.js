const version = '1.0.0';

self.addEventListener('install', event => {
  console.log('Log from event "INSTALL" in service worker version ' + version);
  return self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Log from event "ACTIVATE" in service worker version ' + version);
return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // C'est là que la magie opère, Noël !
  //f etch écoute tout ce qui passen entre le navigateur et le serveur. Ca déclenche la possibilité d'installation sur mobile Android
});	

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "index.html"
  },
  {
    "url": "install.js"
  },
  {
    "url" : "manifest.json"
  },
  {
    "url": "icon-96-96.png"
  },
  {
    "url": "main.js"
  },
  {
    "url": "main.css"
  },
 /* {
    "url": "https://api.irail.be/stations/?format=json"
  },*/
  {
      "url" : "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
  }
]);
} //if