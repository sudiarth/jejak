Meteor.methods({

	postStatus: function (doc) {

    var text = doc.text;
    var photoId = doc.photoId;
		var lng = doc.lng;
		var lat = doc.lat;


    var post = _.extend(doc, {
				ownerId: this.userId,
				text: text,
				location      : {
					type        : 'Point',
					coordinates : [lng,lat]
				},
				createdAt: Date.now()
    });

    var postId = Posts.insert(post);

    if (photoId != 'undefined') {

      var photo = _.extend(doc, {
        ownerId: this.userId,
        postId: postId,
        photoId: photoId,
        createdAt: Date.now()
      });

      console.log(photo);

      Photos.insert(photo);
    
    }

    // if (Meteor.isServer) {
    //   Meteor.defer(function () {
    //     Meteor._sleepForMs(5000); // wait for 5 seconds
    //   });
    // }

  },

  removeStatus: function (id) {
    // remove posts
    Photos.remove({_id:id});
  },

  removeAllStatus: function () {
    // remove all post
    Photos.remove({});
  }

});