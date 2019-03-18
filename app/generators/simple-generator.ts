import { console } from "console";

function* getValues(){
  yield 1;
  yield 2;
}

const valGen = getValues();

const one = valGen.next();
const two = valGen.next();
const three = valGen.next();

console.log(one);
console.log(two);
console.log(three);



