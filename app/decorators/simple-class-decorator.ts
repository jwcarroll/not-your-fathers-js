import { console } from "console";

function decorated(constructor: Function){
  constructor.prototype["__decorated"] = true;
}

@decorated
class Person {
  constructor(
    public name:string,
    public age:number
  ){}
}

const josh = new Person("Josh", 41);

console.log(josh);
console.log(`josh[__decorated] = ${josh["__decorated"]}`);




