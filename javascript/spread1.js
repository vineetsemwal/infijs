const user1={username:"umesh", age:24};

/*
const user2={};
user2.username=user1.username;
user2.age=user1.age;
*/
const user2={...user1,sal:250000};
console.log("user1",user1);
console.log("user2",user2);

const address={street:"richmond",building:"anchorage"};
const userobj={...user1,...address};
console.log("user is ",userobj);