
function  add(num1, num2){
var result=num1+num2;
return result;
}

var result=add(10,11);
console.log("RESULT="+result);

var fun=add;
var result3=fun(3,6);
console.log("result3="+result3);
 var result4=add(1,5);
 console.log("result4="+result4);