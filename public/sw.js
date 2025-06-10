const urlsToCache = [
  "/",
  "/manifest.webmanifest",
  ...[32, 64, 128, 192, 256, 512].map((size) =>
    `/api/favicon?imageUrl=https://grupomedtech.com.br/favicon.ico&size=${size}`)
]

self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json()
    const { title, ...rest } = data
    const options = {
      ...rest,
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2',
      },
    }
    event.waitUntil(self.registration.showNotification(title, options))
  }
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  event.waitUntil(clients.openWindow('https://grupomedtech.com.br/'))
})