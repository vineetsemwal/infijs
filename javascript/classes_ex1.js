class User{

constructor(name, age, dept){
    this.name=name;
    this.age=age;
    this.dept=dept;

}

print(){
    console.log(this.name+"-"+this.age+"-"+this.dept);
}

}

class Customer extends User{
    balance;

constructor(name,dept,age, balance){
    super(name,age,dept);
    this.balance=balance;
}

}

const customer=new Customer("kalaisi","digital",24,877776);
console.log("customer -"+customer.name+"-"+customer.age+"-"+customer.balance);