let fs = require("fs");
let copyDir = require("copy-dir");

module.exports.write = async(fileName,data)=>{
    await fs.writeFile(fileName+".js",data,function(err,data){
        if(err) console.log(err);
        else console.log(`Built Success!`);
        
    });
}

module.exports.copyWholeDir = async(src,dist,cb=function(){})=>{
    copyDir(src,dist,(err)=>{
        if(err) console.log(err);
        else cb();
    })
}