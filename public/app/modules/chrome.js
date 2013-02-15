define([
  "app",
  "hammer",
  "TweenMax"
],

function(app) {

  var Chrome = app.module();



  // define the View
  Chrome.Views.Sidebar = Backbone.View.extend({
    
    template: "chrome/sidebar",


  });















  // define the View
  Chrome.Views.Topbar = Backbone.View.extend({
    
    template: "chrome/toolbar",

    visible: true,


    events: {
        "swipeup": "hide",
        "swipedown": "show",
    },
    
    serialize: function() {
      
    },
      
      
     beforeRender: function() {

     },

     
     afterRender: function() {
        
        TweenMax.set(this.$el, {backgroundColor:"#ccc",height:"100%",width:"100%"});
         var hammertime = Hammer(this.el);
     },



     toggle: function(){

        if(this.visible){
            this.hide();
        }else{
            this.show();
        }

     },


     show:function(){

        TweenMax.to(this.$el,.5,{y:0,x:0});
        this.visible=true;

     },

     hide:function(){

        TweenMax.to(this.$el,.5,{y:-this.getSizes(this.$el).height+10,x:0});
        this.visible = false;
     },

      getSizes: function(elm){

       var sizes =  {
            
            width: elm.width(),
            height: elm.height(),
            width2: elm.width()/2,
            height2: elm.height()/2
            
          }

          return sizes;

      },



     afterRender: function() {
        
        TweenMax.set(this.$el, {backgroundColor:"#ccc",height:"100%",width:"100%"});
         var hammertime = Hammer(this.el);
     },


    initialize: function() {

    }


  });













  // Required, return the module for AMD compliance.
  return Chrome;

});
