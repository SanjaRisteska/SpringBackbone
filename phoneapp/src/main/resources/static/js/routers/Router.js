var app = app || {};

app.Router = Backbone.Router.extend({
    routes : {
        "" : "showFirstPage",
        ":phoneLink" : "previewPhone",
    },
    
    showFirstPage: function(){
        $("#phonePreviewSection").hide();
        $("#allPhones").show();
        $("#filters").show();
    },
    
    previewPhone: function(phoneLink){
        var previewModel = _.first(phonesGroup.where({link: phoneLink}));
        $("#allPhones").hide();
        $("#filters").hide();
        var pPreview = new app.phonePreviewView({model : previewModel});
        $("#phonePreviewSection").html(pPreview.render().el);
        $("#phonePreviewSection").show();
    }
    
});