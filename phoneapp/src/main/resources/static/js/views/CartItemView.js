var app = app || {};

app.cartItemView = Backbone.View.extend({

    tagName: "div",
    className: "row cartItem",
    
    events: {
    	'click #add-btn': 'increaseItemQuantity',
    	'click #remove-btn': 'decreaseItemQuantity',
    	'click #delete-btn': 'deleteItem'
    },
    
    template: _.template($("#cartItem").html()),
    
    initialize: function(){
      
    },
    
    render: function(){
        var cartItemTemplate = this.template(this.model.toJSON());
        this.$el.html(cartItemTemplate);
        return this;
    },
    
    increaseItemQuantity: function(){
    	var that = this;
        var cartItem = _.find(itemsCollection.models, function(item){
        		return item.id == that.model.id;
        });
        cartItem.set('quantity', cartItem.get('quantity') + 1);
    	cartItem.save({},{
    		success: function(model, response){
    			itemsCollection.fetch();
    		}
    	});
    },
    
    decreaseItemQuantity: function(){
    	var that = this;
        var cartItem = _.find(itemsCollection.models, function(item){
        		return item.id == that.model.id;
        });
        cartItem.set('quantity', cartItem.get('quantity') - 1);
        if(cartItem.get('quantity') == 0){
        	that.deleteItem();
        	return;
        }else{
    	cartItem.save({},{
    		success: function(model, response){
    			itemsCollection.fetch();
    		}
    		});
        }
    },
    
    deleteItem: function(){
    	var that = this;
    	cartItem = _.find(itemsCollection.models, function(item){
       		return item.id == that.model.id;
           });
    	cartItem.destroy({
    		contentType: 'application/json',
    		data: JSON.stringify(cartItem)
    	});
   	}
    
});