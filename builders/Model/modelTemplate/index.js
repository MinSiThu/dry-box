let {Schema,model} = require("mongoose");
let dataModel = require("./dataModel");

let schema = new Schema(dataModel.json);
let model = model(dataModel.name,schema);
module.exports = model;