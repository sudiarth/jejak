import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
	subscriptions: function(params) {
    this.register('posts', Meteor.subscribe('posts'));
    this.register('photos', Meteor.subscribe('photos'));
		this.register('users', Meteor.subscribe('users'));
  },
  action: function() {
    BlazeLayout.render("Layout", {content: "Home"});
  }
});

FlowRouter.route('/post', {
	name: 'post',
  action: function() {
    BlazeLayout.render("Layout", {content: "Post"});
  }
});

FlowRouter.route('/about', {
	name: 'about',
  action: function() {
    BlazeLayout.render("Layout", {content: "About"});
  }
});

FlowRouter.route('/signup', {
	name: 'signup',
  action: function() {
    BlazeLayout.render("Layout", {content: "Signup"});
  }
});

FlowRouter.route('/signin', {
	name: 'signin',
  action: function() {
    BlazeLayout.render("Layout", {content: "Signin"});
  }
});
