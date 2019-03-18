import { console } from "console";
import { Person } from "./common";

export const family: Person[] = [
  { name: 'Josh', age: 38 },
  { name: 'Patty', age: 38 },
  { name: 'Hadassah', age: 8 },
  { name: 'Elijah', age: 6 },
  { name: 'Caleb', age: 4 },
  { name: 'Isaiah', age: 2 }
];

let husband = family[0];
let wife = family[1];
let kids = [];

for(let i = 2; i < family.length; i++){
  kids.push(family[i]);
}

console.log(husband);
console.log(wife);
console.log(kids);
