import { Template } from 'meteor/templating';

var pageSession = new ReactiveDict();

Template.Post.rendered = function () {
	if (! Meteor.userId()) {
		FlowRouter.go('/');
	}
  myApp.addView('.view-main', {domCache: true, dynamicNavbar: true}).router.load({pageName: 'Post'});
};

Template.Post.events({ 
	'change #filePost': function(e, t) {

    var files = e.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i--) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          pageSession.set("photo", e.target.result);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }

    // document.getElementById('filePost').addEventListener('change', this, false);
  
  },
   
  'click .remove' : function(e, t) {
    pageSession.set("photo", null);
  },

  'click #postButton': function(e,t) {

  	console.log("clicked");

    e.preventDefault();

    var text = trimInput(t.find("#textPost").value);
    var files = pageSession.get("photo");

    if (isNotEmpty(text) && isNotEmpty(files)) {

      file = new FS.File(files);

      Binary.insert(file, function (err, fileObj) {
        
        if (err){
        
          pageSession.set('alert', err.reason);
        
        } else {
          
          var photoId = fileObj._id;
          pageSession.set('images', photoId);
          console.log(fileObj);
          console.log(fileObj._id);
					
					var lat_Lng = Geolocation.latLng();
					
					if (! lat_Lng) {
						return;
					}
					
					if (lat_Lng.lat === 'undefined' || lat_Lng.lat === null && lat_Lng.lng === 'undefined' || lat_Lng.lng === null) {

						lat = -8.409518;
						lng = 115.188916;

					} else {

						lat = lat_Lng.lat;
						lng = lat_Lng.lng;

					}

          var doc = {
            text: text,
						lat: lat,
						lng: lng,
            photoId: photoId
          };

          Meteor.call('postStatus', doc, function(error, id) {
          
            if (error) {

              pageSession.set('alert', error.reason);
              
            } else {
              
              pageSession.set('alert', 'Your post has been published');
		          $("#textPost").val('');
		          pageSession.set("photo", null);
            }
          
          });

        }

      });

    } else if (isNotEmpty(text)) {

      var doc = {
        text: text,
        isPrivate: isPrivate,
        photoId: 'undefined'
      };

      Meteor.call('postStatus', doc, function(error, id) {
      
        if (error) {

          pageSession.set('alert', error.reason);
          
        } else {
          
          pageSession.set('alert', 'Your post has been published');
          $("#textPost").val('');
          pageSession.set("photo", null);
          $('#myModal').modal('hide');
          // window.location.href = '/';
        }
      
      });

    } else {

      pageSession.set('alert', 'Please fill in all required fields');

    }

  }
});

Template.Post.helpers({
  images: function () {
    return pageSession.get('images');
  },
  photo: function () {
    return pageSession.get("photo");
  },
  alert: function () {
    return pageSession.get("alert");
  }
});