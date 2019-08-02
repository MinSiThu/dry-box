let express = require("express");
require("./models")();
let path = require("path");
let appConfig = require("./config");
let app = express();

app.use(express.static(path.join(__dirname,"public")));
app.listen(appConfig.PORT,()=>{
    console.log(`Server is listening at PORT ${appConfig.PORT}`);
})