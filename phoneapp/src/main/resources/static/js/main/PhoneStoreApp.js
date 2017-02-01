var phonesGroup = new app.phonesCollection();
var phonesGroupView = new app.allPhonesView({collection: phonesGroup});
var phonesRouter = new app.Router();

Backbone.history.start();