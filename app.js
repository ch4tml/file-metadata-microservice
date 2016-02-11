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
  dest: "uploads/",
  limits: {
    fileSize: 1000
  }
});

// Database setup
/*var mongo = require("mongodb").MongoClient;
var mongoose = require("mongoose");
var configDB = process.env.MONGOLAB_URI || "mongodb://localhost:27017/";
mongoose.createConnection(configDB, (err) => {
  if(err){
    console.log("Error connnecting to DB");
    throw err;
  }
  else
    console.log("Successfully connected to DB");
});
*/
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// TODO
/*
ADD FILE FILTER
ADD ERROR HANDLING
*/

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
app.post("/", upload.single("user_file"), routes.submit);
//app.get("/form", routes.forms); // Home route

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});