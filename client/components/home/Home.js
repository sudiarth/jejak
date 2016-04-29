import { Template } from 'meteor/templating';

Template.Home.rendered = function () {
  myApp.addView('.view-main', {domCache: true, dynamicNavbar: true}).router.load({pageName: 'Home'});
};

Template.Home.helpers({
	hasTimeline: function () {
		var res = Posts.findOne();
		if (res) {
			return true;
		}
	},
	timeline: function () {
		return Posts.find({}, {sort: {createdAt: -1}});
	},
	photos: function (id) {
		return Photos.find({postId: id});
	},
	name: function (id) {
		var user = Meteor.users.findOne({_id: id});
		return user.username;
	},
	ago: function (id) {
    var res = Posts.findOne({_id: id});
    return moment(res.createdAt).fromNow();
  },
	location: function (id) {
    var post = Posts.findOne({_id: id});
		console.log(post)
    return post.location.coordinates[1] + ', ' + post.location.coordinates[0];
  }
});