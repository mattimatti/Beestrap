define([
  "app",

],

function(app) {

  var Warranty = app.module();


  // define the View
  Warranty.Views.Main = Backbone.View.extend({
    
    template: "warranty/index",

    className: "stage-left transition page",
    
    beforeRender: function() {
  	 
  	  	
    	},
    afterRender: function() {
      this.$el.removeClass('stage-left');
	  this.$el.addClass('stage-center');
	  	
  	},


    initialize: function() {
   	 
        this.listenTo(this,"all",function(){
      	  
       	 console.log(arguments); 
         });
   }
    
    
    
  });













  // Required, return the module for AMD compliance.
  return Warranty;

});
