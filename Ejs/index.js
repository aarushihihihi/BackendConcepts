
const express =require("express");
const app=express();
const path=require("path")
const port=8080;

app.set("view engine","ejs")

app.set("views",path.join(__dirname,"/views"))


app.get("/",(req,res)=>{
    res.render("home.ejs")
    // res.send("logggggggggggggg")
    // console.log("this is home");
    
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})


app.get("/rolldice",(req,res)=>{
    let val=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{
        val
    })
})