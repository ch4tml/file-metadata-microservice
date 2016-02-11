"use strict";

var express = require("express");
var dotenv = require('dotenv').config();
var app = express();
var routes = require("./routes/routes");
var bodyParser = require('body-parser');
var path = require("path");
var http = require("http");
var multer = require("multer");
var upload = multer({
  limits: {
    fileSize: 10000000
  }
}).single("user_file");

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// All environments
app.set('port', process.env.PORT || 8080);
app.use(express.favicon());
// Logs actions and requests when server running
app.use(express.logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get("/", routes.index); // Home route
app.post("/", upload, routes.submit);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});