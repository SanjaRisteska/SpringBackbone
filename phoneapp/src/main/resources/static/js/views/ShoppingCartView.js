var app = app || {};

app.shoppingCartView = Backbone.View.extend({

    tagName: "section",
    
    initialize: function(){
      this.render();
      Backbone.on('emptyCart', this.onEmptyCart, this);
    },
    
    render: function(){
    	  this.collection.each(this.addCartItem, this);
          $("#shoppingCartSection").html(this.el);
    },
    
    addCartItem: function(cartItem){
        var cartItemView =  new app.cartItemView({ model: cartItem });
        this.$el.append(cartItemView.render().el);
    },
    
    onEmptyCart: function(caller){
    	alert("Cart is empty!");
    }
   
    
});