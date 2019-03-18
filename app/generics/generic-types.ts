import { console } from "console";

type Callback<T> =
  (item: T, index: number, collection: T[]) => void

function forEach<T>(
  collection: T[], callback: Callback<T>) {

  for (let i = 0; i < collection.length; i++) {
    callback(collection[i], i, collection);
  }
}

var nums = [1, 2, 3, 4, 5];

forEach(nums, (num, i, list) => {
  let previous = list[i - 1] || 0;
  let total = list[i] + previous;

  console.log(`
    ${list[i]} + ${previous} = ${total}
`);
});
