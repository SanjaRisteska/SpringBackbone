var app = app || {};

app.cartItemView = Backbone.View.extend({

    tagName: "div",
    className: "row cartItem",
    
    events: {},
    
    template: _.template($("#cartItem").html()),
    
    initialize: function(){
      
    },
    
    render: function(){
        var cartItemTemplate = this.template(this.model.toJSON());
        this.$el.html(cartItemTemplate);
        return this;
    }
});