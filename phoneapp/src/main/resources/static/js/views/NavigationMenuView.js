var app = app || {};

app.navigationMenuView = Backbone.View.extend({

    tagName: "nav",
    className: "navbar navbar-inverse navbar-fixed-top nav-menu",
    
    events: {
    	'click #my_cart' : 'showMyCart'
    },
    
    template: _.template($("#menu").html()),
    
    initialize: function(){
    },
    
    render: function(){
        var menuTemplate = this.template(this.model.toJSON());
        this.$el.html(menuTemplate);
        return this;
    },
	
	showMyCart: function(e){
	}
    
});