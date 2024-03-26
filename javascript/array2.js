var users=[]

var user1={username:"umesh",age:24,

display: function(){
    console.log("inside display");
    console.log("username is ",this.username);
    console.log("age is ",this.age);
}
};
var user2={username:"sunit",age:25,

display: function(){
    console.log("inside display");
    console.log("username is ",this.username);
    console.log("age is ",this.age);
}
};
users.push(user1);
users.push(user2);

for(var i=0;i<users.length;i++){
   var iterated= users[i];
   iterated.display();
}

console.log("****for each loop below");
//for each

for(var iterated of users){
    iterated.display();

}

console.log("****foreach with in");
for(var iteratedIndex in users){
console.log("index is ",iteratedIndex);
var iterated=users[iteratedIndex];
iterated.display();
}
