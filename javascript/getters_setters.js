class Product{

    constructor(name,price){
     this._productName=name;
     this._price=price;   
    }

    get productName(){
        console.log("**inside get product name");
        return this._productName;
    }

    set productName(newName){
        this._productName=newName;
    }
    get price(){
        console.log("**inside get price");
        return this._price;
    }
    set price(newPrice){
        console.log("inside set price",newPrice);
        this._price=newPrice;
    }

    
}
const product1=new Product("samsung",10000);

const productName=product1.productName;
product1.price=20000
const price=product1.price;
console.log("name=",productName,"price",price);