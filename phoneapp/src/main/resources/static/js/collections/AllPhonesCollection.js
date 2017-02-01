var app = app || {};

app.phonesCollection = Backbone.Collection.extend({
    
    model: app.singlePhone,
    url: 'http://localhost:8080/api/phones',
    
    initialize: function(){
        
    }
    
});