const express=require("express");

const app=express();
const port=8080;

//Middlewares  

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
    
})
app.use((req,res,next)=>{

    console.log("hi am middleware");
  return  next();
})





// API TOKEN AS QUERY STRING :

// lets create a widdleware for an api that checks if the access token was passed in the query string or not .


// app.use("/api",(req,res,next)=>{

// let {token} =req.query;
// if(token==="giveaccess"){
//     next();

// }

// res.send("access denied")

// })


//multiple middleware to use in get,post and other http hadnlers

const checkToken=("/api",(req,res,next)=>{

let {token} =req.query;
if(token==="giveaccess"){
    next();

}

throw new Error("access denied")

})
app.get("/api",checkToken,(req,res)=>{ //pass middleware function
    res.send("api sending request")
})

app.use("/err",(req,res)=>{
    abcd=abcd
})
app.use((err,req,res,next)=>{
console.log('error--------',err);

    next(err);
})

app.use((err,req,res,next)=>{
console.log('error: ',err);

    next(err);
})
// //for 404 errors 

// app.use((req,res)=>{
//     res.send("page not found")
// })


//UTILITY MIDDLEWARE -logger ----morgan :
app.use((req,res,next)=>{
    // console.log(req);

    req.time=new Date(Date.now()).toString();
    
console.log(req.url,req.method,req.hostname,req.path,req.time);



    next();
})






//root

app.get("/",(req,res)=>{
    res.send(`sending request to root page`)
})


app.get("/random",checkToken,(req,res)=>{
    res.send("thhis is random page")
})

