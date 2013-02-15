/**
 * handling greensock.
 * http://forums.greensock.com/topic/7213-using-timelinelite-and-tweenlite-with-requirejs/
 * 
 * 
 * 
 */ 



// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file and the JamJS
  // generated configuration file.
  deps: ["../vendor/jam/require.config", "main"],

  paths: {
    // Use the underscore build of Lo-Dash to minimize incompatibilities.
    "lodash": "../vendor/jam/lodash/lodash.underscore",
     "hammer": '../vendor/js/plugins/hammer/hammer-latest.min',

     "iScroll": '../vendor/js/plugins/iscroll',
     
     'TweenLite': '../vendor/js/plugins/gasp/TweenMax.min', 
     'TweenMax': '../vendor/js/plugins/gasp/TweenMax.min', 
     'TimelineLite': '../vendor/js/plugins/gasp/TweenMax.min', 
     'TimelineMax': '../vendor/js/plugins/gasp/TweenMax.min',  
     
     'easel': '../vendor/js/plugins/easel/easeljs-0.6.0.min', 

     
    // JavaScript folders.
    plugins: "../vendor/js/plugins",
   
    vendor: "../vendor"
  },

  map: {
    // Ensure Lo-Dash is used instead of underscore.
    "*": { "underscore": "lodash" }

    // Put additional maps here.
  },

  shim: {
    // Twitter Bootstrap depends on jQuery.
    "vendor/bootstrap/js/bootstrap": ["jquery"],
    easel: {
        exports: 'createjs'
    },
    
  }

});










