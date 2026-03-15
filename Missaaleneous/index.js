
const { log } = require("console");
const express=require("express");

const app=express()
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())

const port=8080;

app.listen(port,()=>{
    console.log("listening to port")
})

app.get("/register",(req,res)=>{

    let {user,password}=req.query
    res.send(`sending request get"${user}`)
})


app.post("/register",(req,res)=>{
        let {user,password}=req.body
    res.send(`sending request post ${user}`)
})