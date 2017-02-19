var app = app || {};

app.shoppingCart = Backbone.Model.extend({

    defaults:{
       title: "Shopping cart"
    },
    
    initialize : function(){
        console.log("Shopping cart model is created.");
    }

});