
/**
 * 
 * returning a promise 
 */
async function isEven(num) {
   const result=num%2==0;
   return result;
}

async function isEvenUse() {

    const promise = isEven(21);// non blocking operation
    console.log("bye");
   try{
    const result=await promise;
   console.log("result is ", result);
   }catch(error){
    console.log("execution failed"+error);
   }
}

isEvenUse();


