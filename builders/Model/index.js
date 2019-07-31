let {prompt} = require("inquirer");
let writter = require("../utils/writter");
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
        let template = compileTemplate(this.name,this.model);
        await writter.write(this.name,template)
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
    }
}

module.exports = Model;