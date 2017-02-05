$("#filter-dropdown").change(function(){
	
	var filterBy = $("#filter-dropdown option:selected").val();
	
	var filteredPhones = _.filter(phonesGroup.models, function(model){
		return model.get("manufacturer").toLowerCase() === filterBy;
	});
	
	var filteredPhonesGroup = new app.phonesCollection(filteredPhones);
	phonesGroupView.postLayoutRender(filteredPhonesGroup);
	
});


$("#sort-dropdown").change(function(){
	var sortedPhones = [];
	var sort = $("#sort-dropdown option:selected").val();
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
	
	
	var sortedPhonesGroup = new app.phonesCollection(sortedPhones);
	phonesGroupView.postLayoutRender(sortedPhonesGroup);
	
});