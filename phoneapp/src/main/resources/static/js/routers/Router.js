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
        $("#subheader").show();
    },
    
    previewPhone: function(phoneLink){
        $("#allPhones").hide();
        $("#subheader").hide();
        $("#shoppingCartSection").hide();
        var previewModel = _.first(phonesGroup.where({link: phoneLink}));
        if(!phonePreviewView){
        	phonePreviewView = new app.phonePreviewView({model : previewModel});
        }
        $("#phonePreviewSection").html(phonePreviewView.render(previewModel).el);
        $("#phonePreviewSection").show();
    },
    
    showMyCart : function(){
    	  $("#phonePreviewSection").hide();
          $("#allPhones").hide();
          $("#subheader").hide();
          
          itemsCollection.fetch({
        	  success: function(){
        		  if(!shoppingCartView){
        			  shoppingCartView = new app.shoppingCartView({collection: itemsCollection});
        		  }
                  $("#shoppingCartSection").show();
        	  }
          });
          
          
    }
    
});