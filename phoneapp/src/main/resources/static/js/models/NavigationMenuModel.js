var app = app || {};

app.navigationMenu = Backbone.Model.extend({

    defaults:{
       link: "myCart"
    },
    
    initialize : function(){
        console.log("Navigation menu model is created.");
    }

});