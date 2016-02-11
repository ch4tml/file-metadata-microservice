"use strict";

/* GET home page */
exports.index = function(req, res){
    res.render('index', {
        title: "File Metadata Microservice",
        author: "ch4tml"
    });
};

exports.submit = function(req, res){
    res.end(JSON.stringify({
        filename: req.file.originalname,
        filesizeInBytes: req.file.size,
        uploadedAt: new Date()
    }));
};