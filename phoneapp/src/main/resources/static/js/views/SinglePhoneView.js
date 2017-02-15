var app = app || {};

app.singlePhoneView = Backbone.View.extend({

    tagName: "article",
    className: "phoneItem col-md-3",
    
    events: {},
    
    template: _.template($("#phoneElement").html()),
    
    initialize: function(){
      
    },
    
    render: function(){
        var phoneTemplate = this.template(this.model.toJSON());
        this.$el.html(phoneTemplate);
        return this;
    }
});