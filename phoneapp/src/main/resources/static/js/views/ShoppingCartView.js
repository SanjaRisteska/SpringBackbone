var app = app || {};

app.shoppingCartView = Backbone.View.extend({

    tagName: "section",
    
    initialize: function(){
    	this.collection.bind("reset", _.bind(this.render, this));
    	var that = this;
        this.collection.fetch({
            reset: true
        });
    },
    
    render: function(){
    	  this.collection.each(this.addCartItem, this);
          $("#allCartItems").html(this.el);
    },
    
    addCartItem: function(cartItem){
        var cartItemView =  new app.cartItemView({ model: cartItem });
        this.$el.append(cartItemView.render().el);
    }
    
});