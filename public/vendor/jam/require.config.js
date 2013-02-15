var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "../vendor/jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.layoutmanager",
            "location": "../vendor/jam/backbone.layoutmanager",
            "main": "backbone.layoutmanager.js"
        },
        {
            "name": "jquery",
            "location": "../vendor/jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "lodash",
            "location": "../vendor/jam/lodash",
            "main": "./lodash.js"
        },
        {
            "name": "underscore",
            "location": "../vendor/jam/underscore",
            "main": "underscore.js"
        },
        {
            "name": "backbone.subroute",
            "location": "../vendor/jam/backbone.subroute",
            "main": "backbone.subroute.js"
        },
    ],
    "version": "0.2.11",
    "shim": {
        "backbone": {
            "deps": [
                "jquery",
                "lodash"
            ],
            "exports": "Backbone"
        },
        
        
        "backbone.layoutmanager": {
            "deps": [
                "jquery",
                "backbone",
                "underscore"
            ],
            "exports": "Backbone.Layout"
        },

        "backbone.subroute": {
            "deps": [
                "backbone",
                "underscore",
                "lodash"
            ],
            "exports": "Backbone.SubRoute"
        },

        "underscore": {
            "exports": "_"
        }
        
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}