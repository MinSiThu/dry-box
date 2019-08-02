let serviceModel = require("./serviceModel");
let Model = require(serviceModel.path);

module.exports.getAll = async function() {
    return await Model.find({});
}

module.exports.getOneById = async function(id){
    return await Model.findById(id);
}

module.exports.createOne = async function(data){
    let mongoData = new Model(data);
    return await mongoData.save();
}

module.exports.deleteOneById = async function(id){
    return await Model.findByIdAndDelete(id);
}

module.exports.updateOneById = async function(id){
    return await Model.findByIdAndUpdate(id)
}