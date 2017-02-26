var app = app || {};

app.itemsCollection = Backbone.Collection.extend({
    
    model: app.cartItem,
    url: 'http://localhost:8080/api/items',
    
    initialize: function(){
        this.fetch({
            reset: true
        });
    }
    
});