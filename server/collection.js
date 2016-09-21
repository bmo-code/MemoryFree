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