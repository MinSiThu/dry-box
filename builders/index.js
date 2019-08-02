let ModelBuilder = require("./Model");
let AppBuilder = require("./App");

class Builder{
    buildModel(modelName){
        new ModelBuilder(modelName).build();
    }

    buildApp(appName){
        new AppBuilder(appName).build();
    }
}

module.exports = new Builder();