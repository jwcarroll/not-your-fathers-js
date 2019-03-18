import { console } from "console";

var total = sum(5, 10, 20);

function sum(...nums: number[]) {
  return nums.reduce(
    (tot, cur) => tot + cur
    , 0
  );
}

console.log(total);

function nameSum(name: string, ...nums: number[]) {
  const tot = nums.reduce(
    (tot, cur) => tot + cur
    , 0
  );

  return { [name]: tot };
}

const val = nameSum('Josh', 5, 10);

console.stream('nameSum')
  .log(val);
