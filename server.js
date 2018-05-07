var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 5000;

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require('./controllers/burger_controller.js')

app.use('/', routes)

app.listen(PORT, function() {
    console.log("Server listening on: " + PORT);
});

