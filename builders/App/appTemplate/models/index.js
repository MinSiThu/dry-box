let appConfig = require("../config");
let mongoose = require("mongoose");

module.exports = function(){
    mongoose.connect(appConfig.MONGOLAB_URI,{useNewUrlParser:true})
}