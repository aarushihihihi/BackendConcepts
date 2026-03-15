
const mongoose=require("mongoose");


async function main(){


await mongoose.connect("mongodb://127.0.0.1:27017/amazon");


}



main().then((res)=>{console.log("db connected");
})

.catch(err=>console.log(err));





const bookSchema =new mongoose.Schema({
name:{
    type:String,
    required :true,
    maxLength:20

},
title:{
    type:String
},
price:{
    type:Number,
    min:[1,"price is too low"]
},
discount:{
    type:Number,
    default:0
},category:{
    type:String,
    enum:["fictional","non-fictional"]
},
gener:[String]

});

const Book=mongoose.model("Book",bookSchema);


Book.findByIdAndUpdate("69b6aa677cdda7d73e9bc93c",{price:0},{runValidators:true}).then((res)=>console.log(res))
.catch(err=>console.log(err.errors.price.properties.message))




// Book.insertMany([{
//     name:"dsa",
//     title:"deep diving into problem skilla ",
//     price:500,
//     gener:["programming","tech"]
// },{

//     name:'java',
//     title:"deep dive into java",
// price:500

// },
// {
//     name:"java ",
//     title:"deep dive into java",
//     price:900,
//     category:"fictional"
// },
// ])

