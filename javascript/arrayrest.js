
function add(...numbers){
    let result=0;
    for(const num of numbers){
        result=result+num;
    }
    return result;
}

const result1=add(10);
const result2=add(2,5);

console.log("result1",result1);
console.log("result2",result2);