Schema = {};

Schema.GeoLocationSchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: ['Point'],
    defaultValue: 'Point'
  },
  coordinates: {
    type: [Number],
    decimal: true,
    minCount: 2,
    maxCount: 2
  }
});

Schema.Posts = new SimpleSchema({
  ownerId: {
    type: String
  },
  text: {
    type: String
  },
  location: {
    type: Schema.GeoLocationSchema,
    index: '2dsphere',
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true
  },
  updatedAt: {
    type: Date,
    optional: true

  }
});

Posts.attachSchema(Schema.Posts, {transform: true});

// Allow

Posts.allow({

  insert: function (ownerId, doc) {
    return ownerId;
  },
  update: function (ownerId, doc, fields, modifier) {
    // can only change your own documents
    return doc.ownerId === Meteor.userId();
  },
  remove: function (ownerId, doc) {
    // can only remove your own documents
    return doc.ownerId === Meteor.userId();
  }

});

Posts.deny({

  update: function  (ownerId, doc, fields, modifier) {
    //  Can't change  owners, createdAt
    return  _.contains(fields,  'ownerId')  ||  _.contains(fields, 'createdAt');
  }

});