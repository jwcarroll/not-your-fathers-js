import { console } from "console";
import { Person, getMinMax } from "./common.js";

export const family: Person[] = [
  { name: 'Josh', age: 38 },
  { name: 'Patty', age: 38 },
  { name: 'Hadassah', age: 11 },
  { name: 'Elijah', age: 9 },
  { name: 'Caleb', age: 7 },
  { name: 'Isaiah', age: 5 },
  { name: 'Ruth', age: 3 }
];


const [husband, wife, ...kids] = family;

console.log(husband);
console.log(wife);
console.log(kids);



const printFirst = ([first]: Person[]) => {
  console.stream('printFirst')
    .log(first);
};

printFirst(family);



const printRest = ([first, ...rest]: Person[]) => {
  console.stream('printRest')
    .log(rest);
};

printRest(family);



const nums = [5, 1, 25, 100];

const [min, max] = getMinMax(...nums);

console.stream('minMax')
  .log(`min: ${min}, max: ${max}`);



const [a = 0, b = 0] = [5];

console.stream('default-vals')
  .log(`a: ${a}`)
  .log(`b: ${b}`);
