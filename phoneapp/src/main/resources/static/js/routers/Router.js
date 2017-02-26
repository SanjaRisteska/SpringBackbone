var app = app || {};

app.Router = Backbone.Router.extend({
    routes : {
        "" : "showFirstPage",
        "myCart" : "showMyCart",
        ":phoneLink" : "previewPhone",
    },
    
    showFirstPage: function(){
        $("#phonePreviewSection").hide();
        $("#shoppingCartSection").hide();
        $("#allPhones").show();
        $("#filters").show();
    },
    
    previewPhone: function(phoneLink){
        $("#allPhones").hide();
        $("#filters").hide();
        $("#shoppingCartSection").hide();
        var previewModel = _.first(phonesGroup.where({link: phoneLink}));
        var pPreview = new app.phonePreviewView({model : previewModel});
        $("#phonePreviewSection").html(pPreview.render().el);
        $("#phonePreviewSection").show();
    },
    
    showMyCart : function(){
    	  $("#phonePreviewSection").hide();
          $("#allPhones").hide();
          $("#filters").hide();
          
          var shoppingCartView = new app.shoppingCartView({collection: itemsCollection});
          $("#shoppingCartSection").show();
          
    }
    
});