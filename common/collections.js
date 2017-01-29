Tickets = new Mongo.Collection("tickets"); 
Tickets.allow({ 
    insert: function(){ 
        return true; 
    }, 
    update: function(){ 
        return true; 
    }, 
    remove: function(){ 
        return true; 
    } 
});

QuickNotes = new Mongo.Collection("quickNotes"); 
QuickNotes.allow({ 
    insert: function(){ 
        return true; 
    }, 
    update: function(){ 
        return true; 
    }, 
    remove: function(){ 
        return true; 
    } 
});

Events = new Mongo.Collection( 'events' );

Events.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Events.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let EventsSchema = new SimpleSchema({
  'title': {
    type: String,
    label: 'The title of this event.'
  },
  'start': {
    type: String,
    label: 'When this event will start.'
  },
  'end': {
    type: String,
    label: 'When this event will end.'
  },
  'type': {
    type: String,
    label: 'What type of event is this?',
    allowedValues: [ 'Birthday', 'Corporate', 'Wedding', 'Miscellaneous' ]
  },
  'guests': {
    type: Number,
    label: 'The number of guests expected at this event.'
  }
});

Events.attachSchema( EventsSchema );