import { Meteor } from 'meteor/meteor';

if (Meteor.isClient) {
	
	Geolocation.currentLocation();

  Meteor.startup(function () {

    myApp = new Framework7({
      modalTitle: 'JEJAK',
      cache: true,
      scrollTopOnStatusbarClick: true,
      imagesLazyLoadSequential: true,
      imagesLazyLoadThreshold: 50,
      material: true,
      materialRipple: false
    });

    // Export selectors engine
    var $$ = Dom7;

  }); // end meteor startup
	
}
