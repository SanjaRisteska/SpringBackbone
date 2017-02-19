var app = app || {};

app.shoppingCartView = Backbone.View.extend({

    tagName: "div",
    className: "row",
    
    template: _.template($("#shoppingCart").html()),
    
    initialize: function(){
      console.log("Shopping cart view is created.");  
    },
    
    render: function(){
        var shoppingCartTemplate = this.template(this.model.toJSON());
        this.$el.html(shoppingCartTemplate);
        return this;
    }
});