import { console } from "console";

function* range(start, end){
  for(let i = start; i <= end; i++){
    yield i;
  }
}

const nums = [...range(1, 10)];

console.log(nums);


