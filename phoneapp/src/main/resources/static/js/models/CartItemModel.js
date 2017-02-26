var app = app || {};

app.cartItem = Backbone.Model.extend({   
	url: 'http://localhost:8080/api/item'
});