const list=[30,10,20];
// declarative, you are ordering/declaring what needs to be done

const sortedArray=list.sort((e1,e2)=>{
    return e1-e2;
});


console.log("sorted array",sortedArray);