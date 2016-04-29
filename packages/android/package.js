Package.describe({
  name: "sudigital:framework7-android",
  summary: "Full Featured HTML Framework For Building Android, iOS Apps",
  version: "1.4.2",
  git: "https://github.com/nolimits4web/Framework7.git"
});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@1.2.1');

  api.use([
    'meteor',
    'jquery'
  ]);

  api.export('Materialize', 'client');

  var imgFiles = [
    'img/i-form-calendar-material.svg',
    'img/i-form-comment-material.svg',
    'img/i-form-email-material.svg',
    'img/i-form-gender-material.svg',
    'img/i-form-name-material.svg',
    'img/i-form-password-material.svg',
    'img/i-form-settings-material.svg',
    'img/i-form-tel-material.svg',
    'img/i-form-toggle-material.svg',
    'img/i-form-url-material.svg'
  ];
  api.addAssets(imgFiles, 'client');

  // js files
  api.addFiles('js/framework7.js', 'client');
  api.addAssets('js/framework7.js.map', 'client');

  // css files
  api.addFiles([
    'css/framework7.material.colors.css',
    'css/framework7.material.css'
  ], 'client');
  
});
