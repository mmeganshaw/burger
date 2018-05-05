var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/', function(req, res){
    burger.create([
        "name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function() {
        res.redirect('/');
    });
});

// create the router for the app and export the router at the end of your file