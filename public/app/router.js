define([
  "app",
  "modules/home",
  "modules/docs",
  "modules/chrome",
  
],

function(app,Home,Docs,Chrome) {

	
	

	
  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({


    initialize: function() {



	  
	  //var is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
	  //var is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
	  
	 // is this an IPad ?
	  this.isTablet = (navigator.userAgent.match(/iPad/i) != null);

	  // is this an iPhone ?
	  this.isPhone = (navigator.userAgent.match(/iPhone/i) != null);

	  
      var collections = {

      };

      // Ensure the router has references to the collections.
      _.extend(this, collections);
      


    },

      events: {

          
      },

    views: {

           


    },



    routes: {
      "": "index",
      "docs": "docsIndex",
      "warranty": "warrantyIndex",
    },

    
    
    
    
    /**
     * return a specific view based on device size
     */
    getTargetFolder: function(){
    	
    	if(this.isPhone){
    		return "mobile/";
    	}
    	return "tablet/";
    	
    },
    
    
    
    
    warrantyIndex: function() {
        this.reset();
        this.preLoad(this.drawView,Warranty.Views.Main);
    },
    
    
    
    
    docsIndex: function() {
        this.reset();
        this.preLoad(this.drawView,Docs.Views.Main);
    },
    
      

    
    index: function() {

      this.reset();
      this.preLoad(this.drawView,Home.Views.Main);

    },


    drawView :function(className){

	      app.useLayout(this.getTargetFolder() + "main-layout").setViews({
		        "#content": new className(this),
            "#topbar": new Chrome.Views.Topbar(this),
            "#sidebar": new Chrome.Views.Sidebar(this)
		      }).render();
    },


    
    // Shortcut for building a url.
    go: function() {
      return this.navigate(_.toArray(arguments).join("/"), true);
    },




    preLoad:function (callback,args) {
       // if (this.songs.length) {
            if (callback) callback.apply(this,[args]);
       // } else {
       //     this.songs.fetch({success:function () {
       //         if (callback) callback();
      //      }}
      //  );
     //   }
    },


    reset: function() {

    }



  });

  return Router;

});
