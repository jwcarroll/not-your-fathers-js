import { console } from "console";
import { sum, nameSum } from "./common.js";

const nums = [5, 10, 15];

const total = sum.apply(this, nums);

console.log(total);


const spreadTot = sum(...nums);
const joshTot = nameSum('Josh', ...nums);

console.stream('spread')
  .log(spreadTot)
  .log(joshTot);


const first = [1, 2, 3];
const second = [4, 5, 6];

const both = [...first, ...second];
const splice = [...first, 'Josh', ...second];

console.stream('concat')
  .log(both)
  .log(splice);


const newFirst = [...first, 100];

console.stream('new-array')
  .log(`first:    ${first}`)
  .log(`newFirst: ${newFirst}`);
