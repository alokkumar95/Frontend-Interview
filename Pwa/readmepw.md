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




