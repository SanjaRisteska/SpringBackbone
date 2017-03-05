var app = app || {};

app.filterDropdownView = Backbone.View.extend({
	
	tagName: "div",
	id: "filter",
    className: "row",
	
    events: {
    	"change #filter-dropdown" : "filterPhones"
    },
    
    template: _.template($("#filter").html()),
    
    initialize: function(){
      
    },
    
    render: function(){
        var filterTemplate = this.template(this.model.toJSON());
        this.$el.html(filterTemplate);
        return this;
    },
    
    filterPhones: function(){
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