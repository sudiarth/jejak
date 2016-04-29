import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.Layout.helpers({
	username: function() {
		return Meteor.user().username;
	}
});

Template.Layout.events({ 
	'click .logout': function () {
    Meteor.logout(function() {
      alert('Bye! Come back whenever you want!');
    });
  }
});