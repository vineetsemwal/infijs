
function addUse(func, num1, num2){
var result=func(num1,num2);
console.log("result is ",result);
}

addUse(function(num1,num2){
    return num1+num2;
},   5 , 7 );

