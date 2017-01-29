// Meteor.publish('events', function() {
//   return Events.find({
//     $or: [{
//       isPrivate: false
//     },
//     {
//       isPrivate: true,
//       ownerId: this.userId
//     }]
//   });
// });

// Events.allow({
//   insert: function (userId, doc) {
//     if (userId) {
//       return true;
//     }
//     return false;
//   }
// });