let fs = require("fs");

module.exports.write = async(fileName,data)=>{
    console.log(fileName,data);
    
    await fs.writeFile(fileName+".js",data,function(err,data){
    });
}