let {prompt} = require("inquirer");
let listDir = require("../utils/listDir");
let writter = require("../utils/writter");
let path = require("path");

class ServiceBuilder {
    constructor(name){
        this.name = name;
        this.questions = [
            {
                type:"list",
                choices:[],
                name:"modelName",
                message:"Choose model for service!"
            }
        ]
    }

    async build(){
        let dirs = await listDir.list("models");
        this.questions[0].choices = dirs;
        let answers = await prompt(this.questions);
        let serviceModel = "module.exports = "+JSON.stringify({
            path:`../models/${answers.modelName}`,
        },null,4)

        let THAT = this;
        await writter.copyWholeDir(path.join(__dirname,"serviceTemplate"),path.join("services",this.name),
        async function(){
            await writter.write(path.join("services",THAT.name,"serviceModel"),serviceModel)
        }); 
    }
}

module.exports = ServiceBuilder;