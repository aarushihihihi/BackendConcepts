const express=require("require");

const app=express();
console.dir(app);


let port=3000;


app.listen(port,()=>{
    console.log("listenning on port",port);
    
})