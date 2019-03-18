import { console } from "console";

let stuff: any = { name: "foo" };

console.log(stuff);

doStuff();

console.log(stuff);













// 500 lines of code later

function doStuff() {
  doOtherStuff();
}















// 7000 lines of code later

function doOtherStuff(){
  // Tried to put in a 'var' here
  // but the application broke.
  // Leaving it off seems to work.
  // YOLO!
  stuff = [1, 2, 4];
}




