var app = app || {};

app.shoppingCartView = Backbone.View.extend({


	el: '#shoppingCartSection',
	
	initialize : function() {
		this.render();
		this.collection.on("add remove", this.render, this);
	},

	render : function() {
		this.$el.empty();
		this.collection.each(this.addCartItem, this);
		return this;
	},

	addCartItem : function(cartItem) {
		var cartItemView = new app.cartItemView({
			model : cartItem
		});
		this.$el.append(cartItemView.render().$el);
	}

});