import { Template } from 'meteor/templating';

var pageSession = new ReactiveDict();

pageSession.set({  
  alert: ''
});

Template.Signup.rendered = function () {
  myApp.addView('.view-main', {domCache: true, dynamicNavbar: true}).router.load({pageName: 'Signup'});
};

Template.Signup.events({ 
	'click #signupButton': function(e, t) { 
		e.preventDefault();
		
		console.log('klik button signup');
		
		var email = t.find('#email').value.trim(),
				username = t.find('#username').value.trim(),
        password = t.find('#password').value,
        confirmPassword = t.find('#confirm_password').value
				
		if(email === "")
    {
      pageSession.set("alert", "Please enter your email.");
      t.find('#email').focus();
      return false;     
    }
		
		if(username === "")
    {
      pageSession.set("alert", "Please enter your username.");
      t.find('#username').focus();
      return false;     
    }
			
		if(password === "")
    {
      pageSession.set("alert", "Please enter your password.");
      t.find('#password').focus();
      return false;     
    }
		
		if(password !== confirmPassword)
    {
      pageSession.set("alert", "Both password not same");
      t.find('#confirm_password').focus();
      return false;     
    }
		
		var doc = {email: email, username: username, password: password}
		
		Meteor.call('createNewUser', doc, function(error, id) {
  
      if (error) {

        pageSession.set('alert', error.reason);
      
      } else {

        FlowRouter.go('/signin');
        pageSession.set("alert", "");

      }

    });
    return false;
	} 
});

Template.Signup.helpers({
	alert: function() {
    return pageSession.get("alert");
  }
});