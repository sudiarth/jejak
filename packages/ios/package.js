Package.describe({
  name: "sudigital:framework7-ios",
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

  api.export('iOS', 'client');

  var imgFiles = [
    'img/i-form-calendar-ios.svg',
    'img/i-form-comment-ios.svg',
    'img/i-form-email-ios.svg',
    'img/i-form-gender-ios.svg',
    'img/i-form-name-ios.svg',
    'img/i-form-password-ios.svg',
    'img/i-form-settings-ios.svg',
    'img/i-form-tel-ios.svg',
    'img/i-form-toggle-ios.svg',
    'img/i-form-url-ios.svg'
  ];
  api.addAssets(imgFiles, 'client');

  // js files
  api.addFiles('js/framework7.js', 'client');
  api.addAssets('js/framework7.js.map', 'client');

  // css files
  api.addFiles([
    'css/framework7.ios.colors.css',
    'css/framework7.ios.css'
  ], 'client');
  
});
