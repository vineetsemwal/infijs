
function add(num1,num2){
    if(num1==undefined || num2==undefined){
          throw new Error("input is not valid");
    } 
    return num1+num2;
}

function addUse(){
  try{  
 const result= add(2,5);
 console.log("result=",result);
  }catch(error){
    console.log("inputs passed is not valid");
    
  }

}

addUse();