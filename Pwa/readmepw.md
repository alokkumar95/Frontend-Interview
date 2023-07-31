# PWA Tutorials

## Installability

For a Web app to be PWA, the minimum requirement is that it should be installable

## The Web Manifest
1. It is a json file.
2. It tells the browser the PWA should appear and behave on the device.
3. For a PWA to be installable, it should have a manifect.
4. HTTPS - For a PWA to be installable, it must be served over HTTPS(this not required for l ocalhost).


The maifest is included using <link> element in the app's HTML

`<!doctype html>
<html lang="en">
  <head>
    <link rel="manifest" href="manifest.json" />
    <!-- ... -->
  </head>
  <body></body>
</html>
`
> If the web app have more than one page, every page must reference the manifest in this way.


## Service Worker
1. PWA to be installable, it must include a service worker with a fetch event handler that provides a basic offline experience.


## Summary  - Minimum requirements for PWA to be installable
1. It must have manifest json file.
2. It should be served on HTTPS server.
3. It must include a service worker with a fetch event handler.


### Service Worker in Detail - Heart of PWA

## What is service worker
1. Service worker basically acts as proxy servers that sits between the web application, the browser, and the network(when available).

## Lifecycle of a worker
1. Registration - In this phase Browser recognized service worker.
2. Installation - Service worker is installed, but doesn't actually control anything on the page yet. It is a phase to cache assets for offline use.
3. Activation - Service worker installed and activated. Good place to manage old cached assets and update service worker.
4. Full Page control - the service worker has been updated and has full control over any pages that fall under its scope.


