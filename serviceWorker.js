const staticDevTT = "UPMH"
const assets = [
  "index.html",
  "css/style.css",
  "js/jquery.js",
  "img/Fondo_chido.png",
  "img/Nube_chida.png",
  "img/Obst_1.png",
  "img/Obst_2.png",
  "img/Personaje_chido.png",
  "img/Suelo_chido2.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevTT).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })