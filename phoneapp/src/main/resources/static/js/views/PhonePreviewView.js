var app = app || {};

app.phonePreviewView = Backbone.View.extend({

    tagName: "div",
    className: "row phonePreview",
    
    template: _.template($("#phonePreview").html()),
    
    events: {
    	'click #addToCartBtn' : 'addToCart'
    },
    
    initialize: function(){
      console.log("Phone preview view is created.");  
    },
    
    render: function(){
        var phonePreviewTemplate = this.template(this.model.toJSON());
        this.$el.html(phonePreviewTemplate);
        return this;
    },
    
    addToCart: function(){
    	var that = this;
        var cartItem = _.find(itemsCollection.models, function(item){
        		return item.get('phone').id == that.model.id;
        	});
        if(cartItem){
        	  cartItem.set('quantity', cartItem.get('quantity') + 1);
        }else{
        	cartItem = new app.cartItem({phone: this.model, quantity: 1});
        }
    	cartItem.save({},{
    		success: function(model, response){
    			itemsCollection.fetch({
    				success: function(){
    					Backbone.trigger("updateCartIndicator");
    				}
    			});
    		}
    	});
    	
    }
});