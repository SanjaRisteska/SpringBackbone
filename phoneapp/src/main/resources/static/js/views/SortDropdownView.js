var app = app || {};

app.sortDropdownView = Backbone.View.extend({
	
	tagName: "div",
	id: "sort",
    className: "row",
	
    events: {
    	"change #sort-dropdown" : "sortPhones"
    },
    
    template: _.template($("#sort").html()),
    
    initialize: function(){
      
    },
    
    render: function(){
        var sortTemplate = this.template(this.model.toJSON());
        this.$el.html(sortTemplate);
        return this;
    },
    
    sortPhones: function(){
    	var sortedPhones = [];
    	var sort = $("#sort-dropdown option:selected").val();
    	var filterBy = $("#filter-dropdown option:selected").val();
    	
    	switch(sort){
    	case "model_ascending":
    		sortedPhones = phonesGroup.sortBy(function(phone){
    			return phone.get("model").toLowerCase();
    		});
    		break;
    	case "model_descending":
    		sortedPhones = phonesGroup.sortBy(function(phone){
    			return phone.get("model").toLowerCase();
    		});
    		sortedPhones.reverse();
    		break;
    	case "price_ascending":
    		sortedPhones = phonesGroup.sortBy(function(phone){
    			return phone.get("price");
    		});
    		break;
    	case "price_descending":
    		sortedPhones = phonesGroup.sortBy(function(phone){
    			return phone.get("price");
    		});
    		sortedPhones.reverse();
    		break;
    	case "all": 
    		sortedPhones = phonesGroup.models;
    		break;
    	}
    	
    	var filteredPhones = _.filter(sortedPhones, function(model){
    		return model.get("manufacturer").toLowerCase() === filterBy;
    	});
    	
    	if(filterBy === 'all' && filteredPhones.length == 0){
    		filteredPhones = sortedPhones;
    	}
    	
    	var modifiedPhonesGroup = new app.phonesCollection(filteredPhones);
    	phonesGroupView.postLayoutRender(modifiedPhonesGroup);
    	
    }
});