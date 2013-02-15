define([
  "app",

],

function(app) {

  var Docs = app.module();




  Docs.Router = Backbone.SubRoute.extend({


    initialize: function(options) {

    },



    routes: {
        ""  : "home",     
    },


    home: function() {
        alert("hep!");
    },


  });









  // define the View
  Docs.Views.Main = Backbone.View.extend({
    
    template: "docs/index",
    className: "panel",
    id:"docsContainer",


    events: {

    },
    
    serialize: function() {
      
    },
      
      
     beforeRender: function() {

     },




    initialize: function() {

    }
  });













  // Required, return the module for AMD compliance.
  return Docs;

});
