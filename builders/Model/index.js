let {prompt} = require("inquirer");
let writter = require("../utils/writter");
let path = require("path");
let compileTemplate = require("./template");

class Model{
    constructor(name){
        this.name = name;
        this.questions = [
            {
                type:"input",
                name:"propertyName",
                message:"Add a property : ",
            },
            {
                type:"list",
                name:"propertyType",
                message:"Define property type : ",
                choices:[
                    "String","Number","Boolean","Date","Array","Buffer","Map","Mixed"
                ]
            },
            {
                type:"input",
                name:"required",
                message:"It is required? y/n : "
            },
            {
                type:"input",
                name:"default",
                message:"Default Value : "
            }
        ]
        this.props = [];
        this.model = {};
    }

    async compile(){
        this.props.forEach(state=>{
            if(state.required == "y"){
                state.required = true;
            }
            state.required = false;

            this.model[state.propertyName] = {
                type:state.propertyType,
                required:state.required,
                default:state.default,
            }
        })
    }

    async build(){
        let buildState = false;
        do{
            let answers = await prompt(this.questions)
            if(answers.propertyName == ""){
                buildState = true;
            }else{
                this.props.push(answers);
            }
        }while(buildState==false)
        //log user's value
        console.log("\n")
        console.log(this.props);
        console.log("\n")
        console.log("Model Starts Building -----------------------------------------------------------------");
        this.compile()

        let dataModel = "module.exports = "+JSON.stringify({
            name:this.name,
            json:this.model,
        },null,4)
        
        let THAT = this;
        await writter.copyWholeDir(path.join(__dirname,"modelTemplate"),path.join("models",this.name),
        async function(){
            await writter.write(path.join("models",THAT.name,"dataModel"),dataModel)
        });        
    }
}

module.exports = Model;