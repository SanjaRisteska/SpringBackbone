var app = app || {};

app.allPhonesView = Backbone.View.extend({

    tagName: "section",
    
    events: {
    
    },

    initialize: function(){
        this.collection.bind("reset", _.bind(this.render, this));
    	var that = this;
        this.collection.fetch({
            reset: true
        });
    },
    
    render: function(){
        this.collection.each(this.addPhone, this);
        $("#allPhones").html(this.el);
    },
    
    postLayoutRender: function(phoneCollection){
    	this.$el.empty();
    	if(phoneCollection.length > 0){
    		phoneCollection.each(this.addPhone, this);
        	$("#allPhones").html(this.el);
    	}else{
    		this.render();
    	}
    },
    
    addPhone: function(phone){
        var phoneView =  new app.singlePhoneView({ model: phone });
        this.$el.append(phoneView.render().el);
    },
    
    closeAllPhonewView: function() {
		this.remove();
	}
    

});