let fs = require("fs");
let { promisify } = require('util');
let readDir = promisify(fs.readdir);

module.exports.list = async(dirName)=>{
    let items = await readDir(dirName);
    let dirs = [];
    items.forEach(item=>{
        if(item.includes(".") == false){
            dirs.push(item);
        }
    })

    return dirs;
}