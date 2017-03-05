var navMenuModel = new app.navigationMenu();
var navMenu = new app.navigationMenuView({model : navMenuModel});
$("#navigation_menu").html(navMenu.render().el);
$("#navigation_menu").show();

var sortDropdown = new app.sortDropdown();
var sortDropdownView = new app.sortDropdownView({model : sortDropdown});
$("#filters").html(sortDropdownView.render().el);
var filterDropdown = new app.filterDropdown();
var filterDropdownView = new app.filterDropdownView({model : filterDropdown});
$("#filters").html(filterDropdownView.render().el);
$("#filters").show();

var phonesGroup = new app.phonesCollection();
var phonesGroupView = new app.allPhonesView({collection: phonesGroup});
var itemsCollection = new app.itemsCollection();

var phonesRouter = new app.Router();

Backbone.history.start();