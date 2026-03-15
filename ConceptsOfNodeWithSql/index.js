
const express=require("express");
const app=express();

// const uuid=uuidv4();
const mysql=require("mysql2");
const path=require("path")
const { faker } = require('@faker-js/faker');

const ejs=require("ejs");

const methodOverride=require("method-override");
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"))
const port=8080;

app.use(express.static(path.join(__dirname,"public")))

app.listen(port,()=>{
    console.log('listerning to port ${port} ',port);
    
})


const conn=mysql.createConnection({
    host:"localhost",
    user:"aarushi",
database:'college',
    password:"Nihika@25"
})

const createRandomUser=()=> {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
     faker.internet.email(),
    faker.internet.password(),
  ];
}

// conn.end();
const data=[];

for(let i=0;i<20;i++){
    data.push(createRandomUser())
}

// let query="Insert into user(id,username,email,password) values ?";


// conn.query(query,createRandomUser,(err,result)=>{
//     console.log(result);
    
// })


app.get("/",(req,res)=>{
let q="Select count(*) from user";
try{
conn.query(q,(err,result)=>{
    let count=result[0]["count(*)"];
    console.log(result[0]["count(*)"]);
    // res.send(result[0]["count(*)"])

    res.render("index.ejs",{
        count
    })
})

}
catch(err){
    console.log(err);
    
}
})

//show user :

app.get("/user",(req,res)=>{

let q="Select id,email,username from user"

conn.query(q,(err,result)=>{
    console.log(result);
res.render("user.ejs",{
    result
})
    
})

try{

}
catch(err){
    console.log(err);
    
}


})





app.get("/user/:id/edit",(req,res)=>{

    let {id}=req.params;

let q =`Select * from user where id='${id}'`;

conn.query(q,(err,result)=>{
    console.log(result[0]);
let values=result[0];
    res.render("edit.ejs",
        {
            values
        }
    )
    
});

})



    // let {username}=req.body})

//update route  --------


app.patch("/user/:id",(req,res)=>{

    let {id}=req.params;
    let {username}=req.body;
    console.log('usernameusername',username);
    
let {password}=req.body
    let q1=`select * from user where id='${id}'`;

try{
conn.query(q1,(err,result)=>{
    console.log(result);

let user=result[0];

if(password!==user.password){
    return res.send("password incorrrect")
}
else{
     
let q=`update user set username='${username}' where id='${id}'`;
conn.query(q,(err,result)=>{
    res.redirect("/user")

})

}

    
})
}
catch(err){
    console.log(err);
    
}

})



app.get("/user/new",(req,res)=>{

res.render("new.ejs")

})


app.post("/user/new",(req,res)=>{
let id=faker.datatype.uuid();
let {username}=req.body;
let {email}=req.body;
let {password}=req.body;


let q1 =`Insert into user(id,username,email,password) values ('${id}','${username}','${email}','${password}')`

try{
conn.query(q1,(err,result)=>{
    res.redirect("/user")
})
}

catch(error){
    console.log(error);
    
}

})



app.delete("/user/:id",(req,res)=>{

    let {id}=req.params;

let q1 =`Delete from user where id='${id}'`

try{
conn.query(q1,(err,result)=>{
    res.redirect("/user")
})
}

catch(error){
    console.log(error);
    
}
    
})