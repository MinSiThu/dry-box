let upperCase1stLetter = require("../utils/upperCaseFirstLetter");

module.exports = function(name,props){
    props = JSON.stringify(props)
    return `
    let mongoose = require("mongoose");
    let ${name}Schema = new mongoose.Schema(${props})

    let ${upperCase1stLetter(name)} = mongoose.model(${upperCase1stLetter(name)},${name}Schemas);
    module.exports = ${upperCase1stLetter(name)}
    `
}