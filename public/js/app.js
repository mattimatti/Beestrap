window.DDR = window.DDR || {};



DDR.initialize = function() {
	DDR.controller = $("body").data("controller");
	DDR.action = $("body").data("action");
	
	DDR.setupScrolling();
};

DDR.setupScrolling = function() {
	
	if(DDR.action == "index"){
		MBP.preventScrolling();
	}

};

