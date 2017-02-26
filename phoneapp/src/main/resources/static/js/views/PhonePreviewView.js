var app = app || {};

app.phonePreviewView = Backbone.View.extend({

    tagName: "div",
    className: "row phonePreview",
    
    template: _.template($("#phonePreview").html()),
    
    events: {
    	'click #add-btn' : 'addToCart'
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
    	var cartItem = new app.cartItem({phone: this.model, quantity: 1});
    	cartItem.save();
    }
});