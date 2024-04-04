interface ICalculator{
    getLastResult():number;
    add(num1:number, num2:number):number;
}
class CalculatorImpl implements ICalculator{

   private memory:number;  

    add(num1:number,num2:number):number{
   let result=num1+num2;
   this.memory=result;
   return result;     
    }

    getLastResult():number{
    return this.memory;
    }

}

const calcy:ICalculator=new CalculatorImpl();
const result= calcy.add(1,2);
console.log("result=");
const lastResult=calcy.getLastResult();
console.log("last result=",lastResult);

