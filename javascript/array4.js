const array=["orange","mango","grapes"];


function capsElements(array){
  const resultArray = array.map(element=>element.toUpperCase());
return resultArray;
}

const result=capsElements(array);

console.log("result is ",result);

console.log("original source ", array);
