let program = require("commander");
let toolInfo = require("./tool-info");
let Builders = require("./builders");

program
.version(toolInfo.version)
.description(toolInfo.description)

program
.command("model <model>")
.action(function(model){
    Builders.buildModel(model)
})

module.export = (ARGS)=>{
    program.parse(ARGS)
}
