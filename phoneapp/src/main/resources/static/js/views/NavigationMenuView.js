var app = app || {};

app.navigationMenuView = Backbone.View.extend({

    tagName: "nav",
    className: "navbar navbar-inverse navbar-fixed-top nav-menu",
    
    events: {},
    
    template: _.template($("#menu").html()),
    
    initialize: function(){
    	Backbone.on("updateCartIndicator", this.updateCartIndicator);
    },
    
    render: function(){
        var menuTemplate = this.template(this.model.toJSON());
        this.$el.html(menuTemplate);
        return this;
    },
	
	updateCartIndicator: function(){
		if(itemsCollection.length > 0) {
			$('#cartIcon').attr('src','../img/cart-green.png');
		} else {
			$('#cartIcon').attr('src','../img/cart.png');
		}
	}
    
});