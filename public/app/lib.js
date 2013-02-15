define([
  "app",
  "hammer",
  "TweenMax"
],

function(app) {

  var Lib = {};




  Lib.AbstractPanel = Backbone.View.extend({


  className: "panel",
	    
	events: {

	},


  _initialize: function(){

    console.log("called abstractpanel initialize");

  },


  setupHammer: function (elm,preventDefault){

      preventDefault = preventDefault||false;
      var hammertime = Hammer(elm,{prevent_default:preventDefault});

  },
		  
	    



  resize: function(){
    
    TweenMax.set(this.$el, {height:"100%",width:"100%"});

  },



  getPercentY:function(percent){

    return this.getSizes(this.$el).height/100*percent;

  },


  getPercentX:function(percent){

    return this.getSizes(this.$el).width/100*percent;

  },
  
  getManager :function(){
  		    	
  		return this.__manager__.parent;
        	
  },

  getSizes: function(elm){

          var sizes =  {
            
            width: elm.width(),
            height: elm.height(),
            width2: elm.width()/2,
            height2: elm.height()/2
            
          }
          console.log(sizes);

          return sizes;

    },


	    
  });










  Lib.ScrollablePanel = Lib.AbstractPanel.extend({







    









});


















































  return Lib;

});