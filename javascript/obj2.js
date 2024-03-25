var obj={
    username:"lakshman",
    age:24,

    display: function(){
        console.log("inside display");
        console.log("username is ",this.username);
        console.log("age is ",this.age);
    }

};


obj.display();