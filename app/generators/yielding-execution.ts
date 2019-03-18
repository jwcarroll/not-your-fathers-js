import { console } from "console";

function* getNums(n) {
  for (let i = 0; i < n; i++) {
    console.log(`yielding: ${i}`);

    yield n;

    console.log(`resuming...`);
  }
}

const vals = getNums(10);

vals.next();
vals.next();

console.log("...doing other stuff...");

let n;

do {
  n = vals.next();
} while (!n.done);



