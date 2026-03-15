const mongoose =require("mongoose");



async function main(){
await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main().then(()=>console.log("connected to db"))
.catch(err=>console.log(err));



const userSchema=new mongoose.Schema({
name:String,
email:String,
age:Number

})

const User=mongoose.model("User",userSchema);

const user1=new User({name:"aarushi",email:"aaru@gmail.com",age:25})

const user2=new User({name:"sanu",email:"sanu@gmail.com",age:20})

// user1.save();

// user2.save();



// const users= User.insertMany([
//     {name:"abc",email:"abc@gmail.com",age:89}
//    ,{name:"def",email:"def@gmail.com",age:90}
// ]).then(res=>console.log(res)).catch(err=>console.log(err))


// User.updateOne({name:"abc"},{age:100}).then((res)=>console.log(res))
// .catch(err=>console.log(err)
// )

// ;



// User.updateMany({name:"abc"},{age:100}).then((res)=>console.log(res))
// .catch(err=>console.log(err)
// )



// User.findOneAndUpdate({name:"def"},{age:901},{new:false}).then((res)=>console.log(res));
// User.deleteOne({name:"abc"}).then((res)=>console.log(res));

User.findByIdAndDelete("69b6a09c65e1e18879076ff6").then((res)=>console.log(res))