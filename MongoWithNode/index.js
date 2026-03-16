const express=require("express");
const app=express();
const mongoose=require("mongoose");

const port=8080;

const Chat = require("./models/chats.js");


const path=require("path");

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}))
app.use(express.json())  //to read json data


const methodOverride=require("method-override");
app.use(methodOverride("_method"));
async function  main(){
    
    await mongoose.connect("mongodb://127.0.0.1:27017/mydb")
}


main().then(()=>console.log("db connected"))
.catch(err=>console.log(err));


app.get("/",(req,res)=>{
    console.log("working fine");
    
res.send("working")
    
})


app.get("/chats",async (req,res)=>{

    let chats= await Chat.find();





    console.log("working fine",chats);
    
res.render("index.ejs",{
    chats
})    
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
    
})
// Index route :



// get  /chats  (show all chats)




app.get("/chats/new",(req,res)=>{

res.render("new.ejs")


})


app.post("/chats/new",async (req,res)=>{

let {from,to,message}=req.body;


let newChat=await Chat.insertMany({from:from,to:to,message:message})

// res.render("new.ejs",{
//     newChat
// })

res.redirect("/chats")


})


app.get("/chats/:id/edit",async (req,res)=>{
    let {id} =req.params;

    let chat=await Chat.findById(id);
console.log('by id data',chat);

    
    res.render("edit.ejs",{
        chat
    })
})


app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
let {from,to,message}=req.body;


let chat=await Chat.findByIdAndUpdate(id,{from:from,to:to,message:message},{runValidators:true,new:true})
console.log(Chat);

res.redirect("/chats")


})


app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);

res.redirect("/chats")

})



