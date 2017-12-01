var express = require("express");
var app = express();
var routes = require("./routes.js");
var http = require('http');

app.use(express.static(__dirname + "/public"));
app.use("/", routes);

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Server is up and running.");
});
