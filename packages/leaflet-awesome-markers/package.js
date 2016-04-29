Package.describe({
  summary: "Leaflet Awesome Markers Plugin for Meteor",
  git: "https://github.com/herrhelms/meteor-leaflet-markercluster.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');
  api.addFiles([
    'lib/leaflet.awesome-markers.js',
    'styles/leaflet.awesome-markers.css'
  ], 'client');
  api.addAssets([
    'images/markers-matte.png',
    'images/markers-matte@2x.png',
    'images/markers-plain.png',
    'images/markers-shadow.png',
    'images/markers-shadow@2x.png',
    'images/markers-soft.png',
    'images/markers-soft@2x.png'
  ],'client');
});
