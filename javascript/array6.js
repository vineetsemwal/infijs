/*
slice , splice
*/

const list=[10,20,50,60,70,80];

const newArray=list.splice(2,2,101,102);

console.log("deleted elements is ",newArray);

console.log("array after change is ",list);


function add(...nums){

    let result=0;
    for(let num of nums){
      result=result+num;
    }
    return result;
}

const result1=add(10);
const result2=add(10,20);
const result3=add(10,20,30);
const result4=add(5,10,11);
console.log("result1",result1);
console.log("result2",result2);
console.log("result3",result3);
