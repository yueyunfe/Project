var mongoose = require('mongoose');

// this is haruko conncection
var db = mongoose.connect('mongodb://yueyunfe:123456@ds263837.mlab.com:63837/heroku_0dkpkgg7', {useMongoClient: true});
// var db = mongoose.connect('mongodb://localhost:27017/webdev', {useMongoClient: true});

module.exports = db;
