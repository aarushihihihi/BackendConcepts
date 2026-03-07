const express=require("express");
const { log } = require("node:console");

const app=express();
// console.dir(app);


let port=3000;


app.listen(port,()=>{
    console.log("listenning on port",port);
    
})


// app.use((req,res)=>{
//     console.log("request incoming");
//     res.send({
//         name:"apple",
//         color:"red"
//     })

//     res.send("<h1>Fruit</h1>")
    
// })



app.get("/aaru",(req,res)=>{
    res.send({
        name:"aarushihihihi",
        desig:"sde at microsoft"
    })
});

// app.get("*",(req,res)=>{
//     res.send("no patj")
// })

app.post("/",(req,res)=>{
    res.send("you called post method")
})


app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
let {username,id}=req.params;
    res.send(`hello i am new user ${username} with id ${id}`)
})

app.get("/abc",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("nothing searched")
    }
    console.log(req.query);
    res.send(`results  for : ${q}`)
})