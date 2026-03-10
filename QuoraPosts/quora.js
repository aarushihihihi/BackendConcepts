const express=require("express")
const app=express();
const port=8080;

const path=require("path")
app.use(express.urlencoded({extended:true}))
app.use(express.json())  //to read json data
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

const {v4:uuidv4}=require("uuid");
uuidv4();

const methodOverride=require("method-override")
app.use(methodOverride("_method"))

app.use(express.static(path.join(__dirname,"public")))



app.listen(port,()=>{
    console.log(`listening to port ${port}`);
    
})

let posts=[
    {
        id:uuidv4(),
    username:"aarushihihi",
    content:"i love codingggggg......."
},
{
    id:uuidv4(),
    username:"saniyaa",
    content:"selected for hcl"
},
{
    id:uuidv4(),
    username:"aaru",
    content:"WILL GET Good job in next month...10lpa"
},

]
app.get("/quoraposts",(req,res)=>{
res.render("quora.ejs",{
    posts
})

    // res.send("getting all data");

}
)

app.get("/quoraposts/new",(req,res)=>{
    res.render("new.ejs")
})


app.get("/quoraposts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);

    let post=posts.find((p)=>p.id==id)
console.log(post);
res.render("show.ejs",{post})
    // res.send("request wroking for id")
})

app.post("/quoraposts",(req,res)=>{
    let {username,content}=req.body
console.log(req.body);
    let id = uuidv4();  // generate id

posts.push({id,username,content})

console.log({id,username,content});

console.log("post workinggggggggggg");
res.redirect("/quoraposts")


})





app.patch("/quoraposts/:id",(req,res)=>{
    let {id}=req.params;
    let {content}=req.body;
        let post=posts.find((p)=>p.id==id)
post.content=content;
console.log(post);

    console.log(content);
    
    console.log(id);
        res.redirect("/quoraposts")

    
})

app.delete("/quoraposts/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((p)=>id!=p.id)
    res.send("delete success ")
    // posts.pop(post)
            res.redirect("/quoraposts")

})

app.get("/quoraposts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id)
    res.render("edit.ejs")

})

app.get("/quoraposts/:id/delete",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id)
    // res.render("edit.ejs")

})


app.get("/myblog",(req,res)=>{
    res.send("my first blog")
})


