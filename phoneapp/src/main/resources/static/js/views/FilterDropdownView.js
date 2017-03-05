var app = app || {};

app.filterDropdownView = Backbone.View.extend({
	
	tagName: "div",
	id: "filter",
    className: "row",
	
    events: {},
    
    template: _.template($("#filter").html()),
    
    initialize: function(){
      
    },
    
    render: function(){
        var filterTemplate = this.template(this.model.toJSON());
        this.$el.html(filterTemplate);
        return this;
    }
});