Package.describe({
  name: "sudigital:leaflet",
  summary: "Leaflet.js, mobile-friendly interactive maps. Read https://github.com/bevanhunt/meteor-leaflet for installation instructions.",
  git: "https://github.com/bevanhunt/meteor-leaflet.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');
  api.addFiles([
    'lib/leaflet.js',
    'lib/leaflet_providers.js',
    'lib/turf.js',
    'styles/leaflet.css'
  ], 'client');
  api.addAssets([
    'images/layers-2x.png',
    'images/layers.png',
    'images/marker-icon-2x.png',
    'images/marker-icon.png',
    'images/marker-shadow.png'
  ],'client');
});
