var app = app || {};

app.itemsCollection = Backbone.Collection.extend({
    
    model: app.cartItem,
    url: 'http://localhost:8080/api/items',
    
    initialize: function(){
        this.fetch();
        this.bind("add remove", function(e){
        	if(this.length == 0){
        		//TODO custom event
        		Backbone.trigger('emptyCart', this);
        	}else if(this.length > 0){
        		$('#cartIcon').attr('src','../img/cart-green.png');
        	}else{
        		$('#cartIcon').attr('src','../img/cart.png');
        	}
        });
        
    }


    
});