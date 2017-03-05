var app = app || {};

app.sortDropdownView = Backbone.View.extend({
	
	tagName: "div",
	id: "sort",
    className: "row",
	
    events: {},
    
    template: _.template($("#sort").html()),
    
    initialize: function(){
      
    },
    
    render: function(){
        var sortTemplate = this.template(this.model.toJSON());
        this.$el.html(sortTemplate);
        return this;
    }
});