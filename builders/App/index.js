let writter = require("../utils/writter");
let path = require("path");

class AppBuilder{
    constructor(name){
        this.name = name;
    }

    build(){
        writter.copyWholeDir(path.join(__dirname,"appTemplate"),this.name,()=>{
            console.log(`dry-box built ${this.name} successfully!`);
            console.log(`
                cd ${this.name}
                npm install
                npm start
            `);
        });
    }
}

module.exports = AppBuilder;