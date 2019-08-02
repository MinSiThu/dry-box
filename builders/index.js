let ModelBuilder = require("./Model");
let AppBuilder = require("./App");
let ServiceBuilder = require("./Service");

class Builder{
    buildModel(modelName){
        new ModelBuilder(modelName).build();
    }

    buildApp(appName){
        new AppBuilder(appName).build();
    }

    buildService(serviceName){
        new ServiceBuilder(serviceName).build();
    }
}

module.exports = new Builder();