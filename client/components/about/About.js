import { Template } from 'meteor/templating';

Template.About.rendered = function () {
  myApp.addView('.view-main', {domCache: true, dynamicNavbar: true}).router.load({pageName: 'About'});
};