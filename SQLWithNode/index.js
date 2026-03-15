

const { faker } = require('@faker-js/faker');

const mysql=require("mysql2");


const connection=mysql.createConnection({
    host:'localhost',
    user:'aarushi',
    password:'Nihika@25',
    database:'college'
})

let query="SHOW TABLES";

let q ="INSERT INTO user(id,username,email,password) values ?";
let getRandomUser=()=> {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
     faker.internet.email(),
     faker.internet.password(),

  ];
}
let data=[];
for(let i=0;i<100;i++){
    console.log(getRandomUser());
    data.push(getRandomUser())
    
}
connection.query(q,[data],(err,result)=>{
    console.log(result);
    
})

let user=[["123a","aarushia","aaru@gmail,coma","aarua"],["124c","aaruc","aa@gmail.com","hjdk"]]

connection.query(q,[user],(err,result)=>{
    console.log(result);

    
})





connection.end();




// let getRandomUser=()=> {
//   return {
//     userId: faker.datatype.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),


// let getRandomUser=()=> {
//   return {
//     userId: faker.datatype.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),

//   };
// }

console.log(getRandomUser());

