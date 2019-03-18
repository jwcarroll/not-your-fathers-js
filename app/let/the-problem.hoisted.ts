import {console} from "console";

var i; //Yoink!!

for(i = 0; i < 10; i++){
  setTimeout(() => {
    console.log(i);
  });
}
