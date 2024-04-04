class User{

constructor(private id:number, private name:string){

}

getId():number{
  return this.id;  
}
getName():string{
    return this.name;
}

}
const user:User=new User(10,"asutosh");
const userId=user.getId();
console.log("user id=",userId, "name="+user.getName());
