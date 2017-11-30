var express = require("express");
var app = express();
var routes = require("./routes.js");
var http = require('http');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", routes);

var server = app.listen(3000, function() {
var port = server.address().port;
console.log("Express server is up and running.");
});
