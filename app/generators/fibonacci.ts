import { console } from "console";

function* fibonacci() {
  let prev = 0;
  let cur = 1;

  while(true){
    const ret = prev + cur;
    prev = cur;
    cur = ret; 

    yield cur;
  }
}

const fib = fibonacci();

for(let i = 0; i < 20; i++){
  console.log(fib.next().value);
}



