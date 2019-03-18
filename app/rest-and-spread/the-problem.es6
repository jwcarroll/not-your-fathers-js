import { console } from "console";

var total = sum(5, 10, 20);

console.log(total);

function sum() {
  var args = Array.prototype.slice.call(
    arguments, sum.length);

  return args.reduce(function (tot, cur) {
    return tot + cur;
  }, 0);
}

var stuff = sum(5, 'josh', {});

console.stream('mixed')
  .log(stuff);