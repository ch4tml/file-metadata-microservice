"use strict";

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

exports.submit = function(req, res){
    console.log(req.file);
    res.end(JSON.stringify({
        filename: req.file.originalname,
        filesizeInBytes: req.file.size,
        uploadedAt: new Date()
    }));
};

/* For forms tutorial */

/*
exports.forms = function(req, res){
    res.render("forms", {
        title: "Form Experiment",
        author: "Tom"
    });
};*/