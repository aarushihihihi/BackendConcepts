

const express=require("express");

const app=express();

const port=8080;
const path=require("path")
app.listen(port,()=>{
console.log(`listening to port...... ${port}`)
})


app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.get("/ig/:username",(req,res)=>{
const {username}=req.params;

    const instaData=require("./insta.json")
    const data=instaData[username];
    console.log(data.name,'data');
    
    const followers=["aaruuuu","aarushihihihi","sanuuuu","khuuuu"]
res.render("instagram.ejs",{
    data:instaData[username]
});
    // let {username}=req.params;
    // console.log(username);
    // res.render("instagram.ejs",{
    //     username,followers
    // })
    
})


