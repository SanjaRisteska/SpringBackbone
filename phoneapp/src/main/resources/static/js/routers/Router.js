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
    	 $("#allPhones").hide();
         $("#filters").hide();
         $("#phonePreviewSection").hide();
         var cartModel = new app.shoppingCart();
         var cartView = new app.shoppingCartView({model : cartModel});
         $("#shoppingCartSection").html(cartView.render().el);
         $("#shoppingCartSection").show();
         
    }
    
});