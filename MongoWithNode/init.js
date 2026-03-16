const mongoose=require("mongoose");

const Chat = require("./models/chats.js");

async function  main(){
    
    await mongoose.connect("mongodb://127.0.0.1:27017/mydb")
}


main().then(()=>console.log("db connected"))
.catch(err=>console.log(err));

let chats=
[{
from:"rahul",
to:"neha",
message:"kya kar rahi ho"
},
{
from:"neha",
to:"rahul",
message:"bas ghar pe hu"
},
{
from:"amit",
to:"sneha",
message:"kal office aa rahe ho?"
},
{
from:"sneha",
to:"amit",
message:"haan meeting hai"
},
{
from:"rohit",
to:"priya",
message:"movie dekhne chale?"
},
{
from:"priya",
to:"rohit",
message:"kaunsi movie?"
},
{
from:"karan",
to:"riya",
message:"assignment complete hua?"
},
{
from:"riya",
to:"karan",
message:"thoda baaki hai"
},
{
from:"vikas",
to:"pooja",
message:"lunch kar liya?"
},
{
from:"pooja",
to:"vikas",
message:"haan abhi kiya"
},
{
from:"arjun",
to:"megha",
message:"kal milte hain"
},
{
from:"megha",
to:"arjun",
message:"ok time bata dena"
},
{
from:"deepak",
to:"anita",
message:"project ka kya hua?"
},
{
from:"anita",
to:"deepak",
message:"almost complete hai"
},
{
from:"sachin",
to:"kavya",
message:"notes bhej dena"
},
{
from:"kavya",
to:"sachin",
message:"haan bhej dungi"
}]

Chat.insertMany(chats).then((res)=>console.log(res));