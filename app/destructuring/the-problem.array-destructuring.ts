import { console } from "console";
import { Person } from "./common";

export const family: Person[] = [
  { name: 'Josh', age: 41 },
  { name: 'Patty', age: 41 },
  { name: 'Hadassah', age: 14 },
  { name: 'Elijah', age: 12 },
  { name: 'Caleb', age: 10 },
  { name: 'Isaiah', age: 8 },
  { name: 'Ruth', age: 6 }
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
