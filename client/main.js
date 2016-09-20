import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

/*
    
    ACCOUNTS CONFIG

*/

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

/*

    TICKET TEMPLATE

 */

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

Template.ticketAdd.helpers({ 
    create: function(){ 
         
    }, 
    rendered: function(){ 
         
    }, 
    destroyed: function(){ 
         
    }, 
}); 

Template.ticketAdd.events({ 
    "click #btnAddTicket": function(event, template){
        var textAreaContent = $('#inputTicketContent').val();
        if(textAreaContent != ""){
            Tickets.insert({
                text: textAreaContent
            });
            $('#inputTicketContent').val("");
        }
    } 
}); 

Template.ticketItem.helpers({ 
    create: function(){ 
         
    }, 
    rendered: function(){ 
         
    }, 
    destroyed: function(){ 
         
    }, 
    tickets: function(){
        return Tickets.find().fetch();
    }
}); 

/*

    QUICK NOTE TEMPLATE

 */

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

Template.addQuickNote.events({
    "click #divAddQuickNote" : function(event, template){
        var textNote = $('#iptQuickNote').val();
        if(textNote != ""){
            QuickNotes.insert({
                text: textNote
            });
            $('#iptQuickNote').val("");
        }
    }
});

Template.quickNote.events({
    "click #divDoneQuickNote" : function(events, template){
        //var id = $('#quickNoteContainer').attr('data-id');
        //alert(id);
        //if(id != null && id != ""){
            QuickNotes.remove(this._id);
        //}
    }
});

Template.quickNote.helpers({
    create: function(){

    },
    rendered: function(){

    },
    destroyed: function(){

    },
    quickNotes: function(){
        return QuickNotes.find().fetch();
    }
});