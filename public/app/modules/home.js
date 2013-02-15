define([
  "app",
  "lib",
  "hammer",
  "iScroll",
  "TweenMax",
  "backbone.subroute",
],

function(app,Lib) {

  var Home = app.module();


  Home.Router = Backbone.SubRoute.extend({


    initialize: function(options) {

    },



    routes: {
        ""  : "home",     
    },


    home: function() {
        alert("hep!");
    },


  });





  
  
  Home.Views.Home = Lib.AbstractPanel.extend({
	    
	    template: "home/home",
	    
		  events: {
	  				"tap":"start",
		  },
		  
	    
		  afterRender: function() {

          this.setupHammer(this.el,true);

            this.resize();
		
            var theButton = this.$el.find("#startBtn"); 
		        TweenMax.set(theButton,{x:this.getPercentX(80),y:this.getPercentY(80)});
		  	
		
		  },

		    
		    start:function(){
		    	this.getManager().firstSlide();

		    }
	    
  });
  


  
  Home.Views.Slide = Lib.AbstractPanel.extend({
	  

	    template: "home/test",
	    

	    events: {

	  	    "swipeleft":"transform",
	  	    "swiperight":"transform",
	  	    "swipeup":"transform",
	  	    "swipedown":"transform",
	  	    "doubletap":"transform",
	    },


	    
	    direction:"horizontal",
	    



	    initialize: function(){

	    	
	    	this.initialPos = 1024;
	    	
	    	
        if(this.options.enter == "left"){
	    		this.initialPos*=-1;
	    	}
	    	
	    	this.template = this.options.template || this.template;
	    	
	    	if(this.options.enter == "up" || this.options.enter == "down"){
	    		this.direction = "vertical";
	    		this.initialPos = 768;
	    		
	    		
	    	}

	    		
          this._initialize();
	    		

	    },
	    



      serialize: function() {
          return {"text": this.options.text};
      },
	    



	    
	    afterRender: function() {

	  		this.resize();
	  		
	  		
	  		if(this.direction == "horizontal"){
	  			TweenMax.set(this.$el, {zIndex:this.options.zIndex,backgroundColor: this.options.color, x: this.initialPos, y:0});
	  		}else{
	  			TweenMax.set(this.$el, {zIndex:this.options.zIndex,backgroundColor: this.options.color, x: 0, y:this.initialPos});
	  		}

	  		


         this.setupHammer(this.el,false);


         

        var wrapper = this.$el.find('.wrapper');

        console.log("wrapper");
        console.log(this.getSizes(wrapper));


        console.log("scroller");
        var scroller = this.$el.find('.scroller');
         console.log(this.getSizes(scroller));

        this.scroller = new iScroll(wrapper.get(0) , {
            snap: true,
            momentum: false,
            hScrollbar: false
        });


        console.log( this.scroller );




  		},

	

  	  exit:function(direction){

    	  		if(!direction)direction=1;
			  
    	  		if(this.direction == "vertical"){
    	  			
    	  			var destY= this.initialPos * direction;
    				TweenMax.to(this.$el, .5 , { x:0, y:destY, scale:1});
    				
    	  		}else{
    	  			
    	  			var destX = this.initialPos * direction;
    				TweenMax.to(this.$el, .5 , { x:destX, y:0, scale:1});
    	  		}
    	  		
  			
  	  },
  		


  	  enter: function(direction){

  				if(!direction)direction=1;

  				//alert(this.direction);
  				if(this.direction == "vertical"){
  					
  					var destY= this.initialPos * direction;
  					
    				TweenMax.set(this.$el, .5 , { x:0, y:destY, scale:1 });
    				
    				TweenMax.to(this.$el, .5 , { scale:1 , x:0, y:0 });
  					
  				}else{
  					
  					var destX = this.initialPos * direction;
  					TweenMax.set(this.$el,{scale:1,x:destX,y:0});
  	  				TweenMax.to(this.$el,.5, {scale:1,x:0,y:0});
  				}


  				
  	  },
  		
  		
  		
  		
  		
  		transform:function(event){
  			
  			
  			switch(event.originalEvent.type){
  			
  			
  			case "doubletap":
  			//case "pinchout":
  				 this.getManager().closeSlides(-1);

  				
  			break;
  			
  			
  			
  			case "transform":
  					var scale = event.originalEvent.gesture.scale;
 
  					TweenMax.set(this.$el, {scale:scale});
  				
  			break;
  				
  			case "rotate":
  					
  					TweenMax.set(this.$el, {scale:scale});
  					
  			break;
  				
  				
  			/*  case "pinchin":
  					
  				TweenMax.to(this.$el,.2, {scale:.2});
  			   break;
  			   */
  			case "swipeleft":
  			//case "swipeup":
				if(this.options.enter == "left"){
					this.getManager().prevSlide();
				}else{
					this.getManager().nextSlide();
				}
  				 
	
  			break;



	        case "swiperight":
	       // case "swipedown":
				if(this.options.enter == "left"){
					this.getManager().nextSlide();
				}else{
					this.getManager().prevSlide();
				}
	          
	  
	        break;   
  			   
	  		case "drag":
	  					
	  					
	  					
	  			var gesture = event.originalEvent.gesture;
	
	  			var delta = {
	  							y:gesture.srcEvent.pageY - this.getSizes(this.$el).height2,
	  							x:gesture.srcEvent.pageX - this.getSizes(this.$el).width2
	  							
	  					};
	
	  					
	  			TweenMax.set(this.$el, delta);
	  				
	  			   break;
	  		}
	  				
	  			
	  		event.stopImmediatePropagation();
        return false;
  			 
  			
  		},

  		
  		
	    
  });
  
 
  






  
  // define the View
  Home.Views.Main = Lib.AbstractPanel.extend({
    
    template: "home/index",
   

    events: {
	  	
	  
    },
    
    
    currentPanel:null,
    

    serialize: function() {
      
    },

      
    views: {


    },
     
    
    afterRender: function() {


      this.resize();


       this.insertView(new Home.Views.Home()).render();


        this.slides = [];
      
        for (var i = 0 ; i < 5; i++) {
              this.createSlide(i)
        };


    },




    createSlide: function(index){

        var colorz = ["#111111","#222222","#333333","#444444","#555555"];
        
        _(colorz).reverse();


            var viewObject = this.insertView( new Home.Views.Slide(

              {
                text:"Panel "+index,
                enter:"right",
                color: colorz[index],
               zIndex: (1000+index)
              }

              )).render();

            this.slides[index]=viewObject.view;

    },





    firstSlide:function(){

        this.slideCount = -1;
        this.nextSlide();            
    },




    closeSlides:function(direction){

    	console.log("closeSlides");
        if(this.currentSlide){
            this.currentSlide.exit(direction);
        }
       // for (var i = 0; i < this.slides.length; i++) {
       //   this.slides[i].remove();
       // };
              
    },
    





    nextSlide:function(){

        console.log("next");

        if(this.slideCount == this.slides.length-1){
          this.slideCount = -1;
       }

        if(this.currentSlide){
            this.currentSlide.exit(-1);
        }


        this.slideCount++;


    	  this.slides[this.slideCount].enter(1);

        this.currentSlide = this.slides[this.slideCount];
        
    },
    
    


    prevSlide: function(){

        console.log("prev");

        if(this.slideCount == 0){
          this.slideCount = this.slides.length;
        }

        if(this.currentSlide){
            this.currentSlide.exit(1);
        }
        
        this.slideCount--;
        this.slides[this.slideCount].enter(-1);

        this.currentSlide = this.slides[this.slideCount];
    },
     




     
    initialize: function() {

    	 this.template = app.router.getTargetFolder()+ this.template;
       this._initialize();
    	
    }
    
    
  });


  var router = new Home.Router("home");


  // Required, return the module for AMD compliance.
  return Home;

});
