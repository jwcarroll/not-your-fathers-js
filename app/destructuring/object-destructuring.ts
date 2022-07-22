import { console } from "console";
import { Person } from "./common.js";

export const family: Person[] = [
  { name: 'Josh', age: 41 },
  { name: 'Patty', age: 41 },
  { name: 'Hadassah', age: 14 },
  { name: 'Elijah', age: 12 },
  { name: 'Caleb', age: 10 },
  { name: 'Isaiah', age: 8 },
  { name: 'Ruth', age: 6 }
];

const [josh] = family;

const { name, age } = josh;

console.log(name);
console.log(age);



const { name: jName, age: jAge } = josh;

console.stream('new-property-names')
  .log(jName)
  .log(jAge);



let totalAges = 0;

family.forEach(({ age }) => totalAges += age);

console.stream('total-ages')
  .log(totalAges);



totalAges = 0;

const whatAboutBob: Person[] = [
  ...family,
  { name: 'Bob' }
];


whatAboutBob.forEach(
  ({ age }) => totalAges += age
);

console.stream('total-ages-unsafe')
  .log(totalAges);




totalAges = 0;

whatAboutBob.forEach(
  ({ age = 0 }) => totalAges += age
);

console.stream('total-ages-safe')
  .log(totalAges);


const defaults = {
  easing: 'easeInQuad',
  duration: 500,
  complete: () => { }
};

const slow = {
  ...defaults,
  duration: 10000
};

console.stream('defaults')
  .log(slow.duration)
  .log(slow.easing)
  .log(slow.complete);



const cloned = {...josh};

cloned.age = 25;

console.stream('cloned')
  .log(`josh.age = ${josh.age}`)
  .log(`cloned.age = ${cloned.age}`);
