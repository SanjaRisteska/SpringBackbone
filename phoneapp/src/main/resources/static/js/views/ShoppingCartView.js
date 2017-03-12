var app = app || {};

app.shoppingCartView = Backbone.View.extend({

	tagName : "section",

	initialize : function() {
		this.render();
		this.collection.on("add remove", this.render, this);
	},

	render : function() {
		this.$el.empty();
		this.collection.each(this.addCartItem, this);
		$("#shoppingCartSection").html(this.el);
	},

	addCartItem : function(cartItem) {
		var cartItemView = new app.cartItemView({
			model : cartItem
		});
		this.$el.append(cartItemView.render().el);
	}

});