const user={username:"umesh", age:24};
/*
const username=user.username;
const age=user.age
*/
const {username,age}  =user 

console.log("username",username, "age",age);

const {username:cusername, age:cage}=user;

console.log("cusername ",cusername, "cage",cage);


const name="samsung";
const price=10000;
const product={name,price};
console.log("product",product);
