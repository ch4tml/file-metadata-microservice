"use strict";

var util = require('util'); // For inspecting the results of the search
// Database setup
//var mongoose = require("mongoose");
//mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost:27017/");

/* GET home page */
exports.index = function(req, res){
    res.render('index', {
        title: "File Metadata Microservice",
        author: "ch4tml"
    });
};

exports.forms = function(req, res){
    res.render("forms", {
        title: "Form Experiment",
        author: "Tom"
    });
};