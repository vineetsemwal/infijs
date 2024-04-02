const url = "http://localhost:3000/products";

async function fetchProducts(url){
    const promise=axios.get(url);
    const response=await promise;  
    const products=await response.data;
    console.log("result is ", products);
    const feedback=document.getElementById("feedback");
    let innerHtml="";
    for(let product of products){
        const productHtml="product is "+product.id+"-"+product.name;
        innerHtml=innerHtml+"<li>"+productHtml+"</li>";
    }
    feedback.innerHTML=innerHtml;

}

fetchProducts(url);