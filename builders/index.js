let ModelBuilder = require("./Model");

class Builder{
    buildModel(modelName){
        new ModelBuilder(modelName).build();
    }
}

module.exports = new Builder();